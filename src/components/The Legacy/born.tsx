import React from "react";

// 1. IMPORT YOUR CLOUD IMAGES
import topClouds from "@/assets/cloud.png";
import bottomClouds from "@/assets/cloud.png";

const Born = () => {
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
          BORN IN THE VALLEY, NOT BUILT FOR THE INTERNET
        </h2>
        
        {/* PARAGRAPH: Exact Lato Italic specs, Black #000000 */}
        <p className="font-['Lato'] font-medium italic text-[20px] leading-[1.4] tracking-[0px] text-[#000000] max-w-[700px]">
          In 1995, we didn't have a website. We had a shovel and a pot of tea. We built Hotel 
          Iceland at the very end of the road because we wanted to be the first ones to touch the 
          snow. Today, we remain the keepers of the valley floor. When you book an "Experience" 
          with us, you are stepping into a 30-year-old family tradition of mountain hospitality.
        </p>

      </div>

    </section>
  );
};

export default Born;