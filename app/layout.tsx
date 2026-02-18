import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIMA – Sicilian Pasta Culture',
  description: 'Fresh pasta made daily. Sourced honestly. Community-driven.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-cima-cream text-cima-black font-sans">
        {children}
      </body>
    </html>
  )
}
