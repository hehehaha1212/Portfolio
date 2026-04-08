"use client";

import { useEffect, useState } from "react";
import Navbar from '@/components/nav';
import Footer from '@/components/Footer';
import FloatingShirt from '@/components/Floatingshirit';
import PortfolioGrid from '@/components/Projects';
import PortfolioGrid2 from '@/components/Projects copy';
import CustomLoader from '@/components/CustomLoader';

import dynamic from "next/dynamic";

const BookScene = dynamic(
  () => import("@/components/Book-Flip/BookScene"),
  { ssr: false }
);

export default function WorkPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#f0efeb] min-h-screen text-black">

      {/* FULL PAGE OVERLAY */}
      {loading && <CustomLoader />}

      <Navbar />

      <main className="max-w-6xl mx-auto py-40 px-6">
        <h1 className="text-3xl font-bold mb-4">Work_</h1>
        <p className="text-lg">
          Experienced in using advanced AI tools...
        </p>
      </main>

      <FloatingShirt />

      <section className="w-full h-screen bg-[#F0EFEB]">
        <BookScene />
      </section>

      <PortfolioGrid2 />
      <PortfolioGrid />

      <Footer />
    </div>
  );
}