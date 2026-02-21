import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SectionTitle } from "@/components/SectionTitle"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Политика конфиденциальности",
}

export default function PrivacyPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-privacy"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/privacy"), label: "Политика" },
        ]}
      />
      <section className="py-16">
        <div className="container max-w-3xl">
          <SectionTitle
            eyebrow="Правовая информация"
            title="Политика конфиденциальности"
            description="Мы обрабатываем персональные данные только для связи с вами и предоставления материалов по проекту."
          />
          <div className="prose mt-8">
            <p>
              Данные, которые вы оставляете на сайте (имя, телефон, предпочтительный способ
              связи), используются исключительно для коммуникации с отделом продаж и
              подготовки материалов по проекту.
            </p>
            <p>
              Мы не передаём данные третьим лицам без законных оснований. Вы можете отозвать
              согласие на обработку персональных данных, обратившись по телефону отдела
              продаж.
            </p>
            <p>
              Отправляя форму, вы подтверждаете согласие на обработку персональных данных и
              получение коммуникаций, если отметили соответствующий чекбокс.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
