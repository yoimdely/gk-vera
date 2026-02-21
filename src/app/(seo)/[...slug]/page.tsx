import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"
import { notFound } from "next/navigation"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { FAQSection } from "@/components/FAQSection"
import { LeadForm } from "@/components/LeadForm"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { landingPages } from "@/content/landingPages"
import { absoluteUrl } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = landingPages.find((item) => item.path === `/${params.slug.join("/")}`)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(page.path),
    },
  }
}

export default function LandingPage({ params }: { params: { slug: string[] } }) {
  const path = `/${params.slug.join("/")}`
  const page = landingPages.find((item) => item.path === path)

  if (!page) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        schemaId={`breadcrumbs-${page.slug.join("-")}`}
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl(page.path), label: page.heroTitle },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              {page.heroSubtitle}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-graphite lg:text-5xl">
              {page.heroTitle}
            </h1>
            <p className="mt-6 text-base text-graphite/70">{page.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacts">
                <Button variant="gold">Получить презентацию</Button>
              </Link>
              <Link href="/apartments">
                <Button variant="outline">Подобрать апартамент</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/stock/pool-luxury.jpg"
              alt={page.heroTitle}
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <LeadForm
            title="Получить презентацию"
            subtitle="Оставьте контакты, и мы направим материалы по проекту."
            ctaLabel="Получить презентацию"
          />
          <div>
            <SectionTitle
              eyebrow="Контекст"
              title={page.title}
              description={page.description}
            />
            <div className="mt-6 space-y-4 text-sm text-graphite/70">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionTitle
            eyebrow="По запросу"
            title="Что вы получите от отдела продаж"
            description="Персонализированный пакет материалов под ваш сценарий."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.table.map((row) => (
              <div
                key={row.item}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur"
              >
                <h3 className="text-base font-semibold text-graphite">{row.item}</h3>
                <p className="mt-2 text-sm text-graphite/70">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Внутренние ссылки"
            title="Полезные разделы"
            description="Больше деталей о проекте и инвестиционных сценариях."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {page.internalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline">{link.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={page.faq} schemaId={`faq-${page.slug.join("-")}`} />

      <CTASection
        title="Получить условия и презентацию"
        description="Оставьте заявку, чтобы получить материалы по проекту ЛОК VERA / ВЕРА."
      />
    </main>
  )
}

