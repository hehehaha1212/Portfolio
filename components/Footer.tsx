
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition">Docs</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Support</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Terms</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8 flex items-center justify-between">
                    <p className="text-muted-foreground text-sm"> 2025 Nubien. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer;