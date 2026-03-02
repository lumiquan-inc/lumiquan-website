import { ContentPage } from "@/components/content-page"

export default function AboutPage() {
  return (
    <ContentPage
      title="About"
      intro="LumiQuan is building single-photon cameras that detect light at its most fundamental limit. By transforming superconducting detector technology into scalable imaging platforms, we enable sensing and measurement capabilities far beyond conventional cameras, including quantum computing, quantum networking, remote sensing, low dose and time-resolved imaging applications. Our mission is to make single-photon sensitivity practical, deployable, and ready for real-world impact."
      heroImageSrc="/cryostat-img.webp"
      heroImageAlt="Cryostat and instrumentation used for low-temperature single-photon detector characterization"
      highlights={[
        {
          eyebrow: "Patent Application",
          title:
            '"A large photon detector array with low interference interconnection and photon number resolution and method of fabrication thereof."',
          details: [
            "Attorney Docket No. 047162-7608P1 (02751)",
            "(2025)137.95",
          ],
        },
        {
          eyebrow: "Issued Patent",
          title: '"Superconducting single photon detector."',
          details: ["US Patent 9,500,519", "Issued 2016"],
        },
      ]}
    />
  )
}
