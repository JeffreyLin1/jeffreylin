"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";

export default function Home() {
  // State for rotating achievements
  const [currentAchievement, setCurrentAchievement] = useState(0);
  
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Array of achievements
  const achievements = [
    "Sold a project, then made another one currently at $500 MRR 🚀",
    "Engineer @ YC startup serving customers like FIFA and Autodesk 😉",
    "Managed a welding shop in the Yukon 🥶",
    "Voted best hair in high school 💇‍♂️",
    "Biked 3k+ km across the US in 1 month, camping every night 🚴‍♂️",
  ];
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Hero Section - Bold Introduction */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="max-w-7xl w-full mx-auto px-3 sm:px-8 py-6 sm:py-12 pt-4 sm:pt-44 flex flex-col md:flex-row items-center md:items-center md:justify-center pl-0 md:pl-16 lg:pl-54 z-10">
          {/* Text content - adjusted for better centering and moved right */}
          <div className="md:w-3/5 flex flex-col items-center md:items-start md:justify-center md:pr-8">
            {/* More approachable greeting - FURTHER INCREASED SIZE */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-2 sm:mb-4 text-slate-800 tracking-tight text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
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
            <p className={`text-lg sm:text-xl md:text-2xl text-slate-700 text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
              Systems Design Engineering @ UWaterloo '29
            </p>
            <p className={`text-lg sm:text-xl md:text-2xl mb-3 sm:mb-6 text-slate-700 text-center md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
              Incoming SWE intern @ Shopify
            </p>
            {/* Introduction text */}
            <p className={`text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 text-slate-700 font-medium text-left md:text-left opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              previously:
            </p>
            
            {/* Static achievements list with bullet points */}
            <div className={`w-full max-w-3xl mb-6 sm:mb-16 opacity-0 ml-4 sm:ml-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <ul className="space-y-1 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-xl sm:text-xl md:text-2xl font-medium text-slate-700 flex items-start font-serif">
                    <div className="flex-shrink-0 mr-2 sm:mr-4 mt-2 sm:mt-2">
                      <div className="w-2 h-2 sm:w-4 sm:h-4 border-l-2 border-b-2 border-gray-500"></div>
                    </div>
                    <span className="max-w-xs sm:max-w-none">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center md:justify-start items-center md:items-start md:-mt-32 md:ml-4 hidden sm:flex">
            <div className={`relative w-auto h-auto md:max-w-lg lg:max-w-xl overflow-visible mb-3 sm:mb-8 md:mb-0 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100' : ''}`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 blur-xl opacity-80 z-0"></div>
              <div className="relative z-10 transform md:-translate-y-16">
                <div className="relative">
                  <Image 
                    src="/jeffrey6.png" 
                    alt="Jeffrey Lin" 
                    width={800} 
                    height={1000}
                    className="w-auto h-auto max-h-96 md:max-h-[34rem] object-contain drop-shadow-md transform scale-105"
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
