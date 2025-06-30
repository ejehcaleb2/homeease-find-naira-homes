
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Heart, Eye, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePerformance } from '@/hooks/usePerformance';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  tag?: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  id, title, location, price, image, bedrooms, bathrooms, area, tag, featured 
}: PropertyCardProps) => {
  const navigate = useNavigate();
  const { formatPrice, optimizeImage } = usePerformance();
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this property: ${title} in ${location}`,
        url: `${window.location.origin}/listing/${id}`
      });
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    // Here you would typically save to favorites
  };

  const handleViewProperty = () => {
    navigate(`/listing/${id}`);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-lg overflow-hidden bg-white">
      <div className="relative">
        {/* Image with loading state */}
        <div className="relative h-48 bg-slate-200">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          )}
          <img 
            src={optimizeImage(image, 400, 300)} 
            alt={title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {featured && (
            <Badge className="bg-gradient-primary text-white font-semibold">
              Featured
            </Badge>
          )}
          {tag && (
            <Badge className="bg-gradient-secondary text-white">
              {tag}
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={handleShare}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            aria-label="Share property"
          >
            <Share2 className="w-4 h-4 text-slate-600" />
          </button>
          <button 
            onClick={handleLike}
            className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm ${
              isLiked ? 'text-red-500' : 'text-slate-600'
            }`}
            aria-label="Add to favorites"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Availability badge */}
        <Badge className="absolute bottom-3 left-3 bg-green-500 text-white">
          Available
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center text-slate-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              {formatPrice(price)}
            </span>
            <span className="text-slate-600 text-sm">/month</span>
          </div>
          <Button 
            size="sm" 
            onClick={handleViewProperty}
            className="bg-gradient-primary hover:shadow-lg btn-premium"
          >
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
