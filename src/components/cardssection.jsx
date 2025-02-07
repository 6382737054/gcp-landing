import React, { useState } from 'react';
import { Brain, Heart, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CardsSection = () => {
  const [activeCard, setActiveCard] = useState('understanding');
  const { language } = useLanguage();

  const cardContents = {
    en: {
      understanding: {
        title: 'Understanding Autism',
        content: {
          left: 'Autism Spectrum Disorder (ASD) is a complex developmental condition that involves persistent challenges in social interaction, speech and nonverbal communication, and restricted/repetitive behaviors. The effects of ASD and the severity of symptoms are different in each person.',
          right: 'While autism is usually identified in early childhood, some individuals may not be diagnosed until adolescence or adulthood. Understanding autism as a spectrum helps recognize that each person with autism has their own strengths and challenges.'
        }
      },
      characteristics: {
        title: 'Key Characteristics',
        content: {
          left: 'People with autism often show differences in social communication, including challenges with understanding body language, maintaining eye contact, or understanding social contexts. They may also have unique ways of learning, paying attention, or reacting to sensations.',
          right: 'Many individuals with autism have extraordinary abilities in visual skills, music, math, and art. Some may have significant cognitive capabilities while others may face greater challenges. Each individual\'s pattern of behavior is unique.'
        }
      },
      strengths: {
        title: 'Unique Abilities',
        content: {
          left: 'Many individuals with autism possess remarkable abilities, including strong attention to detail, excellent memory, and exceptional focus on areas of interest. Some demonstrate outstanding skills in visual thinking, music, mathematics, or technology.',
          right: 'These unique capabilities often lead to innovative perspectives and creative problem-solving approaches. When supported appropriately, individuals with autism can channel their specialized interests into successful careers and meaningful contributions.'
        }
      }
    },
    ta: {
      understanding: {
        title: 'ஆட்டிசத்தை புரிந்துகொள்ளுதல்',
        content: {
          left: 'ஆட்டிசம் பரப்பு நிலை கோளாறு (ASD) ஒரு சிக்கலான வளர்ச்சி நிலையாகும் இது சமூக தொடர்பு, பேச்சு மற்றும் பேச்சு அல்லாத தொடர்பு, மற்றும் வரையறுக்கப்பட்ட/மீள்பிரதி நடத்தைகளில் தொடர்ச்சியான சவால்களைக் கொண்டுள்ளது. ASD இன் விளைவுகள் மற்றும் அறிகுறிகளின் தீவிரம் ஒவ்வொரு நபரிலும் வேறுபடுகிறது.',
          right: 'ஆட்டிசம் பொதுவாக சிறு வயதில் அடையாளம் காணப்படுகிறது, சில நபர்கள் இளைஞர் வயது அல்லது வயது வந்த பிறகு மட்டுமே கண்டறியப்படலாம்.  ஆட்டிசத்தை ஒரு பரப்பாக புரிந்துகொள்வது, ஒவ்வொரு ஆட்டிசம் உள்ள நபரும் தனது சொந்த வலிமைகள் மற்றும் சவால்களைக் கொண்டிருப்பதை அங்கீகரிக்க உதவுகிறது.'
        }
      },
      characteristics: {
        title: 'முக்கிய பண்புகள்',
        content: {
          left: 'ஆட்டிசம் உள்ள மக்கள் அடிக்கடி சமூக தொடர்பில் வேறுபாடுகளைக் காட்டுகின்றனர், உடல் மொழியைப் புரிந்துகொள்வது, கண் தொடர்பைத் தக்கவைப்பது அல்லது சமூக சூழல்களைப் புரிந்துகொள்வது போன்ற சவால்களைக் கொண்டுள்ளனர். அவர்கள் கற்றல், கவனம் செலுத்தல் அல்லது உணர்வுகளுக்கு பதிலளிப்பதில் தனித்துவமான வழிகளைக் கொண்டிருக்கலாம்.',
          right: 'பல ஆட்டிசம் உள்ள நபர்கள் காட்சி திறன்கள், இசை, கணிதம் மற்றும் கலையில் அசாதாரண திறன்களைக் கொண்டுள்ளனர்.  சிலர் குறிப்பிடத்தக்க அறிவாற்றல் திறன்களைக் கொண்டிருக்கலாம் மேலும் சிலர் மிகப் பெரிய சவால்களை எதிர்கொள்ளலாம்.  ஒவ்வொரு நபரின் நடத்தை முறை தனித்துவமானது.'
        }
      },
      strengths: {
        title: 'தனிப்பட்ட திறமைகள்',
        content: {
          left: 'பல ஆட்டிசம் உள்ள நபர்கள் சிறப்பான திறன்கள் கொண்டுள்ளனர், அதில் விவரங்களுக்கு வலுவான கவனம், சிறந்த நினைவுத்திறன் மற்றும் ஆர்வத்தின் பகுதிகளில் சிறப்பு கவனம் அடங்கும்.  சிலர் காட்சி சிந்தனை, இசை, கணிதம் அல்லது தொழில்நுட்பத்தில் சிறந்த திறன்களைக் காட்டுகின்றனர்.',
          right: 'இந்த தனிப்பட்ட திறன்கள் பெரும்பாலும் புதுமையான கண்ணோட்டங்கள் மற்றும் சிருஷ்டிப்பு சிக்கல் தீர்ப்பு அணுகுமுறைகளை வழிநடத்துகின்றன. பொருத்தமான வகையில் ஆதரிக்கப்பட்டால், ஆட்டிசம் உள்ள நபர்கள் தங்கள் சிறப்பு ஆர்வங்களை வெற்றிகரமான தொழில்கள் மற்றும் பொருட்பூர்வமான பங்களிப்புகளில் வழிநடத்தக்கூடும்.'
        }
      }
    }
  };

  // Dynamic text sizing function
  const getTextSize = (baseClass) => {
    return language === 'ta' 
      ? baseClass
        .replace('text-3xl', 'text-2xl md:text-3xl')
        .replace('text-lg', 'text-base md:text-lg')
      : baseClass;
  };

  return (
    <section className="relative bg-[#41969F] py-24">
      <div className="absolute top-0 right-0 text-white/10">
        <Brain className="w-48 h-48" />
      </div>
      <div className="absolute bottom-0 left-0 text-white/10">
        <Heart className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(cardContents[language]).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveCard(key)}
              className={`relative group p-8 rounded-lg transition-all duration-300 bg-[#FF6B53] 
                ${activeCard === key ? 'shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'}`}
            >
              <div className="relative z-10">
                <h3 className={`text-white ${language === 'ta' ? 'text-base md:text-xl' : 'text-xl'} font-semibold`}>
                  {value.title}
                </h3>
                <ChevronRight 
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-white transition-transform duration-300 
                    ${activeCard === key ? 'translate-x-2' : 'group-hover:translate-x-2'}`}
                />
              </div>
              
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ease-out
                  ${activeCard === key ? 'w-full' : 'w-0 group-hover:w-1/3'}`}
              ></div>
            </button>
          ))}
        </div>

        <div className="text-white">
          <h2 className={`${getTextSize('text-3xl')} font-bold mb-8 border-b border-white/20 pb-4 max-w-3xl mx-auto`}>
            {cardContents[language][activeCard].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className={`${getTextSize('text-lg')} leading-relaxed`}>
              {cardContents[language][activeCard].content.left}
            </div>
            <div className={`${getTextSize('text-lg')} leading-relaxed md:border-l border-white/20 md:pl-12`}>
              {cardContents[language][activeCard].content.right}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;