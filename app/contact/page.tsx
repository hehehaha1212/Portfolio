/*
    app/contact/page.tsx
    - Contact route that hosts the contact form and contact-related CTAs.
*/
"use client"

import ContactSection from '@/components/ContactPage'
import Navbar from '@/components/nav'
import Footer from '@/components/Footer'

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactSection />
            <Footer />
        </div >
    )
}
