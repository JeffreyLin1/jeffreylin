"use client"

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Experiences() {
  

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Experiences Section */}
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden py-16">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="max-w-6xl w-full mx-auto px-8 pt-12 sm:pt-20 pb-8 z-10">
          
          {/* Experience List */}
          <div className={`relative`}>
            
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
                      
                      <p className="text-base text-slate-600 italic mb-2">Software Engineering Intern</p>
                      
                      <div className="text-base text-slate-700">
                        <p>Working on assistants team, contributing to Sidekick AI</p>
                        <p>Building "Reasoning Arena", a tool to benchmark and research conversational reasoning between LLMs</p>
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
                      
                      <p className="text-base text-slate-600 italic mb-2">Product & Software Engineering Intern</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">YC startup doing B2B workforce planning. I engineered access control logic and optimized tree traversal algorithms for hierarchical data</p>
                        <p>Developed database migrations and refactored legacy Vue components</p>
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
                        <p>Made project plans for students</p>
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
                        <p className="mb-1">I filleted a lot of fish, cut a lot of veggies, and made a lot of bowls</p>
                        <p>Learned how to talk to people and walk them through a process of making a bowl</p>
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
                        <p className="mb-1">Worked logistics in a warehouse in the middle of nowhere in the Yukon. I was surrounded by mountains and bears</p>
                        <p>Welded frames together and painted some trailers too</p>
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
