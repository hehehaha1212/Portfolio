"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
    { image: "/carousel/A1.jpg", title: "Topps & Borussia Dortmund", desc: "A Bold New Era" },
    { image: "/carousel/A2.jpg", title: "TOTO Dutch Darts Masters", desc: "Biggest Tournament" },
    { image: "/carousel/AA-1.jpg", title: "Eredivisie", desc: "Match Ball 25/26" },
    { image: "/carousel/AA-2.jpg", title: "Topps", desc: "New Era" },
    { image: "/carousel/AA-3.jpg", title: "Eredivisie", desc: "Official Ball" },
    { image: "/carousel/AA-4.jpg", title: "Eredivisie", desc: "Official Ball" },
    { image: "/carousel/B-1.jpg", title: "Topps", desc: "Campaign" },
    { image: "/carousel/B-2.jpg", title: "Eredivisie", desc: "Launch" },
    { image: "/carousel/C-1.jpg", title: "Topps", desc: "Creative" },
    { image: "/carousel/C-2.jpg", title: "Eredivisie", desc: "Design" },
    { image: "/carousel/C-3.jpg", title: "Topps", desc: "Visuals" },
    { image: "/carousel/C-4.jpg", title: "Topps", desc: "Branding" },
];

export default function ContinuousCarousel() {
    const containerRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [translateX, setTranslateX] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    // duplicate slides for seamless loop
    const extendedSlides = [...slides, ...slides];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const rect = container.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!inView) return;

            e.preventDefault();

            // wheel direction: positive deltaY -> scroll down -> move content left
            const speed = 0.5; // px per wheel delta unit
            setTranslateX((prev) => prev - e.deltaY * speed);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel as any);
    }, []);

    // Keep loop by resetting translateX when it goes beyond one loop width
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const setInitial = () => {
            const total = track.scrollWidth;
            const single = total / 2;
            if (single > 0) {
                setIsResetting(true);
                setTranslateX(-single);
                requestAnimationFrame(() => setIsResetting(false));
            }
        };

        // wait one frame for layout
        requestAnimationFrame(setInitial);
    }, []);

    // On mount, position to middle loop so user can scroll both directions
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const total = track.scrollWidth;
        const single = total / 2;
        if (single > 0) setTranslateX(-single);
    }, []);

    // recompute on resize
    useEffect(() => {
        const onResize = () => {
            const track = trackRef.current;
            if (!track) return;
            const total = track.scrollWidth;
            const single = total / 2;
            // keep centered in middle loop after resize
            setTranslateX((t) => {
                // normalize into range [-single, 0)
                let nt = t;
                while (nt <= -single) nt += single;
                while (nt >= 0) nt -= single;
                return nt - single; // keep in middle
            });
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <section
            ref={containerRef}
            className="bg-[#f0efeb] h-[80vh] w-[80vw] mx-auto flex items-center overflow-hidden"
        >

            <div className="w-full mx-auto overflow-hidden relative"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}>
                <div
                    ref={trackRef}
                    className="flex gap-1 px-10 will-change-transform"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: isResetting ? "none" : "transform 80ms linear",


                    }}
                >


                    {extendedSlides.map((slide, i) => (
                        <div
                            key={i}
                            className="min-w-[320px] md:min-w-[400px] aspect-[4/5] relative rounded-xl overflow-hidden"
                        >

                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                draggable={false}
                            />


                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* text */}
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-lg md:text-xl font-semibold">
                                    {slide.title}
                                </h3>
                                <p className="text-white/70 text-sm">
                                    {slide.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}