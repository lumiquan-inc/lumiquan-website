import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#141418]">
      <Navigation />

      <section className="pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="max-w-2xl">
            <h1 className="font-sans text-4xl font-light tracking-tight text-[#f0f0f0] md:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#c6ccd6]">
              For intersted investors, please use the contact details below.
            </p>
          </div>

          <div className="mt-10">
            <article className="max-w-xl border border-[#1a1a1a] bg-[#111114]/75 p-6">
              <h2 className="font-mono text-[11px] tracking-widest text-[#00f2ff] uppercase">
                General
              </h2>
              <p className="mt-4 font-sans text-sm text-[#b8bfca]">
                Email: contact@placeholder.com
              </p>
              <p className="mt-2 font-sans text-sm text-[#b8bfca]">
                Phone: +1 (000) 000-0000
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
