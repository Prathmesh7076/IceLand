import React from "react";

// 1. IMPORT YOUR CLOUD IMAGES
import topClouds from "@/assets/cloud.png";
import bottomClouds from "@/assets/cloud.png";

const Groomed = () => {
  return (
    /* z-20 and NO overflow-hidden allows the clouds to spill out.
       Background color set to #D5EAFE to match your blue design.
    */
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center z-20 bg-[#D5EAFE]">
      
      {/* 2. TOP CLOUDS - Overlapping the section above */}
      <img 
        src={topClouds} 
        alt="Top Clouds" 
        className="absolute top-0 left-0 w-full h-auto -translate-y-1/2 z-30 pointer-events-none"
      />

      {/* 3. BOTTOM CLOUDS - Overlapping the section below */}
      <img 
        src={bottomClouds} 
        alt="Bottom Clouds" 
        className="absolute bottom-0 left-0 w-full h-auto translate-y-1/2 z-30 pointer-events-none"
      />

      {/* 4. CONTENT AREA - Exact text from your image */}
      <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center justify-center gap-6">
        
        {/* HEADING: Exact Anton specs, Black #000000 */}
        <h2 className="font-['Anton'] font-normal text-[54px] leading-none tracking-[0px] uppercase text-[#000000]">
         WE DON’T SELL ADVENTURE. WE MANAGE RISK.
        </h2>
        
        {/* PARAGRAPH: Exact Lato Italic specs, Black #000000 */}
        <p className="font-['Lato'] font-medium italic text-[20px] leading-[1.4] tracking-[0px] text-[#000000] max-w-[900px]">
          Since 1995, we have been the ones the rescue teams call. We know where the ice thins and where the wind bites hardest. Our "Explore" mandate isn't about reckless adrenaline; it’s about calculated mastery. When you climb with Iceland Adventures, you are climbing with 30 years of mountain data.
        </p>

      </div>

    </section>
  );
};

export default Groomed;