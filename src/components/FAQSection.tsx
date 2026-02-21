import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection({
  title = "Частые вопросы",
  items,
  schemaId,
}: {
  title?: string
  items: { q: string; a: string }[]
  schemaId: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <section className="py-16" id="faq">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold">{title}</h2>
          </div>
        </div>
        <Accordion type="single" collapsible className="mt-6">
          {items.map((item) => (
            <AccordionItem value={item.q} key={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  )
}
