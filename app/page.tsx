
'use client'


{/*
  app/page.tsx
  - Main landing page route for the site. Composes top-level sections
    (Hero, services, portfolio highlights, contact CTA, FAQ, footer).
*/}

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
import ServicesSection from '@/components/Main2'
import SupportHero from '@/components/Main3'
import PortfolioLayered from '@/components/Main4'
import FAQSection from '@/components/FAQ'
import GlowContactForm from '@/components/GlowcontactForm'
import FloatingShirt from '@/components/Floatingshirit'
import HeroCards from '@/components/Herocards'
import RotatingCircle from '@/components/RotatingCircle'

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      <Navbar />
      <Hero />

      <ServicesSection />

      <RotatingCircle />
      {/* Services Section */}
      <SupportHero />
      s

      {/* Portfolio Section */}
      <PortfolioLayered />
      <HeroCards />


      <GlowContactForm />


      <FAQSection />

      {/* Footer */}
      <Footer />

    </div>
  )
}
