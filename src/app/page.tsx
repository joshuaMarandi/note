import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import NoteFeature from '@/components/home/NoteFeature'
import StatsBar from '@/components/home/StatsBar'
import ClientsStrip from '@/components/home/ClientsStrip'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: "noteTech — Powering Africa's Digital Future",
  description:
    "Tanzania's leading software company. AI services, custom web applications, professional websites, and the NOTE sales management system.",
  keywords: [
    'software company Tanzania',
    'web development Tanzania',
    'AI services Tanzania',
    'NOTE sales system',
    'noteTech',
  ],
  openGraph: {
    title: "noteTech — Powering Africa's Digital Future",
    description:
      "Tanzania's leading software company: AI services, web apps, websites, and the NOTE sales management system.",
    url: 'https://www.note.co.tz',
    siteName: 'noteTech',
    images: [{ url: '/notelogo.png', width: 800, height: 800, alt: 'noteTech logo' }],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <NoteFeature />
      <StatsBar />
      <ClientsStrip />
      <Testimonials />
      <CTABanner />
    </>
  )
}
