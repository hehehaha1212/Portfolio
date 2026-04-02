"use client";

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
        <BookScene />

      <PortfolioGrid2 />
      <PortfolioGrid />

      <Footer />
    </div>
  );
}