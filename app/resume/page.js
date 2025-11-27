"use client"

export default function Resume() {
  return (
    <div className="w-full bg-[#faf9f5] font-serif min-h-screen">
      {/* Header */}
      <div className="w-full bg-[#faf9f5] py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 text-center font-serif">
            Resume
          </h1>
          <p className="text-lg md:text-xl text-stone-700 text-center mt-4 font-serif">
            Jeffrey Lin
          </p>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="/SWE-Jeffrey-Lin-ResumeV2.pdf"
            width="100%"
            height="800px"
            className="border-0"
            title="Jeffrey Lin Resume"
          >
            <p className="text-center text-stone-600 p-8 font-serif">
              Your browser does not support PDF viewing. 
              <a 
                href="/SWE-Jeffrey-Lin-ResumeV2.pdf" 
                className="text-stone-800 border-b border-slate-400 hover:border-transparent ml-1"
                download
              >
                Download the resume instead
              </a>
            </p>
          </iframe>
        </div>
        
        {/* Download link */}
        <div className="text-center mt-6">
          <a 
            href="/SWE-Jeffrey-Lin-ResumeV2.pdf" 
            download
            className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-serif text-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
