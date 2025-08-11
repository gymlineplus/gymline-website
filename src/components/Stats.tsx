
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      setProgress(progress * 100);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
        setProgress(100);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return (
    <>
      <h3 className="text-5xl font-bold text-gymline-accent mb-2">
        {count}{suffix}
      </h3>
      <Progress value={progress} className="h-1 mb-4 bg-gymline-dark/10" />
    </>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gymline-dark relative overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gymline-accent blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-gymline-accent blur-[120px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative inline-block">
            Our Impact
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gymline-accent"></span>
          </h2>
          <p className="text-lg text-white/70">
            We've achieved impressive milestones in the fitness equipment industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <CardContent className="p-8">
              <AnimatedCounter end={1500} suffix="+" />
              <p className="text-lg font-semibold text-white mb-4">GYMS BUILT</p>
              <p className="text-white/70">
                Successfully designed and equipped over 1500 gyms across
                the world, catering to commercial, home, and specialized fitness centers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <CardContent className="p-8">
              <AnimatedCounter end={1400} suffix="+" />
              <p className="text-lg font-semibold text-white mb-4">HAPPY CLIENTS</p>
              <p className="text-white/70">
                Overlapping coverage and uninterrupted service across
                multiple networks, ensuring client satisfaction and support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <CardContent className="p-8">
              <AnimatedCounter end={25000} suffix="+" />
              <p className="text-lg font-semibold text-white mb-4">PRODUCTS DELIVERED</p>
              <p className="text-white/70">
                From high-quality gym equipment to reliable fitness
                solutions, we ensure reliable delivery, every time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;
