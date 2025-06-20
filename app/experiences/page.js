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
        
        <div className="max-w-6xl w-full mx-auto px-8 pt-12 sm:pt-20 pb-8 z-10">
          
          {/* Experience List */}
          <div className={`relative opacity-0 ${isLoaded ? 'animate-slide-up opacity-100 delay-300' : ''}`}>
            
            <div className="space-y-12">
              {/* Shopify Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/shopify.png"
                        alt="Shopify Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Shopify</h2>
                          <span className="text-sm text-slate-500">Sept 2025 - Dec 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Incoming Engineering Intern</p>
                      
                      <div className="text-base text-slate-700">
                        <p>Incoming engineering intern on the Shopify platform team, working on core e-commerce functionality and developer tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Agentnoon (YC W22) Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/agentnoon.jpeg"
                        alt="Autodesk Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Agentnoon (YC W22)</h2>
                          <span className="text-sm text-slate-500">Jan 2025 - Apr 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Product/software Engineering Intern</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">Engineered access control logic for <span className="font-medium">100+ business dashboards supporting 5,000+ users</span> and optimized tree traversal algorithms, improving search speed by <span className="font-medium">80%</span>.</p>
                        <p>Developed <span className="font-medium">10+ database migrations</span> and refactored legacy Vue components, boosting component reusability by <span className="font-medium">3x</span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coding Teacher Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/digitalmoment.png"
                        alt="Coding Education"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Digital Moment</h2>
                          <span className="text-sm text-slate-500">Mar 2023 - Sept 2023</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Programming Teacher</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">Taught programming fundamentals to students and spoke at <span className="font-medium">TikTok's office about AI</span> developments and their impact on education.</p>
                        <p>Developed curriculum and mentored aspiring developers while building public speaking experience through tech presentations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Nestle Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/pokeguys.png"
                        alt="Nestlé Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Poke Guys</h2>
                          <span className="text-sm text-slate-500">Jan 2023 - Apr 2023</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Crew Member</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">Provided excellent customer service while preparing fresh poke bowls and managing cash transactions in a fast-paced environment.</p>
                        <p>Maintained food safety standards and collaborated with team members to ensure efficient operations during peak hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yukon Wilderness Experience */}
              <div className="relative">
                <div className="pb-8">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/tamarackwelding.jpg"
                        alt="Yukon Wilderness Workshop"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Tamarack Welding</h2>
                          <span className="text-sm text-slate-500">Dec 2020 - Mar 2021</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Project Manager</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">Managed a remote welding and equipment repair shop in the Yukon territory, coordinating logistics for supplies in challenging conditions.</p>
                        <p>Led a team of technicians to complete projects on schedule and developed innovative solutions with limited resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Newspaper Carrier Experience */}
              <div className="relative">
                <div className="pb-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/mirror.png"
                        alt="Newspaper Delivery"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">The Mirror</h2>
                          <span className="text-sm text-slate-500">2016 - 2024</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Paper Boy</p>
                      
                      <div className="text-base text-slate-700">
                        <p>Humble beginnings.</p>
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
