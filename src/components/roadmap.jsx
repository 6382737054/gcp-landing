import React, { useState } from 'react';
import { Brain, Heart, Users, Star, BookOpen, Sparkles, CircleDot } from 'lucide-react';

const CurvedRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Recognition",
      icon: <Brain className="w-6 h-6" />,
      color: "#FF6B53",
      position: { x: "15%", y: "20%" }
    },
    {
      id: 2,
      title: "Assessment",
      icon: <Heart className="w-6 h-6" />,
      color: "#7DCFBD",
      position: { x: "35%", y: "45%" }
    },
    {
      id: 3,
      title: "Early Support",
      icon: <Star className="w-6 h-6" />,
      color: "#41969F",
      position: { x: "50%", y: "25%" }
    },
    {
      id: 4,
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#8B1A50",
      position: { x: "65%", y: "50%" }
    },
    {
      id: 5,
      title: "Development",
      icon: <CircleDot className="w-6 h-6" />, // Changed from PuzzlePiece to CircleDot
      color: "#FFB648",
      position: { x: "85%", y: "30%" }
    }
  ];

  return (
    <section className="bg-[#FAF2F0] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#8B1A50] mb-4">
            Your Autism Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every path is unique, but understanding the key milestones helps create a clear direction forward.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="relative w-full h-[600px] bg-white rounded-3xl shadow-xl p-8">
          {/* SVG Road Path */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1000 600" 
            preserveAspectRatio="none"
          >
            {/* Dotted Lines for Road Edges */}
            <path
              d="M100,150 C250,150 300,350 500,350 C700,350 750,150 900,150"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="transform -translate-y-8"
            />
            <path
              d="M100,150 C250,150 300,350 500,350 C700,350 750,150 900,150"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="transform translate-y-8"
            />
            
            {/* Main Road Path */}
            <path
              d="M100,150 C250,150 300,350 500,350 C700,350 750,150 900,150"
              fill="none"
              stroke="#41969F"
              strokeWidth="20"
              className="transition-all duration-1000"
            />
          </svg>

          {/* Step Markers */}
          {steps.map((step) => (
            <div
              key={step.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: step.position.x, top: step.position.y }}
            >
              <button
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className={`group relative flex items-center justify-center w-16 h-16 
                  rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? 'scale-110 shadow-lg'
                      : 'hover:scale-105'
                  }`}
                style={{ backgroundColor: step.color }}
              >
                {/* Icon */}
                <div className="text-white">{step.icon}</div>

                {/* Title */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                  bg-white px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 whitespace-nowrap">
                  <p className="font-semibold text-gray-800">{step.title}</p>
                </div>

                {/* Connector Line */}
                <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gray-300 transform 
                  -translate-x-1/2"></div>
              </button>

              {/* Content Panel */}
              {activeStep === step.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8
                  w-80 bg-white rounded-xl shadow-xl p-6 animate-fade-in">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${step.color}20` }}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{step.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Detailed information about {step.title.toLowerCase()} stage goes here...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CurvedRoadmap;