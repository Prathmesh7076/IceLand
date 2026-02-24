import React from "react";

const Legacyhome = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center mt-10 md:mt-0 flex flex-col items-center justify-center gap-4">
        
        {/* HEADING with exact Anton typography specs */}
        <h1 className="font-['Anton'] font-normal not-italic text-[54px] leading-none tracking-[0px] text-center uppercase text-[#0D1926]">
          WE DIDN'T START WITH A SPREADSHEET
        </h1>
        
        {/* PARAGRAPH with exact Lato typography specs */}
        <p className="font-['Lato'] font-medium italic text-[20px] leading-none tracking-[0px] text-center text-[#0D1926]">
          We started with a pair of skis and a shovel.
        </p>

      </div>
    </section>
  );
};

export default Legacyhome;