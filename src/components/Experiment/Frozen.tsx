import sledgeImg from "@/assets/part2back.jpg";

const Frozen = () => {
  return (
    <section className="py-24 px-4 bg-[#EAF6FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">The Frozen Playground</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest mb-12">High-energy. Low-friction</p>
        <div className="relative h-[500px] overflow-hidden group">
          <img src={sledgeImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-10 left-10 text-white text-left">
            <h3 className="text-4xl font-black uppercase">The Sledge Run</h3>
            <p className="tracking-widest uppercase opacity-90">Traditional wooden sleds on groomed tracks</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Frozen;