"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

const teamMembers = [
  {
    name: "Hong Tang",
    title: "Co-Founder",
    affiliation: "Yale University",
    image: "/team/hong-tang.jpg",
    imageClassName: "object-center object-[center_76%]",
    bio: "Llewellyn West Jones, Jr. Professor of Electrical and Physics at Yale University, leading research in photonics and quantum devices.",
    focus: [],
  },
  {
    name: "Satyavolu Papa Rao",
    title: "Co-Founder",
    affiliation: "NY CREATES",
    image: "/team/papa-rao.jpg",
    imageClassName: "object-center",
    bio: "Senior executive at NY CREATES supporting advanced semiconductor R&D and ecosystem development, including 300 mm foundry and pilot-line initiatives.",
    focus: [],
  },
  {
    name: "John E. Derrick",
    title: "Advisor",
    affiliation: "",
    image: "/team/john-e-derrick.webp",
    imageClassName: "object-center",
    bio: "Mr. Derrick has driven commercialization of deep tech for 25 years with three exits as CEO and six exits as advisor.",
    focus: ["Focus in computation, communications, and semiconductors/photonics."],
  },
  {
    name: "Stefan Bogdanovic",
    title: "Advisor",
    affiliation: "",
    image: "/team/stefan-bogdanovic.jpg",
    imageClassName: "object-center",
    bio: "Leader and deep technical expert in the field of Applied Quantum Technology. Founded and led several projects and teams across academia (TU Delft, Harvard), large companies (Alphabet) and startups (SandboxAQ) to develop and commercialize quantum technologies for solving real-world problems.",
    focus: [],
  },
  {
    name: "Paul Kassebaum",
    title: "Advisor",
    affiliation: "",
    image: "/team/paul-kassebaum.jpg",
    imageClassName: "object-center",
    bio: "Physicist and Head of Public Sector at Alice & Bob, advising on government strategy, partnerships, and commercialization pathways for scalable quantum technologies.",
    focus: [],
  },
  
]

export default function TeamPage() {
  return (
    <main className="relative min-h-screen bg-[#141418]">
      <Navigation />

      <section className="pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-sans text-4xl font-light tracking-tight text-[#f0f0f0] md:text-6xl">
              <span
                style={{
                  background: "linear-gradient(135deg, #f0f0f0 0%, #00f2ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Team
              </span>
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#c6ccd6] md:text-lg">
              Founding leadership, technical execution, and advisors for LumiQuan.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
              >
                <div className="grid items-start gap-4 sm:grid-cols-[180px_1fr]">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-contain ${member.imageClassName}`}
                      sizes="176px"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-[#00f2ff] uppercase">
                      {member.title}
                    </p>
                    <h2 className="mt-3 font-sans text-3xl tracking-tight text-[#f0f0f0]">
                      {member.name}
                    </h2>
                    {member.affiliation && (
                      <div className="mt-3 inline-flex items-center border-l border-[#00f2ff]/40 pl-3">
                        <span className="font-sans text-sm font-medium tracking-wide text-[#d7deea]">
                          {member.affiliation}
                        </span>
                      </div>
                    )}
                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#b8bfca]">
                      {member.bio}
                    </p>

                    <div className="mt-6 space-y-2">
                      {member.focus.map((item) => (
                        <p
                          key={item}
                          className="font-mono text-[11px] tracking-wide text-[#b8bfca]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
