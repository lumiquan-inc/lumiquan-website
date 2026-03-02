"use client"

import { motion } from "framer-motion"

export function TechnologySection() {
  return (
    <section id="technology" className="relative pb-24 pt-20">
      {/* Subtle top border */}
      <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#222222] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left: Large statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-sans text-4xl font-light leading-tight tracking-tight text-[#f0f0f0] md:text-5xl lg:text-6xl">
              Quantum Sensing.
              <br />
              Scaled.
            </h2>
          </motion.div>

          {/* Right: Technical explanation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col justify-center border-l border-[#1e40af]/30 pl-8"
          >
            <p className="font-sans text-base leading-relaxed text-[#b8bfca]">
              LumiQuan Inc. is commercializing large-format superconducting single-photon detector 
              (SSPD) arrays through 300mm-wafer compatible processes. Our platform enables quantum computing, 
              quantum networking, remote sensing, low dose and time-resolved imaging applications at unprecedented scale.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#b8bfca]">
              Our mission: {" "}
              <span className="font-semibold text-[#f0f0f0]">
                delivering affordable and quantum-grade photon detection at commercial scale
              </span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
