// src/components/Layout.tsx

import { ReactNode } from 'react'

import { Footer } from '../../components/footer'
import { Navbar } from '../../components/navbar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
