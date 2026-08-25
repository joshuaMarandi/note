import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with noteTech — Tanzania\'s leading software company. Reach us by email, phone, or WhatsApp for AI services, web development, and the NOTE sales system.',
  keywords: ['contact noteTech', 'noteTech Tanzania contact', 'software company Tanzania contact'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact — noteTech',
    description: "Get in touch with Tanzania's leading software company.",
    url: 'https://www.note.co.tz/contact',
    siteName: 'noteTech',
    images: [{ url: '/notelogo.png', width: 800, height: 800, alt: 'noteTech logo' }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
