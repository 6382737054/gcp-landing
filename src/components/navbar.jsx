import React, { useState, useEffect } from 'react';
import { 
  Menu,
  X,
  ChevronDown,
  Shield,
  Phone,
  HelpCircle,
  User
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      items: [
        'Vehicle Registration',
        'Document Verification',
        'Status Check',
        'History Report'
      ]
    },
    {
      label: 'About',
      items: [
        'Our Mission',
        'Security',
        'Technology',
        'Partners'
      ]
    },
    {
      label: 'Support',
      items: [
        'Help Center',
        'FAQs',
        'Contact',
        'Report Issue'
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-gray-900 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Shield className="w-8 h-8 text-gray-900" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Greater Chennai Police</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Contact */}
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Phone className="w-5 h-5" />
            </a>

            {/* Help */}
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <HelpCircle className="w-5 h-5" />
            </a>

            {/* User Profile */}
           
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="space-y-1">
                <button className="w-full px-3 py-2 text-left text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  {item.label}
                </button>
                <div className="pl-4 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;