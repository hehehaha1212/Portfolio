import { Button } from "./ui/button";

const images = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
  
];

export default function SupportHero() {
  return (
    <section className="relative pb-30 px-4 text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black" />

        {/* Purple glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-accent/30 blur-[140px] rounded-full" />

        {/* Godrays */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(120deg,transparent,rgba(168,85,247,0.2),transparent)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-accent/20 text-accent text-sm">
          <span className="w-2 h-2 rounded-full bg-accent" />
          24/7 Support
        </div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Here When You <br />
          <span className="text-white/60">Need Us Most.</span>
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-8">
          Nubien comes with dedicated support to help you launch and maintain
          your site without friction.
        </p>

        <Button className="rounded-full bg-accent hover:bg-accent/90 text-white">
          View About Reboot
        </Button>
      </div>

      {/* Floating cards */}
      <div className="relative mt-20 flex justify-center items-end gap-[-60px]">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-40 h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              transform: `rotate(${(i - 3) * 6}deg) translateY(${Math.abs(i - 3) * 10}px)`,
              zIndex: i,
            }}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              alt="card"
            />
          </div>
        ))}
      </div>

      {/* Chat bubbles */}
      <div className="absolute left-[20%] bottom-[310px] bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-lg rotate-[-10deg]">
       Very attractive graphics
      </div>

      <div className="absolute right-[20%] bottom-[330px] bg-accent text-white text-sm px-4 py-2 rounded-full shadow-lg rotate-[10deg]">
        Loved the work !!
      </div>
    </section>
  );
}
