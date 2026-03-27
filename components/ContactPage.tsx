import { Button } from "./ui/button";

export default function ContactSection() {
    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-sm">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Let's Connect
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Let's Collaborate and <br />
                        <span className="text-white/60">Begin the work</span>
                    </h2>

                    <div className="h-px bg-white/10 mb-8" />

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {[
                            { value: "100+", label: "Happy clients" },
                            { value: "10 Lakh+", label: "Revenue added" },
                            { value: "4.8", label: "Average Rating" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                            >
                                <div className="text-2xl font-semibold">{item.value}</div>
                                <div className="text-sm text-white/50">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS383949.jpg"
                                className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                                <div className="font-semibold">Ryan harper</div>
                                <div className="text-sm text-white/50">COLD BREW TECH PVT LTD</div>
                            </div>
                        </div>

                        <div className="text-yellow-400 mb-3">★★★★★</div>

                        <p className="text-white/60 text-sm">
                            Using his service has been a game-changer for our team.
                            The seamless work and actionable insights made us realize that he was the right choice.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="text-lg">Prefer to book a call ?</div>
                        <Button className="rounded-full bg-white text-black hover:bg-white/80">
                            Let's Book A Call
                        </Button>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <form className="space-y-6">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                placeholder="Your Name"
                                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none"
                            />
                            <input
                                placeholder="Your Email"
                                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <input
                            placeholder="Company Website"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none"
                        />

                        <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none text-white/60">
                            <option>Select Budget...</option>
                            <option>$500 - $1k</option>
                            <option>$1k - $3k</option>
                            <option>$3k+</option>
                        </select>

                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none"
                        />

                        <Button className="w-full rounded-full bg-white text-black hover:bg-white/80 py-3">
                            Send Message
                        </Button>

                        <p className="text-center text-sm text-white/40">
                            (I will reach out to you within 48hrs )
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
