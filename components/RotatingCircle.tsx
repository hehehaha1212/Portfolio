
import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Button } from "./ui/button";
const portfolioImages = [
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042698/Sunday_post_lirgpq.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/Sat_post_z94gn3.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1768417394/Clue-dicode_vyetsa.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767043239/DAY_2_POST_2_quskbx.jpg",
    "https://framerusercontent.com/images/AiNn1Q8eMnTVvy7xlvhRMelvUQw.png",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767043238/Design_021_khfebh.jpg",

    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/post1_010_z5cp0z.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/App_Coding_Pro_1_xblfw9.jpg",

    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/Bollywood_night_rzluuf.png",

    " https://res.cloudinary.com/dod1dviie/image/upload/v1767042698/Sunday_post_lirgpq.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/Sat_post_z94gn3.jpg",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/Day-1_maisata_bg_final_esdmqk.jpg  ",
    "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/Assignement_3_gez16c.png",

];

const RADIUS = 500;
const CARD_W = 150;
const CARD_H = 150;
const TOTAL = portfolioImages.length;

const RotatingCircle = () => {
    const angleRef = useRef(0);
    const groupRef = useRef(null);

    useAnimationFrame((_, delta) => {
        angleRef.current += delta * 0.009; // degrees per ms
        if (groupRef.current) {
            groupRef.current.style.transform = `rotate(${angleRef.current}deg)`;
        }
    });

    return (
        <section className="relative p-50 mw-full overflow-hidden bg-black"
            style={{ minHeight: "100vh" }}
        >
            {/* Background light rays */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://framerusercontent.com/images/HQiQT243MN1itZOX771FxR6euwI.png')",
                }}
            />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-180 bg-gradient-to-t from-black via-black to-transparent z-10" />

            {/* Rotating ring */}
            <div
                className="absolute"
                style={{
                    top: "50%",
                    left: "50%",
                    width: RADIUS * 2,
                    height: RADIUS * 2,
                    marginTop: -(RADIUS),
                    marginLeft: -(RADIUS),
                }}
            >
                <div
                    ref={groupRef}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    {portfolioImages.map((src, i) => {
                        const angleDeg = (i / TOTAL) * 360;
                        const angleRad = (angleDeg * Math.PI) / 180;
                        const x = RADIUS + Math.cos(angleRad) * RADIUS - CARD_W / 2;
                        const y = RADIUS + Math.sin(angleRad) * RADIUS - CARD_H / 2;

                        return (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: x,
                                    top: y,
                                    width: CARD_W,
                                    height: CARD_H,
                                    // Counter-rotate each card so images stay upright
                                    transform: `rotate(${-angleDeg}deg)`,
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    background: "rgb(8,8,8)",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                                }}
                            >
                                {/* Inner gradient overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.15) 100%)",
                                        zIndex: 1,
                                        borderRadius: "inherit",
                                    }}
                                />
                                <img
                                    src={src}
                                    alt={`work-${i}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Center content */}
            <div
                className="relative z-20 flex flex-col items-center justify-start text-center mt-70 pt-52"
                style={{ minHeight: "100vh", padding: "0 1rem" }}
            >
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4  rounded-full mb-6"
                    style={{
                        background: "linear-gradient(0deg, rgba(0,85,255,0.08) 0%, rgba(153,153,153,0.1) 100%)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}
                >
                    <span
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                            background: "linear-gradient(180deg, rgba(26, 82, 214, 1) 0%, rgba(89, 146, 227, 1) 100%)",
                        }}
                    >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1L6.5 3.5H9L7 5.5L7.5 8.5L5 7L2.5 8.5L3 5.5L1 3.5H3.5L5 1Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span className="text-sm text-white/80">Works</span>
                </div>

                {/* Heading */}
                <h2
                    className="text-white font-medium mb-4"
                    style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1, letterSpacing: "-1px" }}
                >
                    Packed with Innovation.
                </h2>

                {/* Subtext */}
                <p className="text-white/50 text-base max-w-sm mb-8">
                    Here are some of my work on graphic designing, each trying to convay some story
                </p>

                {/* CTA */}
                <Button
                    size="lg"
                    style={{
                        background: "linear-gradient(180deg, rgba(26, 85, 214, 1) 0%, rgba(89, 133, 227, 1) 100%)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: 10,
                        color: "white",
                        padding: "0 28px",
                        height: 48,
                    }}
                >
                    Contact me
                </Button>
                <div className="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {[
                        { title: "Design", desc: "Clean and modern Engaging animations & visuals" },
                        { title: "Merchandise", desc: "Modern and Colorful products" },
                        { title: "Branding", desc: "Identity that tells a story" },
                        { title: "Editing", desc: "High-quality video production" },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="rounded-xl p-5 text-left backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <h3 className="text-white text-lg font-medium mb-2">
                                {card.title}
                            </h3>
                            <p className="text-white/50 text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RotatingCircle;