import React from "react";

const Rejuvenate = () => {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1926]">
      {/* Background Overlay: 
        Using a dark navy/black gradient ensures your WHITE navbar buttons 
        are clearly visible at the top.
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0D1926]/40 to-[#0D1926]" />
        {/* You can replace this placeholder with a high-quality spa or mountain lake image later */}
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="relative z-10 text-center px-4">
        <h1 
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-6xl md:text-8xl text-white uppercase tracking-tighter mb-4 opacity-90"
        >
          Rejuvenate
        </h1>
        
        <div className="flex flex-col items-center gap-2">
          <p 
            style={{ fontFamily: "'Lato', sans-serif" }}
            className="text-xl md:text-2xl text-white/80 font-light italic tracking-widest uppercase"
          >
            Coming Soon
          </p>
          
          {/* Decorative Line */}
          <div className="h-[1px] w-24 bg-white/40 my-4" />
          
          <p 
            style={{ fontFamily: "'Lato', sans-serif" }}
            className="max-w-md text-white/60 text-sm md:text-base leading-relaxed"
          >
            We are crafting a world-class relaxation experience to help you 
            recover after the ultimate adventure. Stay tuned.
          </p>
        </div>
      </div>

      {/* Bottom subtle detail to match your "Cloud" aesthetic */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D1926] to-transparent z-10" />
    </main>
  );
};

export default Rejuvenate;