// UPDATE THIS IMPORT PATH
import Layout from "@/components/Layout"; 

// Keep these as they were
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import MountainSection from "@/components/Home/MountainSection"; 
import HistorySection from "@/components/Home/HistorySection";
import BlogSection from "@/components/Home/BlogSection";

const Index = () => {
  return (
    <Layout>
      <div className="bg-iceland-dark overflow-x-hidden w-full">
        <HeroSection />
        <AboutSection />
        {/* Your animation will work now because Layout handles the scroll container */}
        <MountainSection /> 
        <HistorySection />
        <BlogSection />
      </div>
    </Layout>
  );
};

export default Index;