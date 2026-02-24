import React from 'react';
import Legacyhome from '@/components/The Legacy/Legacyhome';
import Imagepage from '@/components/The Legacy/imagepage'; 
import Born from '@/components/The Legacy/born';
import Imagepage2 from '@/components/The Legacy/imagepage2';
import Stats from '@/components/The Legacy/stats';
import Begginer from '@/components/The Legacy/begginer';

// Import the missing bottom sections
import Newsletter from '@/components/NewsletterSection'; // Adjust path if needed
import Footer from '@/components/Footer';         // Adjust path if needed

const LegacyPage = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Legacyhome />

      {/* 2. First Image Section with Clouds */}
      <Imagepage />

      {/* 3. Storyline Section (Blue Background) */}
      <Born />

      {/* 4. Second Image Section with Clouds */}
      <Imagepage2 />

      {/* 5. Statistics Box */}
      <Stats />

      {/* 6. Beginner/Content Section */}
      <Begginer />

      {/* 7. Final Site Sections */}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default LegacyPage;