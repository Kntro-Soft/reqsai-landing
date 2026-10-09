#!/usr/bin/env bash
# Smoke-checks a Vercel deployment of the landing and proves which candidate it serves: / must answer 200 and
# /version.json (written into the build output by release.yml) must name the expected version and commit.
#
# Usage: check-deployment.sh <url> <version> <commit> [--allow-protected]
#   VERCEL_AUTOMATION_BYPASS_SECRET (optional) passes Vercel Deployment Protection on deployment URLs.
#   --allow-protected: a 401 from Deployment Protection without that secret is a warning, not a failure.
set -euo pipefail

url="${1:?usage: check-deployment.sh <url> <version> <commit> [--allow-protected]}"
version="${2:?version}"
commit="${3:?commit}"
allow_protected="${4:-}"
url="${url%/}"
[[ "$url" == http* ]] || url="https://$url"
summary="${GITHUB_STEP_SUMMARY:-/dev/null}"
headers=()
if [[ -n "${VERCEL_AUTOMATION_BYPASS_SECRET:-}" ]]; then
  headers=(-H "x-vercel-protection-bypass: $VERCEL_AUTOMATION_BYPASS_SECRET")
fi

code=""
for _ in $(seq 1 20); do
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 15 ${headers[@]+"${headers[@]}"} "$url/" || true)
  [[ "$code" == 200 || "$code" == 401 ]] && break
  sleep 6
done
if [[ "$code" == 401 && "$allow_protected" == --allow-protected && ${#headers[@]} -eq 0 ]]; then
  echo "::warning title=Deployment protected::$url answers 401 (Vercel Deployment Protection). Open it signed in to Vercel, or add the secret VERCEL_AUTOMATION_BYPASS_SECRET so this check can read it."
  echo "- $url: protected by Vercel Deployment Protection, not checked automatically." >> "$summary"
  exit 0
fi
[[ "$code" == 200 ]] || { echo "::error::$url/ answered HTTP ${code:-nothing}"; exit 1; }

served=$(curl -fsS --max-time 15 ${headers[@]+"${headers[@]}"} "$url/version.json")
if [[ "$(jq -r .version <<<"$served")" != "$version" || "$(jq -r .commit <<<"$served")" != "$commit" ]]; then
  echo "::error::$url serves $(jq -c . <<<"$served"), expected version $version from commit $commit"
  exit 1
fi
echo "- $url: HTTP 200, serves $version (build $(jq -r .build <<<"$served"), commit \`${commit:0:12}\`)." >> "$summary"
