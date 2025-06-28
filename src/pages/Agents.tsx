
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MapPin, Phone, Mail, MessageCircle, Award, Users, Search } from 'lucide-react';

const Agents = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    specialization: '',
    rating: ''
  });

  const agents = [
    {
      id: 1,
      name: "Adebayo Johnson",
      title: "Senior Real Estate Consultant",
      location: "Lagos Island, Lagos",
      rating: 4.9,
      reviews: 127,
      specializations: ["Luxury Properties", "Commercial", "Investment"],
      languages: ["English", "Yoruba"],
      experience: "8 years",
      phone: "+234 901 234 5678",
      email: "adebayo@homeease.ng",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 45,
      closedDeals: 89
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      title: "Property Investment Specialist",
      location: "Wuse 2, Abuja",
      rating: 4.8,
      reviews: 98,
      specializations: ["Investment", "Residential", "First-time Buyers"],
      languages: ["English", "Hausa"],
      experience: "6 years",
      phone: "+234 902 345 6789",
      email: "fatima@homeease.ng",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 38,
      closedDeals: 72
    },
    {
      id: 3,
      name: "Chukwuma Okafor",
      title: "Luxury Property Expert",
      location: "Victoria Island, Lagos",
      rating: 4.9,
      reviews: 154,
      specializations: ["Luxury Properties", "Penthouses", "Waterfront"],
      languages: ["English", "Igbo"],
      experience: "12 years",
      phone: "+234 903 456 7890",
      email: "chukwuma@homeease.ng",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 62,
      closedDeals: 134
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      title: "Residential Property Consultant",
      location: "Gwarinpa, Abuja",
      rating: 4.7,
      reviews: 83,
      specializations: ["Residential", "Family Homes", "Affordable Housing"],
      languages: ["English", "Hausa", "Arabic"],
      experience: "5 years",
      phone: "+234 904 567 8901",
      email: "aisha@homeease.ng",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 29,
      closedDeals: 56
    },
    {
      id: 5,
      name: "Emeka Nwachukwu",
      title: "Commercial Real Estate Agent",
      location: "Ikeja GRA, Lagos",
      rating: 4.8,
      reviews: 76,
      specializations: ["Commercial", "Office Spaces", "Retail"],
      languages: ["English", "Igbo"],
      experience: "9 years",
      phone: "+234 905 678 9012",
      email: "emeka@homeease.ng",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 41,
      closedDeals: 78
    },
    {
      id: 6,
      name: "Blessing Okoro",
      title: "Student Housing Specialist",
      location: "Yaba, Lagos",
      rating: 4.6,
      reviews: 92,
      specializations: ["Student Housing", "Shared Accommodation", "Budget Properties"],
      languages: ["English", "Igbo"],
      experience: "4 years",
      phone: "+234 906 789 0123",
      email: "blessing@homeease.ng",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      verified: true,
      properties: 33,
      closedDeals: 47
    }
  ];

  const filteredAgents = agents.filter(agent => {
    const matchesLocation = !searchFilters.location || agent.location.toLowerCase().includes(searchFilters.location.toLowerCase());
    const matchesSpecialization = !searchFilters.specialization || agent.specializations.some(spec => spec.toLowerCase().includes(searchFilters.specialization.toLowerCase()));
    const matchesRating = !searchFilters.rating || agent.rating >= parseFloat(searchFilters.rating);
    
    return matchesLocation && matchesSpecialization && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Real Estate Agent
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with verified, professional real estate agents who specialize in your area 
            and property type. Get expert guidance for your property journey.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Find the Right Agent</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <MapPin className="absolute left-3 top-11 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Enter area or city"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                    className="pl-10 h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Specialization</label>
                  <Select value={searchFilters.specialization} onValueChange={(value) => setSearchFilters({...searchFilters, specialization: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury">Luxury Properties</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="student">Student Housing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Minimum Rating</label>
                  <Select value={searchFilters.rating} onValueChange={(value) => setSearchFilters({...searchFilters, rating: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col justify-end">
                  <Button className="h-12 bg-gradient-primary hover:shadow-lg">
                    <Search className="w-5 h-5 mr-2" />
                    Search Agents
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {filteredAgents.length} Verified Agents Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-lg overflow-hidden">
                <CardHeader className="text-center pb-4 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {agent.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{agent.name}</h3>
                  <p className="text-slate-600 font-medium">{agent.title}</p>
                  <div className="flex items-center justify-center text-slate-500 mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{agent.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-slate-900 ml-1">{agent.rating}</span>
                      <span className="text-slate-500 text-sm ml-1">({agent.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">{agent.properties}</div>
                      <div className="text-xs text-slate-600">Active Listings</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">{agent.closedDeals}</div>
                      <div className="text-xs text-slate-600">Closed Deals</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-slate-700 mb-2">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {agent.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-slate-600 mb-1">
                      <strong>Experience:</strong> {agent.experience}
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Languages:</strong> {agent.languages.join(', ')}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-lg">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;
