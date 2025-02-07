import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SupportSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      bannerTitle: "Support from the Autism Society",
      getSupport: "Get Support",
      diagnosisTitle: "Diagnosis Per Life Stage",
      paragraphs: [
        "Evaluations typically begin with your primary care provider and vary based on age.",
        "If your primary care professional does not wish to refer you to a diagnostician, or does not acknowledge your concerns, it is important to know that you have the right to contact a diagnostician for a second opinion. Check the website of your local Autism Society affiliate for information about diagnosticians in your area, or call our team of national Information & Referral specialists at"
      ]
    },
    ta: {
      bannerTitle: "ஆட்டிசம் சங்கத்திடமிருந்த ஆதரவு",
      getSupport: "ஆதரவைப் பெறுங்கள்",
      diagnosisTitle: "வாழ்நிலை வாரியாக கண்டறிதல்",
      paragraphs: [
        "மதிப்பீடுகள் பொதுவாக உங்கள் முதன்மை பராமரிப்பு வழங்குநருடன் தொடங்கி வயதைப் பொறுத்து மாறுபடுகின்றன.",
        "உங்கள் முதன்மை பராமரிப்பு தொழிலாளர் உங்களை ஒரு கண்டறிதல் நிபுணரிடம் பரிந்துரைக்க மறுக்கும் பட்சத்தில் அல்லது உங்கள் கவலைகளை அங்கீகரிக்காத பட்சத்தில், இரண்டாவது கருத்துக்கு ஒரு கண்டறிதல் நிபுணரைத் தொடர்பு கொள்ளும் உரிமை உங்களுக்கு உள்ளது. உங்கள் பகுதியின் ஆட்டிசம் சங்க பிரிவின் வலைத்தளத்தைப் பாருங்கள் அல்லது தேசிய தகவல் மற்றும் பரிந்துரை நிபுணர்கள் குழுவை அழைக்கவும்"
      ]
    }
  };

  // Dynamic text sizing function
  const getTextSize = (baseClass) => {
    return language === 'ta' 
      ? baseClass
        .replace('text-3xl', 'text-2xl md:text-3xl')
        .replace('text-4xl', 'text-3xl md:text-4xl')
        .replace('text-5xl', 'text-4xl md:text-5xl')
        .replace('text-base', 'text-sm md:text-base')
        .replace('text-lg', 'text-base md:text-lg')
      : baseClass;
  };

  return (
    <div className="w-full bg-white mt-10">
      {/* Support Section Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section - Left Half */}
          <div className="relative bg-[#E6EEF0] h-[400px] order-2 md:order-1">
            <img
              src="Images/support.png"
              alt="Support from Autism Society"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section - Right Half */}
          <div className="bg-[#00BFA5] p-8 md:p-16 flex flex-col justify-center order-1 md:order-2">
            <h2 className={`${getTextSize('text-3xl md:text-5xl')} font-bold text-white mb-6 md:mb-8`}>
              {translations[language].bannerTitle}
            </h2>
            <button className={`text-[#00BFA5] bg-white px-4 md:px-6 py-2 md:py-3 rounded ${language === 'ta' ? 'text-sm' : 'text-base'} font-medium w-fit hover:bg-opacity-90 transition-all duration-200`}>
              {translations[language].getSupport}
            </button>
          </div>
        </div>
      </div>

      {/* Content Section Below */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Title */}
          <div>
            <h2 className={`${getTextSize('text-3xl md:text-4xl')} font-bold text-[#004D43] leading-tight`}>
              {translations[language].diagnosisTitle}
            </h2>
          </div>

          {/* Right Content */}
          <div className={`lg:col-span-2 ${getTextSize('text-base md:text-lg')} text-[#004D43] space-y-6`}>
            {translations[language].paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              <a 
                href="tel:800-328-8476" 
                className="text-[#004D43] font-semibold hover:underline"
              >
                800-3-AUTISM (800-328-8476)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;