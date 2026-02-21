import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Медицинская концепция",
  description:
    "Медицинская концепция ЛОК VERA: longevity, превентивная медицина, семейное здоровье, реабилитация. Без медицинских обещаний.",
}

const направления = [
  {
    title: "Longevity и активное долголетие",
    text: "Программы профилактики и поддержания качества жизни, ориентированные на долгосрочное благополучие.",
  },
  {
    title: "Превентивная медицина и anti-age",
    text: "Диагностика и скрининги как основа персонализированного подхода.",
  },
  {
    title: "Семейное и корпоративное здоровье",
    text: "Сценарии для семей, корпоративных ретритов и командных программ.",
  },
  {
    title: "Реабилитация",
    text: "Восстановительные программы в сочетании с курортной инфраструктурой.",
  },
]

export default function MedicalPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-medical"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/medical"), label: "Медицина" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Медицина"
              title="Медицинский центр как часть курорта полного цикла"
              description="Концепция строится на профилактике, диагностике и восстановлении — без медицинских обещаний, но с высоким уровнем сервиса."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                В материалах проекта заявлено о медицинском центре площадью около 3 000 кв.
                м. Технологическое проектирование ведётся при участии ГК «Медскан».
              </p>
              <p>
                Формат взаимодействия: диагностика и скрининги &gt; программы санаторно-курортного
                лечения &gt; эстетическая медицина. Мы аккуратно избегаем медицинских обещаний и
                говорим о сервисе и профилактике.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/longevity/sochi">
                <Button variant="gold">Longevity в Сочи</Button>
              </Link>
              <Link href="/preventive-medicine/sochi">
                <Button variant="outline">Превентивная медицина</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/stock/medical-premium.jpg"
              alt="Медицинская концепция"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Направления"
            title="Ключевые направления медицинского центра"
            description="Четыре направления формируют основу медицинской концепции проекта."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {направления.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-6 shadow-soft backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-3 text-sm text-graphite/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Получить медицинскую презентацию"
        description="Оставьте заявку — мы направим описание медицинских направлений и инфраструктуры."
        actionLabel="Получить презентацию"
      />
    </main>
  )
}

