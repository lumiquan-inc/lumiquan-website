import Script from "next/script"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "LumiQuan | Quantum Sensing at Foundry Scale",
  description:
    "Affordable single photon detectors and imagers for next generation quantum computing and low-light sensing",
  icons: {
    icon: "/lumiquan-logo.png",
    shortcut: "/lumiquan-logo.png",
    apple: "/lumiquan-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SMYW8BF2W2"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SMYW8BF2W2');
        `}
      </Script>

      <body className="font-sans antialiased bg-[#141418] text-[#f0f0f0]">
        {children}
      </body>
    </html>
  )
}