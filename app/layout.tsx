import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CloudPlay — Cloud gaming, simplified',
  description: 'Instant cloud gaming sessions for Roblox, Fortnite, and Terraria.',
  generator: 'CloudPlay',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
