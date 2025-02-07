import React, { useState } from 'react';
import { Play, Brain, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const { language } = useLanguage();

  const translations = {
    en: {
      sectionTag: "Educational Resources",
      sectionTitle: "Understanding Autism Better",
      sectionDescription: "Explore our curated video resources designed to help families, caregivers, and individuals understand autism spectrum disorder better.",
      bottomDescription: "These videos are carefully selected to provide valuable insights and practical guidance for understanding and supporting individuals with autism.",
      videos: [
        {
          id: 1,
          title: "Understanding Autism Spectrum",
          description: "Discover the unique ways individuals with autism perceive and interact with the world around them.",
          url: "https://www.youtube.com/embed/YtvP5A5OHpU?si=AFQIv1rJRp2u4R34",
          thumbnail: "Images/thump1.jpg"
        },
        {
          id: 2,
          title: "Early Signs & Intervention",
          description: "Learn about the early signs of autism and the importance of early intervention strategies.",
          url: "https://www.youtube.com/embed/9nNh5DR7wbQ?si=iOz91Ct9qgnoGiNU",
          thumbnail: "Images/thump2.jpg"
        },
        {
          id: 3,
          title: "Supporting Autistic Children",
          description: "Expert guidance on creating supportive environments for children with autism.",
          url: "https://www.youtube.com/embed/RgaeneqlpTc?si=FkttzvDZ6Xd0kNBP",
          thumbnail: "Images/thump3.jpg"
        }
      ]
    },
    ta: {
      sectionTag: "கல்வி வளங்கள்",
      sectionTitle: "ஆட்டிசத்தை சிறப்பாக புரிந்துகொள்ளுதல்",
      sectionDescription: "குடும்பங்கள், பராமரிப்பாளர்கள் மற்றும் நபர்கள் ஆட்டிசம் பரப்பு கோளாற்றை சிறப்பாக புரிந்துகொள்ள உதவும் நமது தேர்ந்தெடுக்கப்பட்ட வீடியோ வளங்களை ஆராய்ந்து பாருங்கள்.",
      bottomDescription: "ஆட்டிசம் உள்ள நபர்களை புரிந்துகொள்வதற்கும் ஆதரிப்பதற்கும் மதிப்பு மிக்க அறிக்கைகள் மற்றும் நடைமுறை வழிகாட்டுதல்களை வழங்கும் வகையில் இந்த வீடியோக்கள் கவனமாக தேர்ந்தெடுக்கப்பட்டுள்ளன.",
      videos: [
        {
          id: 1,
          title: "ஆட்டிசம் பரப்பு பற்றிய புரிதல்",
          description: "ஆட்டிசம் உள்ள நபர்கள் உலகைப் பார்க்கும் மற்றும் தொடர்பு கொள்ளும் தனிப்பட்ட வழிகளைக் கண்டறியுங்கள்.",
          url: "https://www.youtube.com/embed/YtvP5A5OHpU?si=AFQIv1rJRp2u4R34",
          thumbnail: "Images/thump1.jpg"
        },
        {
          id: 2,
          title: "ஆரம்ப அறிகுறிகள் & தலையீடு",
          description: "ஆட்டிசத்தின் ஆரம்ப அறிகுறிகள் மற்றும் ஆரம்ப தலையீட்டு தந்திரங்களின் முக்கியத்துவம் பற்றி அறிக.",
          url: "https://www.youtube.com/embed/9nNh5DR7wbQ?si=iOz91Ct9qgnoGiNU",
          thumbnail: "Images/thump2.jpg"
        },
        {
          id: 3,
          title: "ஆட்டிசம் உள்ள குழந்தைகளுக்கு ஆதரவு",
          description: "ஆட்டிசம் உள்ள குழந்தைகளுக்கு ஆதரவு சூழலை உருவாக்குவதற்கான நிபுணர் வழிகாட்டுதல்.",
          url: "https://www.youtube.com/embed/RgaeneqlpTc?si=FkttzvDZ6Xd0kNBP",
          thumbnail: "Images/thump3.jpg"
        }
      ]
    }
  };

  // Dynamic text sizing function
  const getTextSize = (baseClass) => {
    return language === 'ta' 
      ? baseClass
        .replace('text-4xl', 'text-3xl md:text-4xl')
        .replace('text-5xl', 'text-4xl md:text-5xl')
        .replace('text-lg', 'text-base md:text-lg')
        .replace('text-sm', 'text-xs md:text-sm')
      : baseClass;
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FAFA] py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 text-[#7DCFBD]/10">
        <Brain className="w-64 h-64" />
      </div>
      <div className="absolute bottom-0 left-0 text-[#FF6B53]/10">
        <Heart className="w-48 h-48" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#41969F]/5">
        <div className="relative">
          <Sparkles className="w-96 h-96" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 rounded-full mb-4">
            <span className={`text-rose-600 font-medium ${language === 'ta' ? 'text-xs' : 'text-sm'} tracking-wide uppercase`}>
              {translations[language].sectionTag}
            </span>
          </div>
          <h2 className={`${getTextSize('text-4xl lg:text-5xl')} font-bold text-[#004D43] mb-6`}>
            {translations[language].sectionTitle}
          </h2>
          <p className={`${getTextSize('text-lg')} text-gray-600 max-w-2xl mx-auto`}>
            {translations[language].sectionDescription}
          </p>
        </div>

        {/* Main Video Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#004D43] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={translations[language].videos[activeVideo].url}
                title={translations[language].videos[activeVideo].title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Selection List */}
          <div className="space-y-4">
            {translations[language].videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`w-full p-4 rounded-lg transition-all duration-300 ${
                  activeVideo === index 
                    ? 'bg-[#41969F] text-white shadow-lg transform scale-102'
                    : 'bg-white hover:bg-[#41969F]/10'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/20 ${
                      activeVideo === index ? 'text-white' : 'text-white'
                    }`}>
                      <Play className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-semibold mb-1 ${
                      activeVideo === index ? 'text-white' : 'text-[#004D43]'
                    } ${language === 'ta' ? 'text-base' : 'text-base'}`}>{video.title}</h3>
                    <p className={`${getTextSize('text-sm')} line-clamp-2 ${
                      activeVideo === index ? 'text-white/90' : 'text-gray-600'
                    }`}>{video.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform ${
                    activeVideo === index ? 'text-white translate-x-1' : 'text-[#41969F]'
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center">
          <p className={`text-[#004D43] max-w-2xl mx-auto ${getTextSize('text-base')}`}>
            {translations[language].bottomDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;