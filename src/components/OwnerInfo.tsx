
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
  const handleContact = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      alert("COMING SOON: Direct calling feature will be available soon!");
    } else {
      alert("COMING SOON: Direct messaging feature will be available soon!");
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-slate-900">Property Owner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold shadow-lg">
            {owner.name.charAt(0)}
          </div>
          <h3 className="font-semibold text-lg text-slate-900">{owner.name}</h3>
          {owner.verified && (
            <Badge className="bg-green-500 text-white border-green-500 hover:bg-green-600 mt-2">
              Verified Owner
            </Badge>
          )}
        </div>
        
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white"
            onClick={() => handleContact('phone')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Owner
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white"
            onClick={() => handleContact('email')}
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
