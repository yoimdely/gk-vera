import Link from "next/link"

import { legalLinks, navLinks, siteConfig } from "@/content/config"
import { PhoneLink } from "@/components/PhoneLink"

export function SiteFooter() {
  return (
    <footer className="border-t border-graphite/10 bg-cloud">
      <div className="container py-14">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold tracking-[0.14em]">ЛОК VERA / ВЕРА</h3>
            <p className="mt-3 text-sm text-graphite/70">
              Партнёрский сайт проекта ЛОК VERA. Отдел продаж консультирует по апартаментам,
              медицинской концепции и инвестиционным сценариям.
            </p>
            <p className="mt-4 text-xs text-graphite/60">{siteConfig.disclaimer}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-graphite">
              Навигация
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-graphite/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-graphite">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-graphite">
              Контакты
            </h4>
            <div className="mt-3 space-y-2 text-sm text-graphite/70">
              <PhoneLink href={siteConfig.phoneHref} className="font-medium text-graphite">
                {siteConfig.phone}
              </PhoneLink>
              <p>{siteConfig.addressLine}</p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-graphite/60">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-graphite">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-graphite/10 pt-4 text-xs text-graphite/50">
          © {new Date().getFullYear()} {siteConfig.domain}. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
