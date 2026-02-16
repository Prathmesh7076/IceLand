import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import terrainBg from "@/assets/blogbbackground.jpg";
import cardHotel from "@/assets/blog1.jpg";
import cardHiker from "@/assets/part22.jpg";
import cardWinter from "@/assets/blog3.jpg";

const cards = [
  {
    image: cardHotel,
    title: "THE 5:00 AM RULE",
    subtitle: "Why leaving Manali before sunrise saves you 4 hours of your life.",
  },
  {
    image: cardHiker,
    title: "WHY WE DON'T RENT JEANS.",
    subtitle: "Why leaving Manali before sunrise saves you 4 hours of your life.",
  },
  {
    image: cardWinter,
    title: "THE WINTER OF '95.",
    subtitle: "When the road disappeared for three weeks, and we learned to love the silence.",
  },
  {
    image: cardHotel,
    title: "THE 5:00 AM RULE",
    subtitle: "Why leaving Manali before sunrise saves you 4 hours of your life.",
  },
  {
    image: cardHiker,
    title: "WHY WE DON'T RENT JEANS.",
    subtitle: "Why leaving Manali before sunrise saves you 4 hours of your life.",
  },
  {
    image: cardWinter,
    title: "THE WINTER OF '95.",
    subtitle: "When the road disappeared for three weeks, and we learned to love the silence.",
  },
  
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll amount = card width (340px) + gap (24px) = 364px
      const scrollAmount = 364; 
      
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full py-24 bg-gray-900 overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={terrainBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8  right-24">
        
        {/* === MAIN GRID === */}
        {/* Left 35% | Right 65% */}
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-left">
          
          {/* === LEFT COLUMN: TEXT === */}
          <div className=" pt-28 max-w-2xl z-20 text-left items-start flex flex-col left-20">
  {/* Heading: Anton 80px Uppercase */}
  <h2 
    className="text-white uppercase"
    style={{
      fontFamily: "'Anton', sans-serif",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "60px",
      lineHeight: "100%",
      letterSpacing: "0",
      textAlign: "left"
    }}
  >
    Read The Terrain
  </h2>

  <div className="space-y-4">
    {/* Subheading: Lato 700 Bold 36px */}
    <p 
      className="text-white"
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "32px",
       
        letterSpacing: "0",
        textAlign: "left"
      }}
    >
      Knowledge weighs nothing
    </p>

    {/* Body Text: Lato 400 Regular 36.81px */}
    <p 
      className="text-white"
      style={{
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "18.81px",
       
        letterSpacing: "0",
        textAlign: "left"
      }}
    >
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
    </p>
  </div>
  
  <button 
  className="relative bg-[#60A5FA] hover:bg-[#3B82F6] text-black font-semibold transition-all shadow-[0_0_15px_rgba(96,165,250,0.4)] mt-4 self-start flex items-center justify-center overflow-hidden"
  style={{
    width: "360px",
    height: "70px",
    borderRadius: "14px",
    opacity: 1,
    padding: "3.04px", // This acts as the border width
    background: "linear-gradient(to right, #3B82F6 40%, white 60%)", // Smooth blend in the middle
  }}
>
  {/* Inner content container to create the solid background look */}
  <div 
    className="w-full h-full flex items-center justify-center bg-[#60A5FA] transition-colors"
    style={{ 
      borderRadius: "10px", // Slightly smaller than outer radius to look uniform
      paddingTop: "13.12px",
      paddingRight: "45.4px",
      paddingBottom: "13.12px",
      paddingLeft: "45.4px",
      gap: "10.09px",
    }}
  >
    Discover more
  </div>
</button>
</div>

          {/* === RIGHT COLUMN: CAROUSEL === */}
          <div className="relative w-full min-w-0 lg:w-[150%] lg:-mr-[50vw]"> 
            
            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 pr-20 scrollbar-hide snap-x px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  // Card Width: 340px fixed
                  className="flex-shrink-0 w-[300px] md:w-[340px] h-[450px] relative group snap-start cursor-pointer overflow-hidden border border-white/10 shadow-2xl bg-black"
                >
                  {/* Card Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0  to-transparent" />

                  {/* Text Content with Blur Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center backdrop-blur-sm bg-black/40 border-t border-white/10">
                    <h3 className="text-white text-2xl font-black uppercase leading-none mb-3 drop-shadow-lg">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-medium leading-relaxed max-w-[90%] mx-auto">
                      {card.subtitle}
                    </p>
                    {/* Thin line decoration */}
                    <div className="w-12 h-[1px] bg-white/40 mx-auto mt-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* === NAVIGATION ARROWS === */}
            {/* - Centered relative to the visible part of the carousel.
                - lg:w-[66%] roughly matches the width of the first 2 visible cards.
            */}
            <div className="flex justify-center gap-4 mt-2 relative z-50 lg:w-[95%]">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;