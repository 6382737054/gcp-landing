// components/LanguageToggle.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-center">
      <div 
        onClick={toggleLanguage}
        className="relative flex items-center cursor-pointer select-none"
      >
        <div className="flex items-center bg-white border-2 border-gray-300 rounded-full p-0.5 w-[90px] duration-300 ease-in-out">
          <div 
            className="absolute h-6 w-[42px] bg-rose-500 rounded-full transition-all duration-300 ease-in-out"
            style={{
              transform: `translateX(${language === 'ta' ? '42px' : '0'})`,
            }}
          />
          <div className="flex items-center justify-between w-full relative z-10">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium duration-300 min-w-[42px] text-center
                ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
            >
              En
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium duration-300 min-w-[42px] text-center
                ${language === 'ta' ? 'text-white' : 'text-gray-500'}`}
            >
              த
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;