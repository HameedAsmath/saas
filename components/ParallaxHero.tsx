"use client"

import { useEffect, useState } from "react"

interface ParallaxHeroProps {
  title: string
  subtitle: string
  imageUrl: string
  ctaText?: string
  ctaLink?: string
}

export default function ParallaxHero({ title, subtitle, imageUrl, ctaText, ctaLink }: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-3xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance text-white/90">{subtitle}</p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  )
}
