// src/components/Layout.tsx
import React from "react";
// Sibling imports (using ./ because they are in the same folder)
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsletterSection from "./NewsletterSection";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar /> 
      <main className="flex-grow relative w-full">
        {children}
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Layout;