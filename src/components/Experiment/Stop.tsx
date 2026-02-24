import { motion } from "framer-motion";
import skiImg from "@/assets/stop1.avif"; 
import skiImg2 from "@/assets/stop2.avif"; 
import skiImg3 from "@/assets/stop3.jpg"; 

const Stop = () => {
  const cards = [
    { title: "THE FIRST-TIMER'S WEDGE", sub: "(1-Day Intro)", img: skiImg },
    { title: "THE FEB BATCH INTENSIVES", sub: "(5-Day Certification)", img: skiImg2 },
    { title: "PRIVATE FAMILY COACHING", sub: "(Personalized pace for all ages)", img: skiImg3 },
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#ffffff] flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* HEADER SECTION: ALL CENTERED */}
        <motion.div 
          className="text-center mb-12 w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-[#0D1926] uppercase mb-2 pt-4"
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "48px", lineHeight: "100%" }}
          >
            STOP SLIDING. START SKIING
          </h2>
          
          <p 
            className="text-[#0D1926] mb-4" 
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontSize: "20px", 
              fontWeight: 700, 
              letterSpacing: "0.06em" 
            }}
          >
            The transition from tourist to skier
          </p>

          <p className="text-[#0D1926] max-w-7xl mx-auto text-lg font-medium leading-relaxed">
           We don’t just rent you planks; we give you a skill. Our instructors are athletes who have spent decades on these <br className="hidden md:block"/> slopes. We provide private, cordoned-off sections of the mountain so you can fail safely until you succeed.
          </p>
        </motion.div>

        {/* IMAGE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full -mt-2">
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              // Added relative and overflow-hidden to contain the new overlay inside the card
              className="relative flex flex-col items-center text-center overflow-hidden shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Main Image: Maintained exact aspect ratio */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full aspect-[3/3] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Frosted Glass Overlay (Auto-sizes to height of text + button) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center pt-3 pb-3 px-4 border-t border-white/10">
                
                {/* Heading: Maintained original text-xl size and font */}
                <h3 
                  className="text-white text-xl uppercase mb-1 drop-shadow-md" 
                  style={{ fontFamily: "'Anton', sans-serif", lineHeight: "1.2" }}
                >
                  {card.title}
                </h3>
                
                {/* Subheading: Maintained original text-sm size and font */}
                <p 
                  className="text-white/90 text-sm font-lato normal-case tracking-widest mb-4 drop-shadow-sm" 
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {card.sub}
                </p>

                {/* Exact Replicated Button */}
                {/* Wrapper handles the gradient border: White on left blending to blue on right */}
                <div className="rounded-[6px] p-[1.5px] bg-gradient-to-r from-[#FFFFFF] to-[#00A3FF]">
  <button 
    className="bg-[#366498] text-white text-sm tracking-wide px-10 py-1.5 rounded-[4.5px] transition-colors w-full h-full"
    style={{ fontFamily: "'Lato', sans-serif" }}
  >
    Join Us
  </button>
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stop;