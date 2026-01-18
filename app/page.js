"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

// Component for text chunks that fade in
function StreamingText({ children, delay, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export default function Home() {
  // Base delay between chunks (ms)
  const baseDelay = 80;
  let chunkIndex = 0;

  // Helper to get incrementing delay
  const getDelay = (chunks = 1) => {
    const delay = chunkIndex * baseDelay;
    chunkIndex += chunks;
    return delay;
  };

  return (
    <div className="w-full bg-[#faf9f5] font-serif">
      {/* Main Hero Section - Bold Introduction */}
      <section className="min-h-screen w-full flex flex-col items-center bg-[#faf9f5] relative overflow-hidden">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="w-full flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-16">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
            
            {/* Left side - drawJeffrey image */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/drawJeffrey.png"
                alt="Drawing of Jeffrey"
                width={320}
                height={400}
                className="w-64 lg:w-64 h-auto"
                priority
              />
            </div>

            {/* Right side - Text content */}
            <div className="flex flex-col items-start">
              {/* More approachable greeting */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4 text-stone-800 tracking-tight text-left font-serif">
                <StreamingText delay={getDelay()}>hi! </StreamingText>
                <StreamingText delay={getDelay()}>i'm </StreamingText>
                <StreamingText delay={getDelay()}>jeffrey.</StreamingText>
              </h1>
              
              {/* Summary about education and internship */}
              <p className="text-md sm:text-lg md:text-xl mb-3 sm:mb-6 text-stone-600 text-left font-serif flex items-center">
                <StreamingText delay={getDelay()}>SYDE</StreamingText>
                <StreamingText delay={getDelay()}>
                  <Image src="/University_of_Waterloo_seal.svg" alt="UWaterloo" width={20} height={20} className="inline-block ml-2 mr-1 align-middle -mt-1" />
                </StreamingText>
                <StreamingText delay={getDelay()}>UWaterloo</StreamingText>
              </p>
              
              <div className="w-full flex flex-col items-start">
                <p className="text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif w-full">
                  <StreamingText delay={getDelay()}>Career </StreamingText>
                  <StreamingText delay={getDelay()}>Highlights: </StreamingText>
                </p>
                <div className="w-full flex flex-col">
                  <p className="text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif">
                    <StreamingText delay={getDelay()}>- </StreamingText>
                    <StreamingText delay={getDelay()}>Scaled </StreamingText>
                    <StreamingText delay={getDelay()}>a SaaS </StreamingText>
                    <StreamingText delay={getDelay()}>to $1k MRR </StreamingText>
                    <StreamingText delay={getDelay()}>then sold it</StreamingText>
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif">
                    <StreamingText delay={getDelay()}>- </StreamingText>
                    <StreamingText delay={getDelay()}>Sold </StreamingText>
                    <StreamingText delay={getDelay()}>a viral side project </StreamingText>
                    <StreamingText delay={getDelay()}>to a YC startup</StreamingText>
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-stone-700 text-left font-serif flex items-center flex-wrap">
                    <StreamingText delay={getDelay()}>- </StreamingText>
                    <StreamingText delay={getDelay()}>SWE </StreamingText>
                    <StreamingText delay={getDelay()}>
                      <Image src="/noon.png" alt="Agentnoon" width={22} height={22} className="inline-block ml-2 mr-1 align-middle -mt-1" />
                    </StreamingText>
                    <StreamingText delay={getDelay()}>Agentnoon (YC W22, acq by Dayforce)  </StreamingText>
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-6 text-stone-700 text-left font-serif flex items-center">
                    <StreamingText delay={getDelay()}>- </StreamingText>
                    <StreamingText delay={getDelay()}>SWE </StreamingText>
                    <StreamingText delay={getDelay()}>
                      <Image src="/shopify.png" alt="Shopify" width={22} height={22} className="inline-block ml-2 mr-1 align-middle -mt-1" />
                    </StreamingText>
                    <StreamingText delay={getDelay()}>Shopify</StreamingText>
                  </p>
                </div>
              </div>
              {/* Social icons */}
              <div className="mt-4 flex items-center gap-5 text-stone-700">
                <StreamingText delay={getDelay()}>
                  <a href="http://github.com/JeffreyLin1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-stone-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.95 7.52 10.4.55.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.06.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.6-1.23-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.9.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.5.22 2.62.11 2.9.7.77 1.13 1.75 1.13 2.95 0 4.22-2.56 5.15-5 5.43.39.33.75.98.75 1.98 0 1.43-.01 2.57-.01 2.92 0 .3.2.65.77.54 4.36-1.45 7.51-5.55 7.51-10.4C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </StreamingText>
                <StreamingText delay={getDelay()}>
                  <a href="https://www.linkedin.com/in/jeffreyllin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-stone-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V23h-4V8z"/>
                    </svg>
                  </a>
                </StreamingText>
                <StreamingText delay={getDelay()}>
                  <a href="https://x.com/jeeffreyLin" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-stone-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M18.244 2H21.5l-7.61 8.7L23.5 22h-7.3l-5.72-6.68L3.5 22H.243l8.15-9.32L.5 2h7.42l5.18 6.02L18.244 2Zm-1.28 18h2.02L7.11 4h-2.1l12.955 16Z"/>
                    </svg>
                  </a>
                </StreamingText>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
