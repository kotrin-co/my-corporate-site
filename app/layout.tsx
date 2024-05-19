import { Header } from '@/components/Layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Digitaro',
  description: 'This is Digitaros corporate site.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Header />
        <main className="px-4 pt-40 md:pt-60">{children}</main>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
    </html>
  )
}
