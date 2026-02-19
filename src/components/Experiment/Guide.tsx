import { motion } from "framer-motion";
import skiImg from "@/assets/guide1.avif"; 
import skiImg2 from "@/assets/guide2.avif"; 
import skiImg3 from "@/assets/guide3.avif"; 

const Guide = () => {
  const cards = [
    { title: "The Pine Forest Walk", sub: "(2-Hour guided nature immersion)", img: skiImg },
    { title: "The Riverside Ritual", sub: "(Walk to the Beas bank for tea)", img: skiImg2 },
    { title: "The Solang Heritage Tour", sub: "(Village history and local architecture)", img: skiImg3 },
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
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "54px", lineHeight: "100%" }}
          >
            THE GUIDED SILENCE
          </h2>
          
          <p 
            className="text-[#0D1926] mb-4" 
            style={{ 
              fontFamily: "'Lato', sans-serif", 
              fontSize: "24px", 
              fontWeight: 700, 
              letterSpacing: "0.06em" 
            }}
          >
            Read the mountain like a book
          </p>

          <p className="text-[#0D1926] max-w-7xl mx-auto text-lg font-lato leading-relaxed">
          The valley is alive if you know where to look. We lead you away from the crowds and <br/> into the old-growth cedar forests to hear the stories of the peaks that surround us.
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
                className="text-[#1B232A] text-2xl uppercase mb-1" 
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

export default Guide;