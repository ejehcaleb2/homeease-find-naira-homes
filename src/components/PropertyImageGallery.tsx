
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';

interface PropertyImageGalleryProps {
  images: string[];
  title: string;
}

const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this amazing property: ${title}`,
        url: window.location.href
      });
    } else {
      alert("COMING SOON: Enhanced sharing options will be available soon!");
    }
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <img 
              src={images[selectedImage]} 
              alt={title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <Button 
              size="sm"
              onClick={handleShare}
              className="absolute top-4 right-4 bg-white/90 text-slate-700 hover:bg-white border border-slate-200 shadow-lg"
            >
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <img 
              key={index + 1}
              src={image} 
              alt={`${title} ${index + 2}`}
              className="w-full h-24 lg:h-[115px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity shadow-md"
              onClick={() => setSelectedImage(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${title} ${index + 1}`}
            className={`w-20 h-16 object-cover rounded cursor-pointer transition-all ${
              selectedImage === index ? 'ring-2 ring-blue-600 shadow-md' : 'hover:opacity-80'
            }`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImageGallery;
