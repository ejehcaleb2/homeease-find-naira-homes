
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adunni Oladipo",
      location: "Lagos",
      rating: 5,
      text: "HomeEase made finding my apartment so easy! No agent fees, direct contact with the landlord, and the process was completely transparent. I saved over ₦200,000 in agent fees!",
      avatar: "AO"
    },
    {
      name: "Chinedu Okoro",
      location: "Abuja",
      rating: 5,
      text: "As a student, I was struggling to find affordable accommodation. HomeEase connected me with a verified listing that fit my budget perfectly. The landlord was so responsive!",
      avatar: "CO"
    },
    {
      name: "Fatima Ibrahim",
      location: "Port Harcourt",
      rating: 5,
      text: "I love how easy it is to filter properties based on my preferences. The photos are accurate and the descriptions are detailed. Found my dream home in just two weeks!",
      avatar: "FI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Tenants Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found their perfect homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
