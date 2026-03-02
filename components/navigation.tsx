"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/research" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#222222] bg-[#0a0a0a] transition-all duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lumiquan-dark-logo.png"
            alt="LumiQuan logo"
            width={28}
            height={28}
            className="h-7 w-7 rounded-sm object-cover"
            priority
          />
          <span className="font-sans text-lg font-semibold tracking-widest text-[#f0f0f0] uppercase">
            LumiQuan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-wider text-[#b8bfca] uppercase transition-colors hover:text-[#00f2ff]"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#00f2ff] text-[#0a0a0a] hover:bg-[#00f2ff]/80 font-mono text-xs tracking-wider uppercase rounded-none px-6"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#f0f0f0] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-[#222222] bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-wider text-[#b8bfca] uppercase transition-colors hover:text-[#00f2ff]"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#00f2ff] text-[#0a0a0a] hover:bg-[#00f2ff]/80 font-mono text-xs tracking-wider uppercase rounded-none mt-2 w-fit"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
