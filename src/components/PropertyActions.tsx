
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PropertyActions: React.FC = () => {
  const handleScheduleViewing = () => {
    alert("COMING SOON: Online booking system will be available soon!");
  };

  const handleAddToFavorites = () => {
    alert("COMING SOON: Favorites system will be available soon!");
  };

  return (
    <Card className="shadow-lg border-slate-200 bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Button 
            onClick={handleScheduleViewing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-6"
          >
            Schedule Viewing
          </Button>
          <Button 
            onClick={handleAddToFavorites}
            variant="outline"
            className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white"
          >
            Add to Favorites
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyActions;
