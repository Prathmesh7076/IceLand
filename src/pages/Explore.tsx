import Layout from "@/components/Layout";

// Importing the components exactly as named in your Explore folder
import Explorehero from "@/components/Explore/Explorehero";
import States from "@/components/Explore/States"; // Your new blue stats bar
import First from "@/components/Explore/First";
import Thermal from "@/components/Explore/Thermal";
import Adventure from "@/components/Explore/Adventure";
import Groomed from "@/components/Explore/Groomed";


const Explore = () => {
  return (
    <Layout>
      <div className="w-full bg-[#EAF6FA] min-h-screen">
        <Explorehero />
        <States />
        <First />
          <Thermal />
        <Adventure />
        <Groomed />
      </div>
    </Layout>
  );
};

export default Explore;