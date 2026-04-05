import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'App',
  description: 'portfolio',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/art1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/art1.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/art1.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/art.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
