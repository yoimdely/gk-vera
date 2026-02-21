import Image from "next/image"

import { cn } from "@/lib/utils"

export function ImageFrame({
  src,
  alt,
  sizes = "(max-width: 1024px) 100vw, 560px",
  className,
  imageClassName,
}: {
  src: string
  alt: string
  sizes?: string
  className?: string
  imageClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative aspect-[3/2] overflow-hidden rounded-2xl bg-cloud",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  )
}
