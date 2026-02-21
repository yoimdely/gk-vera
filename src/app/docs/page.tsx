import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Документы",
  description:
    "Документы по проекту ЛОК VERA / ВЕРА доступны по запросу: презентация, планировки, юридические материалы.",
}

export default function DocsPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-docs"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/docs"), label: "Документы" },
        ]}
      />
      <section className="py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Документы"
            title="Документы и материалы по запросу"
            description="Для получения официальных условий и документов оставьте заявку."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              "Презентация проекта",
              "Планировки и форматы апартаментов",
              "Юридические документы и условия по 214-ФЗ",
              "Финансовая модель и сценарии использования",
              "Описание медицинской концепции",
              "Условия партнёрской программы",
            ].map((doc) => (
              <div
                key={doc}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur"
              >
                <p className="text-sm text-graphite/70">{doc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-graphite/60">
            Информация носит справочный характер и не является публичной офертой.
          </p>
        </div>
      </section>
      <CTASection
        title="Запросить пакет документов"
        description="Оставьте заявку и получите материалы по проекту ЛОК VERA / ВЕРА."
        actionLabel="Получить пакет документов"
      />
    </main>
  )
}
