import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";

const projects = [
    {
        year: "2024",
        title: "Lemonide Tech",
        tags: ["AI Integration", "Responsive Design", "Fast Loading"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
        color: "from-blue-900/40",
    },
    {
        year: "2023",
        title: "Nova Branding",
        tags: ["Brand Identity", "Motion Design", "Print"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
        color: "from-blue-900/40",
    },
    {
        year: "2023",
        title: "Vertex Studio",
        tags: ["UI/UX", "3D Renders", "Video Edit"],
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
        color: "from-blue-900/40",
    },
];

const StackCard = ({ project, index, total, scrollYProgress }) => {
    const cardStart = index / total;
    const cardEnd = (index + 1) / total;

    const y = useTransform(scrollYProgress, [cardStart - 0.1, cardStart + 0.2], ["80%", "0%"]);
    const opacity = useTransform(scrollYProgress, [cardStart - 0.05, cardStart + 0.15], [0, 1]);
    const scale = useTransform(scrollYProgress, [cardEnd - 0.05, cardEnd + 0.15], [1, 0.96]);
    const yPush = useTransform(scrollYProgress, [cardEnd - 0.05, cardEnd + 0.15], ["0%", "-3%"]);

    return (
        <motion.div
            style={{
                y: index === 0 ? yPush : useTransform(
                    scrollYProgress,
                    [cardStart - 0.1, cardStart + 0.2, cardEnd - 0.05, cardEnd + 0.15],
                    ["80%", "0%", "0%", "-3%"]
                ),
                scale: index === 0 ? scale : useTransform(
                    scrollYProgress,
                    [cardStart - 0.1, cardStart + 0.2, cardEnd - 0.05, cardEnd + 0.15],
                    [1, 1, 1, 0.96]
                ),
                opacity: index === 0 ? 1 : opacity,
                zIndex: index + 1,
            }}
            className="absolute inset-x-0"
        >
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-black" style={{ minHeight: 340 }}>
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} to-transparent opacity-60 pointer-events-none`} />
                <div className="grid grid-cols-2 gap-0 h-full relative z-10">
                    <div className="p-8 flex flex-col justify-between" style={{ minHeight: 340 }}>
                        <div>
                            <div className="text-xs text-accent-20 mb-2 uppercase tracking-widest">{project.year}</div>
                            <h3 className="text-2xl font-semibold text-white mb-6">{project.title}</h3>
                            <ul className="space-y-2">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="flex items-center gap-2 text-sm text-white/60">
                                        <span className="text-accent-20">✔</span> {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button size="sm" className="mt-6 rounded-full bg-accent-30 hover:bg-purple-600 text-purple-200 border border-purple-500/30 w-fit">
                            View project →
                        </Button>
                    </div>
                    <div className="overflow-hidden" style={{ minHeight: 340 }}>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ minHeight: 340 }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Dot = ({ i, total, scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [Math.max(0, i / total - 0.05), i / total + 0.15], [0.3, 1]);
    const width = useTransform(scrollYProgress, [Math.max(0, i / total - 0.05), i / total + 0.15], ["8px", "24px"]);
    return <motion.div style={{ opacity, width }} className="h-2 rounded-full bg-accent-20" />;
};

export default function PortfolioLayered() {
    const ref = useRef(null);
    const total = projects.length;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={ref} className="relative bg-black text-white flex justify-center" style={{ height: `${(total + 1) * 100}vh` }}>

            <div className="w-[70%] relative">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                    
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-accent-20 via-black to-black" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent-30 blur-[100px] rounded-full" />
                    </div>
                    <div className="relative z-0 text-center mb-16 px-4">
                        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-accent/20 text-accent text-sm">Portfolio</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Showcasing My Best Work <br />
                            <span className="text-white/40">with Pure Precision.</span>
                        </h2>
                        <p className="text-white/40 max-w-md mx-auto text-base">
                            A portfolio is more than just projects — it's stories, vision, and expertise.
                        </p>
                    </div>
                    <div className="relative w-full" style={{ height: 340 }}>
                        {projects.map((project, i) => (
                            <StackCard key={i} project={project} index={i} total={total} scrollYProgress={scrollYProgress} />
                        ))}
                    </div>
                    <div className="flex gap-2 mt-6 relative z-10">
                        {projects.map((_, i) => (
                            <Dot key={i} i={i} total={total} scrollYProgress={scrollYProgress} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}