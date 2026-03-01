"use client"

import { motion } from "framer-motion"
import { QuantumField } from "./quantum-field"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep charcoal base */}
      <div className="absolute inset-0 bg-[#141418]" />

      {/* Animated canvas: mesh gradient + grid + light washes */}
      <QuantumField />

      {/* Soft radial vignette to seat the text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 48%, transparent 0%, #141418 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          className="font-sans leading-[1.1] tracking-tight text-balance"
        >
          <span className="block text-5xl font-extrabold text-[#f0f0f0] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Quantum Sensing
          </span>
          <span
            className="mt-2 block pb-1 text-4xl font-light sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            style={{
              background: "linear-gradient(135deg, #00f2ff 0%, #1e40af 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            at Foundry Scale
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#c6ccd6] sm:text-lg md:text-xl"
        >
          Affordable single photon detectors and imagers for next generation quantum computing and low-light sensing
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          {/* Glassmorphic primary button */}
          <a
            href="/about"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3.5 font-mono text-xs tracking-wider uppercase transition-all duration-300 ease-out"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,242,255,0.12) 0%, rgba(30,64,175,0.10) 100%)",
              border: "1px solid rgba(0,242,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "#f0f0f0",
            }}
          >
            {/* Internal glow layer */}
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0,242,255,0.15) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            {/* Hover border brighten */}
            <span
              className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(0,242,255,0.35), 0 0 20px rgba(0,242,255,0.08)",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2">
              About LumiQuan
            </span>
          </a>

          {/* Outline button with 0.5px border */}
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-mono text-xs tracking-wider text-[#b8bfca] uppercase transition-all duration-300 ease-out hover:text-[#00f2ff]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.10)",
              background: "transparent",
            }}
          >
            {/* Hover glow ring */}
            <span
              className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                boxShadow:
                  "inset 0 0 0 0.5px rgba(0,242,255,0.4), 0 0 16px rgba(0,242,255,0.06)",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10">Contact Us</span>
          </a>
        </motion.div>

        {/* Wafer coordinates ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.2em] text-[#555555] uppercase sm:gap-x-8"
        >
          <span>{"SSPD ARRAYS"}</span>
          <span className="hidden h-px w-6 bg-[#333333] sm:block" aria-hidden="true" />
          <span>{"WAFER: 300MM"}</span>
          <span className="hidden h-px w-6 bg-[#333333] sm:block" aria-hidden="true" />
          <span>{"QUANTUM-GRADE"}</span>
        </motion.div>
      </div>

    </section>
  )
}
