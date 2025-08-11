
import React, { useState } from 'react';

interface LogoMarqueeProps {
  logos: { id: number; name: string; }[];
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="w-full py-16 overflow-hidden border-y border-gymline-accent/20 bg-gradient-to-r from-black via-gymline-charcoal to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Trusted by Industry Leaders</h2>
          <p className="mt-2 text-lg text-gray-300">Premium fitness facilities that choose Gymline equipment</p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center overflow-hidden">
            <div 
              className={`flex space-x-16 md:space-x-24 ${isPaused ? '' : 'animate-marquee'} whitespace-nowrap`}
            >
              {logos.concat(logos).map((logo, index) => (
                <div 
                  key={`${logo.id}-${index}`}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gymline-accent hover:text-white transition-colors">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
