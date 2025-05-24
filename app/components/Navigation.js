"use client"

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="absolute top-8 md:top-12 left-0 right-0 flex justify-center space-x-12 z-20">
      <Link href="/" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
        about
      </Link>
      <Link href="/projects" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
        projects
      </Link>
      <Link href="/experiences" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
        experiences
      </Link>
      <Link href="/resume" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
        resume
      </Link>
    </div>
  );
} 