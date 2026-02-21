"use client"

import Link from "next/link"
import { useEffect } from "react"

import { trackEvent } from "@/lib/analytics"
import { Button } from "@/components/ui/button"

export default function ThanksPage() {
  useEffect(() => {
    trackEvent("submit_lead")
  }, [])

  return (
    <main className="min-h-[70vh] bg-linen">
      <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold text-graphite">Спасибо за заявку</h1>
        <p className="mt-4 max-w-xl text-base text-graphite/70">
          Мы получили вашу заявку. Менеджер отдела продаж свяжется с вами в ближайшее время
          и направит материалы по проекту ЛОК VERA / ВЕРА.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/">
            <Button variant="outline">На главную</Button>
          </Link>
          <Link href="/press">
            <Button variant="gold">Пресс-центр</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
