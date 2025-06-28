
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Search, Shield, Users, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "Advanced search with AI-powered recommendations tailored to your preferences and budget.",
      features: ["Smart filtering", "Location insights", "Price predictions", "Neighborhood analysis"],
      price: "Free"
    },
    {
      icon: Shield,
      title: "Property Verification",
      description: "Comprehensive property verification including legal documents and ownership validation.",
      features: ["Document verification", "Ownership check", "Legal compliance", "Quality inspection"],
      price: "₦25,000"
    },
    {
      icon: Users,
      title: "Agent Matching",
      description: "Connect with verified real estate agents who specialize in your preferred locations.",
      features: ["Verified agents only", "Area specialists", "Performance ratings", "Direct communication"],
      price: "Free"
    },
    {
      icon: Home,
      title: "Virtual Tours",
      description: "Immersive 360° virtual tours of properties from the comfort of your home.",
      features: ["360° photography", "HD video tours", "Interactive floor plans", "Virtual staging"],
      price: "₦15,000"
    },
    {
      icon: Star,
      title: "Premium Concierge",
      description: "Personal property consultant to guide you through your entire rental journey.",
      features: ["Dedicated advisor", "Negotiation support", "Documentation help", "Move-in assistance"],
      price: "₦50,000"
    },
    {
      icon: CheckCircle,
      title: "Background Checks",
      description: "Comprehensive tenant and landlord background verification for secure transactions.",
      features: ["Identity verification", "Credit history", "Employment check", "Reference validation"],
      price: "₦20,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Real Estate Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From property search to move-in assistance, we provide comprehensive services 
            to make your real estate journey seamless and secure.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white text-blue-600 hover:bg-blue-50 border-white"
          >
            <Phone className="w-5 h-5 mr-2" />
            Speak with an Expert
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete Real Estate Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a successful property rental experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-lift border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect homes with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-lg"
            >
              Browse Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-300 hover:bg-slate-800"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
