"use client"

import Navbar from '@/components/nav'
import Footer from '@/components/Footer'
import FloatingShirt from '@/components/Floatingshirit'
import PortfolioGrid from '@/components/Projects'
import PortfolioGrid2 from '@/components/Projects copy'
import FloatingShirt2 from '@/components/Floatingshirit copy'

export default function WorkPage() {
    return (
        <div className="bg-[#f0efeb] min-h-screen text-black">
            <Navbar />
            <main className="max-w-6xl mx-auto py-40 px-6">
                <h1 className="text-4xl font-bold mb-4">Work_</h1>
                <p className="text-black text-xl pr-70">Experienced in using advanced AI tools such as Higgsfield AI, Flow AI, Kling AI, ChatGPT Go, and Nano Banana (Gemini) for ideation, scripting, visual generation, and workflow optimization in video editing projects..</p>
            </main>
            <FloatingShirt />
            {/*<FloatingShirt2/>*/}
            <PortfolioGrid2/>
            <PortfolioGrid/>

            <Footer />
        </div>
    )
}
