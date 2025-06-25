
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
    <section className="relative bg-gradient-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full -translate-y-16 translate-x-16 md:-translate-y-32 md:translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full translate-y-16 -translate-x-8 md:translate-y-32 md:-translate-x-16"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in-up leading-tight">
            Affordable homes. <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Zero stress.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            HomeEase helps you find real, verified rental homes in Nigeria—without agent fees.
            Connect directly with landlords and find your perfect home today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Enter location (e.g., Lagos, Abuja)"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="pl-10 h-12 border-gray-200 focus:border-primary text-sm md:text-base"
                />
              </div>
              
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                  <SelectTrigger className="pl-10 h-12 border-gray-200 focus:border-primary text-sm md:text-base">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room">Room</SelectItem>
                    <SelectItem value="self-contained">Self Contained</SelectItem>
                    <SelectItem value="1-bedroom">1 Bedroom</SelectItem>
                    <SelectItem value="2-bedroom">2 Bedroom</SelectItem>
                    <SelectItem value="3-bedroom">3 Bedroom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="pl-10 h-12 border-gray-200 focus:border-primary text-sm md:text-base">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">₦0 - ₦50,000</SelectItem>
                    <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                    <SelectItem value="100000-200000">₦100,000 - ₦200,000</SelectItem>
                    <SelectItem value="200000-500000">₦200,000 - ₦500,000</SelectItem>
                    <SelectItem value="500000+">₦500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="h-12 bg-gradient-primary hover:opacity-90 text-white font-semibold text-sm md:text-base"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="hidden sm:inline">Search Homes</span>
                <span className="sm:hidden">Search</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center animate-fade-in-up px-4" style={{animationDelay: '0.6s'}}>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm md:text-base text-gray-600">Verified Listings</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-2">1,200+</div>
            <div className="text-sm md:text-base text-gray-600">Happy Tenants</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm md:text-base text-gray-600">Agent Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
