import { Analytics } from '@vercel/analytics/next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Simiu — Practice until confidence feels familiar.',
  description: 'Simiu is the calm AI interview practice space and junior job board for your next role.',
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#111318' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${manrope.variable} ${dmSerif.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
