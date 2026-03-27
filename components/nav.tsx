"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const pathname = usePathname();
    const isWorkPage = pathname === "/work";



    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 80) {
                // scrolling DOWN → hide
                setShow(false);
            } else {
                // scrolling UP → show
                setShow(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* Glass Background */}
            <div
                className={`backdrop-blur-xl border-b shadow-[0_8px_30px_rgba(0,0,0,0.1)] ${isWorkPage
                    ? "bg-white/70 border-black/10"
                    : "bg-black/40 border-white/10"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-accent/80 flex items-center justify-center text-white shadow-lg">
                            <Sparkles size={18} />
                        </div>
                        <span
                            className={`text-xl font-bold ${isWorkPage ? "text-black" : "text-white"
                                }`}
                        >
                            PortFolio
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-2">
                        {["Home", "Work", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                                className={` transition px-4 relative group ${isWorkPage
                                    ? "text-black/70 hover:text-black"
                                    : "text-white/70 hover:text-white"}`}
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                        <Button
                            className={`rounded-full backdrop-blur-md border ${isWorkPage
                                    ? "bg-black/10 text-black border-black/10 hover:bg-black/20"
                                    : "bg-accent/20 text-white border-white/10 hover:bg-accent/30"
                                }`}
                        >
                            Connect With Us
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}