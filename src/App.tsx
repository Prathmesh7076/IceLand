import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

// CORRECTED PATHS: Importing from components/home/
import ValleySection from "./components/Home/ValleySection"; 
import SensesSection from "./components/Home/SensesSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Index />} />
        
        <Route path="/experience" element={<Experience />} />
        
        {/* Standalone Routes for your new sections */}
        <Route path="/valley" element={<ValleySection />} />
        <Route path="/senses" element={<SensesSection />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </QueryClientProvider>
);

export default App;