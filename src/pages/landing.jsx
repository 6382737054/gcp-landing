import React, { useState } from 'react';
import { ChevronRight, Heart, Brain, Users, Sparkles, ArrowRight } from 'lucide-react';
import SupportSection from '../components/homebanner';

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
const Homepage = () => {
  const [activeCard, setActiveCard] = useState('medical');

  const cardContents = {
    medical: {
      title: 'Medical Diagnosis',
      content: {
        left: 'A medical diagnosis is made by a psychologist, developmental pediatrician, or other specialized physician based on an assessment of symptoms and diagnostic tests. A medical diagnosis of Autism spectrum disorder is most frequently made according to the Diagnostic and Statistical Manual (DSM-5, released 2013) of the American Psychiatric Association. This manual guides physicians in diagnosing Autism spectrum disorder according to a specific set of criterion.',
        right: 'A brief observation in a single setting cannot present a true picture of someone\'s abilities and behaviors. The person\'s developmental history and input from parents, caregivers and/or teachers are important components of an accurate diagnosis.'
      }
    },
    educational: {
      title: 'Educational Determination',
      content: {
        left: 'An educational determination is made by a multidisciplinary evaluation team of various school professionals. The evaluation results are reviewed by a team of qualified professionals and the parents to determine whether a student qualifies for special education and related services under the Individuals with Disabilities Education Act (IDEA) (Hawkins, 2009).',
        right: 'The evaluation process involves multiple steps and considerations to ensure a comprehensive understanding of the student\'s needs and abilities within the educational context.'
      }
    },
    screening: {
      title: 'Screening',
      content: {
        left: 'An educational determination can qualify an individual for support within school settings. However, an educational determination is not the same as a medical diagnosis, and often will not qualify an individual for therapies and support outside of school that would typically be covered by insurance or Medicaid.',
        right: 'Additionally, a medical diagnosis of Autism does not guarantee an educational determination. Each process serves its own distinct purpose in supporting individuals with autism.'
      }
    }
  };

  return (
    <main className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-08">
        <div className="absolute inset-0 top-0">
          <div className="absolute inset-0 bg-[#FAF2F0]" style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }}>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-32 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-3">
                <p className="text-[#E31B54] font-medium text-sm tracking-wide uppercase">
                  Screening & Diagnosis
                </p>
                <h1 className="text-[#8B1A50] text-5xl lg:text-6xl font-bold leading-tight">
                  Identifying Autism
                </h1>
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg">
                <p className="leading-relaxed">
                  When family members or support providers become concerned that a child is not following a typical developmental course, they turn to experts, including psychologists, educators and medical professionals, for a diagnosis.
                </p>
                <p className="leading-relaxed">
                  At first glance, some people with Autism may appear to have an intellectual disability, sensory processing issues, or problems with hearing or vision, and the diagnosis of Autism may become more challenging.
                </p>
                <p className="leading-relaxed">
                  These conditions can co-occur with Autism and it can be confusing to families when they receive multiple diagnoses. However, it is important to identify Autism, as an accurate and early Autism diagnosis can provide the basis for appropriate educational and home-based support.
                </p>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-[#7DCFBD] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="Images/landing1.png"
                  alt="Person smiling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative bg-[#41969F] py-24">
        <div className="absolute top-0 right-0 text-white/10">
          <Brain className="w-48 h-48" />
        </div>
        <div className="absolute bottom-0 left-0 text-white/10">
          <Heart className="w-32 h-32" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(cardContents).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCard(key)}
                className={`relative group p-8 rounded-lg transition-all duration-300 bg-[#FF6B53] 
                  ${activeCard === key ? 'shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'}`}
              >
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-semibold">{value.title}</h3>
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
            <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4 max-w-3xl mx-auto">
              {cardContents[activeCard].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="text-lg leading-relaxed">
                {cardContents[activeCard].content.left}
              </div>
              <div className="text-lg leading-relaxed md:border-l border-white/20 md:pl-12">
                {cardContents[activeCard].content.right}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="relative bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InfoSection 
            imageLeft={true}
            title="Early Intervention & Support"
            subtitle="Building Foundations"
            description="Early intervention services can improve a child's development. Children who receive autism-appropriate education and support at key developmental stages are more likely to gain essential social skills and react better in society. Early intervention not only gives the best outcomes for your child, but it will also help reduce the stress on you and your family."
            imageSrc="Images/early-intervention.jpg"
            decorativeElement={<Heart className="w-32 h-32" />}
          />

          <InfoSection 
            imageLeft={false}
            title="Understanding Behavioral Patterns"
            subtitle="Behavioral Analysis"
            description="Understanding behavioral patterns is crucial for supporting individuals with autism. By recognizing and interpreting these patterns, we can better adapt environments and interactions to support their needs. This understanding helps create more effective strategies for communication and learning."
            imageSrc="Images/behavioral-patterns.jpg"
            decorativeElement={<Brain className="w-32 h-32" />}
          />

          <InfoSection 
            imageLeft={true}
            title="Family Support & Resources"
            subtitle="Community Support"
            description="Family support is essential in the journey of autism care. We provide comprehensive resources and guidance to help families navigate challenges and celebrate victories together. Our community-based approach ensures that no family walks this path alone."
            imageSrc="Images/family-support.jpg"
            decorativeElement={<Users className="w-32 h-32" />}
          />
        </div>

        <div className="absolute top-0 right-0 text-[#41969F]/5">
          <Sparkles className="w-64 h-64" />
        </div>
        <div className="absolute bottom-0 left-0 text-[#41969F]/5">
          <Brain className="w-48 h-48" />
        </div>
      </section>
      <SupportSection/>
    </main>
  );
};

export default Homepage;