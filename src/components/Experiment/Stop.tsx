import { motion } from "framer-motion";
import skiImg from "@/assets/part21.jpg"; 

const Stop = () => {
  const cards = [
    { title: "THE FIRST-TIMER'S WEDGE", sub: "(1-Day Intro)" },
    { title: "THE FEB BATCH INTENSIVES", sub: "(5-Day Certification)" },
    { title: "PRIVATE FAMILY COACHING", sub: "(Personalized pace for all ages)" },
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#EAF6FA]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-[#1a1f2e] uppercase mb-2"
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "100px", lineHeight: "100%" }}
          >
            STOP SLIDING. START SKIING
          </h2>
          <p 
            className="text-[#1a1f2e] mb-10"
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontSize: "36px", 
              fontWeight: 700, 
              letterSpacing: "0.06em" 
            }}
          >
            The transition from tourist to skier
          </p>
          <p className="text-[#334155] max-w-4xl mx-auto text-xl font-medium leading-relaxed">
            We don't just rent you planks; we give you a skill. Our instructors are athletes who 
            have spent decades on these slopes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={skiImg} className="w-full aspect-[4/3] object-cover mb-6" />
              <h3 className="text-[#1a1f2e] text-3xl uppercase text-center" style={{ fontFamily: "'Anton', sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>
                {card.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stop;