import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SectionTitle } from "@/components/SectionTitle"
import { absoluteUrl } from "@/lib/seo"

export const metadata = {
  title: "Пользовательское соглашение",
}

export default function TermsPage() {
  return (
    <main>
      <Breadcrumbs
        schemaId="breadcrumbs-terms"
        items={[
          { href: absoluteUrl("/"), label: "Главная" },
          { href: absoluteUrl("/terms"), label: "Соглашение" },
        ]}
      />
      <section className="py-16">
        <div className="container max-w-3xl">
          <SectionTitle
            eyebrow="Правовая информация"
            title="Пользовательское соглашение"
            description="Условия использования сайта и предоставления информации."
          />
          <div className="prose mt-8">
            <p>
              Сайт носит информационный характер и представляет партнёрский отдел продаж
              проекта ЛОК VERA / ВЕРА. Материалы предназначены для предварительного
              ознакомления и не являются публичной офертой.
            </p>
            <p>
              Пользователь обязуется использовать сайт в рамках законодательства Российской
              Федерации и не предпринимать действий, которые могут повлиять на работу сайта
              или права третьих лиц.
            </p>
            <p>
              Администрация сайта вправе обновлять информацию и структуру материалов без
              предварительного уведомления.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
