import type { Metadata } from 'next'
import NoteHero from '@/components/note/NoteHero'
import NoteFeatures from '@/components/note/NoteFeatures'
import NotePricing from '@/components/note/NotePricing'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'NOTE Sales System',
  description:
    'The all-in-one sales management platform for East African businesses. Track sales, manage inventory, invoice clients, and grow your revenue with NOTE by noteTech.',
  keywords: [
    'NOTE sales system',
    'sales management Tanzania',
    'inventory management Tanzania',
    'CRM East Africa',
    'invoicing software Tanzania',
  ],
  openGraph: {
    title: 'NOTE Sales System — noteTech',
    description:
      'All-in-one sales management: CRM, inventory, invoicing, and analytics for East African businesses.',
    url: 'https://www.note.co.tz/note',
  },
}

export default function NotePage() {
  return (
    <>
      <NoteHero />
      <NoteFeatures />
      <NotePricing />
      <CTABanner />
    </>
  )
}
