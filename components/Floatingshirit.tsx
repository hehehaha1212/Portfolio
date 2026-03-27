"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "./nav"



// ─── Hook: track scroll position ─────────────────────────────────────────────
function useScrollY() {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return scrollY
}

// ─── Animated text row (clips in from bottom on scroll) ──────────────────────
interface TextRowProps {
    text: string
    scrollY: number
    triggerAt: number   // scrollY value at which the row starts revealing
    speed?: number      // parallax speed multiplier (0 = sticky, 1 = normal)
}

function TextRow({ text, scrollY, triggerAt, speed = 0.3 }: TextRowProps) {
    // How far past the trigger point we are (clamped 0→1)
    const progress = Math.min(Math.max((scrollY - triggerAt) / 200, 0), 1)
    // Clip from 100% → 0% (reveal upward)
    const clipY = (1 - progress) * 100
    // Parallax nudge — moves slower than the page
    const parallaxY = scrollY * speed

    return (
        <div
            style={{
                overflow: "hidden",
                transform: `translateY(${-parallaxY * 0.15}px)`,
                transition: "transform 0.05s linear",
            }}
        >
            <span
                style={{
                    display: "block",
                    clipPath: `inset(0 0 ${clipY}% 0)`,
                    transition: "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                {text}
            </span>
        </div>
    )
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function FloatingShirt() {
    const scrollY = useScrollY()
    const sectionRef = useRef<HTMLElement>(null)

    // Shirt floats up slightly on scroll (slower than scroll speed → parallax)
    const shirtParallax = scrollY * 0.35
    // Gentle perpetual float animation is handled by CSS keyframes

    return (
        <>
            <Navbar />

        
            <main>
                <section
                    ref={sectionRef}
                    className="relative w-full overflow-hidden bg-[#f0efeb]"
                    style={{ minHeight: "100vh" }}
                >
                    {/* ── Crosshair / target SVG rings (decorative background) ── */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1440 882"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        aria-hidden
                    >
                        <circle cx="723" cy="441" r="380.5" stroke="white" strokeOpacity="0.80" vectorEffect="non-scaling-stroke" />
                        <circle cx="723" cy="441" r="261.5" stroke="gray" strokeOpacity="0.90" vectorEffect="non-scaling-stroke" />
                        <circle cx="723" cy="441" r="82.5" stroke="currentColor" strokeOpacity="0.60" vectorEffect="non-scaling-stroke" />
                        <line x1="0" y1="441.5" x2="1440" y2="441.5" stroke="currentColor" strokeOpacity="0.08" vectorEffect="non-scaling-stroke" />
                        <line x1="723" y1="0" x2="723" y2="882" stroke="currentColor" strokeOpacity="0.08" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* ── Location eyebrow ── */}
                    <p
                        className="absolute top-9 left-1/2 -translate-x-1/2 text-sm tracking-widest text-[#e3390a] font-mono uppercase z-10"
                        style={{ letterSpacing: "0.15em" }}
                    >
                        Gorakhpur, India
                    </p>

                    {/* ── Giant headline (behind the shirt) ── */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
                        style={{
                            fontFamily: "'Anton', 'Arial Black', Impact, sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(5rem, 11vw, 20rem)",
                            lineHeight: 0.92,
                            letterSpacing: "-0.01em",
                            color: "#111",
                            textAlign: "center",
                            paddingTop: "-1rem",
                            marginTop: "-5rem"
                        }}
                    >
                        <TextRow text="WE ARE" scrollY={scrollY} triggerAt={0} speed={0.0} />
                        <TextRow  text="______THE__CREATIVE" scrollY={scrollY} triggerAt={60} speed={0.0} />
                        <TextRow text="DESIGN __ STUDIO    " scrollY={scrollY} triggerAt={120} speed={0.0} />
                        
                    </div>

                    {/* ── Floating shirt (parallax — moves slower than page) ── */}
                    <div
                        className="absolute inset-0 pt-190 flex items-center justify-center z-10 pointer-events-none"
                        style={{
                            transform: `translateY(${-shirtParallax}px)`,
                            transition: "transform 0.1s linear",
                        }}
                    >
                       
                        <div
                            className="shirt-float"
                            style={{
                                width: "clamp(260px, 38vw, 560px)",
                                aspectRatio: "3/4",
                                position: "relative",
                            }}
                        >
                            {/* Placeholder shirt — swap for <img src="…" alt="…" /> */}

                                {/* Abstract liquid lines overlay */}
                                <img
                                    src="https://cdn.prod.website-files.com/6766a97af7951c214f154267/67765ca3c658d4406ab1e0e7_gh-shirt.avif"
                                    alt="Portfolio signature shirt"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.28))",
                                    }}
                                />
                              
                               
                            </div>
                     
                    </div>

                    {/* ── Bottom-right info block ── */}
                    <div
                        className="absolute bottom-10 right-8 z-20 max-w-[260px] text-right"
                        style={{
                            opacity: Math.min(scrollY / 120, 1),
                            transform: `translateY(${Math.max(30 - scrollY * 0.25, 0)}px)`,
                            transition: "opacity 0.4s ease, transform 0.4s ease",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "Georgia, 'Times New Roman', serif",
                                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                                fontWeight: 400,
                                fontStyle: "italic",
                                marginBottom: "0.75rem",
                                color: "#111",
                            }}
                        >
                            Exclusively in sports
                        </h3>
                        <p style={{ fontSize: "0.78rem", lineHeight: 1.5, color: "#333" }}>
                            <span style={{ color: "#e3390a", fontWeight: 700, fontFamily: "monospace" }}>
                                PORTFOLIO®
                            </span>{" "}
                            believes in a world where top-tier design and motion can take your brand to the stage it truly deserves.
                        </p>
                    </div>

                    {/* ── Bottom-left logo badge ── */}
                    <div
                        className="absolute bottom-10 left-8 z-20"
                        style={{
                            opacity: Math.min(scrollY / 120, 1),
                            transition: "opacity 0.5s ease",
                        }}
                    >
                        <div
                            style={{
                                border: "2px solid #111",
                                borderRadius: "999px",
                                padding: "0.4rem 1.2rem",
                                fontFamily: "'Anton', sans-serif",
                                fontSize: "1rem",
                                letterSpacing: "0.12em",
                                color: "#111",
                                background: "transparent",
                            }}
                        >
                            GLOBAL
                        </div>
                    </div>

                    {/* Extra scroll space so text reveals work */}
                    <div style={{ height: "100vh" }} />
                </section>
            </main>

            {/* ── Float keyframe ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        @keyframes floatShirt {
          0%   { transform: translateY(0px) rotate(-2deg); }
          50%  { transform: translateY(-22px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }

        .shirt-float {
          animation: floatShirt 5s ease-in-out infinite;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.22));
        }
      `}</style>
        </>
    )
}