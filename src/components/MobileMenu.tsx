"use client"

import { useState } from "react"
import Link from "next/link"

import { navLinks } from "@/content/config"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/LeadModal"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-graphite/20 bg-ivory/80 text-graphite shadow-soft"
        aria-label="Открыть меню"
        aria-expanded={open}
      >
        <span className="block h-px w-5 bg-graphite" />
        <span className="mt-1 block h-px w-5 bg-graphite" />
        <span className="mt-1 block h-px w-5 bg-graphite" />
      </button>

      {open ? (
        <div className="mt-4 rounded-3xl border border-graphite/10 bg-ivory/95 p-6 shadow-card backdrop-blur">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.28em] text-graphite/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <LeadModal
              trigger={
                <Button variant="gold" size="sm" className="w-full">
                  Получить презентацию
                </Button>
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
