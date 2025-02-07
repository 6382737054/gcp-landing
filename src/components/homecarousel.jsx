import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[499px]">
      <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#7DCFBD] w-full h-[610px]">
        <div className="relative w-full h-full transition-transform duration-500 ease-in-out">
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            className="w-full h-full object-cover"
            style={{ background: '#7DCFBD' }}
          />
        </div>
        
        {/* Decorative dots */}
        <div className="absolute -bottom-2 -right-2">
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
            <circle cx="10" cy="10" r="3" fill="#FF6B53" />
            <circle cx="30" cy="10" r="3" fill="#FF6B53" />
            <circle cx="50" cy="10" r="3" fill="#FF6B53" />
            <circle cx="10" cy="30" r="3" fill="#FF6B53" />
            <circle cx="30" cy="30" r="3" fill="#FF6B53" />
            <circle cx="50" cy="30" r="3" fill="#FF6B53" />
          </svg>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;