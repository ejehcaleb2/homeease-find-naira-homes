
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart, Share, Trash, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([
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
      dateAdded: "2024-01-15"
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
      dateAdded: "2024-01-10"
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
      dateAdded: "2024-01-08"
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const shareProperty = (property: any) => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this amazing property: ${property.title} in ${property.location}`,
        url: `${window.location.origin}/listing/${property.id}`
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            My Favorite Properties
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Keep track of properties you love and compare them easily
          </p>
        </div>

        {favorites.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No favorites yet</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Start exploring properties and add them to your favorites by clicking the heart icon
            </p>
            <Button 
              onClick={() => navigate('/listings')}
              className="bg-gradient-primary hover:shadow-lg"
            >
              Browse Properties
            </Button>
          </div>
        ) : (
          /* Favorites Grid */
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-600">
                {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate('/listings')}
              >
                Add More Properties
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((property) => (
                <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-lg overflow-hidden">
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
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button 
                        onClick={() => shareProperty(property)}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Share className="w-4 h-4 text-slate-600" />
                      </button>
                      <button 
                        onClick={() => removeFavorite(property.id)}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                      >
                        <Heart className="w-4 h-4 text-red-500 fill-current group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <Badge className="absolute bottom-3 left-3 bg-green-500 text-white">
                      Available
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center text-slate-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
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

                    <div className="text-xs text-slate-500 mb-4">
                      Added on {new Date(property.dateAdded).toLocaleDateString()}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">
                          ₦{property.price.toLocaleString()}
                        </span>
                        <span className="text-slate-600 text-sm">/month</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => navigate(`/listing/${property.id}`)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => removeFavorite(property.id)}
                          variant="outline"
                          className="text-red-500 hover:text-red-600 hover:border-red-300"
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compare Button */}
            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-lg"
                onClick={() => {
                  // This would open a comparison modal
                  alert("COMING SOON: Property comparison feature will be available soon!");
                }}
              >
                Compare Selected Properties
              </Button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
