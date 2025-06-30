
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Home, Filter, X } from 'lucide-react';
import { usePerformance } from '@/hooks/usePerformance';

interface SearchFiltersProps {
  onFiltersChange?: (filters: any) => void;
}

const SearchFilters = ({ onFiltersChange }: SearchFiltersProps) => {
  const { debounce } = usePerformance();
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    bedrooms: '',
    minPrice: '',
    maxPrice: '',
    keywords: ''
  });

  const locations = [
    'Lagos Island', 'Victoria Island', 'Ikoyi', 'Lekki', 'Ajah', 'Ikeja', 'Surulere',
    'Yaba', 'Gbagada', 'Magodo', 'Abuja Central', 'Wuse 2', 'Maitama', 'Garki',
    'Asokoro', 'Gwarinpa', 'Port Harcourt', 'Enugu', 'Ibadan', 'Kaduna'
  ];

  const propertyTypes = [
    'Apartment', 'House', 'Duplex', 'Bungalow', 'Penthouse', 
    'Studio', 'Self-Contained', 'Mini Flat'
  ];

  // Debounced filter change handler
  const debouncedFilterChange = useCallback(
    debounce((newFilters: any) => {
      onFiltersChange?.(newFilters);
    }, 300),
    [onFiltersChange, debounce]
  );

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    debouncedFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      location: '',
      propertyType: '',
      bedrooms: '',
      minPrice: '',
      maxPrice: '',
      keywords: ''
    };
    setFilters(clearedFilters);
    onFiltersChange?.(clearedFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search by keywords, location, or property type..."
            value={filters.keywords}
            onChange={(e) => handleFilterChange('keywords', e.target.value)}
            className="pl-10 h-12 bg-slate-50 border-slate-200"
          />
        </div>
        <Button 
          className="bg-gradient-primary hover:shadow-lg px-8 h-12 btn-premium"
          onClick={() => onFiltersChange?.(filters)}
        >
          <Search className="w-5 h-5 mr-2" />
          Search Properties
        </Button>
      </div>

      {/* Advanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger className="h-11 bg-slate-50 border-slate-200">
              <MapPin className="w-4 h-4 mr-2 text-slate-400" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange('propertyType', value)}>
            <SelectTrigger className="h-11 bg-slate-50 border-slate-200">
              <Home className="w-4 h-4 mr-2 text-slate-400" />
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange('bedrooms', value)}>
            <SelectTrigger className="h-11 bg-slate-50 border-slate-200">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="h-11 bg-slate-50 border-slate-200"
            type="number"
          />
          <span className="text-slate-400">-</span>
          <Input
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="h-11 bg-slate-50 border-slate-200"
            type="number"
          />
        </div>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-slate-600">Active filters:</span>
          {Object.entries(filters).map(([key, value]) => {
            if (!value) return null;
            return (
              <Badge key={key} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {value}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange(key, '')}
                />
              </Badge>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-slate-600 hover:text-slate-800 p-1 h-auto"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
