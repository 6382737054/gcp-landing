import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, X, MapPin } from 'lucide-react';

const LandingPage = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    licenseNumber: '',
    email: '',
  });

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
          try {
            // Parse the QR code data
            const parsedData = parseQRData(decodedText);
            
            // Auto-fill the form with parsed data
            setFormData({
              name: parsedData.name || '',
              mobile: parsedData.mobile || '',
              licenseNumber: parsedData.licenseNumber || '',
              email: parsedData.email || '',
            });
            
            setScannedData(decodedText);
            html5QrCode.stop();
            setShowScanner(false);
            setShowForm(true);
            getLocation();
          } catch (error) {
            console.error('Error parsing QR data:', error);
            alert('Invalid QR code format');
          }
        },
        (error) => {
          console.log(error);
        }
      ).catch((err) => {
        console.log(err);
      });

      return () => {
        html5QrCode.stop().catch(err => console.error(err));
      };
    }
  }, [showScanner]);

  const parseQRData = (qrText) => {
    // This function assumes the QR data is in a specific format
    // Modify this based on your actual QR code format
    try {
      // For demo purposes, assuming the QR text contains lines of key:value pairs
      const lines = qrText.split('\n');
      const data = {};
      
      lines.forEach(line => {
        if (line.includes(':')) {
          const [key, value] = line.split(':').map(str => str.trim());
          switch (key.toLowerCase()) {
            case 'name':
              data.name = value;
              break;
            case 'license number':
              data.licenseNumber = value;
              break;
            case 'mobile':
              data.mobile = value;
              break;
            case 'email':
              data.email = value;
              break;
          }
        }
      });
      
      return data;
    } catch (error) {
      console.error('Error parsing QR data:', error);
      return {};
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Please enable location services to continue');
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        ...formData,
        qrData: scannedData,
        latitude: location?.latitude,
        longitude: location?.longitude,
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting data:', submitData);
      window.location.href = 'https://chennai-police.vercel.app/scans';
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Greater Police Chennai</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!showScanner && !showForm && (
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Verification</h2>
              <p className="text-gray-600 mb-8">
                Scan the QR code from the vehicle registration certificate
              </p>
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

        {showForm && (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Verify Details</h2>
              {location && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin size={16} className="mr-1" />
                  <span>Location: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License Number
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-400"
              >
                {loading ? 'Verifying...' : 'Verify Details'}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default LandingPage;