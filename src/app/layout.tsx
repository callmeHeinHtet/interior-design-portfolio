import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dookie | Interior Design',
  description: 'Transforming spaces into dreams. Luxury interior design by Dookie.',
  keywords: ['interior design', 'luxury', 'home design', 'Dookie', 'DK Design'],
  authors: [{ name: 'Dookie' }],
  openGraph: {
    title: 'Dookie | Interior Design',
    description: 'Transforming spaces into dreams. Luxury interior design by Dookie.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dk-black text-white antialiased">
        {/* Noise texture overlay for depth */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  )
}
