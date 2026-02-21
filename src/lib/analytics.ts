export type AnalyticsEvent =
  | "submit_lead"
  | "click_phone"
  | "click_cta"
  | "open_modal"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    ym?: (id: number, method: string, ...args: any[]) => void
  }
}

export const trackEvent = (event: AnalyticsEvent, params?: Record<string, any>) => {
  if (typeof window === "undefined") return
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const ymId = process.env.NEXT_PUBLIC_YM_ID

  if (gaId && window.gtag) {
    window.gtag("event", event, params)
  }

  if (ymId && window.ym) {
    window.ym(Number(ymId), "reachGoal", event, params)
  }
}
