import { Button } from "./ui/button"
import Link from 'next/link'
import { Sparkles } from "lucide-react"


const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-background/10 backdrop-blur border-none border-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                        <Sparkles />
                    </div>
                    <span className="text-xl font-bold">PortFolio</span>
                </div>
                <div>
                    <Link href="/contact" className="rounded-full mx-auto px-4 ">Home</Link>
                    <Link href="/contact" className="rounded-full mx-auto px-4 ">Work</Link>
                    <Link href="/contact" className="rounded-full mx-auto px-4">About</Link>
                    <Link href="/contact" className="rounded-full mx-auto px-4 ">Contact</Link>
                    <Link href="/contact" className="rounded-full mx-auto px-4 ">Hire me</Link>
                </div>

                <Button className="rounded-mid">Connect With Us</Button>
            </div>

        </nav>)
}
export default Navbar