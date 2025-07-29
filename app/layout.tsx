import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: 'Quiz Extractor',
  description: '',
}
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
