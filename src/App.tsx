import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// Global Components
import Navbar from "@/components/Navbar"; // Make sure this path is correct

// Page Imports
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Explore from "./pages/Explore";
import LegacyPage from "./pages/legacy";
import Blog from "./pages/Blog";             // <-- Added Blog
import Rejuvenate from "./pages/Rejuvenate"; // <-- Added Rejuvenate
import Contact from "./pages/Contact";       // <-- Added Contact

// CORRECTED PATHS: Importing from components/home/
import ValleySection from "./components/Home/ValleySection"; 
import SensesSection from "./components/Home/SensesSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      
      {/* GLOBAL NAVBAR: Shows on EVERY page */}
      <Navbar /> 

      <Routes>
        {/* Main Header Links / Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/legacy" element={<LegacyPage />} />
        
        {/* NEWLY ADDED ROUTES */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/rejuvenate" element={<Rejuvenate />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Standalone Routes for specific sections */}
        <Route path="/valley" element={<ValleySection />} />
        <Route path="/senses" element={<SensesSection />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </QueryClientProvider>
);

export default App;