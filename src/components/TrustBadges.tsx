
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Shield, Check } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { icon: Award, title: 'Premium Quality', description: 'Industry-leading gym equipment built to last' },
    { icon: Star, title: 'Expert Service', description: 'Professional installation and ongoing support' },
    { icon: Shield, title: 'Extended Warranty', description: 'Comprehensive coverage on all equipment' },
    { icon: Check, title: 'Satisfied Clients', description: 'Trusted by leading fitness centers worldwide' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gymline-accent"></span>
          </h2>
          <p className="text-lg text-gymline-dark/70">
            Premium partners who trust our exceptional fitness solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gymline-accent/10 rounded-full flex items-center justify-center mb-4">
                  <badge.icon className="h-8 w-8 text-gymline-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                <p className="text-gymline-dark/70">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
