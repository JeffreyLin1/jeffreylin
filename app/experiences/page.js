"use client"

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Experiences() {
  

  return (
    <div className="w-full bg-[#faf9f5] font-serif">
      {/* Main Experiences Section */}
      <section className="min-h-screen w-full flex flex-col items-center bg-[#faf9f5] relative overflow-hidden py-16">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="max-w-6xl w-full mx-auto px-8 pt-12 sm:pt-20 pb-8 z-10">
          
          {/* Experience List */}
          <div className={`relative flex justify-center`}>
            
            <div className="space-y-12 w-full lg:max-w-4xl">
              {/* Shopify Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-row gap-4 sm:gap-6 mb-4 sm:mb-0">
                    <div className="w-1/4 sm:w-1/3 lg:w-1/5 flex justify-center flex-shrink-0">
                      <Image
                        src="/shopify.png"
                        alt="Shopify Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                          <h2 className="text-lg sm:text-2xl font-bold text-stone-800">Shopify</h2>
                          <span className="text-sm text-stone-500 hidden sm:inline">Sept 2025 - Dec 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-stone-600 italic mb-1 sm:mb-2">Software Engineering Intern</p>
                      <span className="text-xs text-stone-500 sm:hidden">Sept 2025 - Dec 2025</span>
                      
                      <div className="text-base text-stone-700 hidden sm:block">
                        <p>Working on assistants team, contributing to Sidekick AI</p>
                        <p>Building a tool to generate synthetic data for LLM training</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block sm:hidden text-base text-stone-700">
                    <p>Working on assistants team, contributing to Sidekick AI</p>
                    <p>Building a tool to generate synthetic data for LLM training</p>
                  </div>
                </div>
              </div>
              
              {/* Agentnoon (YC W22) Experience */}
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-row gap-4 sm:gap-6 mb-4 sm:mb-0">
                    <div className="w-1/4 sm:w-1/3 lg:w-1/5 flex justify-center flex-shrink-0">
                      <Image
                        src="/agentnoon.jpeg"
                        alt="Autodesk Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                          <h2 className="text-lg sm:text-2xl font-bold text-stone-800">Agentnoon (YC W22) - Acquired by Dayforce</h2>
                          <span className="text-sm text-stone-500 hidden sm:inline">Jan 2025 - Apr 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-stone-600 italic mb-1 sm:mb-2">Software Engineering Intern</p>
                      <span className="text-xs text-stone-500 sm:hidden">Jan 2025 - Apr 2025</span>
                      
                      <div className="text-base text-stone-700 hidden sm:block">
                        <p className="mb-1">B2B workforce planning. I engineered access control logic and optimized tree traversal algorithms for hierarchical data</p>
                        <p>Had customers like Nestle, Autodesk, and other enterprises. Got acquired by Dayforce</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block sm:hidden text-base text-stone-700">
                    <p className="mb-1">B2B workforce planning. I engineered access control logic and optimized tree traversal algorithms for hierarchical data</p>
                    <p>Had customers like Nestle, Autodesk, and other enterprises. Got acquired by Dayforce</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-row gap-4 sm:gap-6 mb-4 sm:mb-0">
                    <div className="w-1/4 sm:w-1/3 lg:w-1/5 flex justify-center flex-shrink-0">
                      <Image
                        src="/mashup.png"
                        alt="Mashup Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                          <h2 className="text-lg sm:text-2xl font-bold text-stone-800">Cluely</h2>
                          <span className="text-sm text-stone-500 hidden sm:inline">Sep 2025 - Nov 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-stone-600 italic mb-1 sm:mb-2">Contract UGC Marketing</p>
                      <span className="text-xs text-stone-500 sm:hidden">Sep 2025 - Nov 2025</span>
                      
                      <div className="text-base text-stone-700 hidden sm:block">
                        <p>Posted a bunch of TikToks and reels</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block sm:hidden text-base text-stone-700">
                    <p>I posted a bunch of TikToks and reels</p>
                  </div>
                </div>
              </div>

              
              {/* Newspaper Carrier Experience */}
              <div className="relative">
                <div className="pb-6">
                  <div className="flex flex-row gap-4 sm:gap-6 mb-4 sm:mb-0">
                    <div className="w-1/4 sm:w-1/3 lg:w-1/5 flex justify-center flex-shrink-0">
                      <Image
                        src="/mirror.png"
                        alt="Newspaper Delivery"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                          <h2 className="text-lg sm:text-2xl font-bold text-stone-800">The Mirror</h2>
                          <span className="text-sm text-stone-500 hidden sm:inline">2016 - 2024</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-stone-600 italic mb-1 sm:mb-2">Paper Boy</p>
                      <span className="text-xs text-stone-500 sm:hidden">2016 - 2024</span>
                      
                      <div className="text-base text-stone-700 hidden sm:block">
                        <p>Humble beginnings.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block sm:hidden text-base text-stone-700">
                    <p>Humble beginnings.</p>
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
