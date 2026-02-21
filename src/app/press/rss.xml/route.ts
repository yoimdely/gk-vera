import { pressPosts } from "@/content/posts"
import { siteUrl } from "@/lib/seo"

export async function GET() {
  const items = pressPosts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => {
      return `\n    <item>\n      <title><![CDATA[${post.title}]]></title>\n      <link>${siteUrl}/press/${post.slug}</link>\n      <guid>${siteUrl}/press/${post.slug}</guid>\n      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n      <description><![CDATA[${post.excerpt}]]></description>\n    </item>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>\n  <rss version="2.0">\n    <channel>\n      <title>Пресс-центр ЛОК VERA / ВЕРА</title>\n      <link>${siteUrl}/press</link>\n      <description>Новости проекта и аналитика</description>\n      ${items}\n    </channel>\n  </rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
