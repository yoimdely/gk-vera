import Link from "next/link"

import { navLinks, siteConfig } from "@/content/config"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/LeadModal"
import { PhoneLink } from "@/components/PhoneLink"
import { MobileMenu } from "@/components/MobileMenu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-graphite/10 bg-ivory/90 backdrop-blur">
      <div className="border-b border-graphite/10 bg-cloud/70">
        <div className="container flex items-center justify-between py-2">
          <span className="text-xs uppercase tracking-[0.28em] text-graphite/60">
            Премиальный курортный комплекс
          </span>
          <PhoneLink
            href={siteConfig.phoneHref}
            className="whitespace-nowrap rounded-full border border-gold/40 bg-ivory/80 px-4 py-2 text-[13px] font-semibold tracking-[0.04em] text-graphite shadow-soft"
          >
            {siteConfig.phone}
          </PhoneLink>
        </div>
      </div>
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-semibold tracking-[0.14em]">ЛОК VERA</span>
          <span className="text-xs uppercase tracking-[0.35em] text-graphite/60">
            Отдел продаж
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.28em] text-graphite/70 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-graphite">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 lg:ml-4">
          <LeadModal
            trigger={<Button variant="gold" size="xs">Получить презентацию</Button>}
          />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
