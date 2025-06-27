
import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  coordinates?: [number, number];
  address: string;
}

const Map: React.FC<MapProps> = ({ coordinates, address }) => {
  // For now, we'll show a placeholder map with the address
  // In a real implementation, you would integrate with Google Maps or Mapbox
  
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Map placeholder with address overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop')`
        }}
      />
      
      <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 mx-4">
        <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
        <h3 className="font-semibold text-gray-900 mb-2">Property Location</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{address}</p>
        <p className="text-xs text-gray-500 mt-2">
          Interactive map integration available
        </p>
      </div>
    </div>
  );
};

export default Map;
