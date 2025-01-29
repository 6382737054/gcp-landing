const SupportSection = () => {
    return (
      <div className="w-full bg-white">
        {/* Support Section Banner */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2">
            {/* Image Section - Left Half */}
            <div className="relative bg-[#E6EEF0] h-[400px]">
              <img 
                src="Images/support.png"
                alt="Support from Autism Society"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Content Section - Right Half */}
            <div className="bg-[#00BFA5] p-16 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-white mb-8">
                Support from the Autism Society
              </h2>
              <button className="text-[#00BFA5] bg-white px-6 py-3 rounded text-base font-medium w-fit hover:bg-opacity-90 transition-all duration-200">
                Get Support
              </button>
            </div>
          </div>
        </div>
  
        {/* Content Section Below */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Title */}
            <div>
              <h2 className="text-4xl font-bold text-[#004D43] leading-tight">
                Diagnosis Per Life Stage
              </h2>
            </div>
  
            {/* Right Content */}
            <div className="lg:col-span-2 text-lg text-[#004D43] space-y-6">
              <p>
                Evaluations typically begin with your primary care provider and vary based on age.
              </p>
              <p>
                If your primary care professional does not wish to refer you to a diagnostician, or does not acknowledge your concerns, it is important to know that you have the right to contact a diagnostician for a second opinion. Check the website of your local Autism Society affiliate for information about diagnosticians in your area, or call our team of national Information & Referral specialists at
              </p>
              <p>
                <a href="tel:800-328-8476" className="text-[#004D43] font-semibold hover:underline">
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