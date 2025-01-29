import React, { useState } from 'react';
import { Play, Brain, Heart, Sparkles, ChevronRight } from 'lucide-react';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
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
  ];

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
            <span className="text-rose-600 font-medium text-sm tracking-wide uppercase">Educational Resources</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004D43] mb-6">Understanding Autism Better</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated video resources designed to help families, caregivers, and individuals understand autism spectrum disorder better.
          </p>
        </div>

        {/* Main Video Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#004D43] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={videos[activeVideo].url}
                title={videos[activeVideo].title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Selection List */}
          <div className="space-y-4">
            {videos.map((video, index) => (
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
                    }`}>{video.title}</h3>
                    <p className={`text-sm line-clamp-2 ${
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
          <p className="text-[#004D43] max-w-2xl mx-auto">
            These videos are carefully selected to provide valuable insights and practical guidance for understanding and supporting individuals with autism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;