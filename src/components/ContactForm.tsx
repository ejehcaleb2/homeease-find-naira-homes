
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Card className="bg-[#E4E1B6] border-[#0C2A28]">
      <CardHeader>
        <CardTitle className="text-[#0C2A28]">Send Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            required
            className="border-[#0C2A28] focus:border-[#CD5B43] text-[#0C2A28] placeholder:text-[#0C2A28]/60 bg-[#E4E1B6]"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
            required
            className="border-[#0C2A28] focus:border-[#CD5B43] text-[#0C2A28] placeholder:text-[#0C2A28]/60 bg-[#E4E1B6]"
          />
          <Input
            type="tel"
            placeholder="Your Phone"
            value={contactForm.phone}
            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
            className="border-[#0C2A28] focus:border-[#CD5B43] text-[#0C2A28] placeholder:text-[#0C2A28]/60 bg-[#E4E1B6]"
          />
          <Textarea
            placeholder="Your message..."
            value={contactForm.message}
            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
            className="min-h-[100px] border-[#0C2A28] focus:border-[#CD5B43] text-[#0C2A28] placeholder:text-[#0C2A28]/60 bg-[#E4E1B6]"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-[#CD5B43] hover:bg-[#CD5B43]/90 text-[#E4E1B6] border-[#CD5B43]"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
