import { Facebook, Instagram, Phone, PhoneCall, Youtube } from "lucide-react";
import footerBg from "@/assets/footer.jpg";
// UPDATE THIS PATH: Import your logo image here
import logoImg from "@/assets/Logo.png"; 

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      
      {/* Light Overlay - Original footer color state */}
      <div className="absolute inset-0 bg-white/70" />

      {/* REFINED BLEND OVERLAY: 
         Concentrates the blend only at the very top (0% to 20%) 
         to transition from the previous section's #DDE0E3.
      */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: `linear-gradient(to bottom, #DDE0E3 0%, transparent 20%)`
        }}
      />

      {/* Content */}    
      <div className="relative z-10">
        
        {/* === TOP BRANDING === */}
        <div className="text-center pt-12 pb-4 flex flex-col items-center justify-center">
          <img 
            src={logoImg} 
            alt="Iceland Adventures" 
            className="h-10 md:h-14 w-auto object-contain mb-2" 
          />
          
          <p 
            className="text-foreground text-sm md:text-lg mt-1 font-bold tracking-wide"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Safe enough for the kids. Wild enough for the soul
          </p>
        </div>

        {/* === FOOTER COLUMNS === */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Enquiries */} 
            <div>
              <h4 className="text-foreground text-sm font-bold mb-2 underline underline-offset-4">
                Enquiries
              </h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Explore</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Experience</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Stay</a></li>
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h4 className="text-foreground text-sm font-bold mb-2 underline underline-offset-4">
                Activities
              </h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Ski</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Winter Sports</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Expeditions</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Treks</a></li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-foreground text-sm font-bold mb-2 underline underline-offset-4">
                Quick links
              </h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Our Legacy</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Treks</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Hikes</a></li>
                <li><a href="#" className="text-foreground/80 text-xs hover:text-foreground transition-colors">Safari</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-foreground text-sm font-bold mb-2 underline underline-offset-4">
                Contact Us
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-foreground/80 text-xs">Solang Valley, Manali, HP (Est. 1995)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span className="text-foreground/80 text-xs">info@icelandadventures.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-foreground/70" />
                  <span className="text-foreground/80 text-xs">+91 94597 84714</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-black/5">
          <p className="text-foreground/50 text-[10px] md:text-xs">
            © 2025 Iceland Adventures | Crafted by unScripters
          </p>

          <div className="flex items-center gap-2">
            <a href="#" className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5 text-background" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5 text-background" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="WhatsApp">
              <PhoneCall className="w-3.5 h-3.5 text-background" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="YouTube">
              <Youtube className="w-3.5 h-3.5 text-background" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="X">
              <svg className="w-3.5 h-3.5 text-background" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;