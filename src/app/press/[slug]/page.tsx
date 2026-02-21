import Link from "next/link"
import { notFound } from "next/navigation"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { FAQSection } from "@/components/FAQSection"
import { pressPosts } from "@/content/posts"
import { absoluteUrl } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return pressPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = pressPosts.find((item) => item.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: absoluteUrl(`/press/${post.slug}`),
    },
  }
}

export default function PressPostPage({ params }: { params: { slug: string } }) {
  const post = pressPosts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/press/${post.slug}`),
    author: {
      "@type": "Organization",
      name: "ЛОК VERA / ВЕРА",
    },
  }

  return (
    <main>
      <Breadcrumbs
        schemaId={`breadcrumbs-${post.slug}`}
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/press"), label: "Пресс-центр" },
          { href: absoluteUrl(`/press/${post.slug}`), label: post.title },
        ]}
      />
      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-graphite/50">
            {new Date(post.date).toLocaleDateString("ru-RU")} · {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-graphite">{post.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-graphite/10 bg-cloud px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-graphite/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose mt-8">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-graphite/10 bg-ivory/80 p-6 text-sm text-graphite/70 backdrop-blur">
            <h3 className="text-lg font-semibold text-graphite">{post.cta.title}</h3>
            <p className="mt-3">{post.cta.description}</p>
            <Link
              href="/contacts"
              className="mt-4 inline-block text-sm font-medium text-gold"
            >
              {post.cta.action}
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={post.faq} schemaId={`faq-${post.slug}`} />

      <CTASection
        title="Получить презентацию проекта"
        description="Оставьте контакты — мы пришлём материалы и ответим на вопросы."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  )
}
