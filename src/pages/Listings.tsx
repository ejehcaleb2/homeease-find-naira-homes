
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Bath, Square, Heart, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Listings = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    bedrooms: '',
    priceRange: [0, 500000],
    amenities: []
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample property data - in a real app, this would come from an API
  const properties = [
    {
      id: 1,
      title: "Modern 2-Bedroom Apartment",
      location: "Victoria Island, Lagos",
      price: 180000,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 sqm",
      tag: "Popular",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking"]
    },
    {
      id: 2,
      title: "Spacious Self-Contained Room",
      location: "Lekki Phase 1, Lagos",
      price: 120000,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "45 sqm",
      tag: "New",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      location: "Ikeja GRA, Lagos",
      price: 95000,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "35 sqm",
      tag: "Affordable",
      isAvailable: true,
      amenities: ["Kitchen", "Water"]
    },
    {
      id: 4,
      title: "Luxury 3-Bedroom Duplex",
      location: "Ikoyi, Lagos",
      price: 350000,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "120 sqm",
      tag: "Premium",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Pool"]
    },
    {
      id: 5,
      title: "Comfortable 1-Bedroom Flat",
      location: "Surulere, Lagos",
      price: 80000,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "50 sqm",
      tag: "Budget-Friendly",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 6,
      title: "Executive 2-Bedroom Apartment",
      location: "Gbagada, Lagos",
      price: 150000,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "75 sqm",
      tag: "Executive",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking"]
    },
    {
      id: 7,
      title: "Luxury 4-Bedroom Penthouse",
      location: "Banana Island, Lagos",
      price: 450000,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      bedrooms: 4,
      bathrooms: 4,
      area: "200 sqm",
      tag: "Luxury",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Pool", "Gym"]
    },
    {
      id: 8,
      title: "Modern Studio in Abuja",
      location: "Wuse 2, Abuja",
      price: 140000,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "55 sqm",
      tag: "Modern",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking"]
    },
    {
      id: 9,
      title: "Furnished 2-Bedroom Flat",
      location: "Maitama, Abuja",
      price: 280000,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "90 sqm",
      tag: "Furnished",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Wi-Fi"]
    },
    {
      id: 10,
      title: "Cozy 1-Bedroom Apartment",
      location: "Garki, Abuja",
      price: 110000,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "48 sqm",
      tag: "Cozy",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 11,
      title: "Spacious 3-Bedroom House",
      location: "Magodo, Lagos",
      price: 220000,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "110 sqm",
      tag: "Spacious",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Garden"]
    },
    {
      id: 12,
      title: "Modern Self-Contained",
      location: "Ojodu, Lagos",
      price: 85000,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "40 sqm",
      tag: "Modern",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 13,
      title: "Executive 3-Bedroom Duplex",
      location: "Maryland, Lagos",
      price: 300000,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "130 sqm",
      tag: "Executive",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Balcony"]
    },
    {
      id: 14,
      title: "Luxury 2-Bedroom Serviced Apartment",
      location: "GRA, Port Harcourt",
      price: 195000,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "80 sqm",
      tag: "Serviced",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Pool", "Gym"]
    },
    {
      id: 15,
      title: "Budget-Friendly Room",
      location: "Ikotun, Lagos",
      price: 55000,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "25 sqm",
      tag: "Budget",
      isAvailable: true,
      amenities: ["Kitchen", "Water"]
    },
    {
      id: 16,
      title: "Modern 2-Bedroom Flat",
      location: "Yaba, Lagos",
      price: 135000,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "70 sqm",
      tag: "Modern",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking"]
    },
    {
      id: 17,
      title: "Executive Studio Apartment",
      location: "Central Business District, Abuja",
      price: 175000,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "60 sqm",
      tag: "Executive",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Wi-Fi"]
    },
    {
      id: 18,
      title: "Spacious 4-Bedroom House",
      location: "Gwarinpa, Abuja",
      price: 385000,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      bedrooms: 4,
      bathrooms: 4,
      area: "180 sqm",
      tag: "Spacious",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Garden", "Garage"]
    },
    {
      id: 19,
      title: "Cozy 1-Bedroom Flat",
      location: "Berger, Lagos",
      price: 75000,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "42 sqm",
      tag: "Cozy",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 20,
      title: "Luxury 3-Bedroom Penthouse",
      location: "Asokoro, Abuja",
      price: 420000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "150 sqm",
      tag: "Penthouse",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Pool", "Gym", "Balcony"]
    },
    {
      id: 21,
      title: "Modern Self-Contained Room",
      location: "Ogba, Lagos",
      price: 90000,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "38 sqm",
      tag: "Modern",
      isAvailable: true,
      amenities: ["Kitchen", "Water", "Security"]
    },
    {
      id: 22,
      title: "Executive 2-Bedroom Duplex",
      location: "Festac, Lagos",
      price: 165000,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "82 sqm",
      tag: "Executive",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking"]
    },
    {
      id: 23,
      title: "Furnished 1-Bedroom Apartment",
      location: "Kubwa, Abuja",
      price: 125000,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "52 sqm",
      tag: "Furnished",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Wi-Fi"]
    },
    {
      id: 24,
      title: "Luxury 5-Bedroom Mansion",
      location: "Lekki Phase 2, Lagos",
      price: 650000,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      bedrooms: 5,
      bathrooms: 5,
      area: "300 sqm",
      tag: "Mansion",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Pool", "Gym", "Garden", "Garage"]
    },
    {
      id: 25,
      title: "Budget Studio Apartment",
      location: "Mushin, Lagos",
      price: 65000,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "30 sqm",
      tag: "Budget",
      isAvailable: true,
      amenities: ["Kitchen", "Water"]
    },
    {
      id: 26,
      title: "Modern 3-Bedroom Terrace",
      location: "Lokogoma, Abuja",
      price: 250000,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "105 sqm",
      tag: "Terrace",
      isAvailable: true,
      amenities: ["Kitchen", "Generator", "Security", "Parking", "Garden"]
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesLocation = !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesPrice = property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1];
    const matchesBedrooms = !filters.bedrooms || property.bedrooms.toString() === filters.bedrooms;
    
    return matchesLocation && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Browse Properties
          </h1>
          <p className="text-gray-600">
            {filteredProperties.length} properties found
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by location..."
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
              <SelectTrigger className="w-full lg:w-48">
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

            <Select value={filters.bedrooms} onValueChange={(value) => setFilters({...filters, bedrooms: value})}>
              <SelectTrigger className="w-full lg:w-32">
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bed</SelectItem>
                <SelectItem value="2">2 Beds</SelectItem>
                <SelectItem value="3">3 Beds</SelectItem>
                <SelectItem value="4">4+ Beds</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:w-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ₦{filters.priceRange[0].toLocaleString()} - ₦{filters.priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({...filters, priceRange: value})}
                    max={700000}
                    min={0}
                    step={10000}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-3 left-3 bg-gradient-primary text-white"
                >
                  {property.tag}
                </Badge>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                {property.isAvailable && (
                  <Badge className="absolute bottom-3 left-3 bg-green-500 text-white">
                    Available
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {property.amenities.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{property.amenities.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ₦{property.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 text-sm">/month</span>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => navigate(`/listing/${property.id}`)}
                    className="bg-gradient-primary hover:opacity-90 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="px-8"
          >
            Load More Properties
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
