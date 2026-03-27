import { Button } from "./ui/button";

export default function GlowContactForm() {
    return (
        <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

            {/* 🔥 Background Glow (TOP) */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-black to-black" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-accent/30 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-accent/20 text-accent text-sm">

                    {/* Glow wrapper */}
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-accent blur-lg opacity-70 rounded-full scale-125" />

                        {/* Actual pill */}
                        <span className="relative px-2 py-0.5 bg-accent rounded-full text-xs text-black">
                            24/7
                        </span>
                    </div>

                    Collaborate With Us
                </div>
                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                    Have Any Doubts? I <br />
                    <span className="text-white/70">am Ready to Help.</span>
                </h2>

                <p className="text-white/60 max-w-2xl mx-auto mb-6">
                    Whether you need support, or a fresh start, i am always
                    ready to assist you.
                </p>

                <Button className="rounded-full bg-accent text-black hover:opacity-90">
                    Fill The Form Out!
                </Button>
            </div>

            {/* Form Container */}
            <div className="relative max-w-5xl mx-auto">

                {/*  Glow Behind Form  */}
                <div className="absolute -inset-8 rounded-3xl bg-accent/30 blur-2xl opacity-90" />

                <div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-10">
                    <form className="space-y-6">

                        {/* Row 1 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-white/60">First name*</label>
                                <input
                                    placeholder="Jane"
                                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60">Last Name*</label>
                                <input
                                    placeholder="Smith"
                                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-white/60">How can we reach you?*</label>
                            <input
                                placeholder="jane@framer.com"
                                className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-white/60">Where Are you from?*</label>
                                <select className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white/60 focus:border-accent">
                                    <option>Select your country...</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-white/60">What's the type of your company?*</label>
                                <select className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none text-white/60 focus:border-accent">
                                    <option>Select category</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm text-white/60">Message*</label>
                            <textarea
                                rows={5}
                                placeholder="Type your message..."
                                className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
                            />
                        </div>

                        {/* Submit */}
                        <Button className="w-full rounded-full bg-accent text-black hover:opacity-90 py-4">
                            Submit Now
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
