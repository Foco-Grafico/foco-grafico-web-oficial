import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foco Grafico - Diseño publicitario y Desarrollo Web',
  description: `
    Foco Grafico es una empresa de diseño publicitario y desarrollo web, 
    con más de 10 años de experiencia en el mercado. realizamos trabajos
    de calidad y a medida para cada cliente.
  `
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
