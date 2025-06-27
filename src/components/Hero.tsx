
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.propertyType) params.set('type', searchData.propertyType);
    if (searchData.priceRange) params.set('price', searchData.priceRange);
    
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop&crop=center')`
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Premium Properties.
            <br />
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text font-bold">
              Exceptional Value.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Discover Nigeria's finest rental properties with verified listings and direct landlord connections. 
            Your dream home awaits with zero agent fees.
          </p>
        </div>

        {/* Premium Search Bar */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Find Your Perfect Home</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <MapPin className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Enter city or area"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="pl-12 h-14 border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-base rounded-lg"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <Home className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                  <SelectTrigger className="pl-12 h-14 border-gray-300 focus:border-amber-500 text-base rounded-lg">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room">Single Room</SelectItem>
                    <SelectItem value="self-contained">Self Contained</SelectItem>
                    <SelectItem value="1-bedroom">1 Bedroom Apartment</SelectItem>
                    <SelectItem value="2-bedroom">2 Bedroom Apartment</SelectItem>
                    <SelectItem value="3-bedroom">3 Bedroom Apartment</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <DollarSign className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="pl-12 h-14 border-gray-300 focus:border-amber-500 text-base rounded-lg">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">₦0 - ₦50,000</SelectItem>
                    <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                    <SelectItem value="100000-200000">₦100,000 - ₦200,000</SelectItem>
                    <SelectItem value="200000-500000">₦200,000 - ₦500,000</SelectItem>
                    <SelectItem value="500000-1000000">₦500,000 - ₦1,000,000</SelectItem>
                    <SelectItem value="1000000+">₦1,000,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col justify-end">
                <Button 
                  onClick={handleSearch}
                  className="h-14 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-200 font-medium">Premium Listings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1,200+</div>
            <div className="text-gray-200 font-medium">Satisfied Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">0%</div>
            <div className="text-gray-200 font-medium">Agent Fees</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-200 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
