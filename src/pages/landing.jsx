import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, X } from 'lucide-react';

const LandingPage = () => {
  const [showScanner, setShowScanner] = useState(false);

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
          // Successfully scanned QR code
          console.log('QR Code scanned:', decodedText);
          html5QrCode.stop();
          // Redirect immediately
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Vehicle Registration Verification</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!showScanner && (
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
              <div className="mb-6">
                <img src="/Images/logo.png" alt="Chennai Police Logo" className="h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Registration Scanner</h2>
                <p className="text-gray-600 mb-8">
                  Scan the QR code from the vehicle registration certificate
                </p>
              </div>
              <button
                onClick={() => setShowScanner(true)}
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 w-full"
              >
                <Camera size={20} />
                <span>Scan QR Code</span>
              </button>
            </div>
          </div>
        )}

        {showScanner && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl overflow-hidden w-full max-w-md relative">
              <button
                onClick={() => setShowScanner(false)}
                className="absolute top-4 right-4 text-black z-10 bg-white bg-opacity-75 p-2 rounded-full"
              >
                <X size={20} />
              </button>
              <div id="reader" className="w-full"></div>
              <div className="p-4 text-center bg-black text-white">
                Position the QR code within the frame
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LandingPage;