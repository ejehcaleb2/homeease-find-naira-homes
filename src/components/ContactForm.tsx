
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
    <Card className="bg-slate-50 border-slate-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-slate-900">Send Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            required
            className="border-slate-300 focus:border-blue-500 text-slate-900 placeholder:text-slate-500 bg-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
            required
            className="border-slate-300 focus:border-blue-500 text-slate-900 placeholder:text-slate-500 bg-white"
          />
          <Input
            type="tel"
            placeholder="Your Phone"
            value={contactForm.phone}
            onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
            className="border-slate-300 focus:border-blue-500 text-slate-900 placeholder:text-slate-500 bg-white"
          />
          <Textarea
            placeholder="Your message..."
            value={contactForm.message}
            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
            className="min-h-[100px] border-slate-300 focus:border-blue-500 text-slate-900 placeholder:text-slate-500 bg-white"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-lg btn-premium"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
