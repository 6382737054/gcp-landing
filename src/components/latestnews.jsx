import React, { useEffect, useRef } from 'react';
import { Heart, Brain, Sparkles, Star, CircleDot, Infinity } from 'lucide-react';

const NewsMarquee = () => {
  const newsItems = [
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
    // Duplicate items for continuous scrolling
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
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-blue-200 animate-pulse">
        <Brain size={48} />
      </div>
      <div className="absolute top-20 right-20 text-purple-200 animate-pulse">
        <Infinity size={48} />
      </div>
      <div className="absolute bottom-10 left-20 text-blue-200 animate-pulse">
        <Heart size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-200 animate-pulse">
        <Star size={48} />
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4">
          <CircleDot className="w-32 h-32 text-blue-400" />
        </div>
        <div className="absolute top-3/4 right-1/4">
          <Sparkles className="w-24 h-24 text-purple-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="relative text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
            <Infinity className="text-blue-600" size={32} />
            Latest News
            <Infinity className="text-blue-600" size={32} />
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* News Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="flex-none w-[400px] mx-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-blue-100">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <Brain className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                    <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
                      Read more 
                      <Star className="w-4 h-4" />
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

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsMarquee;