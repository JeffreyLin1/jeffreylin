"use client"

import { useState, useEffect } from "react";

export default function Resume() {
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Resume Section */}
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden py-16">
        
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
        
        <div className={`max-w-6xl w-full mx-auto px-8 pt-24 pb-12 z-10 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
          {/* Resume Header */}
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-slate-800 tracking-tight font-serif">
            Resume
          </h1>
          
          {/* PDF Viewer */}
          <div className="w-full h-[calc(100vh-12rem)]">
            <iframe
              src="/JeffreyLin_AISWE_Resume.pdf"
              className="w-full h-full rounded-lg shadow-lg"
              title="Jeffrey Lin's Resume"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 