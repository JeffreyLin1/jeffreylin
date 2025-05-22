"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Projects Section */}
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
          <a href="#adventures" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            adventures
          </a>
          <a href="#resume" className="text-xl md:text-2xl text-slate-700 transition-colors duration-300 border-b border-slate-700 hover:border-transparent font-serif">
            resume
          </a>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 pt-24 pb-12 z-10">
          {/* Projects Header */}
          <h1 className={`text-5xl md:text-6xl font-bold mb-12 text-slate-800 tracking-tight opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            Projects
          </h1>
          
          {/* Project List */}
          <div className={`space-y-16 opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
            
            {/* UWSummit Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex gap-8">
                <div className="w-1/3">
                  <Image
                    src="/images/uwsummit.png"
                    alt="UWSummit Project"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">UWSummit (Acquired at $10,000 valuation) - Social platform</h2>
                    <div className="flex space-x-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 italic mb-3">Next.js, Supabase, ProxyCurl, React, PostgreSQL, Node.js</p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-lg text-slate-700">Co-founded and developed a high-traffic social platform from scratch, driving <span className="font-medium">700+ users in the first 3 days</span></li>
                    <li className="text-lg text-slate-700">Achieved <span className="font-medium">100,000+ page visits</span> and maintained a low <span className="font-medium">16% bounce rate</span>, indicating strong user engagement</li>
                    <li className="text-lg text-slate-700">Developed a dynamic ELO rating system for pairwise profile voting, driving real-time leaderboard rankings</li>
                    <li className="text-lg text-slate-700">Integrated LinkedIn scraping via custom <span className="font-medium">RESTful API routes</span> to auto-generate user profiles with no friction</li>
                    <li className="text-lg text-slate-700">Implemented <span className="font-medium">secure authentication workflows</span> with Supabase Auth, improving user onboarding and security</li>
                    <li className="text-lg text-slate-700">Acquired at a valuation of <span className="font-medium">$10,000</span> by Linkd (YC X25), validating technical execution and product quality</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Agility Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex gap-8">
                <div className="w-1/3">
                  <Image
                    src="/images/agility.png"
                    alt="Agility Project"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">Agility - LLM driven Workflow Automation Platform</h2>
                    <div className="flex space-x-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 italic mb-3">Typescript, Deno, 10+ external APIs (GitHub, Gmail, OpenAI, Discord, etc.), Next.js</p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-lg text-slate-700">Architected a full-stack workflow platform with <span className="font-medium">20+ modular agents</span> and third-party API integrations</li>
                    <li className="text-lg text-slate-700">Developed an <span className="font-medium">AI-driven workflow generation feature</span> to create multi-step workflows from natural language</li>
                    <li className="text-lg text-slate-700">Built a dynamic visual canvas, allowing users to <span className="font-medium">drag, drop, and connect</span> agents for no-code automation</li>
                    <li className="text-lg text-slate-700">Built a microservices-style backend with <span className="font-medium">Serverless Functions</span> to orchestrate agent workflows and sessions</li>
                    <li className="text-lg text-slate-700">Handled <span className="font-medium">OAuth 2.0 and token storage</span> for Gmail, GitHub, Discord, and LLMs to enable API automation</li>
                    <li className="text-lg text-slate-700">Implemented secure authorization using <span className="font-medium">JWT validation</span> and <span className="font-medium">CORS</span> handling in serverless functions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* PackShots Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex gap-8">
                <div className="w-1/3">
                  <Image
                    src="/images/packshots.png"
                    alt="PackShots Project"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">PackShots - Cross-platform AI-Powered Packing App</h2>
                    <div className="flex space-x-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 italic mb-3">React native, Expo, Google Cloud Vision, OpenWeatherMap</p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-lg text-slate-700">Built a cross-platform React Native/Expo app used by <span className="font-medium">20+ travelers</span>, reducing packing prep time by <span className="font-medium">40%</span></li>
                    <li className="text-lg text-slate-700">Used Google Vision and weather APIs to <span className="font-medium">detect 50+ items</span> and generate <span className="font-medium">location-based</span> packing suggestions</li>
                    <li className="text-lg text-slate-700">Matched detected items to list entries with <span className="font-medium">90%+ accuracy</span> using <span className="font-medium">Levenshtein distance</span> for similarity scoring</li>
                    <li className="text-lg text-slate-700">Enabled hands-free list updates with speech recognition, improving UX for on-the-go or multitasking users</li>
                    <li className="text-lg text-slate-700">Implemented full-featured packing list CRUD with offline storage and real-time progress tracking</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CrankFlow Project */}
            <div className="pb-8">
              <div className="flex gap-8">
                <div className="w-1/3">
                  <Image
                    src="/images/crankflow.png"
                    alt="CrankFlow Project"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">CrankFlow - B2B Demand Forecasting Platform</h2>
                    <div className="flex space-x-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 italic mb-3">Python, Chart.js, Prophet, Pandas, Next.js, Typescript</p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-lg text-slate-700">Built a full-stack app with Next and Python, generating 90-day sales forecasts for businesses with <span className="font-medium">95%+ accuracy</span></li>
                    <li className="text-lg text-slate-700">Integrated Meta's Prophet model via Node.js API, processing uploads of up to <span className="font-medium">50,000+ rows</span> per forecast request</li>
                    <li className="text-lg text-slate-700">Created interactive chart visualizations to display <span className="font-medium">trends, rolling averages</span>, and <span className="font-medium">3-sigma confidence bounds</span></li>
                    <li className="text-lg text-slate-700">Designed a responsive dashboard with filters and <span className="font-medium">calculated KPIs</span> like <span className="font-medium">peak demand and stockout dates</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
