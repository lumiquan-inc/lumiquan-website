"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

type Paper = {
  year: string
  publicationDate: string
  title: string
  citation: string
  abstract: string
  readMoreUrl: string
}

const papers: Paper[] = [
  {
    year: "2025",
    publicationDate: "January 1, 2025",
    title: "Integrated photonic Galton board and its application for photon counting",
    citation: "H Qin, R Cheng, Y Zhou, HX Tang // Optica Quantum 3, 156 (2025).",
    abstract:
      "The Galton board is a desktop probability machine for visualizing the random walk of many particles.",
    readMoreUrl: "https://doi.org/10.1364/OPTICAQ.537381",
  },
  {
    year: "2023",
    publicationDate: "December 19, 2022",
    title: "A 100-pixel photon-number-resolving detector unveiling photon statistics",
    citation:
      "R. Cheng, Y. Zhou, S. Wang, M. Shen, T. Taher, H. X. Tang // Nature Photonics 17, 112 (2023).",
    abstract:
      "Single-photon detectors are ubiquitous in quantum optics, where larger detector numbers can increase collection efficiency and improve noise resilience, similarly to conventional imagers.",
    readMoreUrl: "https://doi.org/10.1038/s41566-022-01119-3",
  },
  {
    year: "2020",
    publicationDate: "January 1, 2020",
    title: "Epitaxial niobium nitride superconducting nanowire single-photon detectors",
    citation:
      "R. Cheng, J. Wright, H. G. Xing, D. Jena, H. X. Tang // Applied Physics Letters 117(13), 132601 (2020).",
    abstract:
      "Superconducting nanowire single-photon detectors have revolutionized infrared photon counting for broad applications.",
    readMoreUrl: "https://doi.org/10.1063/5.0018818",
  },
  {
    year: "2020",
    publicationDate: "February 12, 2020",
    title: "Active quenching of superconducting nanowire single photon detectors",
    citation: "P Ravindran, R Cheng, H Tang, JC Bardin // Optics Express 28, 4099 (2020).",
    abstract:
      "Superconducting nanowire single-photon detectors are among the best available technologies for infrared single-photon counting due to their high detection efficiency and low timing jitter.",
    readMoreUrl: "https://doi.org/10.1364/OE.383649",
  },
  {
    year: "2019",
    publicationDate: "December 11, 2019",
    title:
      "Superconducting nanowire single-photon detectors fabricated from atomic-layer-deposited NbN",
    citation: "R Cheng, S Wang, HX Tang // Applied Physics Letters 115, 241101 (2019).",
    abstract:
      "The superconducting nanowire single-photon detector is one of the leading technologies for near-infrared single-photon counting.",
    readMoreUrl: "https://doi.org/10.1063/1.5131664",
  },
  {
    year: "2017",
    publicationDate: "January 1, 2017",
    title:
      "Large-area superconducting nanowire single-photon detector with double-stage avalanche structure",
    citation:
      "R.S. Cheng, M. Poot, X. Guo, L. R. Fan, H. X. Tang // IEEE Transactions on Applied Superconductivity 27, 1 (2017).",
    abstract:
      "We report a large-area and high-performance superconducting nanowire single-photon detector made of niobium nitride with a double-stage avalanche structure.",
    readMoreUrl: "https://doi.org/10.1109/TASC.2016.2642900",
  },
  {
    year: "2019",
    publicationDate: "September 10, 2019",
    title: "Broadband on-chip single-photon spectrometer",
    citation:
      "R.S. Cheng, C. L. Zou, X. Guo, S. H. Wang, X. Han, H. X. Tang // Nature Communications 10, 1 (2019).",
    abstract:
      "Single-photon spectrometers are key to understanding and manipulating broad-band quantum light sources.",
    readMoreUrl: "https://doi.org/10.1038/s41467-019-12149-x",
  },
  {
    year: "2016",
    publicationDate: "November 28, 2016",
    title: "Self-aligned multi-channel superconducting nanowire avalanche photodetector",
    citation:
      "R. S. Cheng, X. Guo, X. S. Ma, L. R. Fan, K. Y. Fong, M. Poot, H. X. Tang // Optics Express 24, 27070 (2016).",
    abstract:
      "A major challenge for scaling up superconducting nanowire single-photon detectors is incorporating multiple channels into one detector.",
    readMoreUrl: "https://doi.org/10.1364/OE.24.027070",
  },
  {
    year: "2016",
    publicationDate: "January 1, 2016",
    title:
      "Waveguide integrated superconducting single photon detectors embedded in nanophotonic circuits on silicon",
    citation:
      "W.P.H. Pernice, C. Schuck, H. X. Tang // Superconducting Devices in Quantum Optics, Springer-Verlag, Berlin (2016).",
    abstract:
      "This chapter discusses waveguide-integrated superconducting single-photon detectors embedded in silicon nanophotonic circuits, with emphasis on system-level integration.",
    readMoreUrl: "https://doi.org/10.1007/978-3-319-24091-6_4",
  },
  {
    year: "2014",
    publicationDate: "May 1, 2014",
    title:
      "Monolithically integrated, ultrahigh-frequency cavity nanooptoelectromechanical system with on-chip germanium waveguide photodetector",
    citation: "X. K. Sun, K. Xu, H. X. Tang // Optics Letters 39, 2514 (2014).",
    abstract:
      "Cavity nano-optoelectromechanical systems have evolved into powerful devices for precision measurements and integrated photonics.",
    readMoreUrl: "https://doi.org/10.1364/OL.39.002514",
  },
  {
    year: "2013",
    publicationDate: "June 6, 2013",
    title:
      "Waveguide integrated low noise NbTiN nanowire single-photon detectors with milli-Hz dark count rate",
    citation: "C. Schuck, W. P.H. Pernice, H. X. Tang // Scientific Reports 3, 1893 (2013).",
    abstract:
      "Waveguide integrated superconducting single-photon detectors from NbTiN can combine high detection efficiency with ultra-low dark count rates.",
    readMoreUrl: "https://doi.org/10.1038/srep01893",
  },
  {
    year: "2013",
    publicationDate: "May 13, 2013",
    title:
      "Optical time domain reflectometry with low noise waveguide superconducting nanowire single photon detectors",
    citation:
      "C. Schuck, W. H. P. Pernice, X. Ma, H. X. Tang // Applied Physics Letters 102, 191104 (2013).",
    abstract:
      "We demonstrate optical time-domain reflectometry with low-noise waveguide superconducting nanowire single-photon detectors.",
    readMoreUrl: "https://doi.org/10.1063/1.4803011",
  },
  {
    year: "2013",
    publicationDate: "January 1, 2013",
    title: "Array of integrated superconducting single photon detectors with high timing resolution",
    citation:
      "C. Schuck, W. H. P. Pernice, O. Minaeva, M. Li, G. Goltsman, A. V. Sergienko, H. X. Tang // IEEE Transactions on Applied Superconductivity 3, 2201007 (2013).",
    abstract:
      "Superconducting nanowire single-photon detectors are seeing growing interest because of their high quantum efficiency and excellent timing performance.",
    readMoreUrl: "https://doi.org/10.1109/TASC.2013.2239346",
  },
  {
    year: "2013",
    publicationDate: "February 6, 2013",
    title:
      "NbTiN superconducting nanowire detectors for visible and telecom wavelengths single photon counting on photonic circuits",
    citation: "C. Schuck, W.P.H. Pernice, H. X. Tang // Applied Physics Letters 102, 051101 (2013).",
    abstract:
      "NbTiN superconducting nanowire detectors enable single-photon counting at both visible and telecom wavelengths on integrated photonic circuits.",
    readMoreUrl: "https://doi.org/10.1063/1.4788931",
  },
  {
    year: "2012",
    publicationDate: "December 20, 2012",
    title:
      "High speed travelling wave single-photon detectors with near-unity quantum efficiency",
    citation:
      "W. H. P. Pernice, C. Schuck, O. Minaeva, M. Li, G.N. Goltsman, A.V. Sergienko, H. X. Tang // Nature Communications 3, 1325 (2012).",
    abstract:
      "Single-photon detectors are essential components in optical quantum information processing and quantum communications.",
    readMoreUrl: "https://doi.org/10.1038/ncomms2307",
  },
]

const researchImagesOldestToNewest = [
  "/research/img1.webp",
  "/research/img2.gif",
  "/research/img3.jpeg",
  "/research/img4.jpeg",
  "/research/img5.webp",
  "/research/img6.jpeg",
  "/research/img7.webp",
  "/research/img8.jpeg",
  "/research/img9.gif",
  "/research/img10.webp",
  "/research/img11.jpeg",
  "/research/img12.jpeg",
  "/research/img13.jpeg",
  "/research/img14.webp",
  "/research/img15.jpeg",
]

function getAbstractPreview(abstract: string) {
  const firstSentence = abstract.split(/(?<=[.!?])\s+/)[0]?.trim()
  if (!firstSentence) return "..."
  return firstSentence.endsWith("...") ? firstSentence : `${firstSentence}...`
}

export default function ResearchPage() {
  const papersByDate = [...papers].sort(
    (a, b) =>
      new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
  )

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
                Resources
              </span>
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#c6ccd6] md:text-lg">
              Publications relevant to LumiQuan's mission.
            </p>
          </motion.div>

          <div className="mt-12 space-y-6">
            {papersByDate.map((paper, index) => (
              <motion.article
                key={`${paper.title}-${paper.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.03 }}
                className="border border-[#1a1a1a] bg-[#111114]/75 p-5 md:p-6"
              >
                <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-6">
                  <div className="relative h-[150px] w-full overflow-hidden border border-[#1f252f] bg-[#0f1218]">
                    <img
                      src={
                        researchImagesOldestToNewest[
                          researchImagesOldestToNewest.length - 1 - index
                        ]
                      }
                      alt={`${paper.title} paper figure preview`}
                      className="h-full w-full object-cover opacity-90"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-[#00f2ff] uppercase">
                      {paper.publicationDate}
                    </p>
                    <h2 className="mt-2 font-sans text-xl leading-tight text-[#f0f0f0] md:text-2xl">
                      {paper.title}
                    </h2>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#b8bfca]">
                      {getAbstractPreview(paper.abstract)}
                    </p>
                    <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-wide text-[#9ea8b7]">
                      {paper.citation}
                    </p>
                    <a
                      href={paper.readMoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex font-mono text-xs tracking-widest text-[#00f2ff] uppercase transition-opacity hover:opacity-80"
                    >
                      Read More →
                    </a>
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
