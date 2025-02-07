import React from 'react';
import { Heart, Brain, Sparkles, Star, CircleDot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NewsSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      sectionTag: "Latest Updates",
      sectionTitle: "Latest News & Updates",
      readMore: "Read more",
      newsItems: [
        {
          id: 1,
          title: "Diamond Jubilee 2025",
          description: "The Honorable Minister of School Education, Mr. Anil Mahesh personally inspected the preparations for the Diamond Jubilee of the Bharata...",
          image: "/Images/news1.png"
        },
        {
          id: 2,
          title: "Leaders Training Camp 2023",
          description: "The Team Leaders Training Camp 2023, organized by Tamil Nadu Scouts and Guides, is a pivotal event designed to nurture and empower the next generation...",
          image: "/Images/news2.png"
        },
        {
          id: 3,
          title: "Rastrapati Award Certificate",
          description: "The Rastrapati Award Certificate Test Camp 2023 in Tamil Nadu is a prestigious event for senior scouts and guides",
          image: "/Images/news3.png"
        },
        {
          id: 4,
          title: "Diamond Jubilee 2025",
          description: "The Honorable Minister of School Education, Mr. Anil Mahesh personally inspected the preparations for the Diamond Jubilee of the Bharata...",
          image: "/Images/news4.png"
        },
        {
          id: 5,
          title: "Leaders Training Camp 2023",
          description: "The Team Leaders Training Camp 2023, organized by Tamil Nadu Scouts and Guides, is a pivotal event designed to nurture and empower the next generation...",
          image: "/Images/news5.png"
        }
      ]
    },
    ta: {
      sectionTag: "சமீபத்திய புதுப்பிப்புகள்",
      sectionTitle: "சமீபத்திய செய்திகள் & புதுப்பிப்புகள்",
      readMore: "மேலும் வாசிக்கவும்",
      newsItems: [
        {
          id: 1,
          title: "வைர ஜுபிலி 2025",
          description: "மாண்புமிகு பள்ளிக் கல்வி அமைச்சர் திரு. அநில் மகேஷ் பாரத வைர ஜுபிலி நிகழ்வுகளுக்கான தயாரிப்புகளை தாமே ஆய்வு செய்தார்...",
          image: "/Images/news1.png"
        },
        {
          id: 2,
          title: "தலைவர்கள் பயிற்சி முகாம் 2023",
          description: "தமிழ்நாடு ஸ்கவுட்ஸ் மற்றும் கைடுகளால் ஏற்பாடு செய்யப்பட்ட தலைவர்கள் பயிற்சி முகாம் 2023, அடுத்த தலைமுறையை வளர்க்கவும் வலுப்படுத்தவும் வடிவமைக்கப்பட்ட முக்கிய நிகழ்வாகும்...",
          image: "/Images/news2.png"
        },
        {
          id: 3,
          title: "ராஷ்ட்ரபதி விருது சான்றிதழ்",
          description: "தமிழ்நாட்டில் ராஷ்ட்ரபதி விருது சான்றிதழ் தேர்வு முகாம் 2023 மூத்த ஸ்கவுட்ஸ் மற்றும் கைடுகளுக்கான பெருமைமிகு நிகழ்வாகும்",
          image: "/Images/news3.png"
        },
        {
          id: 4,
          title: "வைர ஜுபிலி 2025",
          description: "மாண்புமிகு பள்ளிக் கல்வி அமைச்சர் திரு. அநில் மகேஷ் பாரத வைர ஜுபிலி நிகழ்வுகளுக்கான தயாரிப்புகளை தாமே ஆய்வு செய்தார்...",
          image: "/Images/news4.png"
        },
        {
          id: 5,
          title: "தலைவர்கள் பயிற்சி முகாம் 2023",
          description: "தமிழ்நாடு ஸ்கவுட்ஸ் மற்றும் கைடுகளால் ஏற்பாடு செய்யப்பட்ட தலைவர்கள் பயிற்சி முகாம் 2023, அடுத்த தலைமுறையை வளர்க்கவும் வலுப்படுத்தவும் வடிவமைக்கப்பட்ட முக்கிய நிகழ்வாகும்...",
          image: "/Images/news5.png"
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
        .replace('text-sm', 'text-xs md:text-sm')
      : baseClass;
  };

  return (
    <section className="relative bg-[#FAF2F0] py-24">
      {/* Decorative Elements matching main page style */}
      <div className="absolute top-0 right-0 text-[#41969F]/10">
        <Brain className="w-48 h-48" />
      </div>
      <div className="absolute bottom-0 left-0 text-[#FF6B53]/10">
        <Heart className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header matching main page style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 rounded-full mb-4">
            <span className={`text-rose-600 font-medium ${language === 'ta' ? 'text-xs' : 'text-sm'} tracking-wide uppercase`}>
              {translations[language].sectionTag}
            </span>
          </div>
          <h2 className={`${getTextSize('text-4xl')} font-bold text-[#8B1A50] mb-6`}>
            {translations[language].sectionTitle}
          </h2>
        </div>

        {/* News Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {translations[language].newsItems.map((item) => (
              <div 
                key={item.id}
                className="flex-none w-[400px] mx-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#7DCFBD]/20">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <Brain className="w-5 h-5 text-[#41969F]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`${getTextSize('text-xl')} font-semibold text-[#8B1A50] mb-3`}>
                      {item.title}
                    </h3>
                    <p className={`text-gray-600 ${getTextSize('text-sm')} line-clamp-3`}>
                      {item.description}
                    </p>
                    <button className={`mt-4 text-[#41969F] hover:text-[#8B1A50] font-medium ${getTextSize('text-sm')} flex items-center gap-2 group`}>
                      {translations[language].readMore}
                      <Star className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default NewsSection