"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "./ui/button"

// ─── Sub-components ──────────────────────────────────────────────────────────

function CardCornerDots() {
    return (
        <>
            <span className="absolute top-2.5 left-3 w-1 h-1 rounded-full bg-white/15" />
            <span className="absolute top-2.5 right-3 w-1 h-1 rounded-full bg-white/15" />
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
            <div className="w-7 h-7 rounded-full border border-white/15 mx-auto mb-2.5 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.4)" />
                </svg>
            </div>
            <p className="text-[13px] font-medium text-white/82 text-center mb-1">Welcome to the Platform</p>
            <p className="text-[11px] text-white/30 text-center mb-3">Log in to continue.</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">Email</p>
            <CardInput placeholder="Your email address" />
            <CardButton>Continue</CardButton>
            <CardFooter text="Don't have an account?" linkText="Sign up" />
        </div>
    )
}

function CenterCard() {
    return (
        <div className="w-[25vw] h-[25vw] bg-gray-700 border border-white/[0.09] rounded-2xl p-5 relative" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <CardCornerDots />
            <div className="w-7 h-7 rounded-full border border-white/15 mx-auto mb-2.5 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                    <circle cx="8" cy="8" r="2" fill="rgba(255,255,255,0.4)" />
                </svg>
            </div>
            <p className="text-[13px] font-medium text-white/82 text-center mb-3">Sign in to SuperApp</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">Email</p>
            <CardInput placeholder="Your email address" />
            <CardButton>Continue</CardButton>
            <OrDivider />
            <SocialButton>
                <svg width="10" height="10" viewBox="0 0 24 24">
                    <path fill="rgba(255,255,255,0.45)" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="rgba(255,255,255,0.35)" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="rgba(255,255,255,0.3)" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                    <path fill="rgba(255,255,255,0.4)" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Continue with Google
            </SocialButton>
            <SocialButton>
                <svg width="10" height="10" viewBox="0 0 10 10">
                    <rect x="0" y="0" width="4.5" height="4.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="5.5" y="0" width="4.5" height="4.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="0" y="5.5" width="4.5" height="4.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="5.5" y="5.5" width="4.5" height="4.5" fill="rgba(255,255,255,0.4)" />
                </svg>
                Continue with Microsoft
            </SocialButton>
            <CardFooter text="Don't have an account?" linkText="Sign up" />
        </div>
    )
}

function RightCard() {
    return (
        <div className="w-[25vw] h-[25vw] bg-gray-700 border border-white/[0.09] rounded-2xl p-5 relative">
            <CardCornerDots />
            <div className="w-7 h-7 rounded-full border border-white/15 mx-auto mb-2.5 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5L14 4.5V11.5L8 14.5L2 11.5V4.5L8 1.5Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" fill="none" />
                </svg>
            </div>
            <p className="text-[13px] font-medium text-white/82 text-center mb-1">Sign in to Clamer</p>
            <p className="text-[11px] text-white/30 text-center mb-3 leading-relaxed">
                Enter the code from your authenticator app.
            </p>
            <div className="flex gap-1.5 justify-center mb-2.5">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-9 h-9 bg-white/[0.05] border border-white/[0.09] rounded-lg"
                    />
                ))}
            </div>
            <CardButton>Continue</CardButton>
            <CardFooter text="Need help?" linkText="Sign in another way" />
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
  <div  />
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