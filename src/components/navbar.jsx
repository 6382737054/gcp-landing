import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    'About Us': ['Who we are', 'What we are', 'Our team', 'Vision/Mission'],
    'What is Autism': ['The Autism Experience', 'Screening & Diagnosis'],
    'Resources': ['Support', 'Blog', 'Videos', 'Programs', 'Events'],
    'Contact Us': ['Therapy Centers', 'Get in touch']
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="Images/logo.png" 
              alt="Logo" 
              className="h-12 w-auto mr-3"
            />
            <span className="text-xl font-semibold tracking-wide text-teal-800 font-sans">
              <span className="font-bold">COE</span>
             
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(menuItems).map(([menu, subItems]) => (
              <div key={menu} className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown(menu)}
                  onClick={() => toggleDropdown(menu)}
                  className={`inline-flex items-center px-4 py-2 text-base font-medium rounded-md transition-all duration-200 ease-in-out mx-2
                    ${activeDropdown === menu 
                      ? 'text-rose-600 bg-rose-50' 
                      : 'text-teal-900 hover:text-teal-900 hover:bg-teal-50'
                    }`}
                >
                  {menu}
                  <ChevronDown 
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === menu ? 'rotate-180 text-rose-500' : 'text-teal-600'
                    }`}
                  />
                </button>
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`absolute z-50 w-56 rounded-md shadow-lg bg-white transform transition-all duration-300 origin-top
                    ${activeDropdown === menu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
                  `}
                >
                  <div className="py-1">
                    {subItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-3 text-sm text-teal-600 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Logo */}
          <div className="hidden md:block">
            <img 
              src="Images/cmlogo.png"
              alt="Right Logo"
              className="h-20 w-32"  // Increased size for desktop
            />
          </div>

          {/* Mobile Section - Logo and Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Right Logo for Mobile */}
            <img 
              src="Images/cmlogo.png"
              alt="Right Logo"
              className="h-16 w-24"  // Increased size for mobile
            />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-3 rounded-md transition-colors duration-200 focus:outline-none
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

      {/* Mobile Menu with Slide Animation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-20 left-0 w-full h-screen bg-white shadow-xl overflow-y-auto`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {Object.entries(menuItems).map(([menu, subItems]) => (
            <div key={menu} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-200
                  ${activeDropdown === menu 
                    ? 'text-rose-600 bg-rose-50' 
                    : 'text-teal-600 hover:text-teal-700 hover:bg-teal-50'
                  }`}
              >
                {menu}
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
                {subItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block pl-8 pr-4 py-3 text-sm text-teal-900 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-200"
                  >
                    {item}
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