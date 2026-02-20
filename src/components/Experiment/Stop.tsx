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

        {/* IMAGE SECTION: REDUCED TOP MARGIN FOR TIGHTER ALIGNMENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full -mt-2">
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full aspect-[4/3] object-cover mb-6 shadow-sm" 
              />
              
              <h3 
                className="text-[#1B232A] text-xl uppercase mb-1" 
                style={{ fontFamily: "'Anton', sans-serif", lineHeight: "1.2" }}
              >
                {card.title}
              </h3>
              
              <p 
                className="text-[#1B232A] text-sm font-lato normal-case tracking-widest opacity-90" 
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {card.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stop;