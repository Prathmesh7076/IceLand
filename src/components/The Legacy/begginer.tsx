import React from "react";

// NOTE: Ensure your images are named exactly like this in your assets folder, 
// or update these paths to match your actual file names.
import gearImg from "@/assets/blog1.jpg";
import trafficImg from "@/assets/beginer2.png";
import weatherImg from "@/assets/blog3.jpg";

const BeginnersBreather = () => {
  const cards = [
    {
      title: "THE GEAR TRUTH",
      desc: "Why we provide the boots, not just the skis.",
      img: gearImg,
    },
    {
      title: "THE TRAFFIC HACK",
     desc: <>How staying at the end of the road <br /> saves you 4 hours of commute.</>,
      img: trafficImg,
    },
    
    {
      title: "THE WEATHER GUIDE",
      desc: "Decoding the Solang wind patterns for families.",
      img: weatherImg,
    },
  ];

  return (
    <section className="relative w-full py-28 px-4 bg-[#EAECEF] overflow-hidden">
      
      {/* Top Gradient: Blends seamlessly into the solid white section above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "54px", lineHeight: "100%" }}
            className="text-[#0D1926] uppercase mb-2"
          >
            {/* Wrapped securely to prevent ESLint apostrophe errors */}
            {"THE BEGINNER'S BREATHER"}
          </h2>
          <p
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "20px", fontWeight: 700 }}
            className="text-[#0D1926] normal-case tracking-wide"
          >
            Utility for the valley
          </p>
        </div>

        {/* CARDS GRID - Updated to Flexbox to handle fixed dimensions safely */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 w-full mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              /* Applied exact dimensions: w-[372px] h-[384px], opacity 1, rotation 0 */
              className="relative w-[372px] h-[384px] opacity-100 rotate-0 bg-gray-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group shrink-0"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Frosted Text Overlay at the Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-center px-6 border-t border-white/10">
                <h3
                  style={{ fontFamily: "'Anton', sans-serif", fontSize: "20px", letterSpacing: "0.02em" }}
                  className="text-white uppercase mb-1 drop-shadow-md leading-none"
                >
                  {card.title}
                </h3>
                <p
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "12px" }}
                  className="text-white/90 tracking-wide leading-tight drop-shadow-sm"
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Gradient: Blends seamlessly into the solid white section below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default BeginnersBreather;