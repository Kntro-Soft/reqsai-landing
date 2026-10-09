#!/usr/bin/env bash
# Smoke-checks a Cloudflare Pages deployment of the landing and proves which candidate it serves:
#   - <url>/ answers 200;
#   - <url>/version.json (written into dist/ by release.yml) names the expected version and commit;
#   - with a fourth argument, <url>/ is byte for byte that index.html (Pages serves the uploaded HTML
#     unchanged, so this proves the URL serves this very bundle and not the previous deployment).
# Retries for a while: a new deployment can take a few seconds to reach every edge.
#
# Usage: check-deployment.sh <url> <version> <commit> [<expected index.html>]
#   CHECK_ATTEMPTS (default 20) and CHECK_DELAY (seconds, default 6) tune the retries.
set -euo pipefail

url="${1:?usage: check-deployment.sh <url> <version> <commit> [<expected index.html>]}"
version="${2:?version}"
commit="${3:?commit}"
expected="${4:-}"
url="${url%/}"
[[ "$url" == http* ]] || url="https://$url"
attempts="${CHECK_ATTEMPTS:-20}"
delay="${CHECK_DELAY:-6}"
summary="${GITHUB_STEP_SUMMARY:-/dev/null}"

if [[ -n "$expected" && ! -f "$expected" ]]; then
  echo "::error title=Smoke check::$expected does not exist."
  exit 2
fi

page=$(mktemp)
trap 'rm -f "$page"' EXIT

problem=""
for attempt in $(seq 1 "$attempts"); do
  # A query string skips any cached copy; Pages serves the same file for it.
  bust="check=${GITHUB_RUN_ID:-local}-${attempt}"
  code=$(curl -sS -o "$page" -w '%{http_code}' --max-time 15 -H 'Cache-Control: no-cache' "$url/?$bust" || true)
  served=$(curl -fsS --max-time 15 -H 'Cache-Control: no-cache' "$url/version.json?$bust" 2>/dev/null || true)
  if [[ "$code" != 200 ]]; then
    problem="$url/ answered HTTP ${code:-nothing}"
  elif [[ "$(jq -r '.version // empty' <<<"$served" 2>/dev/null)" != "$version" ||
    "$(jq -r '.commit // empty' <<<"$served" 2>/dev/null)" != "$commit" ]]; then
    problem="$url/version.json is '${served//$'\n'/ }', expected version $version from commit $commit"
  elif [[ -n "$expected" ]] && ! cmp -s "$page" "$expected"; then
    problem="$url/ is not the index.html of this bundle (previous deployment still served?)"
  else
    echo "Check passed: $url → 200, version $version, commit ${commit:0:12}${expected:+, index.html identical to the bundle}."
    echo "- $url: HTTP 200, serves $version (build $(jq -r .build <<<"$served"), commit \`${commit:0:12}\`)${expected:+, identical to the bundle}." >> "$summary"
    exit 0
  fi
  echo "Attempt $attempt/$attempts: $problem."
  if ((attempt < attempts)); then sleep "$delay"; fi
done

echo "::error title=Deployment check failed::$problem"
exit 1
