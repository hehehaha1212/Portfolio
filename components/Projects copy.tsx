"use client";

const projects = [
    {
        title: "Topps & Manchester United",
        desc: "Hall of Heroes - A Monumental Tribute at Old Trafford",
        image:
            "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67d1c6a36ee550c98bfe0b71_TOPPS-MUFC-HALLOFHEROES-THUMB.jpg",
    },
    {
        title: "Ajax & Sandals Resorts",
        desc: "From fishing nets to football goals",
        image:
            "https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67b35f8b8c750d1507210b64_FG-THUMBNAIL-3X2.avif",
    },
];

export default function PortfolioList() {
    return (

        <section className="bg-[#f0efeb] py-16 px-4 md:px-6">
            <div className="max-w-[1600px] mx-auto">

                {/* Title */}
                <h2 className="text-lg font-semibold mb-6 text-black">
                    Recent work
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-[50%_40%] gap-4">

                    {/* LEFT (BIG) */}
                    <div>
                        <div className="overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67d1c6a36ee550c98bfe0b71_TOPPS-MUFC-HALLOFHEROES-THUMB.jpg"
                                className="w-full h-[500px] object-cover"
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="mt-3 flex justify-between items-start">
                            <div>
                                <h3 className="text-orange-500 font-semibold">
                                    Topps & Manchester United
                                </h3>
                                <p className="text-black/80 text-sm">
                                    Hall of Heroes - A Monumental Tribute at Old Trafford
                                </p>
                            </div>

                            <div className="text-xs text-black/40 text-right">
                                <div>Brand</div>
                                <div>Content</div>
                                <div>Product</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (SMALL) */}
                    <div>
                        <div className="overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/6776815c172cb3537fafa18b/67b35f8b8c750d1507210b64_FG-THUMBNAIL-3X2.avif"
                                className="w-full h-[320px] object-cover"
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="mt-3 flex justify-between items-start">
                            <div>
                                <h3 className="text-orange-500 font-semibold">
                                    Ajax & Sandals Resorts
                                </h3>
                                <p className="text-black/80 text-sm">
                                    From fishing nets to football goals
                                </p>
                            </div>

                            <div className="text-xs text-black/40 text-right">
                                <div>Brand</div>
                                <div>Content</div>
                                <div>Product</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
