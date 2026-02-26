import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import terrainBg from "@/assets/blogbbackground.jpg";
import cardHotel from "@/assets/blog1.jpg";
import cardHiker from "@/assets/part22.jpg";
import cardWinter from "@/assets/blog1.jpg";

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
    title: "THE 5:00 AM RULE",
    subtitle: "Why leaving Manali before sunrise saves you 4 hours of your life.",
  },
  
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll amount = card width (400px) + gap (34px) = 434px
      const scrollAmount = 434; 
      
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
      <div className="absolute inset-0 z-0">
        <img 
          src={terrainBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* === MAIN LAYOUT === */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* === LEFT COLUMN: TEXT === */}
          {/* Exact Dimensions: 565px width, 275px height */}
          <div className="pt-20 lg:pt-60 w-full lg:w-[565px] lg:h-[275px] text-left flex flex-col items-start justify-center">
            {/* Heading: Anton */}
            <h2 
              className="text-[#ffffff] uppercase mb-4 drop-shadow-lg"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontWeight: 400,
                fontSize: "54px",
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              Read The Terrain
            </h2>

            <div className="space-y-6">
              {/* Subheading: Lato */}
              <p 
                className="text-[#ffffff] drop-shadow-md"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0",
                }}
              >
                Knowledge weighs nothing
              </p>

              {/* Body Text: Lato */}
              <p 
                className="text-[#D1D5DB] leading-relaxed drop-shadow-sm"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  letterSpacing: "0",
                }}
              >
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>

          {/* === RIGHT COLUMN: CAROUSEL (1 FULL + 1 HALF IMAGE) === */}
          {/* Exact Dimensions: 706px width (400px card + 34px gap + 272px half card) */}
          <div className="relative w-full lg:w-[706px] shrink-0"> 
            
            {/* Scrollable Container with exact 34px gap */}
            <div 
              ref={scrollRef}
              className="flex gap-[34px] overflow-x-auto pb-8 scrollbar-hide snap-x pt-10"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  // Exact Card Dimensions: 400px width, 538px height
                  className="flex-shrink-0 w-[400px] h-[538px] relative group snap-start cursor-pointer overflow-hidden border border-white/20 bg-black shadow-2xl"
                >
                  {/* Card Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                  />

                  {/* Text Content with Blur Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 py-6 px-4 text-center bg-black/50 backdrop-blur-sm border-t border-white/20">
                    <h3 
                      className="text-white uppercase mb-2"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "100%",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-white/80 font-medium leading-snug max-w-[95%] mx-auto"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* === NAVIGATION ARROWS === */}
            <div className="flex justify-center gap-4 mt-2 relative z-50">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 bg-transparent"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 bg-transparent"
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;