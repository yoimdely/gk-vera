"use client"

import { useState, type ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"
import { LeadForm } from "@/components/LeadForm"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

export function LeadModal({
  trigger,
  title = "Получить презентацию",
  description = "Оставьте контакты — мы пришлём презентацию и условия проекта.",
  ctaLabel = "Получить презентацию",
}: {
  trigger: ReactNode
  title?: string
  description?: string
  ctaLabel?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
        if (value) trackEvent("open_modal")
      }}
    >
      <DialogTrigger onClick={() => { setOpen(true); trackEvent("click_cta") }}>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <LeadForm variant="compact" ctaLabel={ctaLabel} />
      </DialogContent>
    </Dialog>
  )
}

