import { Search, Send, Sparkles } from "lucide-react";
import heroBg from "@/assets/Home page background.jpg";
import cloudImg from "@/assets/cloud.png"; 

const HeroSection = () => {
  return (
    // 1. REMOVED 'overflow-hidden' so clouds/gradient can sit at the edge
    <section className="relative h-screen min-h-[900px] flex items-center justify-center">
      
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-iceland-dark-overlay/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-8xl mx-auto">
        <h1
          className="text-iceland-white uppercase mb-4 drop-shadow-lg text-center"
          style={{ 
            fontFamily: "'Anton', sans-serif", 
            fontSize: "64px", 
            fontWeight: 400, 
            lineHeight: "100%", 
            letterSpacing: "0",
            fontStyle: "normal"
          }}
        >
          Welcome to Iceland Adventures
        </h1>
        <p 
          className="text-iceland-white/90 mb-12 drop-shadow-md text-center"
          style={{ 
            fontFamily: "'Lato', sans-serif", 
            fontSize: "20px", 
            fontWeight: 400, 
            lineHeight: "100%", 
            letterSpacing: "0.06em"
          }}
        >
          Your safe place to do adventurous things 
        </p>

        {/* === SEARCH BAR === */}
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
      </div>

      {/* === FADE TO WHITE GRADIENT === */}
      {/* This creates the seamless blending into the next white section */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" 
        style={{
          height: "150px", // Height of the fade
          background: "linear-gradient(to top, #ffffff 10%, transparent 100%)" // Fades from solid white at bottom to transparent
        }}
      />

    </section>
  );
};

export default HeroSection;