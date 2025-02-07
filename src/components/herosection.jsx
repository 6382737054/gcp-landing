import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Brain, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  const translations = {
    en: {
      slides: [
        {
          id: 1,
          image: "/Images/banner-1.png",
          title: "Understanding Autism Together",
          subtitle: "Empowering Lives Through Support",
          description: "Creating a world of acceptance, understanding, and opportunity for every individual with autism.",
          tag: "Support & Care",
          getStarted: "Get Started",
          learnMore: "Learn More"
        },
        {
          id: 2,
          image: "/Images/banner-2.png",
          title: "Early Intervention Programs",
          subtitle: "Building Strong Foundations",
          description: "Expert-led programs designed to support development and foster growth at every stage.",
          tag: "Education",
          getStarted: "Get Started",
          learnMore: "Learn More"
        },
        {
          id: 3,
          image: "/Images/banner-3.png",
          title: "Family-Centered Approach",
          subtitle: "Growing Together",
          description: "Comprehensive support systems that empower families and create lasting positive change.",
          tag: "Community",
          getStarted: "Get Started",
          learnMore: "Learn More"
        }
      ]
    },
    ta: {
      slides: [
        {
          id: 1,
          image: "/Images/banner-1.png",
          title: "ஆட்டிசத்தை அறிந்து கொள்ளுதல்",
          subtitle: "ஆதரவின் மூலம் வாழ்க்கையை வலுப்படுத்துதல்",
          description: "ஒவ்வொரு ஆட்டிசப் பிரிவு உள்ள நபருக்கும் ஏற்புடைய, புரிந்துகொள்ளக்கூடிய மற்றும் வாய்ப்பு உள்ள உலகத்தை உருவாக்குதல்.",
          tag: "ஆதரவு & கவனிப்பு",
          getStarted: "தொடங்குங்கள்",
          learnMore: "மேலும் அறிய"
        },
        {
          id: 2,
          image: "/Images/banner-2.png",
          title: "நேரடி தலையீட்டு திட்டங்கள்",
          subtitle: "வலுவான அடித்தளங்கள் அமைத்தல்",
          description: "வல்லுநர் வழிநடத்திய திட்டங்கள் வளர்ச்சியை ஆதரித்து ஒவ்வொரு கட்டத்திலும் வளர்ச்சியை ஊக்குவிக்கும்.",
          tag: "கல்வி",
          getStarted: "தொடங்குங்கள்",
          learnMore: "மேலும் அறிய"
        },
        {
          id: 3,
          image: "/Images/banner-3.png",
          title: "குடும்ப மையப்படுத்திய அணுகுமுறை",
          subtitle: "ஒன்றாக வளருதல்",
          description: "குடும்பங்களை அதிகாரப்பூர்வமாக்கி நிலைத்த நேர்மறையான மாற்றத்தை உருவாக்கும் மிகப்பரந்த ஆதரவு அமைப்புகள்.",
          tag: "சமூகம்",
          getStarted: "தொடங்குங்கள்",
          learnMore: "மேலும் அறிய"
        }
      ]
    }
  };

  const slides = translations[language].slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [language]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Dynamic text sizing function
// Dynamic text sizing function
const getTextClasses = (baseEnglishClasses) => {
    return language === 'ta' 
      ? baseEnglishClasses
        .replace('text-3xl', 'text-2xl md:text-3xl')
        .replace('text-4xl', 'text-3xl md:text-4xl')
        .replace('text-6xl', 'text-4xl md:text-5xl')
        .replace('text-xl', 'text-lg md:text-xl')
        .replace('text-2xl', 'text-xl md:text-2xl')
        .replace('leading-tight', 'leading-snug')
      : baseEnglishClasses;
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#004D43]">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004D43]/90 via-[#004D43]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#004D43]/80 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-2xl space-y-8 opacity-0 translate-y-12 animate-content-enter">
                  {/* Tag */}
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#7DCFBD] bg-opacity-20 
                    backdrop-blur-sm rounded-full border border-[#7DCFBD]/30">
                    <span className={`text-[#7DCFBD] font-medium ${language === 'ta' ? 'text-xs' : 'text-sm'} tracking-wide uppercase`}>
                      {slide.tag}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h2 className={getTextClasses("text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight")}>
                      {slide.title}
                    </h2>
                    <p className={`${language === 'ta' ? 'text-base md:text-xl' : 'text-xl md:text-2xl'} text-[#7DCFBD] font-light`}>
  {slide.subtitle}
</p>
<p className={`${language === 'ta' ? 'text-sm md:text-base' : 'text-lg'} text-gray-200 max-w-xl`}>
  {slide.description}
</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className={`px-6 py-3 bg-[#7DCFBD] text-[#004D43] rounded-full font-semibold 
                      hover:bg-white transition-colors duration-300 flex items-center space-x-2 group
                      ${language === 'ta' ? 'text-sm' : 'text-base'}`}>
                      <span>{slide.getStarted}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className={`px-6 py-3 border border-[#7DCFBD] text-[#7DCFBD] rounded-full 
                      font-semibold hover:bg-[#7DCFBD] hover:text-[#004D43] transition-colors duration-300
                      ${language === 'ta' ? 'text-sm' : 'text-base'}`}>
                      {slide.learnMore}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 
            backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 
            backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 text-white"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-[#7DCFBD] w-8' 
                  : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 text-[#7DCFBD]/20">
          <Brain className="w-24 h-24" />
        </div>
        <div className="absolute bottom-8 left-8 text-[#7DCFBD]/20">
          <Heart className="w-24 h-24" />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes contentEnter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-content-enter {
          animation: contentEnter 1s forwards 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;