import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTASection } from "@/components/CTASection"
import { FAQSection } from "@/components/FAQSection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { faqCore, investHighlights } from "@/content/config"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Инвестиции",
  description:
    "Инвестиционные сценарии ЛОК VERA / ВЕРА: 214-ФЗ, эскроу, потенциальный доход от аренды без гарантий.",
}

export default function InvestPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-invest"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/invest"), label: "Инвестиции" },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Инвестиции"
              title="Осознанный инвестиционный сценарий"
              description="ЛОК VERA — премиальный продукт с понятной юридической моделью, без обещаний доходности и с прозрачным подходом к управлению."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Проект реализуется по 214-ФЗ и с использованием эскроу-счетов. Это означает
                устойчивую, прозрачную и контролируемую модель сделки.
              </p>
              <p>
                Потенциальный доход от аренды зависит от программы управления, уровня
                загрузки и условий оператора. Мы не используем формулировки «гарантированный
                доход».
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-graphite/70">
              {investHighlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/invest/apartments-sochi">
                <Button variant="gold">Инвестиции в апартаменты</Button>
              </Link>
              <Link href="/invest/passive-income">
                <Button variant="outline">Потенциальный доход</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-graphite/10 bg-ivory/80 p-4 shadow-card transition-transform duration-700 hover:-translate-y-1 backdrop-blur">
            <ImageFrame
              src="/images/renders/night-facade.jpg"
              alt="Инвестиционные сценарии"
            />
          </div>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Пакет по запросу"
            title="Что вы получите от отдела продаж"
            description="Мы подготовим материалы под ваш сценарий и поясним юридические детали."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              "Презентация проекта и архитектурная концепция",
              "Финансовая модель и сценарии использования",
              "Планировки и форматы апартаментов",
              "Юридические документы и условия по 214-ФЗ",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur"
              >
                <p className="text-sm text-graphite/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqCore} schemaId="faq-invest" />

      <CTASection
        title="Запросить условия инвестиций"
        description="Оставьте контакты — мы пришлём презентацию, документы и актуальные условия."
        actionLabel="Узнать условия инвестиций"
      />
    </main>
  )
}

