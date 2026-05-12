import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.note.co.tz'),
  title: {
    default: "noteTech — Powering Africa's Digital Future",
    template: '%s | noteTech',
  },
  description:
    "noteTech is Tanzania's leading software company — offering AI services, web application development, professional websites, and the NOTE sales management system.",
  keywords: [
    'software company Tanzania',
    'web development Tanzania',
    'AI services Tanzania',
    'NOTE sales system',
    'noteTech',
    'web apps East Africa',
    'digital transformation Tanzania',
  ],
  authors: [{ name: 'noteTech', url: 'https://www.note.co.tz' }],
  creator: 'noteTech',
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: 'https://www.note.co.tz',
    siteName: 'noteTech',
    title: "noteTech — Powering Africa's Digital Future",
    description:
      "Tanzania's leading software company: AI services, web apps, websites, and the NOTE sales management system.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "noteTech — Powering Africa's Digital Future",
    description: "Tanzania's leading software company.",
    creator: '@notetechtz',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="255748415599" />
      </body>
    </html>
  )
}
