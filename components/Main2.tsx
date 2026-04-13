"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Brain, MessageSquare, BarChart3, Play, ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "AI-Powered Development",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430268/Vid-3_1_hlwesp.mp4",
  },
  {
    title: "AI Chatbots",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430613/Vid-4_1_ocrnst.mp4",
  },
  {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
    icon: BarChart3,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430179/Video-7_bp3wo2.mp4",
  },
  {
    title: "AI-Powered Development",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430179/Video-7_bp3wo2.mp4",
  },
  {
    title: "AI Chatbots",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430179/Video-7_bp3wo2.mp4",
  },
  {
    title: "Disney",
    subtitle: "Data-Driven Decisions",
    description: "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
    icon: BarChart3,
    video: "https://videos.pexels.com/video-files/3255356/3255356-uhd_2560_1440_25fps.mp4",
  },


]

const saas = [
  {
    title: "SAAS",
    subtitle: "Data-Driven Decisions",
    description: "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
    icon: BarChart3,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774428415/Draft-Preview_fbruuk.mp4",
  },
]

const landscape = [
  {
    title: "Landscape",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774428426/Vid-3_n82t37.mp4",
  },
  {
    title: "Landscape 2",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1774430167/Vid-8_givc9x.mp4",
  },
]

const Ads = [
  {
    title: "Landscape",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1770441080/Short_form_reel-1_gryo51.mp4",
  },
  {
    title: "Landscape 2",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1767040926/DJ_Ana_ceizc0.mp4",
  },
   {
    title: "Landscape",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://res.cloudinary.com/dod1dviie/video/upload/v1767041619/Final_amazon_dywvxv.mp4",
  },
]

// 0.8 = show 80% of native height → crops 10% top + 10% bottom via object-cover
const CROP_FACTOR = 0.7

// ─── Gets the ratio from the video el, loading metadata first if needed ───────
function getRatio(el: HTMLVideoElement): Promise<number> {
  return new Promise((resolve) => {
    const read = () => {
      if (el.videoWidth && el.videoHeight) {
        resolve(el.videoWidth / el.videoHeight)
      }
    }
    if (el.videoWidth && el.videoHeight) {
      resolve(el.videoWidth / el.videoHeight)
    } else {
      el.addEventListener("loadedmetadata", read, { once: true })
      if (el.readyState === 0) el.load()
    }
  })
}

function PlayOverlay({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ transition: "opacity 0.25s ease", opacity: visible ? 1 : 0 }}
    >
      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>
    </div>
  )
}

function PlayingPill({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 pointer-events-none"
      style={{ transition: "opacity 0.25s ease", opacity: visible ? 1 : 0 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      <span className="text-[10px] text-white/80 font-medium tracking-wide">PLAYING</span>
    </div>
  )
}

// ─── VideoCard ────────────────────────────────────────────────────────────────

function VideoCard({
  video,
  title,
  description,
  idleHeight = 260,
}: {
  video: string
  title: string
  description: string
  idleHeight?: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [height, setHeight] = useState<number>(idleHeight)

  const handleEnter = async () => {
    setHovered(true)
    const el = videoRef.current
    const wrap = wrapRef.current
    if (!el || !wrap) return
    el.play().catch(() => { })
    const ratio = await getRatio(el)
    const w = wrap.offsetWidth || 320
    setHeight(Math.round((w / ratio) * CROP_FACTOR))
  }

  const handleLeave = () => {
    setHovered(false)
    setHeight(idleHeight)
    const el = videoRef.current
    if (el) { el.pause(); el.currentTime = 0 }
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="cursor-pointer">
      <div
        ref={wrapRef}
        className="relative overflow-hidden rounded-xl w-full"
        style={{ height, transition: "height 0.5s cubic-bezier(0.23,1,0.32,1)" }}
      >
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }} />
        <PlayingPill visible={hovered} />
      </div>
      <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-white/60">{description}</p>
    </div>
  )
}

function Video({
  video,
  title,
  description,
  idleHeight = 333,
}: {
  video: string
  title: string
  description: string
  idleHeight?: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [height, setHeight] = useState<number>(idleHeight)

  const CROP_FACTOR=1
  const handleEnter = async () => {
    setHovered(true)
    const el = videoRef.current
    const wrap = wrapRef.current
    if (!el || !wrap) return
    el.play().catch(() => { })
    const ratio = await getRatio(el)
    const w = wrap.offsetWidth || 320
    setHeight(Math.round((w / ratio) * CROP_FACTOR))
  }

  const handleLeave = () => {
    setHovered(false)
    setHeight(idleHeight)
    const el = videoRef.current
    if (el) { el.pause(); el.currentTime = 0 }
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="cursor-pointer">
      <div
        ref={wrapRef}
        className="relative overflow-hidden rounded-sm w-full"
        style={{ height, transition: "height 0.5s cubic-bezier(0.23,1,0.32,1)" }}
      >
        <video
          ref={videoRef}
          src={video}
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }} />
        <PlayingPill visible={hovered} />
      </div>
      <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-white/60">{description}</p>
    </div>
  )
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [height, setHeight] = useState<number>(180)

  const handleEnter = async () => {
    setHovered(true)
    const el = videoRef.current
    const wrap = wrapRef.current
    if (!el || !wrap) return
    el.play().catch(() => { })
    const ratio = await getRatio(el)
    const w = wrap.offsetWidth || 300
    setHeight(Math.round((w / ratio) * CROP_FACTOR))
  }

  const handleLeave = () => {
    setHovered(false)
    setHeight(180)
    const el = videoRef.current
    if (el) el.pause()
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-5 flex flex-col gap-4 cursor-pointer"
      style={{
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
        transform: hovered ? "scale(1.04) translateY(-4px)" : "scale(1) translateY(0px)",
        zIndex: hovered ? 10 : 1,
        boxShadow: hovered
          ? "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.35)"
          : "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      <h3 className="text-sm font-semibold text-white leading-tight">{service.title}</h3>
      <p className="text-[13px] text-white/55 leading-relaxed">{service.description}</p>

      <div
        ref={wrapRef}
        className="relative overflow-hidden rounded-xl w-full"
        style={{ height, transition: "height 0.5s cubic-bezier(0.23,1,0.32,1)" }}
      >
        <video
          ref={videoRef}
          src={service.video}
          playsInline
          loop
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
        <PlayingPill visible={hovered} />
      </div>
    </div>
  )
}

// ─── ProjectTextBlock ─────────────────────────────────────────────────────────

function ProjectTextBlock({
  title, body, tags, stat, statLabel, links,
}: {
  title: string; body: string; tags: string[]
  stat?: string; statLabel?: string
  links?: { label: string; href?: string; accent?: boolean }[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-white leading-snug">{title}</h2>
      <p className="text-white/60 leading-relaxed text-[15px]">{body}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-white/70 tracking-wide">{tag}</span>
        ))}
      </div>
      {stat && (
        <div className="flex items-end gap-2 mt-1">
          <span className="text-4xl font-bold text-white">{stat}</span>
          {statLabel && <span className="text-white/50 text-sm mb-1.5">{statLabel}</span>}
        </div>
      )}
      {links && (
        <div className="flex gap-5 mt-1">
          {links.map((l) => (
            <a key={l.label} href={l.href ?? "#"} className={`flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80 ${l.accent ? "text-accent" : "text-white/50"}`}>
              {l.label}
              {l.accent && <ArrowUpRight className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section className="relative mx-auto py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden" style={{ minHeight: "200px" }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://framerusercontent.com/images/HQiQT243MN1itZOX771FxR6euwI.png')" }} />
        <div className="absolute top-30 left-0 w-full h-[300px] pointer-events-none" style={{ background: "linear-gradient(120deg,rgba(85,126,247,0.18) 10%,transparent 40%),linear-gradient(60deg,rgba(85,126,247,0.18) 20%,transparent 50%),linear-gradient(180deg,rgba(85,126,247,0.18) 0%,transparent 60%)", filter: "blur(60px)", opacity: 0.8 }} />
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <div className="w-full h-full bg-[radial-gradient(circle,_#a855f7_1px,_transparent_1px)] bg-[size:18px_18px] blur-[2px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-accent/20 text-accent">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Services for <br />
            <span className="text-white/70">Future-Driven Businesses</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">Our cutting-edge AI solutions are designed to transform businesses, enhance efficiency, and drive innovation.</p>
          <Button className="rounded-full bg-accent hover:bg-accent/90">Book a 15-min call</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => <ServiceCard key={index} service={service} />)}
        </div>
      </div>

      {/* Advertisement */}
      <section className="w-full max-w-7xl mx-auto py-20 px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Advertisement</h2>
          <p className="text-white/60">Showcasing Ads I made for clients powered with AI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="md:scale-[1.03]"><VideoCard {...services[0]} /></div>
          <div className="mr-7 scale-[0.90]"><VideoCard {...services[1]} /></div>
          <div className="scale-[1.2]"><VideoCard {...services[2]} /></div>
          <div className="scale-[0.85]"><VideoCard {...services[3]} /></div>
          <div className="mt-13 md:scale-[1.20]"><VideoCard {...services[4]} /></div>
        </div>
      </section>

      {/* SAAS */}
      <section className="w-full max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Video video={saas[0].video} title={saas[0].title} description={saas[0].description} />
          </div>
          <div className="w-full md:w-1/2">
            <ProjectTextBlock
              title="AI Website Engine"
              body="A powerful AI-driven platform that learns from every visitor. It adapts layout, content, and CTAs in real time — boosting conversions without any manual A/B testing."
              tags={["AI", "Automation", "SaaS", "No-code"]}
          
              links={[{ label: "Live Demo", accent: true, href: "#" }, { label: "Case Study", href: "#" }]}
            />
          </div>
        </div>
      </section>

      {/* Alternating rows */}
      <section className="w-full max-w-7xl mx-auto py-20 px-6 space-y-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Video {...landscape[0]} />
          </div>
          <div className="w-full md:w-1/2">
            <ProjectTextBlock
              title="AI Chat System"
              body="Smart assistants that scale conversations across every channel — from your website to WhatsApp. They handle FAQs, qualify leads, and hand off to your team only when it matters."
              tags={["Chatbot", "NLP", "Omnichannel"]}

              links={[{ label: "See It Live", accent: true, href: "#" }, { label: "View Docs", href: "#" }]}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Video {...landscape[1]} />
          </div>
          <div className="w-full md:w-1/2">
            <ProjectTextBlock
              title="Short Videos"
              body="Forecast market trends, customer churn, and revenue shifts before they happen. Trained on your data, our models surface actionable signals your team can act on immediately."
              tags={["Analytics", "Forecasting", "ML"]}

              links={[{ label: "Request a Demo", accent: true, href: "#" }, { label: "Read the Report", href: "#" }]}
            />
          </div>
        </div>
      </section>

      {/* Bottom 3-up */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-2xl font-bold text-white">Predictive AI</h3>
        <p className="text-white/60 mt-2">Forecast trends and automate decisions.</p>
        <div className="grid mt-10 md:grid-cols-3 gap-6">
          <VideoCard {...Ads[0]} />
          <VideoCard {...Ads[1]} />
          <VideoCard {...Ads[2]} />
        </div>
      </section>
    </section>
  )
}