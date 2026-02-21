import { siteConfig } from "@/content/config"

export const siteUrl = `https://${siteConfig.domain}`

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${siteUrl}${path}`
}
