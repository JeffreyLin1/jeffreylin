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

      {/* Section 2: Projects Section */}
      <section id="projects" ref={projectsRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 relative">
        <div className="max-w-7xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100' : ''}`}>
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className={`bg-white/90 rounded-lg border border-yellow-200 shadow-md overflow-hidden hover:border-yellow-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-yellow-100 to-amber-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built a scalable e-commerce solution with real-time inventory management and integrated payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-md text-sm font-medium">Node.js</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition shadow-md">
                  View Project
                </a>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className={`bg-white/90 rounded-lg border border-amber-200 shadow-md overflow-hidden hover:border-amber-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Project Title</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Project Description
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-md text-sm font-medium">Technology 1</span>
                  <span className="px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 rounded-md text-sm font-medium">Technology 2</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 transition shadow-md">
                  View Project
                </a>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className={`bg-white/90 rounded-lg border border-orange-200 shadow-md overflow-hidden hover:border-orange-400 transition duration-300 group opacity-0 ${projectsVisible ? 'animate-slide-up opacity-100 delay-800' : ''}`}>
              <div className="h-56 bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xl font-bold">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Project Title</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Project Description
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 rounded-md text-sm font-medium">Technology 1</span>
                  <span className="px-3 py-1 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md text-sm font-medium">Technology 2</span>
                </div>
                <a href="#" className="inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition shadow-md">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator - Updated to point to experiences */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 ${projectsVisible ? 'animate-fade-in opacity-100 delay-1000' : ''}`}>
          <a href="#experiences" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">View My Experience</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 3: Work Experience */}
      <section id="experiences" ref={experiencesRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50 relative">
        <div className="max-w-6xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100' : ''}`}>
            Work <span className="text-amber-500">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className={`flex flex-col md:flex-row gap-6 bg-white/90 p-8 rounded-lg border border-yellow-200 shadow-md opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <div className="md:w-1/4">
                <h3 className="font-bold text-2xl text-gray-800">Software Engineer</h3>
                <p className="text-amber-500 text-lg">2020 - Present</p>
                <div className="h-1 w-16 bg-amber-500 mt-4"></div>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-xl text-gray-800 mb-2">Tech Company Name</h4>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Led development of core platform features, improving system performance by 40%. 
                  Managed a team of 5 developers and implemented automated testing practices.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-md font-medium">Team Leadership</span>
                  <span className="px-4 py-2 bg-amber-100 border border-amber-200 text-amber-700 rounded-md font-medium">System Architecture</span>
                </div>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className={`flex flex-col md:flex-row gap-6 bg-white/90 p-8 rounded-lg border border-amber-200 shadow-md opacity-0 ${experiencesVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="md:w-1/4">
                <h3 className="font-bold text-2xl text-gray-800">Previous Company</h3>
                <p className="text-orange-500 text-lg">2018 - 2020</p>
                <div className="h-1 w-16 bg-orange-500 mt-4"></div>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-xl text-gray-800 mb-2">Previous Position</h4>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Brief description of responsibilities and achievements
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-amber-100 border border-amber-200 text-amber-700 rounded-md font-medium">Skill 1</span>
                  <span className="px-4 py-2 bg-orange-100 border border-orange-200 text-orange-700 rounded-md font-medium">Skill 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator - Updated to point to contact */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 ${experiencesVisible ? 'animate-fade-in opacity-100 delay-800' : ''}`}>
          <a href="#contact" className="flex flex-col items-center text-amber-500 hover:text-amber-600 transition">
            <span className="mb-1 text-sm uppercase tracking-widest">Connect With Greatness</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 4: Adventures & Expeditions */}
      <section id="adventures" ref={contactRef} className="snap-start h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto px-8 py-12 z-10">
          <h2 className={`text-5xl font-bold mb-12 text-gray-800 text-center opacity-0 ${contactVisible ? 'animate-slide-up opacity-100' : ''}`}>
            Adventures & <span className="text-orange-500">Expeditions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cross-Canada Cycling Adventure */}
            <div className={`bg-white/90 rounded-lg border border-yellow-200 shadow-lg overflow-hidden opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/cycling-trip.jpg"
                  alt="Cross-Canada Cycling Trip"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Cross-Canada Cycling</h3>
                <p className="text-gray-600 mb-4">
                  3,000km solo cycling journey across Canada. 30 days of adventure, spanning multiple provinces and terrains.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-sm">30 Days</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-md text-sm">3,000 KM</span>
                </div>
              </div>
            </div>

            {/* Yukon Wilderness Experience */}
            <div className={`bg-white/90 rounded-lg border border-amber-200 shadow-lg overflow-hidden opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-400' : ''}`}>
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/yukon-wilderness.jpg"
                  alt="Yukon Wilderness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Yukon Wilderness Guide</h3>
                <p className="text-gray-600 mb-4">
                  Led wilderness expeditions in the Yukon Territory. Experienced the midnight sun and pristine northern landscapes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-md text-sm">Wildlife</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-sm">Northern Lights</span>
                </div>
              </div>
            </div>

            {/* Camping Adventures */}
            <div className={`bg-white/90 rounded-lg border border-orange-200 shadow-lg overflow-hidden opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-600' : ''}`}>
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/camping-adventures.jpg"
                  alt="Camping Adventures"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Wilderness Camping</h3>
                <p className="text-gray-600 mb-4">
                  Multiple backcountry camping expeditions across Canada's most remote locations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-sm">Backcountry</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-sm">Survival</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 ${contactVisible ? 'animate-slide-up opacity-100 delay-800' : ''}`}>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={`/adventure-gallery-${index}.jpg`}
                  alt={`Adventure Photo ${index}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
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
