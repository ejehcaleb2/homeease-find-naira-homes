
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

interface PropertyInfoProps {
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  propertyType: string;
  yearBuilt: number;
  description: string;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  propertyType,
  yearBuilt,
  description
}) => {
  return (
    <div className="space-y-6">
      {/* Property Header */}
      <Card className="shadow-lg border-slate-200 bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
              <div className="flex items-center text-slate-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{address}</span>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Heart className="w-6 h-6 text-slate-400 hover:text-red-500" />
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="text-3xl font-bold text-blue-600">
              ₦{price.toLocaleString()}
              <span className="text-lg text-slate-600 font-normal">/month</span>
            </div>
            <div className="flex space-x-6 text-slate-700">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>{bedrooms} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                <span>{bathrooms} Baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-2" />
                <span>{area}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div>
              <span className="text-sm text-slate-500">Property Type</span>
              <p className="font-semibold text-slate-900">{propertyType}</p>
            </div>
            <div>
              <span className="text-sm text-slate-500">Year Built</span>
              <p className="font-semibold text-slate-900">{yearBuilt}</p>
            </div>
            <div>
              <span className="text-sm text-slate-500">Area</span>
              <p className="font-semibold text-slate-900">{area}</p>
            </div>
            <div>
              <span className="text-sm text-slate-500">Status</span>
              <Badge className="bg-green-600 text-white border-green-600 hover:bg-green-700">Available</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card className="shadow-lg border-slate-200 bg-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Description</h3>
          <p className="text-slate-700 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyInfo;
