// Where the landing's sign-in and sign-up calls to action lead. The app's auth routes send a visitor
// who already has a session straight to their organization, so the landing needs no session check.
const APP_URL = (import.meta.env.VITE_APP_URL ?? 'https://reqsai.tech').replace(/\/$/, '')

export const SIGN_IN_URL = `${APP_URL}/auth/sign-in`
export const SIGN_UP_URL = `${APP_URL}/auth/sign-up`

/** Sign-up link for a pricing plan; the plan travels as a hint the app may use after onboarding. */
export function signUpForPlan(planId) {
  return planId ? `${SIGN_UP_URL}?plan=${encodeURIComponent(planId)}` : SIGN_UP_URL
}
