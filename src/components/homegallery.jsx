const ActivitiesPage = () => {
    const activities = [
      {
        id: 1,
        image: "activities1.jpg",
        size: "small"
      },
      {
        id: 2,
        image: "activities2.jpg",
        size: "small"
      },
      {
        id: 3,
        image: "activities3.jpg",
        size: "large"
      },
      {
        id: 4,
        image: "activities4.jpg",
        size: "small"
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero Text Card */}
          <div className="bg-[#0066FF] rounded-2xl p-8 flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Activities</h1>
            <p className="text-xl font-light">Fuelling minds, Igniting passion</p>
          </div>
  
          {/* Activity Images Grid */}
          <div className="grid gap-6 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Workshop Image */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/Images/activities1.jpg" 
                  alt="Workshop" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
  
              {/* Team Photo */}
              <div className="rounded-2xl overflow-hidden lg:col-span-2">
                <img 
                  src="/Images/activities2.jpg" 
                  alt="Team" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Speaker Event */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/Images/activities3.jpg" 
                  alt="Speaker" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
  
              {/* Conference */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/Images/activities4.jpg" 
                  alt="Conference" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
  
              {/* Flag Ceremony */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/Images/activities5.jpg" 
                  alt="Flag Ceremony" 
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* View All Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-[#1E2875] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 flex items-center space-x-2">
            <span>View All</span>
            <svg 
              className="w-5 h-5" 
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
          </button>
        </div>
      </div>
    );
  };
  
  export default ActivitiesPage;