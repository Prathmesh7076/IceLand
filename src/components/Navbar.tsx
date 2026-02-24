import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logoWhiteImg from "@/assets/WLogo.png"; 
import logoDarkImg from "@/assets/Logo.png"; 

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Explore", href: "/explore" },
  { label: "Rejuvenate", href: "/rejuvenate" },
];

const rightLinks = [
  { label: "The Blog", href: "/blog" },
  { label: "The Legacy", href: "/legacy" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 1. Check if we are currently on the legacy page
  const isLegacyPage = location.pathname === "/legacy";

  const navBackgroundClass = isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-2";
  
  // 2. Text color is dark if scrolled OR if we are on the Legacy page
  const textColorClass = isScrolled || isLegacyPage ? "text-slate-900" : "text-white"; 
  
  // 3. Set the correct logo (Dark logo on scroll OR on Legacy page)
  const currentLogo = isScrolled || isLegacyPage ? logoDarkImg : logoWhiteImg;
  
  const logoHeightClass = "h-12 md:h-12"; 

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}
      /* CUSTOM WIDTH BORDER LOGIC - Only visible when NOT scrolled */
      ${!isScrolled ? `
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px]
        after:w-[72%] after:bg-[#3A679D]/90
      ` : ""}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className={`${textColorClass} text-base normal-case tracking-widest font-Lato hover:opacity-80 transition-colors`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src={currentLogo} 
                alt="Logo" 
                className={`w-auto object-contain transition-all duration-300 ${logoHeightClass}`} 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            {rightLinks.map((link) => (
              <Link key={link.label} to={link.href} className={`${textColorClass} text-base normal-case tracking-widest font-lato hover:opacity-80 transition-colors`}>
                {link.label}
              </Link>
            ))}
          </div>

          <button className={`md:hidden ${textColorClass} ml-auto`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white px-6 pb-6 shadow-xl">
          {[...navLinks, ...rightLinks].map((link) => (
            <Link key={link.label} to={link.href} className="block py-4 text-black uppercase font-medium border-b" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;