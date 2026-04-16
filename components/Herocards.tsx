"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "./ui/button"

// ─── Sub-components ──────────────────────────────────────────────────────────

function CardCornerDots() {
    return (
        <>
            <span className="absolute top-2.5 left-3 w-1 h-1 rounded-full bg-white" />
            <span className="absolute top-2.5 right-3 w-1 h-1 rounded-full bg-white" />
            <span className="absolute bottom-2.5 left-3 w-1 h-1 rounded-full bg-white" />
            <span className="absolute bottom-2.5 right-3 w-1 h-1 rounded-full bg-white" />
        </>
    )
}

function CardBg({ image }: { image?: string }) {
    if (!image) return null
    return (
        <>
            {/* Background image */}
            <div
                className="absolute inset-0 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Dark overlay so content stays readable */}
            <div className="absolute inset-0 rounded-2xl bg-black/55" />
        </>
    )
}

function CardInput({ placeholder }: { placeholder: string }) {
    return (
        <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-2.5 py-1.5 text-[11px] text-white/25 mb-1.5 font-sans">
            {placeholder}
        </div>
    )
}

function CardButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="w-full bg-white/[0.06] border border-white/10 rounded-lg py-1.5 text-[11px] text-white/50 mb-1.5 font-sans hover:bg-white/[0.1] transition-colors">
            {children}
        </button>
    )
}

function OrDivider() {
    return (
        <div className="flex items-center gap-2 my-1.5">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="text-[9px] text-white/20 tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/[0.07]" />
        </div>
    )
}

function SocialButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="w-full bg-white/[0.04] border border-white/[0.07] rounded-lg py-1.5 text-[10px] text-white/40 flex items-center justify-center gap-1.5 mb-1 font-sans hover:bg-white/[0.07] transition-colors">
            {children}
        </button>
    )
}

function CardFooter({ text, linkText }: { text: string; linkText: string }) {
    return (
        <p className="text-[10px] text-white/22 text-center mt-1.5">
            {text}{" "}
            <a href="#" className="text-white/45 hover:text-white/65 transition-colors">
                {linkText}
            </a>
        </p>
    )
}

// ─── Individual Cards ─────────────────────────────────────────────────────────

function LeftCard() {
    return (
        <div className="w-[25vw] h-[25vw] bg-gray-700 border border-white/[0.09] rounded-2xl p-5 relative">
            <CardCornerDots />

            <p className="text-[20px] font-semibold text-white/90 text-center mb-2">
                Video Editing
            </p>

            <p className="text-[15px] text-white/40 text-center mb-4">
                High-quality edits for YouTube, reels & ads with fast turnaround.
            </p>

            <div className="space-y-1.5 text-[15px] text-white/50 mb-4">
                <p>• Cinematic cuts & transitions</p>
                <p>• Color grading & sound design</p>
                <p>• Shorts & long-form content</p>
            </div>

            <p className="text-center text-white text-[16px] font-semibold mb-3">
                $49<span className="text-[14px] text-white/40"> / video</span>
            </p>

            <button className="w-full bg-white text-black rounded-lg py-1.5 text-[13px] font-medium hover:bg-white/90 transition">
                Get Started
            </button>
        </div>
    )
}

function CenterCard() {
    return (
        <div className="w-[25vw] h-[25vw] bg-gray-700 border border-white/[0.09] rounded-2xl p-5 relative">
            <CardCornerDots />

            <p className="text-[22px] font-semibold text-white/90 text-center mb-2">
                AI Video Creation
            </p>

            <p className="text-[15px] text-white/40 text-center mb-4">
                Generate engaging videos using AI — scripts, visuals & voice included.
            </p>

            <div className="space-y-1.5 text-[15px] text-white/50 mb-4">
                <p>• AI-generated scripts</p>
                <p>• Voiceovers & avatars</p>
                <p>• Social media ready</p>
            </div>

            <p className="text-center text-white text-[16px] font-semibold mb-3">
                $99<span className="text-[13px] text-white/40"> / project</span>
            </p>

            <button className="w-full bg-white text-black rounded-lg py-1.5 text-[14px] font-medium hover:bg-white/90 transition">
                Try Now
            </button>

            <p className="text-[13px] text-white/30 text-center mt-2">
                Most popular choice
            </p>
        </div>
    )
}
function RightCard() {
    return (
        <div className="w-[25vw] h-[25vw] bg-gray-700 border border-white/[0.09] rounded-2xl p-5 relative">
            <CardCornerDots />

            <p className="text-[20px] font-semibold text-white/90 text-center mb-2">
                Graphic Design
            </p>

            <p className="text-[15px] text-white/40 text-center mb-4">
                Stunning visuals for branding, ads, and social media creatives.
            </p>

            <div className="space-y-1.5 text-[15px] text-white/50 mb-4">
                <p>• Social media posts</p>
                <p>• Thumbnails & banners</p>
                <p>• Brand identity kits</p>
            </div>

            <p className="text-center text-white text-[16px] font-semibold mb-3">
                $29<span className="text-[14px] text-white/40"> / design</span>
            </p>

            <button className="w-full bg-white text-black rounded-lg py-1.5 text-[13px] font-medium hover:bg-white/90 transition">
                Order Now
            </button>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

type HoveredCard = "left" | "right" | null

interface CardTransform {
    transform: string
    opacity: number
    zIndex: number
}

export default function HeroCards() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const rafRef = useRef<number>(0)
    const [activeHover, setActiveHover] = useState<HoveredCard>(null)

    const cardLeftRef = useRef<HTMLDivElement>(null)
    const cardCenterRef = useRef<HTMLDivElement>(null)
    const cardRightRef = useRef<HTMLDivElement>(null)

    // Mouse tracking
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener("mousemove", onMove)
        return () => window.removeEventListener("mousemove", onMove)
    }, [])

    // RAF tilt loop
    useEffect(() => {
        const getBaseTransform = (
            id: "left" | "center" | "right",
            hover: HoveredCard
        ): { transform: string; opacity: number; zIndex: number } => {
            if (id === "left") {
                return hover === "left"
                    ? { transform: "translateX(0px) translateZ(40px) rotateY(0deg)", opacity: 1, zIndex: 10 }
                    : { transform: "translateX(-55px) translateZ(-90px) rotateY(-15deg)", opacity: 0.5, zIndex: 1 }
            }
            if (id === "right") {
                return hover === "right"
                    ? { transform: "translateX(0px) translateZ(40px) rotateY(0deg)", opacity: 1, zIndex: 10 }
                    : { transform: "translateX(55px) translateZ(-90px) rotateY(15deg)", opacity: 0.5, zIndex: 1 }
            }
            // center
            if (hover === "left") return { transform: "translateX(65px) translateZ(-40px) rotateY(10deg)", opacity: 0.5, zIndex: 2 }
            if (hover === "right") return { transform: "translateX(-65px) translateZ(-40px) rotateY(-10deg)", opacity: 0.5, zIndex: 2 }
            return { transform: "translateX(0px) translateZ(0px) rotateY(0deg)", opacity: 1, zIndex: 3 }
        }

        const applyTilt = (
            el: HTMLDivElement | null,
            base: string,
            mx: number,
            my: number
        ) => {
            if (!el) return
            const rect = el.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = (mx - cx) / (window.innerWidth * 0.5)
            const dy = (my - cy) / (window.innerHeight * 0.5)
            const tiltX = dy * -6
            const tiltY = dx * 6
            const tx = dx * 4
            const ty = dy * 4
            el.style.transform = `${base} translateX(${tx}px) translateY(${ty}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        }

        // We need a stable ref to activeHover inside the RAF loop
        const hoverRef = { current: activeHover }
        hoverRef.current = activeHover

        const tick = () => {
            const h = hoverRef.current
            const mx = mouseRef.current.x
            const my = mouseRef.current.y

            const lBase = getBaseTransform("left", h)
            const cBase = getBaseTransform("center", h)
            const rBase = getBaseTransform("right", h)

            const applyMeta = (el: HTMLDivElement | null, meta: CardTransform) => {
                if (!el) return
                el.style.opacity = String(meta.opacity)
                el.style.zIndex = String(meta.zIndex)
            }

            applyMeta(cardLeftRef.current, lBase)
            applyMeta(cardCenterRef.current, cBase)
            applyMeta(cardRightRef.current, rBase)

            applyTilt(cardLeftRef.current, lBase.transform, mx, my)
            applyTilt(cardCenterRef.current, cBase.transform, mx, my)
            applyTilt(cardRightRef.current, rBase.transform, mx, my)

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [activeHover])

    return (
        <section className="relative py-5 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">

            <div >


                {/* Soft fade */}
                <div />
            </div>


            <div className="max-w-3xl mx-auto text-center w-full">
                <h2
                    className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight leading-tight"
                    style={{
                        background: "linear-gradient(180deg, #fff 55%, rgba(255,255,255,0.5) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Ready to Transform<br />Your Business?
                </h2>
                <div
                    className="pointer-events-none absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[80px] opacity-40"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25), transparent 70%)",
                    }}
                />

                <p className="text-base text-white/45 mb-9 max-w-md mx-auto leading-relaxed">
                    Nubien comes with dedicated support to help you launch and maintain your site without friction.
                </p>


                {/* 3D Card Scene */}
                <div
                    ref={sceneRef}
                    className="relative mx-[10vw] mb-14"
                    style={{
                        width: 320,
                        height: 280,
                        perspective: "900px",
                        perspectiveOrigin: "50% 40%",
                    }}
                >
                    {/* LEFT */}
                    <div
                        ref={cardLeftRef}
                        onMouseEnter={() => setActiveHover("left")}
                        onMouseLeave={() => setActiveHover(null)}
                        className="absolute cursor-pointer"
                        style={{
                            width: 252,
                            left: -130,
                            top: 24,
                            transition: "transform 1.5s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease",
                            willChange: "transform",
                            transform: "translateX(-55px) translateZ(-90px) rotateY(-15deg)",
                            opacity: 0.8,
                            zIndex: 1,
                        }}
                    >
                        <LeftCard />
                    </div>

                    {/* CENTER */}
                    <div
                        ref={cardCenterRef}
                        onMouseEnter={() => setActiveHover(null)}
                        className="absolute"
                        style={{
                            width: 268,
                            left: "50%",
                            top: 0,
                            marginLeft: -134,
                            transition: "transform 1.5s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease",
                            willChange: "transform",
                            transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                            opacity: 1,
                            zIndex: 3,
                            boxShadow: "0 32px 64px rgba(0,0,0,0.6)",
                        }}
                    >
                        <CenterCard />
                    </div>

                    {/* RIGHT */}
                    <div
                        ref={cardRightRef}
                        onMouseEnter={() => setActiveHover("right")}
                        onMouseLeave={() => setActiveHover(null)}
                        className="absolute cursor-pointer"
                        style={{
                            width: 252,
                            right: -130,
                            top: 24,
                            transition: "transform 1.5s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease",
                            willChange: "transform",
                            transform: "translateX(55px) translateZ(-90px) rotateY(15deg)",
                            opacity: 0.8,
                            zIndex: 1,
                        }}
                    >
                        <RightCard />
                    </div>
                </div>


                {/* CTA */}
                <div className="flex py-35 items-center justify-center gap-3 flex-wrap">
                    <Button
                        size="lg"
                        className="rounded-full bg-white text-[#060a1a] hover:bg-white/90 font-semibold shadow-lg"
                    >
                        Book a 15-min Call
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="rounded-full border border-white/10 text-white/45 hover:text-white/70 hover:bg-white/[0.04] hover:border-white/20"
                    >
                        Learn more →
                    </Button>
                </div>



            </div>
        </section>
    )
}