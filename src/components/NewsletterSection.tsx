// src/components/NewsletterSection.tsx
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import newsletterHiker from "@/assets/newsettler.jpg"; 
// CRITICAL: NO IMPORTS OF LAYOUT OR NAVBAR HERE!

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Email required", variant: "destructive" });
      return;
    }
    toast({ title: "Welcome!", description: "You are signed up." });
    setEmail("");
  };

  return (
    <section className="w-full bg-[#DDE0E3] py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
        
        {/* LEFT SIDE: UPDATED STYLE */}
        <div className="px-8 lg:px-16 xl:px-32">
          <h2 
            className="text-[#0D1926] uppercase mb-4"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "54px",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0.02em"
            }}
          >
            Join the Rope Team
          </h2>
          
          <p 
            className="text-[#0D1926] mb-10 max-w-[550px]"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "20px",
              lineHeight: "1.4",
              fontWeight: 400
            }}
          >
                  We signal. We don't spam. Get weekly updates on snow conditions and road status.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px]">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email coordinates"
              className="w-full px-6 py-5 bg-white text-gray-500 rounded-md shadow-sm border-none outline-none"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "18px"
              }}
            />
            
           <button 
  type="submit" 
  className="relative w-full bg-[#0F172A] hover:bg-slate-900 text-white font-bold transition-all flex items-center justify-center overflow-hidden"
  style={{
    height: "74px",
    borderRadius: "14px",
    padding: "4.04px", 
    /* Gradient updated to use #00A3FF with a smooth blend to white */
    background: "linear-gradient(to right, #00A3FF 100% )", 
  }}
>
  <div 
    className="w-full h-full flex items-center justify-center bg-[#0F172A] hover:bg-slate-900 transition-colors"
    style={{ 
      borderRadius: "10px",
      fontSize: "20px",
      fontFamily: "'Lato', sans-serif"
    }}
  >
    Join the crew
  </div>
</button>
          </form>
        </div>

        {/* RIGHT SIDE: KEPT EXACTLY AS PROVIDED */}
        <div className="h-[500px] w-full">
           <img src={newsletterHiker} alt="Hiker" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;