
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  available: boolean;
}

interface PropertyAmenitiesProps {
  amenities: Record<string, Amenity>;
  features: string[];
}

const PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({ amenities, features }) => {
  return (
    <Card className="bg-[#E4E1B6] border-[#0C2A28]">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[#0C2A28] mb-6">Features & Amenities</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(amenities).map(([name, { icon: Icon, available }]) => (
            <div 
              key={name}
              className={`flex items-center p-3 rounded-lg border transition-colors ${
                available 
                  ? 'bg-[#CD5B43] text-[#E4E1B6] border-[#CD5B43]' 
                  : 'bg-[#0C2A28]/5 text-[#0C2A28] border-[#0C2A28]/20'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-[#0C2A28]">Additional Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-[#CD5B43] rounded-full mr-3"></div>
                <span className="text-[#0C2A28]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyAmenities;
