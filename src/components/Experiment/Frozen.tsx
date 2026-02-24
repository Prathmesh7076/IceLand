import sledgeImg from "@/assets/frozenback.avif";
import polaroidImg from "@/assets/frozen.avif";

const Frozen = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* --- FULL SCREEN BACKGROUND WITH SMOOTH BLEND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={sledgeImg}
          className="w-full h-full object-cover object-center"
          alt="background"
        />

        {/* Top Gradient: Blends seamlessly into the solid white section above */}
        <div className="absolute top-0 left-0 right-0 h-[45vh] bg-gradient-to-b from-white via-white/80 to-transparent" />

        {/* Side Gradients: Creates the subtle vignette fade seen in the design */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white/60 to-transparent" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-24">

        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "Anton", fontSize: "48px", lineHeight: "100%" }}
            className="text-[#0D1926] uppercase mb-3"
          >
            THE FROZEN PLAYGROUND
          </h2>
          <p
            style={{ fontFamily: "Lato", fontWeight: 700, fontSize: "20px" }}
            className="text-[#0D1926] normal-case tracking-wide mb-4"
          >
            High-energy. Low-friction
          </p>
          <p
            style={{ fontFamily: "Lato", fontSize: "18px" }}
            className="text-[#0D1926] max-w-2xl mx-auto leading-relaxed font-lato"
          >
            For those who want the thrill of the cold without the technical learning curve. <br className="hidden md:block"/>
            We manage the gear and the safety so you can focus on the gravity.
          </p>
        </div>

        {/* MAIN VISUAL GRID */}
        <div className="w-[1038px] h-[474px] flex flex-row items-center gap-[159px] mx-auto mt-6 opacity-100 rotate-0 shrink-0 max-w-full overflow-x-auto md:overflow-visible">

          {/* LEFT: The Polaroid Frame */}
          <div className="w-[427px] h-[474px] border-[5px] border-white bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden shrink-0 opacity-100 rotate-0">
            <img
              src={polaroidImg}
              className="w-full h-full object-cover"
              alt="polaroid"
            />
          </div>

          {/* RIGHT: Banner with Transparent Glass Effect (No Blur) */}
          <div
            className="shrink-0 flex flex-col items-center justify-center relative overflow-hidden rounded-lg bg-slate-800/50 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
            style={{ 
              width: '452px', 
              height: '198px'
            }}
          >
            <div className="relative z-10 flex flex-col items-center">
              <h3 
                className="text-white uppercase mb-1 drop-shadow-md text-3xl" 
                style={{ fontFamily: "'Anton', sans-serif", lineHeight: "1.2" }}
              >
                THE SLEDGE RUN
              </h3>
              <p 
                className="text-white/90 text-sm font-lato normal-case tracking-widest mb-6 drop-shadow-sm" 
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Traditional wooden sleds on groomed slopes.
              </p>

              {/* Exact Replicated Gradient Border Button */}
              <div className="rounded-[6px] p-[1.5px] bg-gradient-to-r from-[#FFFFFF] to-[#00A3FF]">
                <button 
                  className="bg-[#366498] text-white text-sm tracking-normal px-14 py-2 rounded-[4.5px] transition-colors w-full h-full hover:bg-[#2c5275]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Frozen;