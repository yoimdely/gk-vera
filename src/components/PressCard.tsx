import Link from "next/link"
import type { PressPost } from "@/content/posts"

export function PressCard({ post }: { post: PressPost }) {
  return (
    <article className="rounded-2xl border border-graphite/10 bg-ivory/80 p-6 shadow-soft backdrop-blur transition-transform duration-500 hover:-translate-y-1">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-graphite/50">
        <span>{new Date(post.date).toLocaleDateString("ru-RU")}</span>
        <span>{post.category}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold">
        <Link href={`/press/${post.slug}`} className="hover:text-graphite/80">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-graphite/70">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-graphite/10 bg-cloud px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-graphite/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
