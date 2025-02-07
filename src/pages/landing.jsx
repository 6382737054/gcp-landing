// Homepage.js
import React from 'react';
import HeroSection from '../components/herosection';
import CardsSection from '../components/cardssection';
import InfoSection from '../components/infosection';
import NewsSection from '../components/latestnews';
import VideoShowcase from '../components/homevideo';
import ActivitiesPage from '../components/homegallery';
import SupportSection from '../components/homebanner';
import { Heart, Brain, Users, Sparkles } from 'lucide-react';


const Homepage = () => {
  return (
    <main className="relative w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Cards Section */}
      <CardsSection />



      {/* Other Sections */}
      <SupportSection />
      <NewsSection />
    <VideoShowcase/>
    <ActivitiesPage/>
 
    </main>
  );
};

export default Homepage;