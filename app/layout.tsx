import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Full Stack Developer',
  description: 'Muhammad Faheem',
  generator: 'Muhammad Faheem',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{overflowX: 'hidden', width: '100vw', boxSizing: 'border-box'}}>{children}</body>
    </html>
  )
}
