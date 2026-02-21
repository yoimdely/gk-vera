import { Breadcrumbs } from "@/components/Breadcrumbs"
import { LeadForm } from "@/components/LeadForm"
import { SectionTitle } from "@/components/SectionTitle"
import { PhoneLink } from "@/components/PhoneLink"
import { siteConfig } from "@/content/config"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Контакты",
  description: "Контакты отдела продаж ЛОК VERA / ВЕРА. Телефон и форма заявки.",
}

export default function ContactsPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-contacts"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/contacts"), label: "Контакты" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Контакты"
              title="Отдел продаж ЛОК VERA / ВЕРА"
              description="Свяжитесь с нами для получения презентации, планировок и условий."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Телефон для связи:
                <PhoneLink href={siteConfig.phoneHref} className="ml-2 font-medium text-graphite">
                  {siteConfig.phone}
                </PhoneLink>
              </p>
              <p>{siteConfig.addressLine}</p>
              <p className="text-xs text-graphite/60">{siteConfig.disclaimer}</p>
            </div>
          </div>
          <LeadForm
            title="Оставить заявку"
            subtitle="Мы свяжемся с вами и предоставим официальные условия."
            ctaLabel="Записаться на звонок"
          />
        </div>
      </section>
    </main>
  )
}
