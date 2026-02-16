import info1 from "@/assets/part21.jpg";

const Beginner = () => {
  const cards = [
    { title: "The Gear Truth", sub: "What to rent vs buy", img: info1 },
    { title: "The Traffic Hack", sub: "Avoiding the crowds", img: info1 },
    { title: "The Weather Guide", sub: "Sun, Snow & Layers", img: info1 },
  ];

  return (
    <section className="py-24 px-4 bg-[#EAF6FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">The Beginner's Breather</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="relative h-80 group overflow-hidden">
              <img src={c.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-left text-white">
                <h4 className="text-2xl font-black uppercase">{c.title}</h4>
                <p className="text-xs uppercase tracking-widest opacity-80">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Beginner;