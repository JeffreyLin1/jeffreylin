"use client"

import Navigation from "../components/Navigation";

export default function Blogs() {
  return (
    <div className="w-full bg-[#faf9f5] font-serif min-h-screen">
      <section className="min-h-screen w-full flex flex-col items-center bg-[#faf9f5] relative overflow-hidden">
        <Navigation />

        <div className="flex-1 w-full flex items-center justify-center px-6">
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 text-center">
            (nothing to see here for now)
          </p>
        </div>
      </section>
    </div>
  );
}
