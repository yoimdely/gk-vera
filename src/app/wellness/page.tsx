import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Wellness-курорт",
  description:
    "Wellness-концепция ЛОК VERA / ВЕРА: экономика здоровья, профилактика, курортный сервис премиального уровня.",
}

export default function WellnessPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-wellness"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/wellness"), label: "Wellness" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Wellness"
              title="Wellness-туризм как часть экономики здоровья"
              description="ЛОК VERA объединяет отдых, профилактику и сервис премиального уровня, создавая понятный и устойчивый формат wellness-курорта."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Аудитория 30+ всё чаще выбирает профилактику и качественный сервис. Именно
                поэтому wellness-туризм здесь рассматривается как часть экономики здоровья.
              </p>
              <p>
                Сочетание медицинской концепции, природы Уч-Дере и курортной инфраструктуры
                позволяет формировать уникальный опыт отдыха и восстановления.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/wellness-tourism/sochi">
                <Button variant="gold">Wellness-туризм в Сочи</Button>
              </Link>
              <Link href="/sanatorium-new-format">
                <Button variant="outline">Санаторий нового формата</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/stock/massage.jpg"
              alt="Wellness-концепция"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Преимущества"
            title="Почему формат wellness работает"
            description="Курортный сервис, медицинская диагностика и природная среда формируют устойчивый спрос."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Природная среда",
                text: "Море и дендропарк создают атмосферу спокойствия и восстановления.",
              },
              {
                title: "Медицинская база",
                text: "Диагностика и профилактика дополняют wellness-сценарий.",
              },
              {
                title: "Сервис полного цикла",
                text: "Единая инфраструктура делает отдых и проживание предсказуемыми.",
              },
            ].map((item) => (
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
        title="Получите презентацию wellness-концепции"
        description="Мы расскажем о форматах сервиса, медицинской составляющей и условиях размещения."
        actionLabel="Получить презентацию"
      />
    </main>
  )
}

