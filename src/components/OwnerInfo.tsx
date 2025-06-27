
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

interface Owner {
  name: string;
  phone: string;
  email: string;
  verified: boolean;
}

interface OwnerInfoProps {
  owner: Owner;
}

const OwnerInfo: React.FC<OwnerInfoProps> = ({ owner }) => {
  return (
    <Card className="bg-[#E4E1B6] border-[#0C2A28]">
      <CardHeader>
        <CardTitle className="text-[#0C2A28]">Property Owner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-[#0C2A28] text-[#E4E1B6] rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
            {owner.name.charAt(0)}
          </div>
          <h3 className="font-semibold text-lg text-[#0C2A28]">{owner.name}</h3>
          {owner.verified && (
            <Badge className="bg-[#CD5B43] text-[#E4E1B6] border-[#CD5B43] hover:bg-[#CD5B43]/90 mt-2">
              Verified Owner
            </Badge>
          )}
        </div>
        
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full border-[#0C2A28] text-[#0C2A28] hover:bg-[#0C2A28] hover:text-[#E4E1B6] bg-transparent"
            onClick={() => window.open(`tel:${owner.phone}`)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Owner
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-[#0C2A28] text-[#0C2A28] hover:bg-[#0C2A28] hover:text-[#E4E1B6] bg-transparent"
            onClick={() => window.open(`mailto:${owner.email}`)}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Owner
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerInfo;
