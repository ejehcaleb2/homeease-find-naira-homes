
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PropertyActions: React.FC = () => {
  return (
    <Card className="bg-[#E4E1B6] border-[#0C2A28]">
      <CardContent className="p-4">
        <div className="space-y-3">
          <Button 
            className="w-full bg-[#CD5B43] hover:bg-[#CD5B43]/90 text-[#E4E1B6] font-semibold text-lg py-6 border-[#CD5B43]"
          >
            Schedule Viewing
          </Button>
          <Button 
            variant="outline"
            className="w-full border-[#0C2A28] text-[#0C2A28] hover:bg-[#0C2A28] hover:text-[#E4E1B6] bg-transparent"
          >
            Add to Favorites
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyActions;
