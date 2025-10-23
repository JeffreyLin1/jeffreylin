"use client"

import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Projects() {
  

  return (
    <div className="w-full bg-white font-serif">
      {/* Main Projects Section */}
      <section className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 relative overflow-hidden py-16">
        
        {/* Navigation Links */}
        <Navigation />
        
        <div className="max-w-5xl w-full mx-auto px-8 pt-12 sm:pt-24 pb-12 z-10">
          
          {/* Project List */}
          <div className={`space-y-16`}>
            {/* Brainrot.mov */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2">
                  <Image
                    src="/brainrot.png"
                    alt="Brainrot.mov Project"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">Brainrot.mov - $1k MRR</h2>
                    <div className="flex space-x-3">
                      <a href="http://brainrot.mov" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-lg text-slate-700 flex-grow">
                    <p className="mb-2">AI-powered short form content creation platform.</p>
                    <p><span className="font-medium"> 20M+ views & 200k+ followers generated, 1k+ users, $1k+ MRR </span></p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["SST", "Bun", "Cloudflare", "AWS Lambda", "PostgreSQL", "S3", "CloudFront", "SQS", "AWS SES", "Zero (RociCorp)", "Docker", "ffmpeg"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* UWSummit Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2">
                  <Image
                    src="/uwsummit.png"
                    alt="UWSummit Project"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">UWSummit - Acquired by Clado (YC X25)</h2>
                    <div className="flex space-x-3">
                      <a href="http://uwsummit.ca" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                      <a href="https://github.com/TheJerseyClub/UWSummit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-lg text-slate-700 flex-grow">
                    <p className="mb-2">A social platform and job board, where users choose between two waterloo students based on how cracked their LinkedIn is. Achieved <span className="font-medium">700+ users in 3 days and 100k+ page visits</span></p>
                    <p>Drew inbound interest from 20+ companies including Shopify and YC-backed startups.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js", "Supabase", "ProxyCurl", "React", "PostgreSQL", "Node.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* DIH Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2">
                  <Image
                    src="/dih.png"
                    alt="DIH Project"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">DIH 🥀</h2>
                    <div className="flex space-x-3">
                      <a href="https://www.npmjs.com/package/@tr1jeffrey/dih" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                      <a href="https://github.com/JeffreyLin1/dih-framework" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-lg text-slate-700 flex-grow">
                    <p className="mb-2"><span className="font-medium">TypeScript meta-framework on Next.js</span> that simplifies building AI wrapper apps with modules for chat completions, tool calling, and streaming.</p>
                    <p>Also created a <span className="font-medium">CLI scaffolding tool</span> and utilities for <span className="font-medium">token counting and cost management</span> to help developers manage LLM usage.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Node.js", "TypeScript", "Next.js", "OpenAI", "Anthropic", "Vercel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Agility Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2">
                  <Image
                    src="/agility.png"
                    alt="Agility Project"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">Agility</h2>
                    <div className="flex space-x-3">
                      <a href="http://agility-gamma.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="External link" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V8h7V6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7v-2z"></path>
                        </svg>
                      </a>
                      <a href="https://github.com/JeffreyLin1/Agility" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-lg text-slate-700 flex-grow">
                    <p className="mb-2">End-to-end workflow platform with <span className="font-medium">20+ modular agents</span> and <span className="font-medium">AI-driven workflow generation</span> from natural language.</p>
                    <p>Built a dynamic visual canvas for <span className="font-medium">drag-and-drop automation</span> with a microservices backend handling <span className="font-medium">OAuth 2.0 and JWT validation</span>.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["TypeScript", "Deno", "GitHub API", "Gmail API", "OpenAI", "Discord API", "Next.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* PackShots Project */}
            <div className="border-b border-slate-200 pb-12">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2">
                  <Image
                    src="/packshots.png"
                    alt="PackShots Project"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">PackShots</h2>
                    <div className="flex space-x-3">
                      <a href="https://github.com/JeffreyLin1/Packshots" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-lg text-slate-700 flex-grow">
                    <p className="mb-2">Cross-platform React Native app used by <span className="font-medium">20+ travelers</span> that uses Google Vision and weather APIs to detect items and generate <span className="font-medium">location-based packing suggestions</span>.</p>
                    <p>Achieved <span className="font-medium">90%+ accuracy</span> with Levenshtein distance matching and implemented <span className="font-medium">speech recognition and offline storage</span>.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React Native", "Expo", "Google Cloud Vision", "OpenWeatherMap"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action */}
            <div className={`text-center mt-16`}>
              <p className="text-2xl md:text-3xl text-slate-700 font-serif">
                check out the rest of my projects{' '}
                <a 
                  href="https://github.com/jeffreylin1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-800 font-medium border-b-2 border-slate-800 hover:border-transparent"
                >
                  here
                </a>
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
