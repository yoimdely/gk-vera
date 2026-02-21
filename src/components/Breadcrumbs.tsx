import Link from "next/link"
import { absoluteUrl } from "@/lib/seo"

export function Breadcrumbs({
  items,
  schemaId,
}: {
  items: { href: string; label: string }[]
  schemaId: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }

  return (
    <div className="border-b border-graphite/10 bg-cloud/70">
      <div className="container flex flex-wrap gap-2 py-4 text-[11px] uppercase tracking-[0.24em] text-graphite/50">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:text-graphite">
              {item.label}
            </Link>
            {index < items.length - 1 ? <span>/</span> : null}
          </span>
        ))}
      </div>
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
