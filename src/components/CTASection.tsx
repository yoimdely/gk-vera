import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/LeadModal"
import { PhoneLink } from "@/components/PhoneLink"
import { siteConfig } from "@/content/config"

export function CTASection({
  title,
  description,
  actionLabel = "Получить презентацию",
}: {
  title: string
  description: string
  actionLabel?: string
}) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl border border-graphite/10 bg-gradient-to-br from-ivory via-cloud to-sand p-12 shadow-card">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Свяжитесь с нами</p>
              <h2 className="mt-4 text-3xl font-semibold text-graphite">{title}</h2>
              <p className="mt-4 text-base text-graphite/70">{description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <LeadModal
                trigger={<Button variant="gold">{actionLabel}</Button>}
                title={title}
                description={description}
                ctaLabel={actionLabel}
              />
              <PhoneLink
                href={siteConfig.phoneHref}
                className="text-sm font-medium text-graphite/70"
              >
                Или позвоните: {siteConfig.phone}
              </PhoneLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
