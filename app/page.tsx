"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValuePropositions from './components/ValuePropositions';
import WhyMyGlo from './components/WhyMyGlo';
import FeaturesSection from './components/FeaturesSection';
import BusinessSuite from './components/BusinessSuite';
import CommunitySpotlight from './components/CommunitySpotlight';
import TrustSafety from './components/TrustSafety';
import RoadmapSection from './components/RoadmapSection';
import WaitlistSection from './components/WaitlistSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';

const App = () => {
  return (
    <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Background />
      <Navbar />
      <HeroSection />
      <ValuePropositions />
      <WhyMyGlo />
      <FeaturesSection />
      <BusinessSuite />
      <CommunitySpotlight />
      <TrustSafety />
      <RoadmapSection />
      <FaqSection />
      <WaitlistSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;