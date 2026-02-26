import React from "react";
import { motion } from "framer-motion";
import valleyBg from "@/assets/part2back.jpg"; 
import snowSchoolImg from "@/assets/part21.jpg";
import valleyPlayImg from "@/assets/part22.jpg";
import pineWalkImg from "@/assets/part23.jpg";

const ValleySection = () => {
  return (
    /* h-[200vh] provides the necessary scroll distance for the reveal */
    <section className="relative w-full h-[200vh] bg-white">
      
      {/* LAYER 1: STICKY BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <img 
          src={valleyBg} 
          alt="Valley" 
          /* Image Overscan: Bleeds up into the Mountain reveal to kill the line */
          className="w-full h-[100%] object-cover scale-110 -translate-y-10" 
        />
        
        {/* PERFECT BLEND: Multi-stop white gradient to match Mountain sky/Header */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-[60%] w-full bg-gradient-to-b from-white via-white/90 via-white/40 to-transparent" />
        </div>
      </div>

      {/* LAYER 2: SCROLLING CONTENT */}
      <div className="relative z-30 -mt-[100vh] w-full">
        {/* pt-[25vh]: Header Buffer. 
            Heading only enters the visible area once it's clear of the sticky header.
        */}
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-[25vh] pb-20">
          <motion.div
            className="max-w-[1300px] mx-auto text-center w-full"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
          >
            <h2 
              style={{ 
                fontFamily: "'Anton', sans-serif",
                fontWeight: 400,
                fontSize: "54px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "uppercase",
                color: "black",
                marginBottom: "16px" 
              }}
            >
              The Valley
            </h2>
            <p 
              style={{ 
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#111827", 
                marginBottom: "20px" 
              }}
            >
              Mountain Home at 2600 metres ASL
            </p>
            <p 
              style={{ 
                fontFamily: "Lato",
                fontWeight: 100,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#111827", 
                marginBottom: "64px",
              }}
            >
              The valley is our classroom. Before you reach the summit, you must find your feet. We <br/> offer the space for families and first-timers to witness the snow without the fear.
            </p>
            
            {/* Cards Container: Exact 10px gap, wrapping for smaller screens */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] w-full mx-auto">
              {[
                { img: snowSchoolImg, title: "The Snow School" },
                { img: valleyPlayImg, title: "Valley Play" },
                { img: pineWalkImg, title: "The Pine Walk" }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  /* Exact Dimensions: 407px width, 400px height */
                  className="relative group overflow-hidden shadow-xl w-full md:w-[407px] h-[400px] border border-white/20"
                >
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  
                  {/* BLURRED BOTTOM SECTION WITH EXACT SAME JOIN BUTTON */}
                  <div className="absolute inset-x-0 bottom-0 bg-black/10 backdrop-blur-sm flex flex-col items-center justify-center pt-4 pb-6 border-t border-white/20">
                    <p 
                      className="text-white  mb-4 px-2"
                      style={{ 
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      {card.title}
                    </p>
                    
                    {/* Gradient Border Button */}
                    <div className="rounded-[6px] p-[1.5px] bg-gradient-to-r from-[#FFFFFF] to-[#00A3FF]">
                      <button 
                        className="bg-[#366498] text-white text-sm tracking-wide px-10 py-2 rounded-[4.5px] transition-colors w-full h-full hover:bg-[#2c5275]"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Join Us
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* REVEAL GAP: Holds the background visible before the next section slides up */}
        <div className="h-[80vh] pointer-events-none" />
      </div>
    </section>
  );
};

export default ValleySection;