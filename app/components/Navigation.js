"use client"

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="absolute top-6 md:top-12 left-0 right-0 flex justify-center space-x-4 sm:space-x-8 md:space-x-12 z-20 px-4">
      <Link href="/" className="text-lg sm:text-xl md:text-2xl text-slate-700 border-b border-slate-700 hover:border-transparent font-serif">
        about
      </Link>
      <Link href="/projects" className="text-lg sm:text-xl md:text-2xl text-slate-700 border-b border-slate-700 hover:border-transparent font-serif">
        projects
      </Link>
      <Link href="/experiences" className="text-lg sm:text-xl md:text-2xl text-slate-700 border-b border-slate-700 hover:border-transparent font-serif">
        experiences
      </Link>
    </div>
  );
} 