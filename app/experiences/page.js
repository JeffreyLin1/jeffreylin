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
                        <p>Building a tool to generate synthetic data for LLM training</p>
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
                          <h2 className="text-2xl font-bold text-slate-800">Agentnoon (YC W22) - Acquired by Dayforce</h2>
                          <span className="text-sm text-slate-500">Jan 2025 - Apr 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Software Engineering Intern</p>
                      
                      <div className="text-base text-slate-700">
                        <p className="mb-1">B2B workforce planning. I engineered access control logic and optimized tree traversal algorithms for hierarchical data</p>
                        <p>Had customers like Nestle, Autodesk, and other enterprises. Got acquired by Dayforce</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border-b border-slate-200 pb-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-1/3 flex justify-center">
                      <Image
                        src="/mashup.png"
                        alt="Mashup Office"
                        width={200}
                        height={120}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-800">Cluely, WisprFlow, ViggleAI</h2>
                          <span className="text-sm text-slate-500">Sep 2025 - Nov 2025</span>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-600 italic mb-2">Contract Marketing</p>
                      
                      <div className="text-base text-slate-700">
                        <p>I posted a bunch of TikToks and reels</p>
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
