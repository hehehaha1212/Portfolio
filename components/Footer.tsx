
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 flex flex-col items-center md:items-start text-white/60">
                            <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Security</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 flex flex-col items-center md:items-start text-white/60">
                            <li><Link href="#" className="hover:text-white transition">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/60 text-sm"> 2025 Nubien. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-white/60 hover:text-white transition">Twitter</Link>
                        <Link href="#" className="text-white/60 hover:text-white transition">LinkedIn</Link>
                        <Link href="#" className="text-white/60 hover:text-white transition">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer;