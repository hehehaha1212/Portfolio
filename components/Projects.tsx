"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/679ce8b0dab821e2cc27f833_Topps%20Teamset%20BVB%20Thumbnail%202.avif",
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67b35aaa9d809896b6663b61_TDDM-THUMBNAIL-3X2.avif",
        tall: true,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/68bd4585f8aba8d4a1f0d227_EREDIVISIE-GLOBALL-THUMBNAIL-p-1600.webp",
    },
     {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/679ce8b0dab821e2cc27f833_Topps%20Teamset%20BVB%20Thumbnail%202.avif",
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67b35aaa9d809896b6663b61_TDDM-THUMBNAIL-3X2.avif",
        tall: true,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/68bd4585f8aba8d4a1f0d227_EREDIVISIE-GLOBALL-THUMBNAIL-p-1600.webp",
    },
     {
        title: "Topps & Borussia Dortmund",
        desc: "A Bold New Era for Borussia Dortmund's Teamset",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/679ce8b0dab821e2cc27f833_Topps%20Teamset%20BVB%20Thumbnail%202.avif",
    },
    {
        title: "TOTO Dutch Darts Masters",
        desc: "Bringing the Netherland's Biggest Darts Tournament to Life",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67b35aaa9d809896b6663b61_TDDM-THUMBNAIL-3X2.avif",
        tall: true,
    },
    {
        title: "Eredivisie",
        desc: "Official Match Ball 2025/2026",
        image: "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/68bd4585f8aba8d4a1f0d227_EREDIVISIE-GLOBALL-THUMBNAIL-p-1600.webp",
    },

];

function Card({ project }) {
    return (
        <div
            className={`group relative overflow-hidden h-full ${project.tall ? "row-span-2" : ""
                }`}
        >
            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
            />


            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="overflow-hidden">
                    <div className="text-orange-400 font-semibold text-lg">
                        {project.title}
                    </div>
                </div>

                <p className="text-white/80 text-sm">{project.desc}</p>
            </div>
            {/* Content below image */}
            <div className="p-4 bg-transparent ">
                <div className="overflow-hidden">
                    <div className="text-black font-semibold text-lg">
                        {project.title}
                    </div>
                </div>

                <p className="text-black/70 text-sm mt-1">{project.desc}</p>
            </div>
        </div>
    );
}

export default function PortfolioGrid() {
    return (
        <section className="bg-[#f0efeb] py-20 px-2 md:px-4">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[260px]">
                {projects.map((project, i) => (
                    <Card key={i} project={project} />
                ))}
            </div>
        </section>
    );
}
