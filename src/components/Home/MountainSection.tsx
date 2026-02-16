import React from "react";

// --- IMAGE IMPORTS ---
import mountainBg from "@/assets/Explore background.jpg"; 
import cloudImg from "@/assets/cloud.png";
import patalsuImg from "@/assets/Explore patalsu peak.jpg";
import valleyBg from "@/assets/part2back.jpg"; 
import snowSchoolImg from "@/assets/part21.jpg";
import valleyPlayImg from "@/assets/part22.jpg";
import pineWalkImg from "@/assets/part21.jpg";
import sensesBg from "@/assets/part3back.jpg";
import hotelImg from "@/assets/part31.jpg";
import cottageImg from "@/assets/part32.jpg";

const MountainSection = () => {
  return (
    // Main wrapper black to hide any micro-pixel gaps during scroll
    <div className="w-full bg-black">
      
      {/* ==================================================================
          SECTION 1: THE MOUNTAIN
      ================================================================== */}
      <section className="relative w-full min-h-screen">
        
        {/* STICKY BACKGROUND */}
        {/* h-screen ensures it fills the laptop screen exactly */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <img 
            src={mountainBg} 
            alt="Mountain" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Cloud Overlay */}
          <div className="absolute top-0 left-0 right-0 w-full pointer-events-none z-10">
            <img src={cloudImg} alt="Fog" className="w-full h-32 md:h-64 object-cover object-top" />
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>

        {/* SCROLLING CONTENT */}
        {/* -mt-[100vh] pulls it perfectly over the sticky background */}
        <div className="relative z-10 w-full -mt-[100vh]">
            {/* min-h-screen ensures content box is exactly screen height, preventing gaps */}
            <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
                
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-black text-4xl md:text-7xl font-black uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        The Mountain
                    </h2>
                    <p className="text-gray-950 text-xl md:text-3xl font-semibold mb-8">We are your local wise guide.</p>
                    <div className="max-w-4xl text-lg md:text-xl mx-auto mb-12 text-gray-900 font-medium leading-relaxed">
                        <p>This is the transition from tourist to climber.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto group cursor-pointer overflow-hidden rounded-sm shadow-2xl border border-white/20 aspect-[16/9]">
                        <img src={patalsuImg} alt="Patalsu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/10 py-8 border-t border-white/10">
                            <p className="text-white text-2xl font-black uppercase tracking-[0.2em]">Patalsu Peak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>


      {/* ==================================================================
          SECTION 2: THE VALLEY
      ================================================================== */}
      <section className="relative w-full min-h-screen">
        {/* STICKY BACKGROUND */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <img src={valleyBg} alt="Valley" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>

        {/* SCROLLING CONTENT */}
        <div className="relative z-10 w-full -mt-[100vh]">
            <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
                <div className="max-w-7xl mx-auto text-center w-full">
                    <h2 className="text-black text-4xl md:text-7xl font-black uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        The Valley
                    </h2>
                    <p className="text-gray-900 text-base md:text-xl font-semibold mb-16">Mountain Home at 2600 metres ASL</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { img: snowSchoolImg, title: "The Snow School" },
                            { img: valleyPlayImg, title: "Valley Play" },
                            { img: pineWalkImg, title: "The Pine Walk" }
                        ].map((card, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-sm shadow-xl aspect-[3/4] cursor-pointer bg-gray-200">
                                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-[2px] py-4">
                                    <p className="text-white font-bold uppercase tracking-wider text-lg">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>


      {/* ==================================================================
          SECTION 3: THE SENSES
      ================================================================== */}
      <section className="relative w-full min-h-screen">
        {/* STICKY BACKGROUND */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <img src={sensesBg} alt="Senses" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* SCROLLING CONTENT */}
        <div className="relative z-10 w-full -mt-[100vh]">
            <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
                <div className="max-w-7xl mx-auto text-center w-full">
                    <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        The Senses
                    </h2>
                    <p className="text-gray-200 text-base md:text-xl font-semibold mb-16">We are your safe getaway.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative group overflow-hidden border-4 border-white shadow-2xl">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={hotelImg} alt="Hotel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <p className="text-white text-2xl font-black uppercase tracking-widest mb-2 drop-shadow-lg">Hotel</p>
                                <button className="border border-white text-white text-xs px-4 py-1 uppercase hover:bg-white hover:text-black transition-colors duration-300">Stay With Us</button>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden border-4 border-white shadow-2xl">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={cottageImg} alt="Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <p className="text-white text-2xl font-black uppercase tracking-widest mb-2 drop-shadow-lg">Cottage</p>
                                <button className="border border-white text-white text-xs px-4 py-1 uppercase hover:bg-white hover:text-black transition-colors duration-300">Stay With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default MountainSection;