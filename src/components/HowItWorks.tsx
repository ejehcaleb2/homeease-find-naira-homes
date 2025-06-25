
import React from 'react';
import { Search, Heart, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description: "Browse through hundreds of verified listings. Use our smart filters to find exactly what you're looking for."
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description: "Found something you like? Save it to your favorites and compare multiple properties side by side."
    },
    {
      icon: MessageCircle,
      title: "Connect Direct",
      description: "Contact landlords directly through WhatsApp or phone. No agents, no middlemen, no extra fees."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How HomeEase Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding your perfect home is just three simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
