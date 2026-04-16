"use client";

const projects = [
    {
        title: "Topps & Manchester United",
        desc: "Hall of Heroes - A Monumental Tribute at Old Trafford",
        image:
            "https://res.cloudinary.com/dod1dviie/image/upload/v1767041383/main_gate_flex_fkbvao.jpg",
    },
    {
        title: "Ajax & Sandals Resorts",
        desc: "From fishing nets to football goals",
        image:
            "https://res.cloudinary.com/dod1dviie/image/upload/v1767041953/Screenshot_2025-12-30-02-24-25-17_99c04817c0de5652397fc8b56c3b3817_lhkslb.jpg",
    },
];

export default function PortfolioList(projects) {
    return (

        <section className="bg-[#f0efeb] py-16 px-4 md:px-6">
            <div className="max-w-8xl mx-auto w-full">

                {/* Title */}
                <h2 className="text-lg font-semibold mx0 mb-6 text-black">
                    Recent work
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">

                    {/* LEFT (BIG) */}
                    <div>
                        <div className="overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dod1dviie/image/upload/v1767041383/main_gate_flex_fkbvao.jpg"
                                className="w-full h-full object-cover rounded rounded-sm"
                                alt=""
                                loading="lazy"
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
                                src="https://res.cloudinary.com/dod1dviie/image/upload/v1767041953/Screenshot_2025-12-30-02-24-25-17_99c04817c0de5652397fc8b56c3b3817_lhkslb.jpg"
                                className="w-full h-full object-cover rounded rounded-sm"
                                alt=""
                                loading="lazy"
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
