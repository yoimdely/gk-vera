import { siteConfig } from "@/content/config"
import { PhoneLink } from "@/components/PhoneLink"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/LeadModal"

export function StickyBar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-graphite/10 bg-ivory/95 px-6 py-3 shadow-card backdrop-blur">
          <PhoneLink
            href={siteConfig.phoneHref}
            className="text-xs uppercase tracking-[0.3em] text-graphite"
          >
            Позвонить
          </PhoneLink>
          <LeadModal
            trigger={<Button variant="gold" size="sm">Получить презентацию</Button>}
          />
        </div>
      </div>
    </div>
  )
}
