import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, Brain, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#004D43] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 text-white/5">
        <Brain className="w-48 h-48" />
      </div>
      <div className="absolute bottom-0 left-0 text-white/5">
        <Heart className="w-32 h-32" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <img 
              src="Images/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to supporting individuals with autism and their families through understanding, acceptance, and comprehensive resources.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#FF6B53] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Support Groups</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Therapy Centers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Educational Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Parent Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Community Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Professional Training</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>800-3-AUTISM (800-328-8476)</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@autismsociety.org</span>
              </p>
              <p className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>123 Autism Support Street,<br />City, State 12345</span>
              </p>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Autism Society. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;