import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ActivitiesPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Activities",
      tagline: "Fuelling minds, Igniting passion",
      viewAll: "View All",
      activities: [
        {
          id: 1,
          alt: "Workshop",
          image: "/Images/activities1.jpg"
        },
        {
          id: 2,
          alt: "Team",
          image: "/Images/activities2.jpg"
        },
        {
          id: 3,
          alt: "Speaker",
          image: "/Images/activities3.jpg"
        },
        {
          id: 4,
          alt: "Conference",
          image: "/Images/activities4.jpg"
        },
        {
          id: 5,
          alt: "Flag Ceremony",
          image: "/Images/activities5.jpg"
        }
      ]
    },
    ta: {
      title: "செயற்பாடுகள்",
      tagline: "மனங்களை வளர்த்தல், ஆர்வத்தை கொளுத்துதல்",
      viewAll: "அனைத்தையும் பார்க்க",
      activities: [
        {
          id: 1,
          alt: "நிகழ்வரங்கம்",
          image: "/Images/activities1.jpg"
        },
        {
          id: 2,
          alt: "குழு",
          image: "/Images/activities2.jpg"
        },
        {
          id: 3,
          alt: "வக்குரைப்பாளர்",
          image: "/Images/activities3.jpg"
        },
        {
          id: 4,
          alt: "மாநாடு",
          image: "/Images/activities4.jpg"
        },
        {
          id: 5,
          alt: "கொடி சமர்ப்பிப்பு",
          image: "/Images/activities5.jpg"
        }
      ]
    }
  };

  // Dynamic text sizing function
  const getTextSize = (baseClass) => {
    return language === 'ta' 
      ? baseClass
        .replace('text-4xl', 'text-3xl md:text-4xl')
        .replace('text-xl', 'text-base md:text-xl')
      : baseClass;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hero Text Card */}
        <div className="bg-[#0066FF] rounded-2xl p-8 flex flex-col justify-center text-white">
          <h1 className={`${getTextSize('text-4xl')} font-bold mb-4`}>
            {translations[language].title}
          </h1>
          <p className={`${getTextSize('text-xl')} font-light`}>
            {translations[language].tagline}
          </p>
        </div>

        {/* Activity Images Grid */}
        <div className="grid gap-6 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Two Images */}
            {translations[language].activities.slice(0, 2).map((activity, index) => (
              <div 
                key={activity.id} 
                className={`rounded-2xl overflow-hidden ${index === 1 ? 'lg:col-span-2' : ''}`}
              >
                <img 
                  src={activity.image} 
                  alt={activity.alt} 
                  className="w-full h-[200px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Remaining Images */}
            {translations[language].activities.slice(2).map((activity) => (
              <div 
                key={activity.id} 
                className="rounded-2xl overflow-hidden"
              >
                <img 
                  src={activity.image} 
                  alt={activity.alt} 
                  className="w-full h-[200px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-end mt-8">
        <button className={`bg-[#1E2875] text-white ${language === 'ta' ? 'text-sm' : 'text-base'} px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 flex items-center space-x-2`}>
          <span>{translations[language].viewAll}</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActivitiesPage;