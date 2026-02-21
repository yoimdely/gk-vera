import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SectionTitle } from "@/components/SectionTitle"
import { siteConfig } from "@/content/config"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Дисклеймер",
}

export default function DisclaimerPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-disclaimer"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/disclaimer"), label: "Дисклеймер" },
        ]}
      />
      <section className="py-16">
        <div className="container max-w-3xl">
          <SectionTitle
            eyebrow="Правовая информация"
            title="Дисклеймер"
            description="Важно: информация не является публичной офертой."
          />
          <div className="prose mt-8">
            <p>{siteConfig.disclaimer}</p>
            <p>
              Все сведения о проекте предоставлены для предварительного ознакомления.
              Условия приобретения, инвестиционные сценарии, параметры медицинского центра и
              курортной инфраструктуры уточняются в официальных документах.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

