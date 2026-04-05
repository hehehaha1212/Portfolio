"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Brain, MessageSquare, BarChart3, Play } from "lucide-react"

const services = [
  {
    title: "AI-Powered Development",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    // Using royalty-free mp4 videos from mixkit / sample sources
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
  },
  {
    title: "AI Chatbots",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://videos.pexels.com/video-files/7710231/7710231-hd_1920_1080_30fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800",
  },
  {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
    icon: BarChart3,
    video: "https://videos.pexels.com/video-files/3255356/3255356-uhd_2560_1440_25fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
  {
    title: "AI-Powered Development",
    subtitle: "Smart Websites",
    description: "We build AI-driven websites that adapt to users and automate workflows.",
    icon: Brain,
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
  },
  {
    title: "AI Chatbots",
    subtitle: "24/7 Customer Support",
    description: "Instant AI-powered chatbots that automate responses and improve engagement.",
    icon: MessageSquare,
    video: "https://videos.pexels.com/video-files/7710231/7710231-hd_1920_1080_30fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800",
  },
  {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
    icon: BarChart3,
    video: "https://videos.pexels.com/video-files/3255356/3255356-uhd_2560_1440_25fps.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
]

interface ServiceCardProps {
  service: (typeof services)[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const Icon = service.icon

  const handleMouseEnter = () => {
    setHovered(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-5 flex flex-col gap-4 cursor-pointer"
      style={{
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease, border-color 0.3s ease, z-index 0s",
        transform: hovered ? "scale(1.245) translateY(-6px)" : "scale(1) translateY(0px)",
        zIndex: hovered ? 10 : 1,
        boxShadow: hovered
          ? "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.35)"
          : "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.0)",
      }}
    >
      {/* Icon badge */}
      <div className="flex items-center gap-2.5">
        
        <div>
          <h3 className="text-sm font-semibold text-white leading-tight">{service.title}</h3>
         
        </div>
      </div>

      <p className="text-[13px] text-white/55 leading-relaxed">{service.description}</p>

      {/* Video thumbnail container */}
      <div
        className="relative overflow-hidden rounded-xl"
        style={{
          transition: "height 0.45s cubic-bezier(0.23,1,0.32,1)",
          height: hovered ? "200px" : "140px",
        }}
      >
        {/* Thumbnail image (shown before hover / while loading) */}
        <img
          src={service.thumbnail}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transition: "opacity 0.3s ease",
            opacity: hovered && loaded ? 0 : 1,
          }}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={service.video}
          muted
          playsInline
          loop
          preload="metadata"
          onCanPlay={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transition: "opacity 0.35s ease",
            opacity: hovered && loaded ? 1 : 0,
          }}
        />

        {/* Gradient overlay always on bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
          }}
        />

        {/* Play button — shows on idle, hides while playing */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transition: "opacity 0.25s ease",
            opacity: hovered ? 0 : 1,
          }}
        >
          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* LIVE pill — shows while playing */}
        <div
          className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 pointer-events-none"
          style={{
            transition: "opacity 0.25s ease",
            opacity: hovered && loaded ? 1 : 0,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] text-white/80 font-medium tracking-wide">PLAYING</span>
        </div>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section
      className="relative mx-auto max-w-5xl py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      style={{ minHeight: "200px" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/HQiQT243MN1itZOX771FxR6euwI.png')",
          }}
        />

        {/* Blue godrays */}
        <div
          className="absolute top-30 left-0 w-full h-[300px] pointer-events-none"
          style={{
            background: `
              linear-gradient(120deg, rgba(85,126,247,0.18) 10%, transparent 40%),
              linear-gradient(60deg,  rgba(85,126,247,0.18) 20%, transparent 50%),
              linear-gradient(180deg, rgba(85,126,247,0.18) 0%,  transparent 60%)
            `,
            filter: "blur(60px)",
            opacity: 0.8,
          }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <div className="w-full h-full bg-[radial-gradient(circle,_#a855f7_1px,_transparent_1px)] bg-[size:18px_18px] blur-[2px]" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center text-white mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-accent/20 text-accent">
            Services
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Services for <br />
            <span className="text-white/70">Future-Driven Businesses</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Our cutting-edge AI solutions are designed to transform businesses,
            enhance efficiency, and drive innovation.
          </p>

          <Button className="rounded-full bg-accent hover:bg-accent/90">
            Book a 15-min call
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}