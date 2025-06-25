
import React from 'react';
import { Shield, DollarSign, Clock, Users, CheckCircle, Home } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No Agent Fees",
      description: "Connect directly with landlords and save thousands on agent commissions."
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property is verified by our team to ensure authenticity and safety."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Advanced search filters help you find your perfect home in minutes, not months."
    },
    {
      icon: Users,
      title: "Direct Contact",
      description: "Speak directly with property owners through WhatsApp or phone calls."
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "No hidden costs or surprise fees. What you see is what you pay."
    },
    {
      icon: Home,
      title: "Quality Homes",
      description: "We partner with trusted landlords to bring you quality rental properties."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose HomeEase?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing the rental experience in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
