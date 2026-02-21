"use client"

import { useEffect, useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

import { trackEvent } from "@/lib/analytics"
import { contactMethods } from "@/content/config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const getUtm = (params: URLSearchParams) => ({
  utm_source: params.get("utm_source") || "",
  utm_medium: params.get("utm_medium") || "",
  utm_campaign: params.get("utm_campaign") || "",
  utm_term: params.get("utm_term") || "",
  utm_content: params.get("utm_content") || "",
})

export function LeadForm({
  title = "Оставьте заявку",
  subtitle = "Мы свяжемся с вами и предоставим материалы по проекту.",
  ctaLabel = "Получить презентацию",
  variant = "default",
  className = "",
}: {
  title?: string
  subtitle?: string
  ctaLabel?: string
  variant?: "default" | "compact"
  className?: string
}) {
  const router = useRouter()
  const [utm, setUtm] = useState(() => getUtm(new URLSearchParams()))

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [contactMethod, setContactMethod] = useState("call")
  const [message, setMessage] = useState("")
  const [consent, setConsent] = useState(false)
  const [communication, setCommunication] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    setUtm(getUtm(params))
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!consent || !phone) return
    setLoading(true)

    const payload = {
      name,
      phone,
      contact_method: contactMethod,
      message,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      ...utm,
      communication,
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      trackEvent("submit_lead")
      router.push("/thanks")
    } catch (error) {
      console.error("Lead submission error:", error)
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-graphite/15 bg-ivory/80 p-7 shadow-card backdrop-blur ${className}`}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-graphite">{title}</h3>
        <p className="text-sm text-graphite/70">{subtitle}</p>
      </div>
      <div className="mt-5 grid gap-4">
        <Input
          placeholder="Ваше имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
        />
        <Input
          placeholder="Телефон"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          autoComplete="tel"
        />
        <Select value={contactMethod} onValueChange={setContactMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Способ связи" />
          </SelectTrigger>
          <SelectContent>
            {contactMethods.map((method) => (
              <SelectItem key={method.value} value={method.value}>
                {method.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {variant !== "compact" ? (
          <Textarea
            placeholder="Комментарий или желаемый сценарий"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        ) : null}
      </div>
      <div className="mt-5 space-y-3">
        <label className="flex items-start gap-3 text-xs text-graphite/70">
          <Checkbox checked={consent} onCheckedChange={(value) => setConsent(Boolean(value))} />
          <span>
            Согласен(а) на обработку персональных данных в соответствии с политикой
            конфиденциальности.
          </span>
        </label>
        <label className="flex items-start gap-3 text-xs text-graphite/70">
          <Checkbox
            checked={communication}
            onCheckedChange={(value) => setCommunication(Boolean(value))}
          />
          <span>Согласен(а) на получение коммуникаций от отдела продаж.</span>
        </label>
      </div>
      <Button
        type="submit"
        variant="gold"
        className="mt-5 w-full"
        disabled={loading || !consent}
        onClick={() => trackEvent("click_cta")}
      >
        {loading ? "Отправляем..." : ctaLabel}
      </Button>
      <p className="mt-3 text-[11px] text-graphite/50">
        Информация носит справочный характер и не является публичной офертой.
      </p>
    </form>
  )
}

