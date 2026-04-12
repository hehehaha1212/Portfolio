"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const overlayRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isWorkPage = pathname === "/work";

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 80) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScroll(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Drive the overlay opacity imperatively so it transitions correctly
    useEffect(() => {
        const el = overlayRef.current;
        if (!el) return;
        // Force a reflow so the browser registers the starting state before transitioning
        el.style.opacity = menuOpen ? "1" : "0";
        el.style.pointerEvents = menuOpen ? "auto" : "none";
    }, [menuOpen]);

    const close = () => setMenuOpen(false);
    const links = ["Home", "Work", "About", "Contact", "Hire me"];

    return (
        <>
            {/* ── Navbar bar ── */}
            <nav
                style={{ transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)" }}
                className={`fixed top-0 w-full z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className={`backdrop-blur-xl border-b ${isWorkPage ? "bg-white/70 border-black/10" : "bg-black/40 border-white/10"}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-accent/80 flex items-center justify-center text-white">
                                <Sparkles size={18} />
                            </div>
                            <span className={`text-xl font-bold ${isWorkPage ? "text-black" : "text-white"}`}>
                                PortFolio
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-2">
                            {["Home", "Work", "About", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                                    className={`transition px-4 relative group ${isWorkPage ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
                                >
                                    {item}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden md:inline-flex">
                                <Link href="/contact">
                                    <Button className={`rounded-full backdrop-blur-md border ${isWorkPage ? "bg-black/10 text-black border-black/10 hover:bg-black/20" : "bg-accent/20 text-white border-white/10 hover:bg-accent/30"}`}>
                                        Connect With Us
                                    </Button>
                                </Link>
                            </div>

                            <button
                                aria-label="Toggle menu"
                                onClick={() => setMenuOpen((s) => !s)}
                                className={`md:hidden p-2 rounded-md transition ${isWorkPage ? "text-black/80 hover:bg-black/10" : "text-white/90 hover:bg-white/10"}`}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile drawer ── */}
            <div className="md:hidden fixed inset-0 z-[100]" style={{ pointerEvents: menuOpen ? "auto" : "none" }}>

                {/* Overlay — opacity driven by useEffect ref, NOT by menuOpen class */}
                <div
                    ref={overlayRef}
                    onClick={close}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(8, 8, 16, 0.70)",
                        opacity: 0,                      // start hidden
                        pointerEvents: "none",
                        transition: "opacity 400ms ease",  // reliable — no backdrop-filter transition
                    }}
                />

                {/* Glass panel */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "300px",
                        // ↓ Deeper glass: higher blur + saturate makes it feel rich
                        background: "rgba(10, 10, 20, 0.65)",
                        backdropFilter: "blur(40px) saturate(180%)",
                        WebkitBackdropFilter: "blur(40px) saturate(180%)",
                        borderLeft: "1px solid rgba(255,255,255,0.10)",
                        boxShadow: "-8px 0 60px rgba(0,0,0,0.55)",
                        willChange: "transform",           // ← GPU layer, prevents snapping
                        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                        transition: "transform 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Panel header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(67, 98, 251, 0.72)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Sparkles size={16} color="white" />
                            </div>
                            <span style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Menu</span>
                        </div>
                        <button
                            onClick={close}
                            aria-label="Close menu"
                            style={{ padding: "8px", borderRadius: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Links */}
                    <nav style={{ flex: 1, display: "flex", flexDirection: "column", padding: "28px 16px", gap: "4px" }}>
                        {links.map((item, i) => (
                            <Link
                                key={item}
                                href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "")}`}
                                onClick={close}
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: 18,
                                    fontWeight: 500,
                                    padding: "12px 16px",
                                    borderRadius: 10,
                                    textDecoration: "none",
                                    display: "block",
                                    // ↓ Staggered fade+slide driven purely by CSS — no JS needed
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? "translateX(0)" : "translateX(18px)",
                                    transition: menuOpen
                                        ? `opacity 320ms ease ${i * 50 + 100}ms, transform 320ms ease ${i * 50 + 100}ms`
                                        : "opacity 150ms ease, transform 150ms ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                                    (e.currentTarget as HTMLElement).style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)";
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom CTA */}
                    <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <Link href="/contact" onClick={close} style={{ display: "block" }}>
                            <button style={{ width: "100%", padding: "12px", borderRadius: 999, background: "rgba(72, 112, 255, 0.85)", border: "1px solid rgba(100,140,255,0.35)", color: "white", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                                Connect With Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}