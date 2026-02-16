import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// IMPORT LOGOS
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
      // Switch to white background after 10px of scrolling
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // STYLES
  const navBackgroundClass = isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4";
  const textColorClass = isScrolled ? "text-slate-900" : "text-white"; 
  const logoHeightClass = isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"; // Bigger logo at top

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className={`${textColorClass} text-sm uppercase tracking-widest font-medium hover:opacity-80 transition-colors`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src={isScrolled ? logoDarkImg : logoWhiteImg} 
                alt="Iceland Adventures" 
                className={`w-auto object-contain transition-all duration-300 ${logoHeightClass}`} 
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {rightLinks.map((link) => (
              <Link key={link.label} to={link.href} className={`${textColorClass} text-sm uppercase tracking-widest font-medium hover:opacity-80 transition-colors`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${textColorClass} ml-auto`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white px-6 pb-6 shadow-xl">
          {[...navLinks, ...rightLinks].map((link) => (
            <Link key={link.label} to={link.href} className="block py-4 text-slate-900 uppercase font-medium border-b" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;