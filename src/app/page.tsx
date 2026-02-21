import Link from "next/link"
import { ImageFrame } from "@/components/ImageFrame"

import { FadeIn } from "@/components/FadeIn"
import { Stagger } from "@/components/Stagger"
import { LeadForm } from "@/components/LeadForm"
import { CTASection } from "@/components/CTASection"
import { FAQSection } from "@/components/FAQSection"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/LeadModal"
import { pressPosts } from "@/content/posts"
import { faqCore, siteConfig } from "@/content/config"

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-veil">
        <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
        <div className="container relative grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Премиальный курортный комплекс
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-graphite md:text-5xl lg:text-6xl">
              ЛОК VERA / ВЕРА — апартаменты и wellness-курорт полного цикла в Сочи
            </h1>
            <p className="mt-6 text-base text-graphite/70 md:text-lg">
              Уч-Дере, Лазаревский район. Концепция «здоровье как образ жизни», медицинский
              центр и курортный сервис в одном пространстве.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LeadModal
                trigger={<Button variant="gold">Получить презентацию</Button>}
              />
              <Link href="/apartments">
                <Button variant="outline">Подобрать апартамент</Button>
              </Link>
              <Link href="/invest">
                <Button variant="ghost">Узнать условия инвестиций</Button>
              </Link>
            </div>
            <Stagger className="mt-10 grid gap-4 text-sm text-graphite/70 lg:grid-cols-3">
              <div className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur">
                Партнёрство с ГК «Медскан» по технологическому проектированию медицинского
                центра
              </div>
              <div className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur">
                Собственный пляж и дендропарк на территории/рядом — площадь зелёной зоны
                уточняется
              </div>
              <div className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 shadow-soft backdrop-blur">
                В материалах проекта заявлено: ~1 200 номеров и медцентр ~3 000 кв. м
              </div>
            </Stagger>
          </FadeIn>
          <FadeIn className="relative space-y-6">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative rounded-3xl border border-graphite/10 bg-ivory/90 p-4 shadow-card backdrop-blur transition-transform duration-700 hover:-translate-y-1">
              <ImageFrame
                src="/images/renders/resort-pool.jpg"
                alt="ЛОК VERA — атмосфера курорта"
              />
            </div>
            <LeadForm
              title="Получить презентацию"
              subtitle="Оставьте контакты и выберите удобный способ связи."
              ctaLabel="Получить презентацию"
              variant="compact"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionTitle
              eyebrow="Концепция"
              title="Единое пространство для лечения, оздоровления, отдыха и бизнеса"
              description="ЛОК VERA объединяет медицинский центр, курортный отель, wellness-пространства и апартаменты в единую экосистему. Проект позиционируется как один из первых в России курортов полного цикла, где медицина и туризм работают вместе."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                Партнёрство с ГК «Медскан» обеспечивает технологическую основу медицинского
                центра, а формат курорта позволяет сочетать диагностику, программы
                санаторно-курортного лечения и эстетическую медицину без медицинских обещаний.
              </p>
              <p>
                Мы делаем акцент на комфортной профилактике, персонализированном сервисе и
                доверии. Все условия продаж — по запросу и в официальных документах.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/medical">
                <Button variant="outline">Медицинская концепция</Button>
              </Link>
              <Link href="/wellness">
                <Button variant="ghost">Wellness-курорт</Button>
              </Link>
            </div>
          </FadeIn>
          <FadeIn>
            <Stagger className="grid gap-4">
              {[
                {
                  title: "Longevity и превентивная медицина",
                  text: "Диагностика, скрининги и программы профилактики — основа формата.",
                },
                {
                  title: "Семейное и корпоративное здоровье",
                  text: "Инфраструктура для семейных программ и корпоративных ретритов.",
                },
                {
                  title: "Реабилитация и восстановление",
                  text: "Сервисы восстановления в курортной атмосфере.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-graphite/10 bg-ivory/80 p-6 shadow-soft backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-graphite">{item.title}</h3>
                  <p className="mt-2 text-sm text-graphite/70">{item.text}</p>
                </div>
              ))}
            </Stagger>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <ImageFrame
              src="/images/stock/coast-aerial.jpg"
              alt="Уч-Дере и Лазаревский район"
            />
          </FadeIn>
          <FadeIn>
            <SectionTitle
              eyebrow="Локация"
              title="Уч-Дере, Лазаревский район, Сочи"
              description="Тишина природной среды, близость к морю и мягкий климат — ключевые причины, почему локация ценится на рынке premium-класса."
            />
            <div className="mt-6 space-y-4 text-base text-graphite/70">
              <p>
                В проекте предусмотрены собственный пляж и прилегающий дендропарк (площадь
                зелёной зоны уточняется). Это формирует уникальную атмосферу и усиливает
                позиционирование курорта.
              </p>
              <p>
                Благодаря сочетанию природы и современной инфраструктуры локация подходит
                как для семейного отдыха, так и для инвестиционного сценария.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/location">
                <Button variant="outline">Подробнее о локации</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionTitle
              eyebrow="Инвестиции"
              title="Прозрачная модель: 214-ФЗ и эскроу"
              description="Мы говорим про осознанные инвестиции. Никаких обещаний доходности — только сценарии и понятные условия."
            />
            <ul className="mt-6 space-y-3 text-sm text-graphite/70">
              <li>Инвестиционный сценарий может включать потенциальный доход от аренды.</li>
              <li>Условия зависят от программы управления и уровня загрузки.</li>
              <li>Пакет документов и финансовая модель — по запросу.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/invest">
                <Button variant="gold">Узнать условия инвестиций</Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline">Документы по запросу</Button>
              </Link>
            </div>
          </FadeIn>
          <FadeIn>
            <LeadForm
              title="Получить инвестиционную презентацию"
              subtitle="Оставьте контакты — мы пришлём документы и ответим на вопросы."
              ctaLabel="Получить презентацию"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-cloud/80 py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Пресс-центр"
            title="Аналитика, новости и экспертные материалы"
            description="Мы публикуем материалы о проекте, рынке wellness-туризма и инвестиционных сценариях."
          />
          <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
            {pressPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-graphite/10 bg-ivory/80 p-6 shadow-soft backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-graphite/50">
                  {new Date(post.date).toLocaleDateString("ru-RU")} · {post.category}
                </p>
                <h3 className="mt-4 text-lg font-semibold">
                  <Link href={`/press/${post.slug}`} className="hover:text-graphite/80">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-graphite/70">{post.excerpt}</p>
              </article>
            ))}
          </Stagger>
          <div className="mt-8">
            <Link href="/press">
              <Button variant="outline">В пресс-центр</Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Получите презентацию и условия проекта"
        description="Мы направим материалы, ответим на вопросы по апартаментам и расскажем об инвестиционных сценариях."
      />

      <FAQSection items={faqCore} schemaId="faq-home" />

      <section className="bg-ivory pb-24">
        <div className="container">
          <p className="text-center text-xs text-graphite/50">
            {siteConfig.disclaimer}
          </p>
        </div>
      </section>
    </main>
  )
}

