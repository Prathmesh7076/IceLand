import React from "react";
// NOTE: Replace these with your actual image paths for this specific section
import bgImg from "@/assets/Explore background.jpg"; 
import polaroidImg from "@/assets/part21.jpg"; 

const First = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* --- FULL SCREEN BACKGROUND WITH SMOOTH BLEND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bgImg}
          className="w-full h-full object-cover object-center"
          alt="background"
        />

        {/* Top Gradient: Blends seamlessly into the solid background above */}
        <div className="absolute top-0 left-0 right-0 h-[45vh] bg-gradient-to-b from-white via-white/80 to-transparent" />

        {/* Side Gradients: Vignette fade */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white/60 to-transparent" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-24">

        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "Anton", fontSize: "48px", lineHeight: "100%" }}
            className="text-[#0D1926] uppercase mb-3"
          >
            THE FIRST REAL TEST
          </h2>
          <p
            style={{ fontFamily: "Lato", fontWeight: 700, fontSize: "20px" }}
            className="text-[#0D1926] normal-case tracking-wide mb-4"
          >
            High-energy. Low-friction
          </p>
          <p
            style={{ fontFamily: "Lato", fontSize: "18px" }}
            className="text-[#0D1926] max-w-3xl mx-auto leading-relaxed font-lato"
          >
            Mountaineering is not a &quot;hike.&quot; It is a lesson in humility. We provide the crampons, the ropes, and <br className="hidden md:block" />
            the local wisdom. Our guides aren&apos;t just leads; they are the guardians of your safety on the ridge.
          </p>
        </div>

        {/* MAIN VISUAL GRID */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto mt-6">

          {/* LEFT: Landscape Polaroid Frame */}
          <div className="border-[6px] border-white bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] shrink-0 opacity-100 rotate-0">
            <img
              src={polaroidImg}
              // Adjusted to a landscape aspect ratio to perfectly match your screenshot
              className="w-[300px] sm:w-[450px] md:w-[550px] aspect-[4/3] object-cover block"
              alt="Patalsu Peak"
            />
          </div>

          {/* RIGHT: Frosted Glass Banner with Button */}
          <div
            // Applied exactly the provided CSS via Tailwind classes
            className="shrink-0 flex flex-col items-center justify-center relative overflow-hidden px-8 
                       bg-white/[0.18] backdrop-blur-[20px] border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            style={{ 
              width: '450px', 
              height: '220px',
              WebkitBackdropFilter: 'blur(0px)' // ensuring safari support for the blur
            }}
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 
                className="text-white uppercase mb-1 drop-shadow-md text-3xl" 
                style={{ fontFamily: "'Anton', sans-serif", lineHeight: "1.2" }}
              >
                PATALSU PEAK EXPEDITION
              </h3>
              <p 
                className="text-white/90 text-sm font-lato normal-case tracking-widest mb-6 drop-shadow-sm" 
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                The transition from hiker to climber.
              </p>

              {/* Exact Replicated Gradient Border Button */}
              <div className="rounded-[6px] p-[1.5px] bg-gradient-to-r from-[#FFFFFF] to-[#00A3FF]">
                <button 
                  className="bg-[#366498] text-white text-sm tracking-wide px-14 py-2 rounded-[4.5px] transition-colors w-full h-full hover:bg-[#2c5275]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default First;