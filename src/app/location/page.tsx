import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Локация",
  description:
    "Уч-Дере, Лазаревский район, Сочи — локация проекта ЛОК VERA с морем, пляжем и дендропарком.",
}

export default function LocationPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-location"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/location"), label: "Локация" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Локация"
              title="Уч-Дере, Лазаревское, Сочи"
              description="Побережье, природная среда и курортная тишина делают локацию востребованной для премиальных проектов."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Проект расположен в посёлке Уч-Дере, который относится к Лазаревскому району
                Сочи. Это место ценится за мягкий климат, близость к морю и спокойную атмосферу.
              </p>
              <p>
                В коммуникациях проекта упоминаются собственный пляж и прилегающий дендропарк.
                Площадь зелёной зоны уточняется, но сама природная составляющая — ключевая
                часть концепции.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/sochi/uch-dere">
                <Button variant="gold">Апартаменты в Уч-Дере</Button>
              </Link>
              <Link href="/sochi/lazarevskiy">
                <Button variant="outline">Лазаревский район</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/stock/coast-aerial.jpg"
              alt="Локация Уч-Дере"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Преимущества"
            title="Что даёт локация"
            description="Сочетание моря, природы и инфраструктуры формирует устойчивый спрос на курортный формат."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Морской климат",
                text: "Комфортная температура и мягкий климат поддерживают оздоровительные программы.",
              },
              {
                title: "Природная среда",
                text: "Дендропарк и зелёные пространства создают атмосферу спокойствия.",
              },
              {
                title: "Транспортная доступность",
                text: "Лазаревское имеет удобную логистику и доступ к инфраструктуре Сочи.",
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
        title="Получить презентацию о локации"
        description="Мы направим материалы по инфраструктуре и условиям проекта."
        actionLabel="Получить презентацию"
      />
    </main>
  )
}

