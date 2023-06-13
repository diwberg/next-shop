import './globals.css'
import {ReactNode} from 'react'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: {
    default: 'Shop - ICYou',
    template: '%s - ICYou',
  },
  description: 'Shop for You',
}

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ptBR" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
