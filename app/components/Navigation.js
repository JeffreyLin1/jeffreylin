"use client"

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="absolute top-6 md:top-12 left-0 right-0 flex justify-center space-x-4 sm:space-x-8 md:space-x-12 z-20 px-4">
      <Link href="/" prefetch={true} className="nav-link text-lg sm:text-xl md:text-2xl text-stone-700 font-serif relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">
        about
      </Link>
      <Link href="/projects" prefetch={true} className="nav-link text-lg sm:text-xl md:text-2xl text-stone-700 font-serif relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">
        projects
      </Link>
      <Link href="/experiences" prefetch={true} className="nav-link text-lg sm:text-xl md:text-2xl text-stone-700 font-serif relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">
        experiences
      </Link>
      <Link href="/blogs" prefetch={true} className="nav-link text-lg sm:text-xl md:text-2xl text-stone-700 font-serif relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">
        blogs
      </Link>
    </div>
  );
} 
