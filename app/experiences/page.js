"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Experiences() {
  // State to control animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Experiences Section */}
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
        
        <div className="max-w-6xl w-full mx-auto px-8 pt-24 pb-12 z-10">
          {/* Experiences Header */}
          <h1 className={`text-5xl md:text-6xl font-bold mb-12 text-slate-800 tracking-tight opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            Experiences
          </h1>
          
          {/* Experience List with Timeline */}
          <div className={`relative opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            
            <div className="space-y-16">
              {/* Shopify Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">May 2024</p>
                      <p className="text-sm text-slate-500">Present</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 border-b border-slate-200 pb-12">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/images/shopify.png"
                          alt="Shopify Office"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Shopify</h2>
                          <div className="flex items-center mt-2 md:mt-0">
                            <p className="text-lg text-slate-600 italic">Incoming Engineering Intern</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Ruby on Rails, React, GraphQL, TypeScript</p>
                        
                        <ul className="space-y-2 list-disc pl-5">
                          <li className="text-lg text-slate-700">Incoming engineering intern on the Shopify platform team</li>
                          <li className="text-lg text-slate-700">Will be working on core e-commerce functionality and developer tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Agentnoon (YC W22) Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">Sept 2023</p>
                      <p className="text-sm text-slate-500">Dec 2023</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 border-b border-slate-200 pb-12">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/images/autodesk.png"
                          alt="Autodesk Office"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Agentnoon (YC W22)</h2>
                          <div className="flex items-center mt-2 md:mt-0">
                            <p className="text-lg text-slate-600 italic">Product Engineer Co-op</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">React, TypeScript, Node.js, AWS</p>
                        
                        <ul className="space-y-2 list-disc pl-5">
                          <li className="text-lg text-slate-700">Developed and maintained web applications for Autodesk's design and engineering software suite</li>
                          <li className="text-lg text-slate-700">Implemented responsive UI components using React and TypeScript</li>
                          <li className="text-lg text-slate-700">Collaborated with cross-functional teams to deliver features on schedule</li>
                          <li className="text-lg text-slate-700">Optimized application performance and improved user experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Nestle Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">Jan 2023</p>
                      <p className="text-sm text-slate-500">Apr 2023</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 border-b border-slate-200 pb-12">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/images/nestle.png"
                          alt="Nestlé Office"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Poke Guys</h2>
                          <div className="flex items-center mt-2 md:mt-0">
                            <p className="text-lg text-slate-600 italic">Crew member</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Python, Django, SQL, Docker</p>
                        
                        <ul className="space-y-2 list-disc pl-5">
                          <li className="text-lg text-slate-700">Built internal tools to streamline supply chain operations and inventory management</li>
                          <li className="text-lg text-slate-700">Developed data visualization dashboards to track key performance indicators</li>
                          <li className="text-lg text-slate-700">Automated reporting processes, saving team members 10+ hours per week</li>
                          <li className="text-lg text-slate-700">Implemented database optimizations that improved query performance by 40%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yukon Wilderness Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">Summer</p>
                      <p className="text-sm text-slate-500">2021</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/images/yukon.png"
                          alt="Yukon Wilderness Workshop"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Yukon Wilderness Workshop</h2>
                          <div className="flex items-center mt-2 md:mt-0">
                            <p className="text-lg text-slate-600 italic">Shop Manager</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Leadership, Project Management, Equipment Maintenance</p>
                        
                        <ul className="space-y-2 list-disc pl-5">
                          <li className="text-lg text-slate-700">Managed a remote welding and equipment repair shop in the Yukon territory</li>
                          <li className="text-lg text-slate-700">Coordinated logistics for supplies and equipment in challenging conditions</li>
                          <li className="text-lg text-slate-700">Led a team of technicians to complete projects on schedule despite remote location</li>
                          <li className="text-lg text-slate-700">Developed innovative solutions to technical problems with limited resources</li>
                        </ul>
                      </div>
                    </div>
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
