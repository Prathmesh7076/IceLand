import hike1 from "@/assets/part21.jpg"; 

const Guide = () => {
  const cards = [
    { title: "The Pine Forest Walk", sub: "Half-day Hike", img: hike1 },
    { title: "The Riverside Ritual", sub: "Morning Wellness", img: hike1 },
    { title: "The Solang Heritage Tour", sub: "Cultural Walk", img: hike1 },
  ];

  return (
    <section className="py-24 px-4 bg-[#EAF6FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">The Guided Silence</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest mb-12">Read the mountain like a book</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="text-center">
              <img src={c.img} className="w-full aspect-[4/3] object-cover mb-4 grayscale hover:grayscale-0 transition-all shadow-md" />
              <h3 className="text-xl font-black uppercase">{c.title}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Guide;