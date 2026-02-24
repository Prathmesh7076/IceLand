import Layout from "@/components/Layout";

import Experiencehero from "@/components/Experiment/Experiencehero";
import Stop from "@/components/Experiment/Stop";
import Frozen from "@/components/Experiment/Frozen";
import Guide from "@/components/Experiment/Guide";
import Born from "@/components/Experiment/Born";
import Beginner from "@/components/Experiment/Beginner";

const Experience = () => {
  return (
    <Layout>
      <div className="w-full bg-[#EAF6FA] min-h-screen">
        <Experiencehero />
        <Stop />
        <Frozen />
        <Guide />
        <Born />
        <Beginner />
      </div>
    </Layout>
  );
};

export default Experience;