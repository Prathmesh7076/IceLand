import React from "react";

const States = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 flex justify-center bg-white">
      
      {/* The centered blue rectangle */}
      <div className="w-full max-w-6xl bg-[#35638B] py-8 px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 shadow-lg">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-2"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            5500M
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em" 
            }} 
          >
            The highest altitude reached
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-2"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            100%
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em" 
            }} 
          >
            Technical Gear Reliability
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-2"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            3 AM
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "109%", 
              letterSpacing: "-0.03em" 
            }} 
          >
            The Standard Start Time
          </p>
        </div>

      </div>
    </section>
  );
};

export default States;