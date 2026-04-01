import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

<<<<<<< HEAD

=======
const RotatingCircle = dynamic(() => import("@/components/RotatingCircle"), {
  ssr: false,
});
>>>>>>> 8f396a2 (error resolved)
const images = [
    "photoshop.svg",
    "after.png",
    "erasebg-transformed.png",
    "canva.webp",
    "pro.png",
    "higgs.png"



];

const text = "Hey there, I am a pre-final year undergrad student, and I create compelling visual stories and design intuitive user experiences that engage and inspire.";

// ── Isolated component so hooks are called at top level ──
const AnimatedChar = ({ char, index, total, scrollYProgress }) => {
    const start = (index / total) * 0.8;        // spread across 0→0.6 of scroll range
    const end = start + 0.15;                    // each char transitions over 0.15

    const color = useTransform(scrollYProgress, [start, end], ["#444444", "#ffffff"]);

    return (
        <motion.span style={{ color }}>
            {char}
        </motion.span>
    );
};

const Hero = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    // Scroll progress scoped to the text element:
    // starts when text enters viewport bottom, ends when text hits mid-screen
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "center center"],   // start=enters viewport, end=hits midscreen
    });

    const chars = text.split("");

    return (
        <section ref={sectionRef} className="pt-32 pb-0 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-11 mb-0">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900 border border-border">
                        <span className="text-small text-white rounded-md"> 2026 </span>
                        <span className="text-sm text-accent"> Next-Gen AI Studio</span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-0 mb-0 tracking-tight text-pretty leading-tight hero-h3">
                       SURYANSH SRIVASTAVA
                    </h3>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-pretty leading-tight hero-h1">
                        Graphic Designer
                        <span className="text-accent"> & Video editor</span>
                    </h1>

                    {/* Paragraph */}
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto hero-lead">
                        Harnessing the power of artificial intelligence to revolutionize
                        industries and enhance human experiences.
                    </p>

                    {/* Background section */}
                    <div
                        className="relative w-full bg-cover bg-center rounded-xl overflow-hidden mt-2"
                        style={{
                            backgroundImage:
                                "url('https://framerusercontent.com/images/jzTMdaQ6X2Js2yDQdPP9o3L3XUA.png')",
                            minHeight: "380px",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                        <div className="relative z-10 flex flex-col items-center gap-4 pt-12 pb-6">

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <Button size="lg">Appointment</Button>
                                <Button
                                    size="lg"
                                    className="hidden sm:inline-flex bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-black"
                                >
                                    Contact me
                                    <ArrowRight className="w-5 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Divider */}
                            <div className="flex justify-center my-6 w-[60vw]">
                                <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
                            </div>

                            {/* Image strip */}
                            <div
                                className="relative w-[700px] overflow-fit mt-2"
                                style={{
                                    maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
                                    WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
                                }}
                            >
                                <div className="flex gap-3 animate-marquee w-max">
                                    {[...images, ...images].map((src, i) => (
                                        <div
                                            key={i}
                                            className="flex-shrink-0 w-40 h-16 rounded-lg overflow-hidden border border-white/10"
                                        >
                                            <img
                                                src={src}
                                                alt={`work-${i}`}
                                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900 border border-border">
                        <span className="text-small text-white bg-white rounded-full">_-   </span>
                        <span className="text-lg text-accent">  About me</span>
                    </div>
                </div>



                {/* ── Scroll reveal text ── */}
                <h1
                    ref={textRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-tight mt-20 hero-h1"
                >
                    {chars.map((char, i) => (
                        <AnimatedChar
                            key={i}
                            char={char}
                            index={i}
                            total={chars.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </h1>
                <RotatingCircle />

            </div>

            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;