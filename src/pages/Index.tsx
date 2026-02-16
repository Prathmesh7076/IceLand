// UPDATE THIS IMPORT PATH
import Layout from "@/components/Layout"; 

// Components from the "Home" folder (Capitalized)
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import MountainSection from "@/components/Home/MountainSection"; 
import HistorySection from "@/components/Home/HistorySection";
import BlogSection from "@/components/Home/BlogSection";

// NEW IMPORTS from the "Home" folder
import ValleySection from "@/components/Home/ValleySection";
import SensesSection from "@/components/Home/SensesSection";

const Index = () => {
  return (
    <Layout>
      {/* REMOVED 'overflow-x-hidden'. 
          This is the ONLY way the 'sticky' background in Mountain, Valley, 
          and Senses will stay pinned at the top.
      */}
      <div className="bg-iceland-dark w-full">
        <HeroSection />
        <AboutSection />
        
        {/* ANIMATION ZONE:
            1. Mountain background sticks -> Content scrolls up.
            2. Valley background sticks -> Content scrolls up.
            3. Senses background sticks -> Content scrolls up.
        */}
        <MountainSection /> 
        <ValleySection />
        <SensesSection />

        <HistorySection />
        <BlogSection />
      </div>
    </Layout>
  );
};

export default Index;