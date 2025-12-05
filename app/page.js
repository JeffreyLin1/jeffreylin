"use client"

import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {


  return (
    <div className="w-full bg-[#faf9f5] font-serif">
      {/* Main Hero Section - Bold Introduction */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-[#faf9f5] relative overflow-hidden">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="w-full flex justify-center">
          <div className="max-w-7xl lg:max-w-[95rem] xl:max-w-[110rem] px-4 sm:px-8 lg:px-16 py-6 sm:py-12 pt-4 sm:pt-20 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 z-10">
          
          {/* Profile Image - shown on top for mobile, on left for desktop */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className={`relative w-auto h-auto overflow-visible`}>
              <div className="absolute -inset-2 bg-[#f3ede1] rounded-full blur-xl opacity-80 z-0"></div>
              <div className="relative z-10">
                <div className="relative w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] rounded-full overflow-hidden">
                  <Image 
                    src="/jeffrey7.png" 
                    alt="Jeffrey Lin" 
                    width={800} 
                    height={1000}
                    className="w-full h-full object-cover drop-shadow-md"
                    style={{ filter: 'saturate(1.25)' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content - adjusted for better centering */}
          <div className="flex-1 flex flex-col items-center md:items-start md:justify-center max-w-4xl">
            {/* More approachable greeting - FURTHER INCREASED SIZE */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-2 sm:mb-4 text-stone-800 tracking-tight text-center md:text-left font-serif`}>
              <span className="relative">
                hi! i'm jeffrey.
                <span 
                  className="absolute -top-7 right-36 sm:top-[-40px] sm:left-[145px] sm:right-auto"
                >
                  <Image
                    src="/sleepycat.gif"
                    alt="Sleepy Cat"
                    width={90}
                    height={90}
                    className="object-contain w-16 h-16 sm:w-[90px] sm:h-[90px]"
                  />
                </span>
              </span>
            </h1>
            
            {/* Summary about education and internship */}
            <p className={`text-md sm:text-lg md:text-xl text-stone-600 text-center md:text-left font-serif`}>
              SYDE @ UWaterloo
            </p>
            <p className={`text-md sm:text-lg md:text-xl mb-3 sm:mb-6 text-stone-600 text-center md:text-left font-serif`}>
              SWE intern @ Shopify
            </p>
            <div className="w-full md:w-auto flex flex-col items-center md:items-start">
              <p className={`text-lg sm:text-xl md:text-2xl text-stone-700 text-center md:text-left font-serif w-full md:w-auto`}>
                About me:
              </p>
              <div className="w-full max-w-xs md:max-w-none md:w-auto flex flex-col px-4 md:px-0">
                <p className={`text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif`}>
                  - Scaled a project to $1k MRR
                </p>
                <p className={`text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif`}>
                  - Sold a diff project to a YC startup
                </p>
                <p className={`text-lg sm:text-xl md:text-2xl mb-3 sm:mb-6 text-stone-700 text-left font-serif`}>
                  - SWE @ YC startup that got acquired
                </p>
              </div>
            </div>
            <p className={`text-lg sm:text-xl md:text-2xl text-stone-700 text-center md:text-left font-serif`}>
              See my <Link href="/projects" className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">projects</Link> or <Link href="/experiences" className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-0">experiences</Link>
            </p>
            <p className={`text-lg sm:text-xl md:text-2xl text-stone-700 text-center md:text-left font-serif`}>
              
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-5 text-stone-700">
              <a href="http://github.com/JeffreyLin1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-stone-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.95 7.52 10.4.55.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.06.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.6-1.23-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.9.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.5.22 2.62.11 2.9.7.77 1.13 1.75 1.13 2.95 0 4.22-2.56 5.15-5 5.43.39.33.75.98.75 1.98 0 1.43-.01 2.57-.01 2.92 0 .3.2.65.77.54 4.36-1.45 7.51-5.55 7.51-10.4C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jeffreyllin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-stone-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V23h-4V8z"/>
                </svg>
              </a>
              <a href="https://x.com/jeeffreyLin" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-stone-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.244 2H21.5l-7.61 8.7L23.5 22h-7.3l-5.72-6.68L3.5 22H.243l8.15-9.32L.5 2h7.42l5.18 6.02L18.244 2Zm-1.28 18h2.02L7.11 4h-2.1l12.955 16Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}
