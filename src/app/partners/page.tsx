
import { ImageFrame } from "@/components/ImageFrame"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { LeadForm } from "@/components/LeadForm"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Партнёрам",
  description:
    "Партнёрская программа ЛОК VERA / ВЕРА для агентов и корпоративных клиентов.",
}

export default function PartnersPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-partners"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/partners"), label: "Партнёрам" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Партнёрам"
              title="Партнёрская программа и агентские условия"
              description="Мы готовы к сотрудничеству с агентствами, корпоративными партнёрами и инвесторами. Предоставим материалы, презентации и поддержку отдела продаж."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                ЛОК VERA — премиальный продукт, который сочетает медицинскую концепцию и
                курортный сервис. Это даёт понятное позиционирование и качественный продукт для
                вашего портфеля.
              </p>
              <p>
                По запросу предоставляем презентации, условия партнёрства и официальные
                документы. Все детали согласуются индивидуально.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/stock/partners-handshake.jpg"
              alt="Партнёрство"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <LeadForm
            title="Стать партнёром"
            subtitle="Оставьте контакты, чтобы получить условия сотрудничества и презентацию."
            ctaLabel="Запросить партнёрские условия"
          />
          <div>
            <SectionTitle
              eyebrow="Преимущества"
              title="Почему партнёрам комфортно работать с ЛОК VERA"
              description="Мы даём прозрачную юридическую модель, премиальный продукт и поддержку отдела продаж."
            />
            <ul className="mt-6 space-y-3 text-sm text-graphite/70">
              <li>Единая стратегия позиционирования и готовые материалы.</li>
              <li>Партнёрство с медицинским оператором ГК «Медскан».</li>
              <li>Локация в Сочи, Уч-Дере, с природной инфраструктурой.</li>
              <li>Гибкие сценарии владения для разных сегментов клиентов.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Запросить партнёрские условия"
        description="Мы подготовим пакет материалов и назначим консультацию."
        actionLabel="Стать партнёром"
      />
    </main>
  )
}

