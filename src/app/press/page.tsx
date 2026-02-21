import Link from "next/link"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { PressCard } from "@/components/PressCard"
import { Stagger } from "@/components/Stagger"
import { SectionTitle } from "@/components/SectionTitle"
import { pressPosts } from "@/content/posts"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Пресс-центр",
  description:
    "Новости проекта, инвестиционные обзоры, материалы о wellness-туризме и медицине.",
}

export const dynamic = 'force-static'
export const revalidate = 3600

export default function PressPage() {
  const sorted = pressPosts.slice().sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-press"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/press"), label: "Пресс-центр" },
        ]}
      />
      <section className="py-16">
        <div className="container">
          <SectionTitle
            eyebrow="Пресс-центр"
            title="Новости, аналитика и экспертные материалы"
            description="Материалы подготовлены на основе публичных сообщений проекта и отраслевых трендов."
          />
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-graphite/50">
            <Link href="/press" className="text-graphite">
              Все материалы
            </Link>
            <Link href="/press/rss.xml" className="hover:text-graphite">
              RSS
            </Link>
          </div>

          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
            {sorted.map((post) => (
              <PressCard key={post.slug} post={post} />
            ))}
          </Stagger>

          <div className="mt-10 rounded-2xl border border-graphite/10 bg-ivory/80 p-6 text-xs text-graphite/60 backdrop-blur">
            Редакционная политика: материалы подготовлены на основе публичных сообщений
            проекта и отраслевых трендов. Информация носит справочный характер и не является
            публичной офертой.
          </div>
        </div>
      </section>
    </main>
  )
}

