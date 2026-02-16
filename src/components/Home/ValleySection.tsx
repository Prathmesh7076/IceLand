import React from "react";
import { motion } from "framer-motion";
import valleyBg from "@/assets/part2back.jpg"; 
import snowSchoolImg from "@/assets/part21.jpg";
import valleyPlayImg from "@/assets/part22.jpg";
import pineWalkImg from "@/assets/part21.jpg";

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
            className="max-w-7xl mx-auto text-center w-full"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
          >
            <h2 
  style={{ 
    fontFamily: "Anton",
    fontWeight: 400,
    fontSize: "80px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "black",
    marginBottom: "16px" // Corresponds to mb-4
  }}
>
  The Valley
</h2>
           <p 
  style={{ 
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "36.81px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#111827", // matches text-gray-900
    marginBottom: "32px" // matches mb-16
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
    color: "#111827", // matches text-gray-900
    marginBottom: "64px",
    // matches mb-16
  }}
>
  The valley is our classroom. Before you reach the summit, you must find your feet. We <br/> offer the space for families and first-timers to witness the snow without the fear.
</p>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: snowSchoolImg, title: "The Snow School" },
                { img: valleyPlayImg, title: "Valley Play" },
                { img: pineWalkImg, title: "The Pine Walk" }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-sm shadow-2xl aspect-[3/4] border border-white/10"
                >
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-md py-6 border-t border-white/10">
                    <p className="text-white font-black uppercase tracking-widest text-sm md:text-base">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* REVEAL GAP: Holds the background visible before the Senses section slides up */}
        <div className="h-[80vh] pointer-events-none" />
      </div>
    </section>
  );
};

export default ValleySection;