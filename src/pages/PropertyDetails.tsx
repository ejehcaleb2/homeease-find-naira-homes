
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Bed, Bath, Square, Heart, Phone, Mail, Car, Wifi, Shield, Zap, Trees, Dumbbell, Waves, ArrowLeft, Share, Camera } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Sample property data - in a real app, this would come from an API based on the ID
  const property = {
    id: parseInt(id || '1'),
    title: "Modern 2-Bedroom Apartment",
    location: "Victoria Island, Lagos",
    address: "15 Adeola Odeku Street, Victoria Island, Lagos, Nigeria",
    price: 180000,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop"
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: "85 sqm",
    yearBuilt: 2020,
    propertyType: "Apartment",
    description: "This stunning modern 2-bedroom apartment offers luxurious living in the heart of Victoria Island. Featuring contemporary design, premium finishes, and breathtaking city views, this property is perfect for professionals and small families seeking comfort and convenience.",
    features: [
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "High-Speed Internet",
      "24/7 Security",
      "Generator Backup",
      "Parking Space",
      "Swimming Pool",
      "Gym Access",
      "Balcony with City View",
      "Elevator Access"
    ],
    amenities: {
      "Security": { icon: Shield, available: true },
      "Parking": { icon: Car, available: true },
      "Wi-Fi": { icon: Wifi, available: true },
      "Generator": { icon: Zap, available: true },
      "Garden": { icon: Trees, available: false },
      "Gym": { icon: Dumbbell, available: true },
      "Pool": { icon: Waves, available: true }
    },
    owner: {
      name: "Adebayo Johnson",
      phone: "+234 801 234 5678",
      email: "adebayo@example.com",
      verified: true
    },
    coordinates: [3.4219, 6.4474] // Lagos coordinates
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 border-primary text-primary hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Listings
        </Button>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src={property.images[selectedImage]} 
                  alt={property.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                />
                <Button 
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 text-gray-900 hover:bg-white"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <img 
                  key={index + 1}
                  src={image} 
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-24 lg:h-[115px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(index + 1)}
                />
              ))}
            </div>
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {property.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${property.title} ${index + 1}`}
                className={`w-20 h-16 object-cover rounded cursor-pointer transition-all ${
                  selectedImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{property.address}</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-primary">
                    ₦{property.price.toLocaleString()}
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                  <div className="flex space-x-6 text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-2" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-2" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-5 h-5 mr-2" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-sm text-gray-600">Property Type</span>
                    <p className="font-semibold">{property.propertyType}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Year Built</span>
                    <p className="font-semibold">{property.yearBuilt}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Area</span>
                    <p className="font-semibold">{property.area}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            {/* Features & Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(property.amenities).map(([name, { icon: Icon, available }]) => (
                    <div 
                      key={name}
                      className={`flex items-center p-3 rounded-lg ${
                        available ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Additional Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 rounded-lg overflow-hidden">
                  <Map coordinates={property.coordinates} address={property.address} />
                </div>
                <p className="text-gray-600 mt-4">{property.address}</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {property.owner.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-lg">{property.owner.name}</h3>
                  {property.owner.verified && (
                    <Badge className="bg-green-100 text-green-800 mt-2">
                      Verified Owner
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(`tel:${property.owner.phone}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Owner
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(`mailto:${property.owner.email}`)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Owner
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Your message..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="min-h-[100px]"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6"
                  >
                    Schedule Viewing
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Add to Favorites
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
