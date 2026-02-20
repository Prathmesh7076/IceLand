import { Search, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
// Ensure these paths match your assets folder
import heroBg from "@/assets/Experianceheroback.avif";
import cloudImg from "@/assets/cloud.png";

const Experiencehero = () => {
  return (
    <section className="relative h-screen min-h-[900px] pt-40 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark overlay to make white text pop */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Main Heading - Using Figma Specs: Anton, 100px, Uppercase */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-sans uppercase tracking-normal mb-2"
          style={{ 
            fontFamily: "'Anton', sans-serif", 
            fontSize: "clamp(64px, 10vw, 72px)", // Responsive size up to 100px
            lineHeight: "72px" // Adjust line height for better spacing
          }}
        >
          THE VALLEY
        </motion.h1>

        {/* Subheading */}
       {/* Inside Experiencehero.tsx */}
<p 
  className="text-white mb-6 tracking-[0.06em] drop-shadow-md"
  style={{ 
    fontFamily: "'Lato', sans-serif", 
    fontSize: "clamp(24px, 3vw, 24px)", 
    fontWeight: 700 
  }}
>
  We are your Mountain Home at 2600m ASL
</p>
        {/* Description Text */}
        <p className="text-white text-lg md:text-lg font-lato max-w-2.5px mx-auto mb-10 leading-relaxed">
          Before you earn the summit, you must learn the snow. The valley is our heritage and your <br/>
           classroom a sanctuary for families to find their rhythm in the wild without the bite of the frost.
        </p>

        {/* === BLUE GLOW SEARCH BAR === */}
        <div className="relative max-w-xl mx-auto w-full mb-20 group">
  <div className="flex items-center bg-[#1e2330] border-[4.4px] border-[#03a5ef] rounded-xl p-2 transition-all 
    /* High-intensity permanent glow: Blur 40px, Spread 15px */
    shadow-[0_0_30px_8px_rgba(3,165,239,0.8)]">
    
    <div className="relative flex-shrink-0 ml-3 mr-3">
      <Search className="text-white w-7 h-7 stroke-[2.5]" />
      <Sparkles className="text-white absolute -top-1 -right-2 w-3 h-3 fill-white" />
    </div>

    <input
      type="text"
      placeholder="What's your next adventure?"
      className="w-full bg-transparent text-white text-lg placeholder:text-gray-400 outline-none font-normal py-2"
    />

    <button className="bg-[#272B34] hover:bg-[#1C1F28] text-white p-3 rounded-xl transition-all duration-300">
      <Send className="w-5 h-5 rotate-45 relative left-[-2px] top-[1px]" />
    </button>
  </div>
</div>

      {/* Added ml-auto to push the whole block to the right */}
{/* 1. max-w-5xl gives it enough width to breathe like the screenshot.
  2. justify-items-center ensures the three blocks are balanced.
  3. items-start on the inner divs ensures strictly left alignment.
*/}
<div className="grid grid-cols-3 gap-0 text-white pt-16 w-full max-w-5xl mx-auto items-center">
  
  {/* STAT 1 */}
  <div className="flex flex-col items-start justify-center pl-8 md:pl-16">
    <span className="text-xl md:text-2xl font-bold block mb-1">30</span>
    <span className="text-sm md:text-sm normal-case tracking-wider opacity-90 font-medium">
      Winters Witnessed
    </span>
  </div>

  {/* STAT 2 (With Vertical Dividers) */}
  <div className="flex flex-col items-start justify-center border-l border-r border-white/30 px-8 md:px-16 h-16">
    <span className="text-xl md:text-2xl font-bold block mb-1">10,000+</span>
    <span className="text-sm md:text-sm normal-case tracking-wider opacity-90 font-medium">
      First Tracks Guided
    </span>
  </div>

  {/* STAT 3 */}
  <div className="flex flex-col items-start justify-center pl-8 md:pl-16">
    <span className="text-xl md:text-2xl font-bold block mb-1">0</span>
    <span className="text-sm md:text-sm normal-case tracking-wider opacity-90 font-medium">
      Compromises on Safety
    </span>
  </div>
  
</div>
      </div>
    </section>
  );
};

export default Experiencehero;