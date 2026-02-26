import { useState } from "react";
// UPDATE THIS PATH: Import your specific image file here
import campingImg from "@/assets/Explore more.jpg";

const images = [campingImg, campingImg, campingImg];

const HistorySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      
      {/* === CONTAINER === 
          - 'md:pl-0': Starts at the very left edge.
          - 'md:pr-[5%]': Keeps the right side contained.
      */}
      <div className="w-full px-4 md:pl-0 md:pr-[5%]">
        
        {/* === HEADER SECTION === */}
      <div className="w-full flex justify-center py-16">
  <div className="max-w-7xl w-full px-4 flex flex-col items-center text-center">
    <h2
      className="text-[#0D1926] uppercase w-full"
      style={{
        fontFamily: "'Anton', sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "54px",
        lineHeight: "100%",
        letterSpacing: "0",
        textAlign: "center"
      }}
    >
      We Were Here Before the Roads
    </h2>
    <p
      className="text-[#000000] mt-4"
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "100%",
        letterSpacing: "0",
        textAlign: "center",
        maxWidth: "1100px" // Limits line width so it stays readable while centered
      }}
    >
      Generations change. The mountain remains. And we are still here.
    </p>
  </div>
</div>

        {/* === CONTENT GRID (UNEVEN SPLIT) === */}
        {/* UPDATED GRID: 
            - 'md:grid-cols-[60%_40%]': 
               - 60% width for the Image Column (Left).
               - 40% width for the Text Column (Right).
            - This makes the image significantly wider than the text.
        */}
        <div className="grid md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center w-full ml-0 mr-auto">
  
  {/* === LEFT COLUMN: IMAGE === */}
  <div className="w-full">
    <div className="relative bg-gray-100 rounded-lg shadow-2xl overflow-hidden w-full">
      <img
        src={images[activeSlide]}
        alt="Camping at base of mountain"
        // UPDATED: 
        // 1. 'aspect-[16/9]' makes it shorter than '3/2'. 
        // 2. 'object-bottom' ensures the bottom stays visible, cutting off the top.
        className="w-full h-auto object-cover object-bottom aspect-[11/6]"
      />
    </div>
            
            {/* Carousel Dots */}
           <div className="flex justify-center gap-2 mt-6">
  {/* .slice(0, 2) ensures only the first 2 dots are generated */}
  {images.slice(0, 2).map((_, index) => (
    <button
      key={index}
      onClick={() => setActiveSlide(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        index === activeSlide
          ? "bg-slate-900 scale-110"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>
          </div>

          {/* === RIGHT COLUMN: TEXT (SMALLER: 40%) === */}
          <div className="space-y-10 md:pr-10">
  <div className="space-y-6 text-slate-700">
    <p 
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "100%",
        letterSpacing: "0"
      }}
    >
      In 1995, when Solang was a silent wilderness of cedar and ice, we <br/> laid the first stone of Hotel Iceland. We didn't build a hotel; we  <br/> built a basecamp.
    </p>
    <p 
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "100%",
        letterSpacing: "0"
      }}
    >
      The world queues for hours at the Manali gates you wake up at the <br/> foot of the lift, claiming the first tracks before the first tourist bus <br/> honks its horn.
    </p>
  </div>


            {/* Styled Button */}
          <div className="flex justify-start">
  <button 
    className="bg-slate-950 text-white text-xl tracking-normal border-cyan-500 hover:bg-slate-900 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 shadow-md flex items-center justify-center"
    style={{
      fontFamily: "'Lato', sans-serif",
      width: "215px",
      height: "64px",
      padding: "13px 45px",
      gap: "10.09px",
      borderRadius: "14px",
      borderWidth: "4.04px",
    }}
  >
    Explore more
  </button>
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistorySection;