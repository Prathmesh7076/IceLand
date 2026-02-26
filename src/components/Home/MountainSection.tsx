import React from "react";
import { motion } from "framer-motion";
import mountainBg from "@/assets/Explore background.jpg"; 
import cloudImg from "@/assets/cloud.png";
import patalsuImg from "@/assets/Explore patalsu peak.jpg";
import beasKundImg from "@/assets/byaskund.avif"; // <-- Added second image import

const MountainSection = () => {
  return (
    <section className="relative w-full h-[200vh] bg-white">
      
      {/* LAYER 1: STICKY BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <img 
          src={mountainBg} 
          alt="Mountain" 
          /* Scale-110 and -translate-y-10 pushes the image UP 
             so it starts "inside" the previous section's territory 
          */
          className="w-full h-[110%] object-cover scale-110 -translate-y-10" 
        />
        
        {/* ULTIMATE BLEND: 
            Uses multiple stops (white -> white 20% -> transparent) 
            to ensure there is NO visible edge.
        */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-b from-white via-white/90 via-white/40 to-transparent" 
               style={{ height: '70%' }} />
        </div>
        
        {/* Subtle darkening for text readability */}
        <div className="absolute inset-0 bg-black/[0.03] z-0" />
        
        {/* Cloud Overlay - Deep Blend */}
        <div className="absolute top-10 left-0 right-0 w-full pointer-events-none z-20">
          <img 
            src={cloudImg} 
            alt="Fog" 
            className="w-full h-80 object-cover object-top opacity-70 blur-[2px]" 
          />
        </div>
      </div>

      {/* LAYER 2: SCROLLING CONTENT */}
      <div className="relative z-30 -mt-[100vh] w-full">
        {/* pt-[25vh] ensures the text stays far away from your sticky header 
            and starts only when the image is fully visible.
        */}
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-[25vh] pb-20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
          >
            <h2 
              className="text-black text-center uppercase mb-6" 
              style={{ 
                fontFamily: "'Anton', sans-serif", 
                fontWeight: 400,
                fontSize: "54px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              The Mountain
            </h2>
            <p 
              className="text-gray-950 text-center mb-6" 
              style={{ 
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              We are your local wise guide at 5500 metres ASL.
            </p>

            <p 
              className="text-[#090909] text-center mb-10" 
              style={{ 
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              For those who seek the ridge. This is the transition from tourist to climber.<br/> We provide the technical grit, the expert "beta," and the 3 AM alpine start.
            </p>
            
            {/* --- CARDS CONTAINER --- */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] w-full mx-auto">
              
              {/* CARD 1: PATALSU PEAK */}
              <div className="relative group overflow-hidden border border-white/20 shadow-xl w-full md:w-[569px] h-[425px]">
                <img 
                  src={patalsuImg} 
                  alt="Patalsu Peak" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* BLURRED BOTTOM SECTION WITH BUTTON */}
                <div className="absolute inset-x-0 bottom-0 bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center pt-2 pb-4 border-t border-white/20">
                  <p 
                    className="text-white  mb-4"
                    style={{ 
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    Patalsu Peak
                  </p>
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

              {/* CARD 2: BEAS KUND */}
              <div className="relative group overflow-hidden border border-white/10 shadow-2xl w-full md:w-[569px] h-[425px]">
                <img 
                  src={beasKundImg} 
                  alt="Beas Kund" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* BLURRED BOTTOM SECTION WITH BUTTON */}
                <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center pt-2 pb-4 border-t border-white/20">
                  <p 
                    className="text-white mb-4"
                    style={{ 
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    Beas Kund
                  </p>
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
          </motion.div>
        </div>
        
        {/* Spacer to show background before section moves up */}
        <div className="h-[80vh] pointer-events-none" /> 
      </div>
    </section>
  );
};

export default MountainSection;