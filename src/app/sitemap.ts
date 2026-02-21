import { MetadataRoute } from "next"

import { landingPagePaths } from "@/content/landingPages"
import { pressPosts } from "@/content/posts"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/apartments",
    "/invest",
    "/medical",
    "/wellness",
    "/location",
    "/partners",
    "/press",
    "/docs",
    "/contacts",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/thanks",
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }))

  const landingEntries = landingPagePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const pressEntries = pressPosts.map((post) => ({
    url: `${siteUrl}/press/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...landingEntries, ...pressEntries]
}
