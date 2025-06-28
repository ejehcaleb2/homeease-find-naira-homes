
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, DollarSign, TrendingUp, Users, Award, Shield } from 'lucide-react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">#1 Trusted Real Estate Platform</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Find Your Dream Home
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text font-bold">
              With Zero Hassle
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Discover premium rental properties across Nigeria with verified listings, transparent pricing, 
            and direct landlord connections. Your perfect home is just one search away.
          </p>
        </div>

        {/* Premium Search Bar */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-slate-900">Find Your Perfect Home</h3>
              <div className="flex items-center text-sm text-slate-500">
                <Shield className="w-4 h-4 mr-1" />
                Verified Properties Only
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <MapPin className="absolute left-4 top-12 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Enter city or area"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="pl-12 h-14 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-base rounded-lg"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <Home className="absolute left-4 top-12 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                  <SelectTrigger className="pl-12 h-14 border-slate-300 focus:border-blue-500 text-base rounded-lg">
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                <DollarSign className="absolute left-4 top-12 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="pl-12 h-14 border-slate-300 focus:border-blue-500 text-base rounded-lg">
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
                  className="h-14 bg-gradient-primary hover:shadow-lg text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 btn-premium"
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
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-lift">
            <div className="flex justify-center mb-3">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">2,500+</div>
            <div className="text-slate-600 font-medium">Premium Listings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-lift">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">15,000+</div>
            <div className="text-slate-600 font-medium">Happy Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-lift">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">0%</div>
            <div className="text-slate-600 font-medium">Agent Fees</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-lift">
            <div className="flex justify-center mb-3">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
