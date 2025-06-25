
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const FeaturedListings = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: 1,
      title: "Modern 2-Bedroom Apartment",
      location: "Victoria Island, Lagos",
      price: "₦180,000",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 sqm",
      tag: "Popular",
      isAvailable: true
    },
    {
      id: 2,
      title: "Spacious Self-Contained Room",
      location: "Lekki Phase 1, Lagos",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "45 sqm",
      tag: "New",
      isAvailable: true
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      location: "Ikeja GRA, Lagos",
      price: "₦95,000",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "35 sqm",
      tag: "Affordable",
      isAvailable: true
    },
    {
      id: 4,
      title: "Luxury 3-Bedroom Duplex",
      location: "Ikoyi, Lagos",
      price: "₦350,000",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      area: "120 sqm",
      tag: "Premium",
      isAvailable: true
    },
    {
      id: 5,
      title: "Executive 2-Bedroom Flat",
      location: "Magodo, Lagos",
      price: "₦165,000",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "78 sqm",
      tag: "Executive",
      isAvailable: true
    },
    {
      id: 6,
      title: "Modern Studio in Abuja",
      location: "Wuse 2, Abuja",
      price: "₦140,000",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "55 sqm",
      tag: "Modern",
      isAvailable: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked homes that offer the best value for money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
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

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {property.price}
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

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/listings')}
            className="bg-gradient-primary hover:opacity-90 text-white px-8"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
