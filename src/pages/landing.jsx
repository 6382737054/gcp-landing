import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { 
  Camera, 
  X, 
  Shield, 
  Database, 
  Fingerprint, 
  Scan,
  CheckCircle,
  Clock,
  ArrowRight,
  Lock,
  CheckSquare,
  Zap,
  Award,
  Users,
  BarChart,
  ExternalLink,
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  Gift,
  Star,
  FileCheck,
  Globe
} from 'lucide-react';

const LandingPage = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const processSteps = [
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Quick Scan",
      description: "Scan the QR code from your vehicle registration certificate"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Instant Verification",
      description: "Automated verification against secure database"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Verification Status",
      description: "Get immediate results and digital documentation"
    }
  ];

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Secure Platform",
      description: "End-to-end encryption"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Real-time processing"
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-green-600" />,
      title: "Reliable Results",
      description: "99.9% accuracy rate"
    }
  ];

  const integrations = [
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: "National Vehicle Database",
      description: "Direct integration with central vehicle registry"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Police Records",
      description: "Real-time access to police verification data"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-green-600" />,
      title: "Insurance Verification",
      description: "Instant insurance status check"
    }
  ];

  const statistics = [
    { value: "1M+", label: "Verifications", increment: "Monthly" },
    { value: "99.9%", label: "Accuracy", increment: "Guaranteed" },
    { value: "24/7", label: "Support", increment: "Available" },
    { value: "100+", label: "Departments", increment: "Connected" }
  ];

  useEffect(() => {
    if (showScanner) {
      const html5QrCode = new Html5Qrcode("reader");
      
      const qrConfig = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      };

      html5QrCode.start(
        { facingMode: "environment" },
        qrConfig,
        (decodedText) => {
          console.log('QR Code scanned:', decodedText);
          html5QrCode.stop();
          window.location.href = 'https://chennai-police.vercel.app/';
        },
        (error) => {
          console.log('QR Scan Error:', error);
        }
      ).catch((err) => {
        console.log('QR Scanner Init Error:', err);
      });

      return () => {
        html5QrCode.stop().catch(err => console.error(err));
      };
    }
  }, [showScanner]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 mt-10">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
           
              
              <h1 className="text-6xl font-light text-gray-900 leading-tight">
                Vehicle Registration
                <span className="block font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Verification System
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience seamless vehicle verification through our advanced digital platform.
                Secure, instant, and government-approved.
              </p>

              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setShowScanner(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-200"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>Start Verification</span>
                  </span>
                </button>
                
                <button className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-gray-900 text-white scale-105' 
                        : 'bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    {feature.icon}
                    <h3 className="font-semibold mt-4">{feature.title}</h3>
                    <p className={`text-sm mt-1 ${activeFeature === index ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Statistics Section */}
<section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
  {/* Decorative backgrounds */}
  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-xl mb-4">
        <span className="text-sm font-medium text-gray-300">Our Impact</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
        Trusted by <span className="font-semibold">Millions</span>
      </h2>
      <div className="w-20 h-1 bg-white/20 mx-auto"></div>
    </div>

    {/* Statistics Grid */}
    <div className="grid md:grid-cols-4 gap-8">
      {statistics.map((stat, index) => (
        <div 
          key={index}
          className="group relative"
        >
          {/* Card Background with Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-sm"></div>
          <div className="relative p-8 bg-gray-900/80 rounded-2xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            {/* Top Decorative Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Icon Container */}
            <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              {index === 0 && <Users className="w-6 h-6 text-blue-400" />}
              {index === 1 && <CheckCircle className="w-6 h-6 text-green-400" />}
              {index === 2 && <Clock className="w-6 h-6 text-purple-400" />}
              {index === 3 && <Database className="w-6 h-6 text-yellow-400" />}
            </div>
            
            {/* Statistics Content */}
            <div className="relative">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {stat.increment}
              </div>
            </div>
            
            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Decorative Elements */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center space-x-4 text-gray-400">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <Shield className="w-5 h-5" />
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
    </div>
  </div>
</section>
{/* Process Section */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-gray-900/[0.02]"></div>
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-gray-900/5 rounded-xl mb-4">
        <span className="text-sm font-medium text-gray-600">How It Works</span>
      </div>
      <h2 className="text-4xl font-light text-gray-900">
        Simple <span className="font-semibold">Three-Step</span> Process
      </h2>
      <p className="text-gray-600 mt-4">Complete verification in minutes</p>
      <div className="w-20 h-1 bg-gray-900 mx-auto mt-6"></div>
    </div>
    
    <div className="relative">
      {/* Connection lines */}
  {/* Connection lines - Apple style */}
<div className="absolute top-1/2 left-0 right-0 hidden md:block">
  <div className="h-[2px] bg-gray-900"></div>
</div>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {processSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Step number */}
              <div className="absolute -top-4 left-8 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              
              {/* Icon container */}
              <div className="mb-6 transform-gpu group-hover:-translate-y-1 transition-transform duration-200">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
              
              {/* Decorative arrow for non-last items */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Integrations Section */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0)] bg-[length:16px_16px]"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-gray-900/5 rounded-xl mb-4">
        <span className="text-sm font-medium text-gray-600">Integrations</span>
      </div>
      <h2 className="text-4xl font-light text-gray-900">
        Connected <span className="font-semibold">Ecosystem</span>
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Seamlessly integrated with major government databases for comprehensive verification
      </p>
      <div className="w-20 h-1 bg-gray-900 mx-auto mt-6"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {integrations.map((item, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Icon with gradient background */}
            <div className="inline-block p-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-200">
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 group-hover:text-gray-900 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
            
            {/* Hover indicator */}
            <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
              <span className="text-sm">Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
     {/* FAQ Section */}
     <section className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-4xl font-light text-gray-900">
             Frequently Asked <span className="font-semibold">Questions</span>
           </h2>
           <p className="text-gray-600 mt-4">Find quick answers to common queries</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">
               What documents do I need?
             </h3>
             <p className="text-gray-600">
               You only need your vehicle registration certificate with the QR code. The system automatically processes all other required documents.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">
               How long does verification take?
             </h3>
             <p className="text-gray-600">
               The verification process is instant. Results are typically available within seconds of scanning the QR code.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">
               Is the platform secure?
             </h3>
             <p className="text-gray-600">
               Yes, we use end-to-end encryption and follow all government security protocols to protect your data.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">
               What if I face issues?
             </h3>
             <p className="text-gray-600">
               Our 24/7 support team is available to help. Contact us through phone, email, or the contact form above.
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* Footer */}
     <footer className="bg-gray-900 text-white py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-4 gap-12">
           <div className="space-y-4">
             <div className="flex items-center space-x-2">
               <Shield className="w-8 h-8" />
               <span className="text-xl font-semibold">GCP Verify</span>
             </div>
             <p className="text-gray-400">
               Official vehicle registration verification platform for the Government of Tamil Nadu.
             </p>
           </div>
           
           <div>
             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-lg font-semibold mb-4">Legal</h4>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Disclaimer</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Security</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-lg font-semibold mb-4">Connect</h4>
             <div className="space-y-4">
               <div className="flex items-center space-x-3">
                 <PhoneCall className="w-5 h-5 text-gray-400" />
                 <span className="text-gray-400">1800-XXX-XXXX</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-gray-400" />
                 <span className="text-gray-400">support@gcpverify.gov.in</span>
               </div>
               <div className="flex items-center space-x-3">
                 <MapPin className="w-5 h-5 text-gray-400" />
                 <span className="text-gray-400">Chennai, Tamil Nadu</span>
               </div>
             </div>
           </div>
         </div>

         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
           <p>© 2024 GCP Verify. All rights reserved.</p>
         </div>
       </div>
     </footer>

     {/* QR Scanner Modal remains the same */}
     {showScanner && (
       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
         <div className="bg-white rounded-2xl overflow-hidden w-full max-w-md relative">
           <button
             onClick={() => setShowScanner(false)}
             className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
           >
             <X size={20} />
           </button>
           <div id="reader" className="w-full"></div>
           <div className="p-4 text-center bg-gray-900 text-white font-medium">
             Position QR Code Within Frame
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default LandingPage;