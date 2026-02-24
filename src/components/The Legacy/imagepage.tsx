import React from "react";

// 1. IMPORT YOUR IMAGES HERE 
// (Make sure to change these filenames to whatever you actually named them in your assets folder!)
import mainBg from "@/assets/imagepage.jpg";
import topClouds from "@/assets/cloud.png";
import bottomClouds from "@/assets/cloud.png";

const ImagepageSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center z-20 bg-slate-200">
      
      {/* 2. ADD MAIN BACKGROUND HERE */}
      <img 
        src={mainBg} 
        alt="Main Background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 3. ADD TOP CLOUDS HERE */}
      <img 
        src={topClouds} 
        alt="Top Clouds" 
        className="absolute top-0 left-0 w-full h-auto -translate-y-1/2 z-30 pointer-events-none"
      />

      {/* 4. ADD BOTTOM CLOUDS HERE */}
      <img 
        src={bottomClouds} 
        alt="Bottom Clouds" 
        className="absolute bottom-0 left-0 w-full h-auto translate-y-1/2 z-30 pointer-events-none"
      />

    </section>
  );
};

export default ImagepageSection;