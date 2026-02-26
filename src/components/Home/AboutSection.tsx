import { Play } from "lucide-react";
// Make sure this path matches your actual file structure
import skierVideoImg from "@/assets/skier-video.jpg"; 

const stats = [
  { value: "5500", label: "The highest altitude reached" },
  { value: "100%", label: "Technical Gear Reliability" },
  { value: "3AM", label: "The Standard Start TIme" }
  
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      {/* 1. Main container increased to max-w-7xl for larger layout */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Title & Subtitle Wrapper - Constrained width to keep text readable */}
        <div className="max-w-3xl mx-auto">
         <h2
  className="text-iceland-navy uppercase mb-6 text-center"
  style={{
    fontFamily: "'Anton', sans-serif",
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "0",
    fontStyle: "normal"
  }}
>
  30 Years in the Wild
</h2>

          <div className="mb-12 text-center ">
  <p 
    className="text-black"
    style={{
      
      fontFamily: "'Lato', sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "100%",
      letterSpacing: "0",
      margin: "" // Removes default gap so they sit closer if needed
    }}
  >
    Before the roads, before the crowds, there was the valley.<br/> We didn't just move here; we belong here. This is the story of a family that chose the mountain.
  </p>
</div>
        </div>

        {/* 2. Video Image Section - Set to w-full to fill the 7xl container */}
        <div className="relative w-full mx-auto cursor-pointer group mb-20">
          <img
            src={skierVideoImg}
            alt="Skier jumping in mid-air"
            className="w-full h-auto rounded-sm shadow-lg object-cover"
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-iceland-white/80 group-hover:bg-iceland-white transition-colors rounded-full flex items-center justify-center shadow-xl">
              <Play className="text-iceland-navy w-7 h-7 md:w-10 md:h-10 ml-1" fill="hsl(var(--iceland-navy))" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto rounded-sm bg-[#366498]">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="py-5 px-14 text-start ">
                <p className="text-white text-xl md:text-xl font-lato" style={{ fontFamily: "var(--font-lato)" }}>
                  {stat.value}
                </p>
                <p className="text-white/80 text-[14px] md:text-sm mt-1 tracking-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;