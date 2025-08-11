
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gymline-dark h-screen flex items-center">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gymline-accent blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-gymline-accent blur-[120px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-left">
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Elevate Your <span className="text-gymline-accent">Fitness</span> Experience
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/80 max-w-lg">
              Premium fitness equipment engineered for performance. Build your ultimate workout space today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/eclips-series">
                <Button className="group bg-gymline-accent hover:bg-gymline-accent/90 text-black font-medium text-lg px-6 py-6">
                  Get Started
                  <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-6 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 p-6">
              <img 
                src="/lovable-uploads/52e6e9ab-48db-43ef-8920-13cdc2fb2133.png" 
                alt="Premium Gym Equipment" 
                className="absolute top-2 right-2 w-32 opacity-20 blur-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Premium Gym Equipment" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
