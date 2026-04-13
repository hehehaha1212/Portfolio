/*
  app/work/page.tsx
  - Work/portfolio route. Shows project grids and includes the interactive
    BookScene demo (loaded client-side only).
*/
"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from '@/components/nav';
import Footer from '@/components/Footer';
import FloatingShirt from '@/components/Floatingshirit';
import PortfolioGrid from '@/components/Projects';
import PortfolioGrid2 from '@/components/Projects copy';

import dynamic from "next/dynamic";

const BookScene = dynamic(
  () => import("@/components/Book-Flip/BookScene"),
  { ssr: false }
);

export default function WorkPage() {
  const bookSectionRef = useRef<HTMLElement | null>(null);
  const [shouldRenderBook, setShouldRenderBook] = useState(false);

  useEffect(() => {
    const section = bookSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        // Delay only this section's heavy 3D mount.
        window.setTimeout(() => setShouldRenderBook(true), 700);
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f0efeb] min-h-screen text-black">
      <Navbar />

      <main className="max-w-6xl mx-auto py-40 px-6">
        <h1 className="text-3xl font-bold mb-4">Work_</h1>
        <p className="text-lg">
          Experienced in using advanced AI tools...
        </p>
      </main>

      <FloatingShirt />
      <section ref={bookSectionRef} className="w-half h-screen bg-[#F0EFEB]">
        {shouldRenderBook ? (
          <BookScene />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-black/20 border-t-black" />
              <p className="text-sm tracking-wide text-black/70">Loading book animation...</p>
            </div>
          </div>
        )}
      </section>
      <PortfolioGrid2 />
      <PortfolioGrid />

      <Footer />
    </div>
  );
}