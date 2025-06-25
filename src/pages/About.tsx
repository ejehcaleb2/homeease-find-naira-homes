
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shield, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Tenant-First Approach",
      description: "Every feature we build is designed with tenants in mind, ensuring you get the best rental experience."
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties go through our verification process to ensure authenticity and quality."
    },
    {
      icon: Users,
      title: "Direct Connection",
      description: "Connect directly with landlords without middlemen, saving you time and money."
    },
    {
      icon: Target,
      title: "Transparent Process",
      description: "No hidden fees, no surprises. What you see is what you get."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About HomeEase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make finding affordable, quality housing in Nigeria 
              as simple and stress-free as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HomeEase was born from a simple observation: finding quality, affordable housing 
                in Nigeria shouldn't be a stressful, expensive process filled with agent fees 
                and unreliable listings.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe everyone deserves access to verified, affordable housing options 
                without the traditional barriers that make the search process overwhelming.
              </p>
              <p className="text-lg text-gray-600">
                That's why we created a platform that connects tenants directly with landlords, 
                eliminating unnecessary costs and complications.
              </p>
            </div>
            <div className="bg-gradient-light rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Verified Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">1,200+</div>
                  <div className="text-gray-600">Happy Tenants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₦0</div>
                  <div className="text-gray-600">Agent Fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at HomeEase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            The HomeEase Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              HomeEase started when our founders experienced firsthand the challenges of 
              finding quality, affordable housing in Nigeria. After paying excessive agent 
              fees and dealing with unreliable listings, they knew there had to be a better way.
            </p>
            <p className="mb-6">
              We spent months researching the rental market, talking to tenants and landlords, 
              and understanding the pain points that make house hunting so difficult. What we 
              discovered was a system that worked primarily for agents, not for the people 
              who actually needed homes.
            </p>
            <p>
              Today, HomeEase is changing that. We're building a platform where transparency, 
              affordability, and genuine connections matter more than profits. Because finding 
              a home should be about finding peace of mind, not stress.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
