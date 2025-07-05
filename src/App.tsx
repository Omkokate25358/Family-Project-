import React from 'react';
import { MapPin, Phone, Factory, Award, Truck, Shield, Clock, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Factory className="h-10 w-10" />
              <div>
                <h1 className="text-3xl font-bold">Kokate  Cement Products</h1>
                <p className="text-red-100">देवयानी कन्स्ट्रक्शन</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">7083212134 / 8830180456</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Premium Quality
                <span className="text-red-600 block">Cement Products</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manufacturing high-quality cement products with modern machinery and traditional craftsmanship. 
                Serving the construction industry with reliable and durable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                  View Products
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image.png" 
                alt="Kokate Cement Products" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="font-bold text-gray-900">Quality Assured</p>
                    <p className="text-sm text-gray-600">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manufacture a comprehensive range of cement products for all your construction needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Cement Chaukhat", desc: "सिमेंट चौकट", icon: "🏗️" },
              { name: "Cement Water Tanks", desc: "सिमेंट पाणी टाकी", icon: "🚰" },
              { name: "Tubewell Covers", desc: "ट्यूबवेल कवर", icon: "⚡" },
              { name: "Ventilation Blocks", desc: "वाय पोल (मेडकी)", icon: "🌬️" },
              { name: "Fencing Poles", desc: "फेन्सिंग पोल", icon: "🔒" },
              { name: "Drain Covers", desc: "ड्रेन पोल रिंग", icon: "🕳️" },
              { name: "Marking Poles", desc: "मार्किंग पोल", icon: "📍" },
              { name: "RCC Compound Walls", desc: "RCC कम्पाउंड वॉल", icon: "🧱" }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-red-600 font-medium mb-3">{product.desc}</p>
                <p className="text-gray-600 text-sm">High-quality construction material manufactured with precision</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-xl text-gray-600">सर्व अत्याधुनिक मशीनद्वारे मालाची निर्मिती</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Factory className="h-12 w-12 text-red-600" />,
                title: "Modern Machinery",
                desc: "State-of-the-art equipment for precision manufacturing"
              },
              {
                icon: <Shield className="h-12 w-12 text-red-600" />,
                title: "Quality Assurance",
                desc: "Rigorous testing ensures superior product quality"
              },
              {
                icon: <Truck className="h-12 w-12 text-red-600" />,
                title: "Timely Delivery",
                desc: "Reliable delivery schedule for your projects"
              },
              {
                icon: <Users className="h-12 w-12 text-red-600" />,
                title: "Expert Team",
                desc: "Experienced professionals ensuring excellence"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Factory Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our manufacturing facility is strategically located for easy access and distribution.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/WRCedGM3PeCqSdFh9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mt-2 transition-colors duration-300"
                    >
                      View on Google Maps
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Contact Numbers</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">📞 7083212134</p>
                      <p className="text-gray-600">📞 8830</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h4>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300">
                    <option>Select Product</option>
                    <option>Cement Chaukhat</option>
                    <option>Water Tanks</option>
                    <option>Fencing Poles</option>
                    <option>RCC Compound Walls</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Project Details" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                  ></textarea>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Factory className="h-8 w-8 text-red-500" />
                <h5 className="text-xl font-bold">Kokate Cement Products</h5>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Manufacturing premium quality cement products with modern technology and traditional expertise.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-bold mb-4">Our Products</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Cement Chaukhat</li>
                <li>Water Tanks</li>
                <li>Fencing Poles</li>
                <li>RCC Compound Walls</li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-bold mb-4">Contact Info</h6>
              <div className="space-y-2 text-gray-400">
                <p>📞 7083212134 / 8830</p>
                <p>🏭 हेमंत प्र कोकाटे, उदय प्र कोकाटे</p>
                <p>📍 Factory Location Available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kokate Cement Products. All rights reserved. | देवयानी कन्स्ट्रक्शन</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
