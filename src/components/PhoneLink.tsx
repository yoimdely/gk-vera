"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"

export function PhoneLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("click_phone")}
    >
      {children}
    </Link>
  )
}
