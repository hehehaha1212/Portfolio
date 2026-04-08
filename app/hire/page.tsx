/*
    app/hire/page.tsx
    - Simple hire/contact instructions page used for hiring inquiries.
*/
"use client"

import Navbar from '@/components/nav'
import Footer from '@/components/Footer'
import FloatingShirt from '@/components/Floatingshirit'

export default function HirePage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <main className="max-w-6xl mx-auto py-40 px-6">
                <h1 className="text-4xl font-bold mb-4">Hire Me</h1>
                <p className="text-white/70">This page provides contact/hire instructions. Link to contact form.</p>
            </main>
           
            <Footer />
        </div>
    )
}
