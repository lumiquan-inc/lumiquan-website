"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

type ContentPageProps = {
  title: string
  intro: string
  heroImageSrc?: string
  heroImageAlt?: string
  highlight?: {
    eyebrow?: string
    title: string
    details?: string[]
  }
  highlights?: Array<{
    eyebrow?: string
    title: string
    details?: string[]
  }>
  sections?: Array<{
    heading: string
    body: string
  }>
}

export function ContentPage({
  title,
  intro,
  heroImageSrc,
  heroImageAlt = "",
  highlight,
  highlights,
  sections = [],
}: ContentPageProps) {
  const highlightItems = highlights ?? (highlight ? [highlight] : [])

  return (
    <main className="relative min-h-screen bg-[#141418]">
      <Navigation />

      <section className="relative pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={heroImageSrc ? "grid items-start gap-8 md:grid-cols-2 md:gap-10" : "max-w-4xl"}
          >
            <div className="max-w-4xl">
              <h1 className="font-sans text-4xl font-light tracking-tight text-[#f0f0f0] md:text-6xl lg:text-7xl">
                <span
                  style={{
                    background: "linear-gradient(135deg, #f0f0f0 0%, #00f2ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {title}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#c6ccd6] md:text-lg">
                {intro}
              </p>

              {highlightItems.length > 0 && heroImageSrc && (
                <div className="mt-8 space-y-4">
                  {highlightItems.map((item, index) => (
                    <motion.article
                      key={`${item.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative overflow-hidden border border-[#00f2ff]/25 bg-[#0f141b] p-6 md:p-8"
                    >
                      <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#00f2ff]/15 blur-3xl" />
                      {item.eyebrow && (
                        <span className="relative z-10 font-mono text-[11px] tracking-widest text-[#00f2ff] uppercase">
                          {item.eyebrow}
                        </span>
                      )}
                      <p className="relative z-10 mt-3 max-w-5xl font-sans text-base leading-relaxed text-[#f0f0f0] md:text-lg">
                        {item.title}
                      </p>
                      {item.details && item.details.length > 0 && (
                        <div className="relative z-10 mt-4 flex flex-wrap gap-x-6 gap-y-2">
                          {item.details.map((detail) => (
                            <span key={detail} className="font-mono text-xs tracking-wide text-[#b8bfca]">
                              {detail}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {heroImageSrc && (
              <div className="relative self-stretch overflow-hidden">
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#00f2ff]/20 blur-3xl" />
                <Image
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  width={900}
                  height={1200}
                  className="h-full min-h-[340px] w-full object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>

          {highlightItems.length > 0 && !heroImageSrc && (
            <div className="mt-10 space-y-4">
              {highlightItems.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative overflow-hidden border border-[#00f2ff]/25 bg-[#0f141b] p-6 md:p-8"
                >
                  <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#00f2ff]/15 blur-3xl" />
                  {item.eyebrow && (
                    <span className="relative z-10 font-mono text-[11px] tracking-widest text-[#00f2ff] uppercase">
                      {item.eyebrow}
                    </span>
                  )}
                  <p className="relative z-10 mt-3 max-w-5xl font-sans text-base leading-relaxed text-[#f0f0f0] md:text-lg">
                    {item.title}
                  </p>
                  {item.details && item.details.length > 0 && (
                    <div className="relative z-10 mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="font-mono text-xs tracking-wide text-[#b8bfca]">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          )}

          {sections.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {sections.map((section, index) => (
                <motion.article
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
                  className="group relative overflow-hidden border border-[#1a1a1a] bg-[#111114]/75 p-6 transition-colors duration-300 hover:border-[#00f2ff]/35"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[#00f2ff]/10 blur-3xl" />
                  </div>
                  <h2 className="relative z-10 font-sans text-xl text-[#f0f0f0]">{section.heading}</h2>
                  <p className="relative z-10 mt-3 font-sans text-sm leading-relaxed text-[#b8bfca]">
                    {section.body}
                  </p>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
