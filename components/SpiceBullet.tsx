"use client"

import type React from "react"
import { Flame } from "lucide-react"

interface SpiceBulletProps {
  text: string
  icon?: React.ReactNode
}

export default function SpiceBullet({ text, icon }: SpiceBulletProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">{icon || <Flame className="text-primary" size={20} />}</div>
      <p className="text-foreground text-base">{text}</p>
    </div>
  )
}
