'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Brain, Shield, Lightbulb, MessageSquare, Eye } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/nav'
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import Main2 from '@/components/Main2'
import Main3 from '@/components/Main3'
import Footer from '@/components/Footer'
import Main4 from '@/components/Main4'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <Navbar />
      <Hero />
      <Main />
      <Main2 />
      {/* Services Section */}
      <Main3 />

      {/* Portfolio Section */}
      <Main4 />

      {/* CTA Section */}
      <Contact/>

      {/* Footer */}
      <Footer />
    </div>
  )
}
