import React from "react";

const Stats = () => {
  return (
    /* Full height section to keep the box centered in the viewport */
    <section className="relative w-full min-h-80 flex items-center justify-center bg-white z-20 px-4">
      
      {/* The Stats Box 
        Width: 949px (max-width)
        Gap: 140px (between items)
        Padding: 40px top/bottom, 95px left/right
      */}
      <div 
        className="w-full max-w-[999px] bg-[#35638B] grid grid-cols-1 md:grid-cols-3 shadow-lg"
        style={{ 
          gap: "140px", 
          paddingTop: "40px", 
          paddingBottom: "40px", 
          paddingLeft: "95px", 
          paddingRight: "95px" 
        }}
      >
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-1"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            10,950
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em" 
            }} 
          >
         Days Witnessed 
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-1"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            2
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em" 
            }} 
          >
            Generations of Leadership
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 
            className="text-white mb-1"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 700, 
              fontSize: "20px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em", 
              textTransform: "uppercase" 
            }} 
          >
            1995
          </h3>
          <p 
            className="text-white/90"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 400, 
              fontSize: "14px", 
              lineHeight: "1.09", 
              letterSpacing: "-0.03em" 
            }} 
          >
            The Year The Hearth Was Lit
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;