import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/app/shared/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ESG FIAP',
  description: 'Atividade ESG FIAP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
