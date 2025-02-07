import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, Brain, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      description: "Dedicated to supporting individuals with autism and their families through understanding, acceptance, and comprehensive resources.",
      quickLinks: {
        title: "Quick Links",
        links: [
          { label: "About Us", href: "#" },
          { label: "Our Services", href: "#" },
          { label: "Resources", href: "#" },
          { label: "Support Groups", href: "#" },
          { label: "Events", href: "#" }
        ]
      },
      support: {
        title: "Support",
        links: [
          { label: "Therapy Centers", href: "#" },
          { label: "Educational Programs", href: "#" },
          { label: "Parent Resources", href: "#" },
          { label: "Community Support", href: "#" },
          { label: "Professional Training", href: "#" }
        ]
      },
      contactUs: {
        title: "Contact Us",
        phone: "800-3-AUTISM (800-328-8476)",
        email: "info@autismsociety.org",
        address: "123 Autism Support Street, City, State 12345"
      },
      bottomBar: {
        copyright: "© 2024 Autism Society. All rights reserved.",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" }
        ]
      }
    },
    ta: {
      description: "ஆட்டிசம் உள்ள நபர்கள் மற்றும் அவர்கள் குடும்பங்களுக்கு புரிந்துகொள்ளல், ஏற்பு மற்றும் விரிவான வளங்கள் மூலம் ஆதரவு அளிப்பதில் தீவிரம்.",
      quickLinks: {
        title: "விரைவு இணைப்புகள்",
        links: [
          { label: "எங்கள் பற்றி", href: "#" },
          { label: "எங்கள் சேவைகள்", href: "#" },
          { label: "வளங்கள்", href: "#" },
          { label: "ஆதரவு குழுக்கள்", href: "#" },
          { label: "நிகழ்வுகள்", href: "#" }
        ]
      },
      support: {
        title: "ஆதரவு",
        links: [
          { label: "சிகிச்சை மையங்கள்", href: "#" },
          { label: "கல்வி திட்டங்கள்", href: "#" },
          { label: "பெற்றோர் வளங்கள்", href: "#" },
          { label: "சமூக ஆதரவு", href: "#" },
          { label: "தொழில்சார் பயிற்சி", href: "#" }
        ]
      },
      contactUs: {
        title: "எங்களைத் தொடர்பு கொள்ள",
        phone: "800-3-ஆட்டிசம் (800-328-8476)",
        email: "info@autismsociety.org",
        address: "123 ஆட்டிசம் ஆதரவு தெரு, நகரம், மாநிலம் 12345"
      },
      bottomBar: {
        copyright: "© 2024 ஆட்டிசம் சங்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.",
        links: [
          { label: "தனியுரிமைக் கொள்கை", href: "#" },
          { label: "சேவை விதிமுறைகள்", href: "#" },
          { label: "குக்கீ கொள்கை", href: "#" }
        ]
      }
    }
  };

  // Dynamic text sizing function
  const getTextSize = (baseClass) => {
    return language === 'ta' 
      ? baseClass
        .replace('text-lg', 'text-base md:text-lg')
        .replace('text-sm', 'text-xs md:text-sm')
      : baseClass;
  };

  return (
    <footer className="bg-[#004D43] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 text-white/5">
        <Brain className="w-48 h-48" />
      </div>
      <div className="absolute bottom-0 left-0 text-white/5">
        <Heart className="w-32 h-32" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <img 
              src="Images/logo.png" 
              alt="Logo" 
              className="h-16 w-16"
            />
            <p className={`text-gray-300 ${getTextSize('text-sm')} leading-relaxed`}>
              {translations[language].description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`${getTextSize('text-lg')} font-semibold mb-6 flex items-center`}>
              <Users className="w-5 h-5 mr-2" />
              {translations[language].quickLinks.title}
            </h3>
            <ul className="space-y-4">
              {translations[language].quickLinks.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`${getTextSize('text-lg')} font-semibold mb-6 flex items-center`}>
              <Heart className="w-5 h-5 mr-2" />
              {translations[language].support.title}
            </h3>
            <ul className="space-y-4">
              {translations[language].support.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`${getTextSize('text-lg')} font-semibold mb-6 flex items-center`}>
              <Mail className="w-5 h-5 mr-2" />
              {translations[language].contactUs.title}
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>{translations[language].contactUs.phone}</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>{translations[language].contactUs.email}</span>
              </p>
              <p className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>{translations[language].contactUs.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-gray-400 ${getTextSize('text-sm')}`}>
            {translations[language].bottomBar.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {translations[language].bottomBar.links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-gray-400 hover:text-white ${getTextSize('text-sm')}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;