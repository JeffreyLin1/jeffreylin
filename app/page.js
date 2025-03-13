"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  // State for rotating achievements
  const [currentAchievement, setCurrentAchievement] = useState(0);
  
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [experiencesVisible, setExperiencesVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  
  // Refs for sections
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Array of achievements
  const achievements = [
    "BIKED 3000KM CROSS COUNTRY IN 30 DAYS",
    "WORKED IN THE YUKON WILDERNESS",
    "LED DISCUSSIONS AT TIK TOK'S OFFICE",
    "GAINED 100K+ USERS ACROSS FOUNDED PLATFORMS",
    "BUILT PRODUCTS FOR NESTLE AND FIFA"
  ];
  
  // Auto-rotate achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% of the section is visible
    };
    
    const experiencesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setExperiencesVisible(true);
          experiencesObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
          projectsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setContactVisible(true);
          contactObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (experiencesRef.current) {
      experiencesObserver.observe(experiencesRef.current);
    }
    
    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }
    
    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }
    
    return () => {
      if (experiencesRef.current) experiencesObserver.unobserve(experiencesRef.current);
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
      if (contactRef.current) contactObserver.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth bg-white">
      {/* Section 1: Hero Section - Bold Introduction */}
      <section className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-yellow-50 to-amber-50 relative overflow-hidden">
        {/* Dynamic background elements - reduced opacity and subtler gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-70"></div>
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-200 opacity-0 ${isLoaded ? 'animate-fade-in-slow opacity-5' : ''}`}></div>
          <div className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-amber-200 opacity-0 ${isLoaded ? 'animate-fade-in-slow opacity-5 delay-300' : ''}`}></div>
          <div className={`absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-orange-200 opacity-0 ${isLoaded ? 'animate-fade-in-slow opacity-5 delay-500' : ''}`}></div>
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-8 py-12 flex flex-col md:flex-row items-center md:items-center md:justify-center pl-0 md:pl-16 lg:pl-54 z-10">
          {/* Text content - adjusted for better centering and moved right */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start md:justify-center md:pr-8">
            {/* More approachable greeting - FURTHER INCREASED SIZE */}
            <h1 className={`text-8xl md:text-9xl font-bold mb-4 text-gray-800 tracking-tight text-center md:text-left opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
              Hi! I'm Jeffrey.
            </h1>
            
            {/* Introduction to achievements - FURTHER INCREASED SIZE */}
            <p className={`text-3xl md:text-4xl mb-4 text-amber-600 font-medium text-center md:text-left opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-500' : ''}`}>
              Previously, I've...
            </p>
            
            {/* Rotating achievements showcase - WITH UNIQUE EMOJIS */}
            <div className={`relative h-32 w-full max-w-3xl mb-16 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              {achievements.map((achievement, index) => {
                // Assign a unique emoji to each achievement
                const emojis = ["🚴", "🏔️", "🎬", "👥", "🏆"];
                const emoji = emojis[index];
                
                return (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentAchievement 
                        ? "opacity-100 transform translate-y-0" 
                        : "opacity-0 transform translate-y-12"
                    }`}
                  >
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center">
                      <span className="text-5xl mr-4">{emoji}</span>
                      {achievement}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Dramatic photo - moved much higher */}
          <div className="md:w-1/2 flex justify-center md:justify-start items-center md:items-start md:-mt-32 md:ml-4">
            <div className={`relative w-auto h-auto md:max-w-lg lg:max-w-xl overflow-visible mb-8 md:mb-0 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100' : ''}`}>
              {/* Blended background effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white via-yellow-50 to-amber-50 blur-xl opacity-80 z-0"></div>
              
              {/* Image with subtle shadow, gradient fade at bottom, and increased saturation */}
              <div className="relative z-10 transform md:-translate-y-16">
                <div className="relative">
                  <Image 
                    src="/jeffrey6.png" 
                    alt="Jeffrey Lin" 
                    width={850} 
                    height={1050}
                    className="w-auto h-auto max-h-[38rem] object-contain drop-shadow-md transform scale-115"
                    style={{ filter: 'saturate(1.25)' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 ${isLoaded ? 'animate-fade-in opacity-100 delay-1000' : ''}`}>
          <a href="#experiences" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">Explore My Legacy</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 2: Experiences - Professional Achievements */}
      <section id="experiences" ref={experiencesRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50 relative">
        {/* Decorative elements - more subtle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 opacity-70"></div>
          <div className={`absolute top-20 left-20 w-40 h-40 border border-yellow-200 rounded-full opacity-0 ${experiencesVisible ? 'animate-fade-in opacity-30' : ''}`}></div>
          <div className={`absolute bottom-40 right-20 w-60 h-60 border border-amber-200 rounded-full opacity-0 ${experiencesVisible ? 'animate-fade-in opacity-30 delay-300' : ''}`}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100' : ''}`}>CAREER <span className="text-amber-500">TRIUMPHS</span></h2>
          
          <div className={`bg-white/90 p-8 rounded-lg border border-yellow-200 shadow-lg mb-12 opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            <p className="italic text-2xl text-amber-600 mb-4 text-center font-light">
              "My professional trajectory has been nothing short of extraordinary—a masterclass in excellence and innovation."
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Experience Item 1 - more subtle styling */}
            <div className={`flex flex-col md:flex-row gap-6 bg-white/90 p-8 rounded-lg border border-yellow-200 shadow-md opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <div className="md:w-1/4">
                <h3 className="font-bold text-2xl text-gray-800">ELITE COMPANY</h3>
                <p className="text-amber-500 text-lg">2020 - Present</p>
                <div className="h-1 w-16 bg-amber-500 mt-4"></div>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-xl text-gray-800 mb-2">VISIONARY DIRECTOR</h4>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  I single-handedly revolutionized the company's digital strategy, resulting in an unprecedented 500% growth. 
                  My unparalleled vision and technical prowess have established new industry standards that competitors can only aspire to match.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md font-medium">Strategic Genius</span>
                  <span className="px-4 py-2 bg-amber-100 border border-amber-200 text-amber-700 rounded-md font-medium">Technical Virtuoso</span>
                  <span className="px-4 py-2 bg-orange-100 border border-orange-200 text-orange-700 rounded-md font-medium">Leadership Excellence</span>
                </div>
              </div>
            </div>
            
            {/* Experience Item 2 - more subtle styling */}
            <div className={`flex flex-col md:flex-row gap-6 bg-white/90 p-8 rounded-lg border border-amber-200 shadow-md opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="md:w-1/4">
                <h3 className="font-bold text-2xl text-gray-800">PRESTIGIOUS FIRM</h3>
                <p className="text-orange-500 text-lg">2018 - 2020</p>
                <div className="h-1 w-16 bg-orange-500 mt-4"></div>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-xl text-gray-800 mb-2">INNOVATION ARCHITECT</h4>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  My brilliance was immediately recognized as I transformed outdated systems into cutting-edge solutions. 
                  I was rapidly promoted three times in two years—a company record that stands unbroken to this day.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-amber-100 border border-amber-200 text-amber-700 rounded-md font-medium">Disruptive Innovation</span>
                  <span className="px-4 py-2 bg-orange-100 border border-orange-200 text-orange-700 rounded-md font-medium">Unmatched Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 ${experiencesVisible ? 'animate-fade-in opacity-100 delay-800' : ''}`}>
          <a href="#projects" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">Behold My Creations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 3: Projects/Portfolio */}
      <section id="projects" ref={projectsRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 relative">
        {/* Decorative elements - more subtle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 opacity-70"></div>
          <div className={`grid grid-cols-8 grid-rows-8 gap-4 absolute inset-0 opacity-0 ${projectsVisible ? 'animate-fade-in opacity-3 delay-300' : ''}`}>
            {Array(64).fill().map((_, i) => (
              <div key={i} className="border border-amber-200"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100' : ''}`}>SIGNATURE <span className="text-orange-500">WORKS</span></h2>
          
          <div className={`bg-white/90 p-8 rounded-lg border border-amber-200 shadow-lg mb-12 max-w-4xl mx-auto opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            <p className="italic text-2xl text-orange-500 text-center font-light">
              "Each project is a masterpiece—a perfect synthesis of visionary design and technical brilliance that few can comprehend, let alone replicate."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 - more subtle styling */}
            <div className={`bg-white/90 rounded-lg border border-yellow-200 shadow-md overflow-hidden hover:border-yellow-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-yellow-100 to-amber-100 relative overflow-hidden">
                {/* Project image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  REVOLUTIONARY DESIGN
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 rounded text-xs font-bold text-white">
                  AWARD-WINNING
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">PARADIGM SHIFT</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A groundbreaking project that redefined industry standards. My innovative approach garnered international recognition and multiple prestigious awards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md text-sm font-medium">Revolutionary Tech</span>
                  <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-md text-sm font-medium">Genius UX</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition shadow-md">
                  EXPERIENCE GREATNESS
                </a>
              </div>
            </div>
            
            {/* Project Card 2 - more subtle styling */}
            <div className={`bg-white/90 rounded-lg border border-amber-200 shadow-md overflow-hidden hover:border-amber-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                {/* Project image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  UNPARALLELED INNOVATION
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">DIGITAL MASTERPIECE</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A tour de force of technical brilliance and aesthetic perfection. This project showcases my unmatched ability to merge form and function.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-md text-sm font-medium">Technical Marvel</span>
                  <span className="px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 rounded-md text-sm font-medium">Design Excellence</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 transition shadow-md">
                  WITNESS BRILLIANCE
                </a>
              </div>
            </div>
            
            {/* Project Card 3 - more subtle styling */}
            <div className={`bg-white/90 rounded-lg border border-orange-200 shadow-md overflow-hidden hover:border-orange-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-800' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                {/* Project image would go here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  VISIONARY EXECUTION
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">ELITE SOLUTION</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A sophisticated system that demonstrates my unrivaled problem-solving abilities. This project has been lauded as "impossibly efficient" by industry experts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 rounded-md text-sm font-medium">Algorithmic Genius</span>
                  <span className="px-3 py-1 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md text-sm font-medium">Scalable Perfection</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition shadow-md">
                  BEHOLD GREATNESS
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 ${projectsVisible ? 'animate-fade-in opacity-100 delay-1000' : ''}`}>
          <a href="#contact" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">Connect With Greatness</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 4: Contact - The Grand Finale */}
      <section id="contact" ref={contactRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 relative">
        {/* Decorative elements - more subtle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 opacity-70"></div>
          <div className={`absolute top-1/4 right-1/4 w-72 h-72 rounded-full border border-orange-200 opacity-0 ${contactVisible ? 'animate-fade-in opacity-30 delay-300' : ''}`}></div>
          <div className={`absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full border border-yellow-200 opacity-0 ${contactVisible ? 'animate-fade-in opacity-30 delay-500' : ''}`}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${contactVisible ? 'animate-slide-up opacity-100' : ''}`}>
            CONNECT WITH <span className="text-orange-500">GREATNESS</span>
          </h2>
          
          <div className={`bg-white/90 p-8 rounded-lg border border-orange-200 shadow-lg mb-12 max-w-4xl mx-auto opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            <p className="italic text-2xl text-orange-500 text-center font-light">
              "Opportunities to collaborate with a mind of my caliber are rare. Seize this moment to elevate your vision."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form - more subtle styling */}
            <div className={`bg-white/90 p-8 rounded-lg border border-yellow-200 shadow-lg opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">INITIATE CONTACT</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="Describe your vision or opportunity"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-500 text-white text-xl font-bold rounded-md hover:bg-amber-600 transition shadow-md transform hover:scale-105"
                >
                  SUBMIT FOR CONSIDERATION
                </button>
              </form>
            </div>
            
            {/* Contact Information - more subtle styling */}
            <div className={`flex flex-col justify-between opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="bg-white/90 p-8 rounded-lg border border-orange-200 shadow-lg mb-8">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">DIRECT CHANNELS</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-800">Email</p>
                      <a href="mailto:genius@jeffreylin.com" className="text-lg text-amber-600 hover:text-amber-700 transition">genius@jeffreylin.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-800">Phone</p>
                      <a href="tel:+1234567890" className="text-lg text-amber-600 hover:text-amber-700 transition">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-800">Location</p>
                      <p className="text-lg text-gray-600">Global Presence, Based in Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`bg-white/90 p-8 rounded-lg border border-amber-200 shadow-lg opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-800' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">SOCIAL PRESENCE</h3>
                
                <div className="flex justify-center space-x-6">
                  <a href="#" className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white transform hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  
                  <a href="#" className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center text-white transform hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a href="#" className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white transform hover:scale-110 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 ${contactVisible ? 'animate-fade-in opacity-100 delay-1000' : ''}`}>
          <a href="#" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">Back to Top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
