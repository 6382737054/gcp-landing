
import React from 'react';
import { ArrowRight } from 'lucide-react';

const InfoSection = ({ imageLeft, title, subtitle, description, imageSrc, decorativeElement }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
      {imageLeft ? (
        <>
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[499px]">
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#7DCFBD] w-full h-[610px]">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover"
                  style={{ background: '#7DCFBD' }}
                />
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
              </div>
              {/* Decorative element */}
              {decorativeElement && (
                <div className="absolute -left-4 -bottom-4 text-[#41969F]/10 z-0 transform scale-75">
                  {decorativeElement}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:pl-8 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 rounded-full">
              <span className="text-rose-600 font-medium text-sm tracking-wide uppercase">{subtitle}</span>
              <ArrowRight className="w-4 h-4 text-rose-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#8B1A50]">{title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-6 lg:pr-8 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 rounded-full">
              <span className="text-rose-600 font-medium text-sm tracking-wide uppercase">{subtitle}</span>
              <ArrowRight className="w-4 h-4 text-rose-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#8B1A50]">{title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[499px]">
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#7DCFBD] w-full h-[610px]">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover"
                  style={{ background: '#7DCFBD' }}
                />
                {/* Decorative dots */}
                <div className="absolute -bottom-2 -left-2">
                  <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
                    <circle cx="10" cy="10" r="3" fill="#FF6B53" />
                    <circle cx="30" cy="10" r="3" fill="#FF6B53" />
                    <circle cx="50" cy="10" r="3" fill="#FF6B53" />
                    <circle cx="10" cy="30" r="3" fill="#FF6B53" />
                    <circle cx="30" cy="30" r="3" fill="#FF6B53" />
                    <circle cx="50" cy="30" r="3" fill="#FF6B53" />
                  </svg>
                </div>
              </div>
              {/* Decorative element */}
              {decorativeElement && (
                <div className="absolute -right-4 -bottom-4 text-[#41969F]/10 z-0 transform scale-75">
                  {decorativeElement}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

export default InfoSection;