import { Search, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
// Ensure these paths match your assets folder
import heroBg from "@/assets/blogbbackground.jpg";
import cloudImg from "@/assets/cloud.png";

const Experiencehero = () => {
  return (
    <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
      
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
          className="text-white font-bold uppercase tracking-normal mb-2"
          style={{ 
            fontFamily: "'Anton', sans-serif", 
            fontSize: "clamp(60px, 10vw, 100px)", // Responsive size up to 100px
            lineHeight: "100%" 
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
    fontSize: "clamp(20px, 3vw, 36px)", 
    fontWeight: 700 
  }}
>
  We are your Mountain Home at 2600m ASL
</p>
        {/* Description Text */}
        <p className="text-white text-xl md:text-base font-lato max-w-2.5xl mx-auto mb-10 leading-relaxed">
          Before you earn the summit, you must learn the snow. The valley is our heritage and your <br/>
           classroom a sanctuary for families to find their rhythm in the wild without the bite of the frost.
        </p>

        {/* === BLUE GLOW SEARCH BAR === */}
        <div className="relative max-w-2xl mx-auto w-full mb-20 group">
          <div className="flex items-center bg-[#1e2330]/90 backdrop-blur-sm border-[3px] border-[#1890c7] rounded-2xl shadow-[0_0_40px_rgba(24,144,199,0.5)] p-2 transition-all hover:shadow-[0_0_55px_rgba(24,144,199,0.7)]">
            <div className="relative flex-shrink-0 ml-3 mr-3">
              <Search className="text-white w-7 h-7 stroke-[2.5]" />
              <Sparkles className="text-white absolute -top-1 -right-2 w-3 h-3 fill-white" />
            </div>
            <input
              type="text"
              placeholder="What's your next adventure?"
              className="w-full bg-transparent text-white text-lg placeholder:text-gray-400 outline-none font-normal py-2"
            />
            <button className="bg-[#2d3342] hover:bg-[#3b4254] text-white p-3 rounded-xl transition-all duration-300">
              <Send className="w-5 h-5 rotate-45 relative left-[-2px] top-[1px]" />
            </button>
          </div>
        </div>

        {/* === STATS ROW FROM SCREENSHOT === */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-white pt-10 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold block">30</span>
            <span className="text-[10px] uppercase tracking-widest opacity-80">Winters Witnessed</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-white/20 px-4">
            <span className="text-2xl md:text-3xl font-bold block">10,000+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-80">First Tracks Guided</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold block">0</span>
            <span className="text-[10px] uppercase tracking-widest opacity-80">Compromises on Safety</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencehero;