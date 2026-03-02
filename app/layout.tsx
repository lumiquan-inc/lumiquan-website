import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: 'LumiQuan | Quantum Sensing at Foundry Scale',
  description: 'Affordable single photon detectors and imagers for next generation quantum computing and low-light sensing',
  icons: {
    icon: '/lumiquan-logo.png',
    shortcut: '/lumiquan-logo.png',
    apple: '/lumiquan-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <body className="font-sans antialiased bg-[#141418] text-[#f0f0f0]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
