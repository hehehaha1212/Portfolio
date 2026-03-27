import { Button } from "./ui/button";
import { Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10">
            <span className="w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]"></span>
            <span className="text-sm text-white/80">Video Editor · Graphic Designer</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            I am Suryansh Srivastava <br />
            <span className="text-white/60">Creative designer</span>
          </h2>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6 w-full" />

          {/* Section 1 */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              About me
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              I’m Suryansh Srivastava, a passionate visual storyteller and motion designer. I believe every frame tells a story and every design speaks a language. Through work with university societies and freelancing for multiple clients, I transform ideas into compelling visual narratives—from engaging social media content to merchandise designs people love to wear—blending creativity with technical excellence.AI-Assisted Video Production:
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-2">
              Faster with AI
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
                Experienced in using advanced AI tools such as Higgsfield AI, Flow AI, Kling AI, ChatGPT Go, and Nano Banana (Gemini) for ideation, scripting, visual generation, and workflow optimization in video editing projects.
            </p>
          </div>

          {/* CTA + Rating */}
          <div className="flex items-center gap-6">
            <Button className="rounded-full px-6 py-5 bg-accent text-white hover:opacity-90 shadow-[0_10px_40px_var(--accent)]">
              Book an Appointment
            </Button>

            <div className="flex flex-col">
              <div className="flex text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="white" />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                200+ Industry clients
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-3xl opacity-70" />

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://portfolio-suryansh-kappa.vercel.app/me.jpg"
              alt="team working"
              className="w-full h-[40vw] object-cover object-top"
            />
          </div>

          {/* Floating dot */}
          <div className="absolute right-4 top-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
        </div>

      </div>
    </section>
  );
}