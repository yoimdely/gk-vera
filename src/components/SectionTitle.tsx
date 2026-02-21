export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold/60" />
          <p className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="mt-4 text-2xl font-semibold text-graphite md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm text-graphite/70 md:text-base">{description}</p>
      ) : null}
    </div>
  )
}
