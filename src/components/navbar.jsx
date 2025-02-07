import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language } = useLanguage();

  // Add min-width values for each menu item in both languages
  const menuWidths = {
    'About Us': 'min-w-[120px]',
    'What is Autism': 'min-w-[140px]',
    'Resources': 'min-w-[110px]',
    'Contact Us': 'min-w-[120px]'
  };

  const translations = {
    en: {
      'About Us': {
        title: 'About Us',
        items: [
          { text: 'Who we are', link: '/about/who-we-are' },
          { text: 'What we are', link: '/about/what-we-are' },
          { text: 'Our team', link: '/about/our-team' },
          { text: 'Vision/Mission', link: '/about/vision-mission' }
        ]
      },
      'What is Autism': {
        title: 'What is Autism',
        items: [
          { text: 'The Autism Experience', link: '/autism/experience' },
          { text: 'Screening & Diagnosis', link: '/autism/screening-diagnosis' },
          { text: 'Understanding Autism', link: '/autism/understanding' },
          { text: 'Signs and Symptoms', link: '/autism/signs-symptoms' }
        ]
      },
      'Resources': {
        title: 'Resources',
        items: [
          { text: 'Support Groups', link: '/resources/support-groups' },
          { text: 'Blog', link: '/resources/blog' },
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Programs', link: '/resources/programs' },
          { text: 'Events', link: '/resources/events' }
        ]
      },
      'Contact Us': {
        title: 'Contact Us',
        items: [
          { text: 'Therapy Centers', link: '/contact/therapy-centers' },
          { text: 'Get in touch', link: '/contact/get-in-touch' },
          { text: 'Consultation', link: '/contact/consultation' },
          { text: 'Support Line', link: '/contact/support-line' }
        ]
      }
    },
    ta: {
      'About Us': {
        title: 'எங்களை பற்றி',
        items: [
          { text: 'நாங்கள் யார்', link: '/about/who-we-are' },
          { text: 'நாங்கள் என்ன', link: '/about/what-we-are' },
          { text: 'எங்கள் குழு', link: '/about/our-team' },
          { text: 'தொலைநோக்கு/நோக்கம்', link: '/about/vision-mission' }
        ]
      },
      'What is Autism': {
        title: 'ஆட்டிசம் என்றால் என்ன',
        items: [
          { text: 'ஆட்டிசம் அனுபவம்', link: '/autism/experience' },
          { text: 'திரையிடல் & கண்டறிதல்', link: '/autism/screening-diagnosis' },
          { text: 'ஆட்டிசத்தை புரிந்துகொள்ளுதல்', link: '/autism/understanding' },
          { text: 'அறிகுறிகள் மற்றும் பண்புகள்', link: '/autism/signs-symptoms' }
        ]
      },
      'Resources': {
        title: 'வளங்கள்',
        items: [
          { text: 'ஆதரவு குழுக்கள்', link: '/resources/support-groups' },
          { text: 'வலைப்பதிவு', link: '/resources/blog' },
          { text: 'காணொளிகள்', link: '/resources/videos' },
          { text: 'திட்டங்கள்', link: '/resources/programs' },
          { text: 'நிகழ்வுகள்', link: '/resources/events' }
        ]
      },
      'Contact Us': {
        title: 'தொடர்பு கொள்ள',
        items: [
          { text: 'சிகிச்சை மையங்கள்', link: '/contact/therapy-centers' },
          { text: 'தொடர்பு கொள்ளவும்', link: '/contact/get-in-touch' },
          { text: 'கலந்தாலோசனை', link: '/contact/consultation' },
          { text: 'ஆதரவு வரி', link: '/contact/support-line' }
        ]
      }
    }
  };

  const menuItems = Object.keys(translations[language]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Helper function for menu text size
  const getTextSize = (text) => {
    return language === 'ta' ? 'text-sm' : 'text-base';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Logo */}
          <div className="flex items-center">
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src="Images/logo.png" 
                alt="Logo" 
                className="h-14 w-14 object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-wide text-teal-800 font-sans">
              <span className="font-bold">COE</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center ${language === 'ta' ? 'space-x-2' : 'space-x-6'}`}>
            {menuItems.map((menu) => (
              <div key={menu} className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown(menu)}
                  onClick={() => toggleDropdown(menu)}
                  className={`inline-flex items-center justify-center px-3 py-2 font-medium rounded-md transition-all duration-200 ease-in-out
                    ${activeDropdown === menu 
                      ? 'text-rose-600 bg-rose-50' 
                      : 'text-teal-900 hover:text-teal-900 hover:bg-teal-50'
                    } ${menuWidths[menu]} ${getTextSize(translations[language][menu].title)}`}
                >
                  <span className="whitespace-nowrap">{translations[language][menu].title}</span>
                  <ChevronDown 
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === menu ? 'rotate-180 text-rose-500' : 'text-teal-600'
                    }`}
                  />
                </button>
                {/* Desktop Dropdown */}
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`absolute left-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 ease-in-out
                    ${activeDropdown === menu ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    min-w-[250px]`}
                >
                  {translations[language][menu].items.map((item) => (
                    <a
                      key={item.text}
                      href={item.link}
                      className="block px-4 py-3 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-200 text-teal-900"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <LanguageToggle />
          </div>
          
          {/* Right Logo */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src="Images/cmlogo.png"
                alt="Right Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
          </div>

          {/* Mobile Section */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src="Images/cmlogo.png"
                alt="Right Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-200 focus:outline-none
                ${isMobileMenuOpen 
                  ? 'text-rose-600 bg-rose-50' 
                  : 'text-teal-600 hover:text-teal-700 hover:bg-teal-50'
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-20 left-0 w-full h-screen bg-white shadow-xl overflow-y-auto`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((menu) => (
            <div key={menu} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className={`w-full flex items-center justify-between px-4 py-3 font-medium transition-all duration-200
                  ${activeDropdown === menu 
                    ? 'text-rose-600 bg-rose-50' 
                    : 'text-teal-600 hover:text-teal-700 hover:bg-teal-50'
                  } ${language === 'ta' ? 'text-sm' : 'text-base'}`}
              >
                {translations[language][menu].title}
                <ChevronDown 
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                    activeDropdown === menu ? 'rotate-180 text-rose-500' : 'text-teal-600'
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeDropdown === menu ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {translations[language][menu].items.map((item) => (
                  <a
                    key={item.text}
                    href={item.link}
                    className={`block pl-8 pr-4 py-3 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-200
                      ${language === 'ta' ? 'text-xs' : 'text-sm'} text-teal-900`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;