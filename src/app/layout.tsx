import "./globals.css"

import { Metadata } from "next"
import type { ReactNode } from "react"
import { Cormorant_Garamond, Manrope } from "next/font/google"

import { AnalyticsScripts } from "@/components/AnalyticsScripts"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { StickyBar } from "@/components/StickyBar"
import { siteConfig } from "@/content/config"
import { siteUrl } from "@/lib/seo"

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ЛОК VERA / ВЕРА — премиальные апартаменты и wellness-курорт в Сочи",
    template: "%s — ЛОК VERA / ВЕРА",
  },
  description:
    "Премиальный курортный комплекс в Уч-Дере (Сочи): апартаменты, wellness и медицинская концепция полного цикла. Отдел продаж.",
  applicationName: "ЛОК VERA / ВЕРА",
  category: "Real Estate",
  keywords: [
    "ЛОК VERA",
    "апартаменты Сочи",
    "Уч-Дере",
    "Лазаревский район",
    "курортный комплекс",
    "wellness-туризм",
    "медицинский туризм",
    "longevity",
    "превентивная медицина",
    "инвестиции в апартаменты",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ЛОК VERA / ВЕРА — премиальный курортный комплекс",
    description:
      "Апартаменты, медицина и wellness в одном курортном пространстве. Уч-Дере, Сочи.",
    url: siteUrl,
    siteName: "ЛОК VERA / ВЕРА",
    type: "website",
    images: [
      {
        url: "/images/renders/resort-pool.jpg",
        width: 1200,
        height: 630,
        alt: "ЛОК VERA / ВЕРА — премиальный курортный комплекс",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ЛОК VERA / ВЕРА — премиальный курортный комплекс",
    description:
      "Апартаменты, медицина и wellness в одном курортном пространстве. Уч-Дере, Сочи.",
    images: ["/images/renders/resort-pool.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: "992960db424cb750",
    google: "nKqfK65TqGwbS3-_vq9p-0otyJe1tsUBzefUQlXbvng",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ЛОК VERA / ВЕРА",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Сочи",
      addressRegion: "Краснодарский край",
      streetAddress: siteConfig.addressLine,
    },
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ЛОК VERA / ВЕРА",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/press?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="ru">
      <body className={`${display.variable} ${body.variable}`}>
        <AnalyticsScripts />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </body>
    </html>
  )
}

