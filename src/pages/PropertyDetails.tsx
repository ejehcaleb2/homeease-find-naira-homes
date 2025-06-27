
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import PropertyImageGallery from '@/components/PropertyImageGallery';
import PropertyInfo from '@/components/PropertyInfo';
import PropertyAmenities from '@/components/PropertyAmenities';
import OwnerInfo from '@/components/OwnerInfo';
import ContactForm from '@/components/ContactForm';
import PropertyActions from '@/components/PropertyActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Car, Wifi, Zap, Trees, Dumbbell, Waves } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    coordinates: [3.4219, 6.4474] as [number, number]
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E4E1B6' }}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 border-[#0C2A28] text-[#0C2A28] hover:bg-[#0C2A28] hover:text-[#E4E1B6] bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Listings
        </Button>

        {/* Image Gallery */}
        <PropertyImageGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <PropertyInfo
              title={property.title}
              address={property.address}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              propertyType={property.propertyType}
              yearBuilt={property.yearBuilt}
              description={property.description}
            />

            <PropertyAmenities
              amenities={property.amenities}
              features={property.features}
            />

            {/* Map */}
            <Card className="bg-[#E4E1B6] border-[#0C2A28]">
              <CardHeader>
                <CardTitle className="text-[#0C2A28]">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 rounded-lg overflow-hidden">
                  <Map coordinates={property.coordinates} address={property.address} />
                </div>
                <p className="text-[#0C2A28] mt-4">{property.address}</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <OwnerInfo owner={property.owner} />
            <ContactForm />
            <PropertyActions />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
