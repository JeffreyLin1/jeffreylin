"use client"

import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  // Array of achievements
  const achievements = [
    "Scaled a content creation tool to $1k+ MRR ",
    "Sold a project to a YC startup (1k+ users) ",
    "Prev product & SWE @ YC startup serving customers like FIFA and Autodesk ",
    "Managed a welding shop in the Yukon ",
    "Content creator (5M+ views in < 1 month) ",
    "Biked 3k+ km across the US in 1 month, camping every night ",
  ];
  
  const renderAchievement = (text) => {
    if (text.includes('content creation tool')) {
      const parts = text.split('content creation tool');
      return (
        <>
          {parts[0]}
          <a href="http://brainrot.mov" target="_blank" rel="noopener noreferrer" className="text-slate-800 border-b border-slate-400 hover:border-transparent">content creation tool</a>
          {parts.slice(1).join('content creation tool')}
        </>
      );
    }
    if (text.startsWith('Sold a project to')) {
      const parts = text.split('project');
      return (
        <>
          {parts[0]}
          <a href="http://uwsummit.ca" target="_blank" rel="noopener noreferrer" className="text-slate-800 border-b border-slate-400 hover:border-transparent">project</a>
          {parts.slice(1).join('project')}
        </>
      );
    }
    return text;
  }


  return (
    <div className="w-full bg-white font-serif">
      {/* Main Hero Section - Bold Introduction */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="transform origin-top scale-[0.95] md:scale-[0.9]">
          <div className="max-w-7xl w-full mx-auto px-3 sm:px-8 py-6 sm:py-12 pt-4 sm:pt-44 flex flex-col md:flex-row items-center md:items-center md:justify-center pl-0 md:pl-16 lg:pl-54 z-10">
          {/* Text content - adjusted for better centering and moved right */}
          <div className="md:w-3/5 flex flex-col items-center md:items-start md:justify-center md:pr-8">
            {/* More approachable greeting - FURTHER INCREASED SIZE */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-2 sm:mb-4 text-slate-800 tracking-tight text-center md:text-left font-serif`}>
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
            <p className={`text-lg sm:text-xl md:text-2xl text-slate-700 text-center md:text-left font-serif`}>
              Systems Design Engineering @ UWaterloo '29
            </p>
            <p className={`text-lg sm:text-xl md:text-2xl mb-3 sm:mb-6 text-slate-700 text-center md:text-left font-serif`}>
              Incoming SWE intern @ Shopify
            </p>
            {/* Introduction text */}
            <p className={`text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 text-slate-700 font-medium text-left md:text-left font-serif`}>
              previously:
            </p>
            
            {/* Static achievements list with bullet points */}
            <div className={`w-full max-w-3xl mb-6 sm:mb-16 ml-4 sm:ml-0`}>
              <ul className="space-y-1 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-xl sm:text-xl md:text-2xl font-medium text-slate-700 flex items-start font-serif">
                    <div className="flex-shrink-0 mr-2 sm:mr-4 mt-2 sm:mt-2">
                      <div className="w-2 h-2 sm:w-4 sm:h-4 border-l-2 border-b-2 border-gray-500"></div>
                    </div>
                    <span className="max-w-xs sm:max-w-none">{renderAchievement(achievement)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social icons */}
            <div className="mt-4 flex items-center gap-5 text-slate-700">
              <a href="http://github.com/JeffreyLin1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.95 7.52 10.4.55.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.06.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.6-1.23-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.9.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.5.22 2.62.11 2.9.7.77 1.13 1.75 1.13 2.95 0 4.22-2.56 5.15-5 5.43.39.33.75.98.75 1.98 0 1.43-.01 2.57-.01 2.92 0 .3.2.65.77.54 4.36-1.45 7.51-5.55 7.51-10.4C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jeffreyllin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V23h-4V8z"/>
                </svg>
              </a>
              <a href="https://x.com/jeeffreyLin" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.244 2H21.5l-7.61 8.7L23.5 22h-7.3l-5.72-6.68L3.5 22H.243l8.15-9.32L.5 2h7.42l5.18 6.02L18.244 2Zm-1.28 18h2.02L7.11 4h-2.1l12.955 16Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center md:justify-start items-center md:items-start md:-mt-32 md:ml-4 hidden sm:flex">
            <div className={`relative w-auto h-auto md:max-w-xl lg:max-w-2xl overflow-visible mb-3 sm:mb-8 md:mb-0`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 blur-xl opacity-80 z-0"></div>
              <div className="relative z-10 transform md:-translate-y-16">
                <div className="relative">
                  <Image 
                    src="/jeffrey7.png" 
                    alt="Jeffrey Lin" 
                    width={800} 
                    height={1000}
                    className="w-auto h-auto max-h-[28rem] md:max-h-[42rem] object-contain drop-shadow-md transform scale-105"
                    style={{ filter: 'saturate(1.25)' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
