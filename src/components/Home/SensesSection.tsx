import React from "react";
import { motion } from "framer-motion";
// IMPORTANT: Replace these with your actual image paths from your assets folder!
import sensesBg from "@/assets/part3back.jpg"; 
import hotelImg from "@/assets/part31.jpg";
import cottageImg from "@/assets/part32.jpg";

const SensesSection = () => {
  return (
    /* h-[200vh] provides the necessary scroll distance for the reveal.
       Changed bg-white to bg-[#090909] to match the dark theme of this section.
    */
    <section className="relative w-full h-[200vh] bg-[#090909]">
      
      {/* LAYER 1: STICKY BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <img 
          src={sensesBg} 
          alt="The Senses" 
          /* Darkened the background image slightly so the white text pops perfectly */
          className="w-full h-[110%] object-cover scale-110 -translate-y-10 opacity-50" 
        />
        
        {/* PERFECT BLEND: Multi-stop black gradient to blend with the dark theme */}
        <div className="absolute inset-0 z-10 pointer-events-none">
        </div>
      </div>

      {/* LAYER 2: SCROLLING CONTENT */}
      <div className="relative z-30 -mt-[100vh] w-full">
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-[25vh] pb-20">
          <motion.div
            className="max-w-[1300px] mx-auto text-center w-full"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
          >
            {/* HEADING */}
            <h2 
              style={{ 
                fontFamily: "'Anton', sans-serif",
                fontWeight: 400,
                fontSize: "54px", // Matches your previous section headings
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "uppercase",
                color: "#FFFFFF", // Changed to white for dark theme
                marginBottom: "16px" 
              }}
            >
              The Senses
            </h2>
            
            {/* SUBHEADING */}
            <p 
              style={{ 
                fontFamily: "'Lato', sans-serif, bold",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF", // Changed to white
                marginBottom: "20px" 
              }}
            >
              We are your safe getaway.
            </p>
            
            {/* PARAGRAPH */}
            <p 
              className="max-w-2xl mx-auto"
              style={{ 
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "140%", // Slightly increased for readability on dark background
                letterSpacing: "0%",
                textAlign: "center",
                color: "#D1D5DB", // Light gray so it doesn't fight the headings
                marginBottom: "64px",
              }}
            >
              The mountain takes; the hearth gives back. Recovery is not a luxury; it is a 
              requirement. This is where the body heals and the story of the climb is told.
            </p>
            
            {/* CARDS CONTAINER: Exact 10px gap, wrapping for smaller screens */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-[30px] w-full mx-auto">
              {[
                { img: hotelImg, title: "Hotel" },
                { img: cottageImg, title: "Cottage" }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  /* EXACT Dimensions: 570px width, 425px height */
                  className="relative group overflow-hidden shadow-2xl w-full lg:w-[570px] h-[425px] border border-white/10 shrink-0"
                >
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  
                  {/* BLURRED BOTTOM SECTION - Increased opacity slightly for the dark theme */}
                  <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center pt-5 pb-7 border-t border-white/20">
                    <p 
                      className="text-white mb-4 px-2"
                      style={{ 
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      {card.title}
                    </p>
                    
                    {/* Gradient Border Button: "Stay With Us" */}
                    <div className="rounded-[6px] p-[1.5px] bg-gradient-to-r from-[#FFFFFF] to-[#00A3FF]">
                      <button 
                        className="bg-[#366498] text-white text-sm tracking-wide px-10 py-2 rounded-[4.5px] transition-colors w-full h-full hover:bg-[#2c5275]"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Stay With Us
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

export default SensesSection;