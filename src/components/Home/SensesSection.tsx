import React from "react";
import { motion } from "framer-motion";
import sensesBg from "@/assets/part3back.jpg";
import hotelImg from "@/assets/part31.jpg";
import cottageImg from "@/assets/part32.jpg";

const SensesSection = () => {
  return (
    <section className="relative w-full h-[180vh] bg-black border-t border-white/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <img src={sensesBg} alt="Senses" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-30 -mt-[100vh] w-full">
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-[25vh]">
          <motion.div
            className="max-w-7xl mx-auto text-center w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                color: "white",
                marginBottom: "16px",
              }}
            >
              THE SENSES
            </h2>
            <p
              style={{
                fontFamily: "Lato",
                fontWeight: 700,
                fontSize: "36.81px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#ffffff",
                marginBottom: "32px",
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
                color: "#ffffff",
                marginBottom: "64px",
              }}
            >
              The valley is our classroom. Before you reach the summit, you must find your feet. We <br /> offer the space for families and first-timers to witness the snow without the fear.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { img: hotelImg, label: "HOTEL" },
                { img: cottageImg, label: "COTTAGE" },
              ].map((item, idx) => (
                <div key={idx} className="relative group overflow-hidden border-2 border-white/40 shadow-2xl rounded-sm aspect-[16/9]">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* BOTTOM BLUR SECTION - Matching the Image */}
                  <div className="absolute inset-x-0 bottom-0 bg-black/20 backdrop-blur-sm pt-0 pb-4 flex flex-col items-center justify-end border-t border-white/10">
                    <h3 
                      style={{ 
                        fontFamily: "Anton", 
                        fontSize: "42px", 
                        color: "white", 
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "12px"
                      }}
                    >
                      {item.label}
                    </h3>
                    <button className="px-10 py-2  border border-blue-400/60 bg-black/40 text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                      Stay With Us
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="h-[80vh] pointer-events-none" />
      </div>
    </section>
  );
};

export default SensesSection;