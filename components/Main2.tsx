import { Button } from "./ui/button";
import { Brain, MessageSquare, BarChart3 } from "lucide-react";

const services = [
    {
        title: "AI-Powered Development",
        subtitle: "Smart Websites",
        description:
            "We build AI-driven websites that adapt to users and automate workflows.",
        icon: Brain,
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
        title: "AI Chatbots",
        subtitle: "24/7 Customer Support",
        description:
            "Instant AI-powered chatbots that automate responses and improve engagement.",
        icon: MessageSquare,
        image:
            "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1200",
    },
    {
        title: "Predictive Analytics",
        subtitle: "Driven Decisions",
        description:
            "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
        icon: BarChart3,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    },
    {
        title: "AI-Powered Development",
        subtitle: "Smart Websites",
        description:
            "We build AI-driven websites that adapt to users and automate workflows.",
        icon: Brain,
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
        title: "AI Chatbots",
        subtitle: "24/7 Customer Support",
        description:
            "Instant AI-powered chatbots that automate responses and improve engagement.",
        icon: MessageSquare,
        image:
            "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1200",
    },
    {
        title: "Predictive Analytics",
        subtitle: "Driven Decisions",
        description:
            "Leverage AI to analyze trends and predict outcomes for smarter strategies.",
        icon: BarChart3,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative pl-20  ml-60 w-[70%] py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-black text-white overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://framerusercontent.com/images/HQiQT243MN1itZOX771FxR6euwI.png')",
                minHeight: "200px"
            }}
        >
            <div className="absolute inset-0 z-0 overflow-hidden">

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            "url('https://framerusercontent.com/images/HQiQT243MN1itZOX771FxR6euwI.png')",
                    }}
                />


                {/* 🔮 Purple Godrays */}
                <div
                    className="absolute top-0 left-0 w-full h-[300px] pointer-events-none"
                    style={{
                        background: `
                          linear-gradient(120deg, rgba(85, 126, 247, 0.18) 10%, transparent 40%),
                          linear-gradient(60deg, rgba(85, 126, 247, 0.18) 20%, transparent 50%),
                          linear-gradient(180deg,rgba(85, 126, 247, 0.18) 0%, transparent 60%)
      `,
                        filter: "blur(60px)",
                        opacity: 0.8,
                    }}
                />

                {/*  Blurred dots */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <div className="w-full h-full bg-[radial-gradient(circle,_#a855f7_1px,_transparent_1px)] bg-[size:18px_18px] blur-[2px]" />
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

                {/* Side fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center text-white mb-16" >
                    <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-accent/20 text-accent">
                        Services
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        AI-Powered Services for <br />
                        <span className="text-white/70">Future-Driven Businesses</span>
                    </h2>

                    <p className="text-white max-w-2xl mx-auto mb-6">
                        Our cutting-edge AI solutions are designed to transform businesses,
                        enhance efficiency, and drive innovation.
                    </p>

                    <Button className="rounded-full bg-accent hover:bg-accent/90">
                        Book a 15-min call
                    </Button>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl  bg-white/6 backdrop-blur p-6 hover:border-accent/40 transition"
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/20 mb-4">
                                    <Icon className="w-5 h-5 text-accent" />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <p className="text-sm text-white/50 mb-3">
                                    {service.subtitle}
                                </p>
                                <p className="text-sm text-white/60 mb-6">
                                    {service.description}
                                </p>

                                {/* Image */}
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ section>
    );
}
