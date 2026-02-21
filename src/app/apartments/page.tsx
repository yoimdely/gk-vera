import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Апартаменты",
  description:
    "Подбор апартаментов в ЛОК VERA / ВЕРА: форматы, планировки и сценарии владения.",
}

const apartmentTypes = [
  {
    title: "Студии и компактные форматы",
    text: "Оптимальный сценарий для инвестиции и коротких поездок. Гибкий формат использования.",
  },
  {
    title: "1–2 спальни",
    text: "Сбалансированный вариант для семьи и долгосрочного проживания у моря.",
  },
  {
    title: "Премиальные апартаменты",
    text: "Максимум пространства и приватности, акцент на комфорт и сервис.",
  },
]

export default function ApartmentsPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-apartments"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/apartments"), label: "Апартаменты" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Апартаменты"
              title="Подбор апартаментов ЛОК VERA / ВЕРА"
              description="Мы подбираем формат под ваш сценарий: личный отдых, семейная резиденция или инвестиционное владение."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Форматы и планировки доступны по запросу. Мы направим актуальную презентацию,
                планировочные решения и поясним юридическую модель сделки.
              </p>
              <p>
                В материалах проекта заявлено о наличии курортного отеля примерно на 1 200
                номеров, а также медицинского центра около 3 000 кв. м — эти параметры
                уточняются на стадии проектирования.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/invest">
                <Button variant="gold">Узнать условия инвестиций</Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline">Получить документы</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/renders/facade-day.jpg"
              alt="Апартаменты ЛОК VERA"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Форматы"
            title="Категории апартаментов"
            description="Мок-данные для ориентира. Финальная подборка формируется персонально."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {apartmentTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-6 shadow-soft backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-graphite">{type.title}</h3>
                <p className="mt-3 text-sm text-graphite/70">{type.text}</p>
                <Link href="/contacts" className="mt-4 inline-block text-sm text-gold">
                  Получить подборку
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Получите персональную подборку апартаментов"
        description="Мы свяжемся с вами, уточним сценарий владения и направим презентацию."
        actionLabel="Подобрать апартамент"
      />
    </main>
  )
}

