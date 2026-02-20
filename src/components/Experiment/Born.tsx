import React from 'react';

const BornInTheValley = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#b8e4f3] overflow-hidden">
      {/* Top Gradient for Blending */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 
            className="text-[#0D1926] uppercase mb-2 pt-4"
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "54px", lineHeight: "100%" }}
          >
            BORN IN THE VALLEY, NOT BUILT FOR THE INTERNET
          </h2>
          

        {/* Descriptive Text */}
        <p className="text-xl md:text-xl text-[#0D1926] leading-relaxed max-w-4xl mx-auto mt-10">
In 1995, we didn't have a website. We had a shovel and a pot of tea. We built Hotel <br/>Iceland at the very end of the road because we wanted to be the first ones to touch the <br/> snow. Today, we remain the keepers of the valley floor. When you book an "Experience"<br/> with us, you are stepping into a 30-year-old family tradition of mountain hospitality.
        </p>
      </div>

      {/* Bottom Gradient for Blending */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default BornInTheValley;