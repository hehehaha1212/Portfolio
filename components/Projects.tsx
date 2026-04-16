"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042698/Sunday_post_lirgpq.jpg",
        size: 1.0,
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/Sat_post_z94gn3.jpg",
        size: 1.2,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/Day-1_maisata_bg_final_esdmqk.jpg",
        size: 0.9,
    },
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/asbvduik_n5ag3j.jpg",
        size: 1.1,
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042699/post1_010_z5cp0z.jpg",
        size: 1.1,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/Bollywood_night_rzluuf.png",
        size: 1,
    },
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/App_Coding_Pro_1_xblfw9.jpg",
        size: 1.05,
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767042700/Assignement_3_gez16c.png",
        size: 0.9,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767043239/DAY_2_POST_2_quskbx.jpg",
        size: 1.1,
    },
];

const banner = [
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767041383/main_gate_flex_fkbvao.jpg",
    },
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767041953/Screenshot_2025-12-30-02-24-25-17_99c04817c0de5652397fc8b56c3b3817_lhkslb.jpg",
    },
];

// Size maps to vertical scale via padding-bottom trick (aspect ratio control)
const sizeToAspect = {
    0.8:  "125%",  // taller
    0.85: "120%",
    0.9:  "115%",
    1.0:  "100%",  // square-ish
    1.05: "95%",
    1.1:  "90%",
    1.15: "87%",
    1.2:  "83%",   // wider feel
};

function Card({ project }) {
    const aspectPadding = sizeToAspect[project.size] ?? "100%";

    return (
        <div className="group flex flex-col">
            <div
                className="w-full overflow-hidden rounded-lg relative"
                style={{ paddingBottom: aspectPadding }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="px-1 mt-2">
                <h3 className="text-orange-600 font-semibold text-base leading-tight">
                    {project.title}
                </h3>
                <p className="text-black/70 text-sm mt-0.5">
                    {project.desc}
                </p>
            </div>
        </div>
    );
}

function BannerCard({ item }) {
    return (
        <div className="group flex flex-col">
            <div className="w-full overflow-hidden rounded-lg relative" style={{ paddingBottom: "56.25%" }}>
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="px-1 mt-2">
                <h3 className="text-orange-600 font-semibold text-lg">
                    {item.title}
                </h3>
                <p className="text-black/70 text-sm">
                    {item.desc}
                </p>
            </div>
        </div>
    );
}

export default function PortfolioGrid() {
    return (
        <section className=" max-w-7xl mx-auto w-full px-4 py-20 px-2 md:px-4 space-y-10">
            {/* Cards — 4 per row, varied aspect ratios */}
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-5 items-start">
                {projects.map((project, i) => (
                    <Card key={i} project={project} />
                ))}
            </div>

            {/* Banners — 2 per row, full width split equally, 16:9 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {banner.map((item, i) => (
                    <BannerCard key={i} item={item} />
                ))}
            </div>
        </section>
    );
}