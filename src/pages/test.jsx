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

      {/* Info Sections */}
      <section className="relative bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InfoSection 
            imageLeft={true}
            title="Early Intervention & Support"
            subtitle="Building Foundations"
            description="Early intervention services can improve a child's development. Children who receive autism-appropriate education and support at key developmental stages are more likely to gain essential social skills and react better in society. Early intervention not only gives the best outcomes for your child, but it will also help reduce the stress on you and your family."
            imageSrc="Images/early-intervention.jpg"
            decorativeElement={<Heart className="w-32 h-32" />}
          />

          <InfoSection 
            imageLeft={false}
            title="Understanding Behavioral Patterns"
            subtitle="Behavioral Analysis"
            description="Understanding behavioral patterns is crucial for supporting individuals with autism. By recognizing and interpreting these patterns, we can better adapt environments and interactions to support their needs. This understanding helps create more effective strategies for communication and learning."
            imageSrc="Images/behavioral-patterns.jpg"
            decorativeElement={<Brain className="w-32 h-32" />}
          />

          <InfoSection 
            imageLeft={true}
            title="Family Support & Resources"
            subtitle="Community Support"
            description="Family support is essential in the journey of autism care. We provide comprehensive resources and guidance to help families navigate challenges and celebrate victories together. Our community-based approach ensures that no family walks this path alone."
            imageSrc="Images/family-support.jpg"
            decorativeElement={<Users className="w-32 h-32" />}
          />
        </div>

        <div className="absolute top-0 right-0 text-[#41969F]/5">
          <Sparkles className="w-64 h-64" />
        </div>
        <div className="absolute bottom-0 left-0 text-[#41969F]/5">
          <Brain className="w-48 h-48" />
        </div>
      </section>

      {/* Other Sections */}
      <SupportSection />
      <NewsSection />
      <VideoShowcase />
      <ActivitiesPage />
 
    </main>
  );
};

export default Homepage;