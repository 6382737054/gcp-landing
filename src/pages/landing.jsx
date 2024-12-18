import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, X, MapPin, AlertCircle } from 'lucide-react';

const LandingPage = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    mobile: '',
    email: '',
    emergencyContact: '',
    address: '',
    vehicleNumber: '',
    vehicleType: '',
    manufacturer: '',
    model: '',
    bloodGroup: '',
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
            console.log('Raw QR Data:', decodedText);
            const parsedData = JSON.parse(decodedText);
            console.log('Parsed Data:', parsedData);
            
            setFormData({
              name: parsedData.name || '',
              licenseNumber: parsedData.licenseNumber || '',
              mobile: parsedData.mobile || '',
              email: parsedData.email || '',
              emergencyContact: parsedData.emergencyContact || '',
              address: parsedData.address || '',
              vehicleNumber: parsedData.vehicleNumber || '',
              vehicleType: parsedData.vehicleType || '',
              manufacturer: parsedData.manufacturer || '',
              model: parsedData.model || '',
              bloodGroup: parsedData.bloodGroup || '',
            });
            
            setScannedData(decodedText);
            html5QrCode.stop();
            setShowScanner(false);
            setShowForm(true);
            getLocation();
          } catch (error) {
            console.error('Error parsing QR data:', error);
            alert('Invalid QR code format. Please try again.');
            html5QrCode.stop();
            setShowScanner(false);
          }
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
          console.error('Location Error:', error);
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
      console.error('Submit Error:', error);
      alert('Error submitting form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Vehicle Registration Verification</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!showScanner && !showForm && (
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
              <div className="mb-6">
                <img src="/Images/logo.png" alt="Chennai Police Logo" className="h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Registration Scanner</h2>
                <p className="text-gray-600 mb-8">
                  Scan the QR code from the vehicle registration certificate to verify details
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

        {showForm && (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Verification Details</h2>
              {location && (
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin size={16} className="mr-1" />
                  <span>Location captured: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Owner Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">License Number</p>
                    <p className="font-medium">{formData.licenseNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mobile</p>
                    <p className="font-medium">{formData.mobile}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Blood Group</p>
                    <p className="font-medium">{formData.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Emergency Contact</p>
                    <p className="font-medium">{formData.emergencyContact}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium">{formData.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Vehicle Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Vehicle Number</p>
                    <p className="font-medium">{formData.vehicleNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vehicle Type</p>
                    <p className="font-medium">{formData.vehicleType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Manufacturer</p>
                    <p className="font-medium">{formData.manufacturer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Model</p>
                    <p className="font-medium">{formData.model}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200 flex items-center space-x-2"
              >
                {loading ? (
                  <span>Verifying...</span>
                ) : (
                  <>
                    <span>Verify and Submit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LandingPage;