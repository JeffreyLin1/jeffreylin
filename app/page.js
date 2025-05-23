"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // State for rotating achievements
  const [currentAchievement, setCurrentAchievement] = useState(0);
  
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Array of achievements
  const achievements = [
    "Created, scaled, and sold a viral platform ($10k valuation) 🚀",
    "Built B2B tools used by Nestle, FIFA, Autodesk, and more 😉",
    "Managed a welding shop in the Yukon territory 🥶",
    "Led AI-centered discussions at Tik Tok's office 🤖",
    "Biked 3k+ km across the US in 1 month, camping every night 🚴‍♂️",
  ];
  
  // Auto-rotate achievements - no longer needed
  useEffect(() => {
    // No longer rotating achievements
  }, []);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Hero Section - Bold Introduction */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden">
        
        {/* Navigation Links */}
        <div className="absolute top-8 md:top-12 left-0 right-0 flex justify-center space-x-12 z-20">
          <a href="/" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            about
          </a>
          <a href="/projects" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            projects
          </a>
          <a href="/experiences" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            experiences
          </a>
          <a href="/resume" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            resume
          </a>
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-8 py-12 flex flex-col md:flex-row items-center md:items-center md:justify-center pl-0 md:pl-16 lg:pl-54 z-10">
          {/* Text content - adjusted for better centering and moved right */}
          <div className="md:w-3/5 flex flex-col items-center md:items-start md:justify-center md:pr-8">
            {/* More approachable greeting - FURTHER INCREASED SIZE */}
            <h1 className={`text-6xl md:text-7xl lg:text-7xl font-bold mb-4 text-slate-800 tracking-tight text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
              <span className="relative">
                hi! i'm jeffrey.
                <span className="absolute" style={{ top: '-40px', left: '145px' }}>
                  <Image
                    src="/sleepycat.gif"
                    alt="Sleepy Cat"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </span>
              </span>
            </h1>
            
            {/* Summary about education and internship */}
            <p className={`text-xl md:text-2xl text-slate-700 text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
              Systems Design Engineering @ UWaterloo
            </p>
            <p className={`text-xl md:text-2xl mb-6 text-slate-700 text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
              Incoming eng intern @ Shopify
            </p>
            {/* Introduction text */}
            <p className={`text-2xl md:text-3xl mb-4 text-slate-700 font-medium text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              previously:
            </p>
            
            {/* Static achievements list with bullet points */}
            <div className={`w-full max-w-3xl mb-16 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-xl md:text-2xl font-medium text-slate-700 flex items-start font-serif">
                    <div className="flex-shrink-0 mr-4 mt-2">
                      <div className="w-4 h-4 border-l-2 border-b-2 border-gray-500"></div>
                    </div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center md:justify-start items-center md:items-start md:-mt-32 md:ml-4">
            <div className={`relative w-auto h-auto md:max-w-lg lg:max-w-xl overflow-visible mb-8 md:mb-0 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100' : ''}`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 blur-xl opacity-80 z-0"></div>
              <div className="relative z-10 transform md:-translate-y-16">
                <div className="relative">
                  <Image 
                    src="/jeffrey6.png" 
                    alt="Jeffrey Lin" 
                    width={800} 
                    height={1000}
                    className="w-auto h-auto max-h-[34rem] object-contain drop-shadow-md transform scale-105"
                    style={{ filter: 'saturate(1.25)' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
