"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";

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
        <Navigation />
        
        <div className="max-w-6xl w-full mx-auto px-8 pt-24 pb-12 z-10">
          {/* Experiences Header */}
          <h1 className={`text-5xl md:text-6xl font-bold mb-12 text-slate-800 tracking-tight opacity-0 font-serif ${isLoaded ? 'animate-slide-up opacity-100 delay-200' : ''}`}>
            Work Experience
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
                          src="/shopify.png"
                          alt="Shopify Office"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Shopify</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Incoming Engineering Intern</p>
                        
                        <div className="text-lg text-slate-700">
                          <p>Incoming engineering intern on the Shopify platform team, working on core e-commerce functionality and developer tools.</p>
                        </div>
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
                          src="/agentnoon.jpeg"
                          alt="Autodesk Office"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Agentnoon (YC W22)</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Product/software Engineering Intern</p>
                        
                        <div className="text-lg text-slate-700">
                          <p className="mb-2">Engineered access control logic for <span className="font-medium">100+ business dashboards supporting 5,000+ users</span> and optimized tree traversal algorithms, improving search speed by <span className="font-medium">80%</span>.</p>
                          <p>Developed <span className="font-medium">10+ database migrations</span> and refactored legacy Vue components, boosting component reusability by <span className="font-medium">3x</span>.</p>
                        </div>
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
                          src="/pokeguys.png"
                          alt="Nestlé Office"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Poke Guys</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Crew Member</p>
                        
                        <div className="text-lg text-slate-700">
                          <p className="mb-2">Provided excellent customer service while preparing fresh poke bowls and managing cash transactions in a fast-paced environment.</p>
                          <p>Maintained food safety standards and collaborated with team members to ensure efficient operations during peak hours.</p>
                        </div>
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
                          src="/tamarackwelding.jpg"
                          alt="Yukon Wilderness Workshop"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Tamarack Welding</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Project Manager</p>
                        
                        <div className="text-lg text-slate-700">
                          <p className="mb-2">Managed a remote welding and equipment repair shop in the Yukon territory, coordinating logistics for supplies in challenging conditions.</p>
                          <p>Led a team of technicians to complete projects on schedule and developed innovative solutions with limited resources.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coding Teacher Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">2020</p>
                      <p className="text-sm text-slate-500">2021</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 border-b border-slate-200 pb-12">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/digitalmoment.png"
                          alt="Coding Education"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">Digital Moment</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Programming Teacher</p>
                        
                        <div className="text-lg text-slate-700">
                          <p className="mb-2">Taught programming fundamentals to students and spoke at <span className="font-medium">TikTok's office about AI</span> developments and their impact on education.</p>
                          <p>Developed curriculum and mentored aspiring developers while building public speaking experience through tech presentations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Newspaper Carrier Experience */}
              <div className="relative">
                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-white shadow-md"></div>
                  
                  {/* Timeline Date */}
                  <div className="w-24 md:w-32 flex items-center justify-end">
                    <div>
                      <p className="text-lg font-medium text-slate-700">2019</p>
                      <p className="text-sm text-slate-500">2020</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex gap-8">
                      <div className="w-1/3">
                        <Image
                          src="/mirror.png"
                          alt="Newspaper Delivery"
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h2 className="text-3xl font-bold text-slate-800">The Mirror</h2>
                        </div>
                        
                        <p className="text-lg text-slate-600 italic mb-3">Paper Boy</p>
                        
                        <div className="text-lg text-slate-700">
                          <p>Humble beginnings.</p>
                        </div>
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
