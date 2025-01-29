const ConnectSection = () => {
    return (
      <section className="relative min-h-[600px] bg-[#41969F] overflow-hidden">
        {/* Curved shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 280" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 280L1440 280L1440 80C1200 160 720 0 0 180L0 280Z" 
              fill="#004D43"
            />
          </svg>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
            {/* Image Section */}
            <div className="relative z-10">
              <div className="bg-[#7DCFBD] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="Images/connect.jpg"
                  alt="Connect with Autism Society"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Content Section */}
            <div className="relative z-10 text-white lg:pl-8">
              <h2 className="text-5xl font-bold mb-6">
                Connect to Experience
              </h2>
              <p className="text-lg mb-8 text-white/90">
                The Autism Society connects you to the support you need, when you need it with our experienced Information & Referral Specialists at our Helpline.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-[#FF6B53] hover:text-[#FF6B53]/90 transition-colors text-lg"
              >
                Connect with a team member today
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
  
              {/* Quote */}
              <div className="mt-16">
                <blockquote className="text-xl italic">
                  <span className="text-[#FF6B53] text-4xl">"</span>
                  Through the Autism Society, we were able to retrieve a sense of community, comfort and connection.
                </blockquote>
                <p className="mt-4 text-white/80">~ Curt W.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ConnectSection;