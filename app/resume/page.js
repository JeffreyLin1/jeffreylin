"use client"

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

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
        <Navigation />
        
        <div className={`max-w-6xl w-full mx-auto px-8 pt-12 sm:pt-24 pb-12 z-10 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
          
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