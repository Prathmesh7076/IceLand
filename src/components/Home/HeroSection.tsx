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
            fontSize: "100px", 
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
            fontSize: "36px", 
            fontWeight: 400, 
            lineHeight: "100%", 
            letterSpacing: "0.06em"
          }}
        >
          Your safe place to do adventurous things 
        </p>

        {/* === SEARCH BAR === */}
        <div className="relative w-full max-w-[940px] mx-auto">
          <div 
            className="flex items-center bg-[#1e2330] border-[#1890c7] transition-all shadow-[0_0_40px_rgba(14,165,233,0.6)] hover:shadow-[0_0_55px_rgba(14,165,233,0.8)]"
            style={{
              height: "114px",
              borderRadius: "29.26px",
              borderWidth: "4.04px",
              paddingTop: "13.12px",
              paddingBottom: "13.12px",
              paddingLeft: "45.4px",
              paddingRight: "45.4px",
              gap: "10.09px"
            }}
          >
            <div className="relative flex-shrink-0">
              <Search className="text-white w-8 h-8 stroke-[2.5]" />
              <Sparkles className="text-white absolute -top-1 -right-2 w-3 h-3 fill-white" />
            </div>
            
            <input
              type="text"
              placeholder="Find your next adventure"
              className="w-full bg-transparent text-white text-lg md:text-xl placeholder:text-gray-200 outline-none font-normal tracking-wide py-2"
            />
            
            <button className="flex-shrink-0 bg-[#2d3342] hover:bg-[#3b4254] text-white p-4 rounded-xl transition-colors duration-300 group ml-2 border border-white/10">
              <Send className="w-5 h-5 rotate-45 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
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