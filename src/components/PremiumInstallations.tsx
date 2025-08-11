
import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Installation {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  tags: string[];
  videos: string[];
}

const installations: Installation[] = [
  {
    id: "1",
    title: "Badman, Bhopal",
    description: "Capturing the professional quality of our premium commercial installations.",
    videoUrl: "https://drive.google.com/file/d/1O83DoKRY5f8DS0znS6kqYzy1el1LXKFD/view?usp=sharing",
    thumbnail: "/Gym%20Data/Badman/1.jpg",
    tags: ["Commercial", "Hunter"],
    videos: ["https://www.example.com/videos/commercial-gym.mp4", "https://www.example.com/videos/commercial-gym-2.mp4", "https://www.example.com/videos/commercial-gym-3.mp4"]
  },
  {
    id: "2",
    title: "Fitfuel, Fardibad",
    description: "Stunning home fitness spaces designed for the modern lifestyle.",
    videoUrl: "https://drive.google.com/file/d/10CQrol9JePZGg7aO8vV3CK3-28tw_mnK/view?usp=sharing",
    thumbnail: "/Gym%20Data/Fitfuel/1.jpg",
    tags: ["Luxury", "Impulse"],
    videos: ["https://www.example.com/videos/luxury-home.mp4", "https://www.example.com/videos/luxury-home-2.mp4", "https://www.example.com/videos/luxury-home-3.mp4"]
  },
  {
    id: "3",
    title: "Kenzo, Vashi", 
    description: "Employee wellness spaces that promote health and productivity.",
    videoUrl: "https://drive.google.com/file/d/1YyKeukR77GPwlunN0W96Oq4KINBSZtTT/view?usp=sharing", 
    thumbnail: "/Gym%20Data/Kenzo/1.jpg",
    tags: ["Commerical", "Impulse"],
    videos: ["https://www.example.com/videos/corporate-wellness.mp4", "https://www.example.com/videos/corporate-wellness-2.mp4", "https://www.example.com/videos/corporate-wellness-3.mp4"]
  },
  {
    id: "4",
    title: "MOF 74",
    description: "Athletic facilities designed for peak performance and training.",
    videoUrl: "https://drive.google.com/file/d/1FOJxydcyXSFE2K2U7Ue8_k1jnSDSM69r/view?usp=sharing", 
    thumbnail: "/Gym%20Data/Mof/1.jpg",
    tags: ["Luxury", "Impulse"],
    videos: ["https://www.example.com/videos/university-sports.mp4", "https://www.example.com/videos/university-sports-2.mp4", "https://www.example.com/videos/university-sports-3.mp4"]
  },
  {
    id: "5",
    title: "Taiso, Panvel",
    description: "Specialized equipment installations for recovery and healing.",
    videoUrl: "https://drive.google.com/file/d/1oAxda2pvgVvHDMkgbPT5fLb85k_Zb85T/view?usp=sharing", 
    thumbnail: "/Gym%20Data/Taiso/1.jpg",
    tags: ["Commerical", "Rehabilitation"],
    videos: ["https://www.example.com/videos/rehab-center.mp4", "https://www.example.com/videos/rehab-center-2.mp4", "https://www.example.com/videos/rehab-center-3.mp4"]
  },
];

const PremiumInstallations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const reelScrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [selectedInstallation, setSelectedInstallation] = useState<Installation | null>(null);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();
  
  // Scroll horizontally with controls
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Handle reel scroll to auto-play next video
  const handleReelScroll = () => {
    if (!reelScrollRef.current || !selectedInstallation) return;
    
    const container = reelScrollRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = container.scrollHeight / selectedInstallation.videos.length;
    const newIndex = Math.round(scrollTop / itemHeight);
    
    if (newIndex !== currentReelIndex && newIndex < selectedInstallation.videos.length) {
      // Pause current video
      if (videoRefs.current[currentReelIndex]) {
        videoRefs.current[currentReelIndex]?.pause();
      }
      
      setCurrentReelIndex(newIndex);
      
      // Auto-play new video
      setTimeout(() => {
        if (videoRefs.current[newIndex]) {
          videoRefs.current[newIndex]?.play();
          setIsPlaying(true);
        }
      }, 300);
    }
  };

  // Play/pause video
  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Reset state when modal closes
  useEffect(() => {
    if (!selectedInstallation) {
      setCurrentReelIndex(0);
      setIsPlaying(false);
      videoRefs.current = [];
    }
  }, [selectedInstallation]);

  return (
    <section className="py-20 overflow-hidden relative bg-gradient-to-r from-black via-gymline-charcoal to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header section */}
        <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium Installation
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Witness the beauty of premium fitness through our lens, 
              as we showcase stunning installations that evoke 
              wonder and appreciation for quality equipment.
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 rounded-full border border-gymline-accent/40 hover:border-gymline-accent transition-colors group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gymline-accent/70 group-hover:text-gymline-accent transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-2 rounded-full border border-gymline-accent/40 hover:border-gymline-accent transition-colors group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gymline-accent/70 group-hover:text-gymline-accent transition-colors" />
            </button>
          </div>
        </div>
        
        {/* Horizontal scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar scroll-smooth" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {installations.map((item) => (
            <Card 
              key={item.id} 
              onClick={() => setSelectedInstallation(item)}
              className="min-w-[280px] md:min-w-[340px] max-w-[340px] flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-b from-black/70 to-gymline-charcoal border border-gymline-accent/20 shadow-[0_0_15px_rgba(186,212,32,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(186,212,32,0.2)] cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 group">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gymline-accent/20 border border-gymline-accent/40 rounded-full text-xs text-gymline-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <div className="p-2 rounded-full border border-gymline-accent/40 bg-black/30 hover:bg-gymline-accent/20 hover:border-gymline-accent cursor-pointer transition-all">
                      <ChevronRight className="h-4 w-4 text-gymline-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Installation Modal - Responsive */}
      <Dialog open={!!selectedInstallation} onOpenChange={() => setSelectedInstallation(null)}>
        <DialogContent className={`${
          isMobile 
            ? 'max-w-[95vw] max-h-[90vh] w-full h-full m-2' 
            : 'max-w-4xl max-h-[85vh]'
        } bg-gradient-to-br from-black/95 to-gymline-charcoal border border-gymline-accent/20 text-white overflow-hidden`}>
          <DialogHeader className={isMobile ? 'px-2 py-3' : ''}>
            <DialogTitle className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-gymline-accent`}>
              {selectedInstallation?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedInstallation && (
            <div className={`flex ${isMobile ? 'flex-col h-full' : 'gap-6'}`}>
              {/* Left side - Info */}
              <div className={`${isMobile ? 'px-2 pb-4' : 'flex-1 space-y-4'}`}>
                <p className="text-gray-300 text-sm">{selectedInstallation.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedInstallation.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gymline-accent/20 border border-gymline-accent/40 rounded-full text-xs text-gymline-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side - Video Reels */}
              <div className={`${isMobile ? 'flex-1 min-h-0' : 'w-80'}`}>
                <h3 className={`${isMobile ? 'text-lg px-2 mb-2' : 'text-xl mb-4'} font-semibold text-gymline-accent`}>
                  Installation Reels
                </h3>
                <div 
                  ref={reelScrollRef}
                  onScroll={handleReelScroll}
                  className={`${
                    isMobile 
                      ? 'h-full snap-y snap-mandatory' 
                      : 'h-96 snap-y snap-mandatory'
                  } overflow-y-auto hide-scrollbar space-y-4 px-2`}
                >
                  {selectedInstallation.videos.map((videoSrc, index) => (
                    <div 
                      key={index} 
                      className={`relative ${
                        isMobile ? 'aspect-[9/16] h-full' : 'aspect-[9/16] h-80'
                      } bg-black rounded-lg overflow-hidden snap-start snap-always`}
                    >
                      <video
                        ref={(el) => videoRefs.current[index] = el}
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/placeholder.svg"
                      />
                      
                      {/* Play/Pause Overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity group"
                        onClick={() => togglePlay(index)}
                      >
                        {currentReelIndex === index && isPlaying ? (
                          <Pause className="h-16 w-16 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <Play className="h-16 w-16 text-white/80 group-hover:text-gymline-accent transition-colors" />
                        )}
                      </div>

                      {/* Reel indicator */}
                      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {index + 1}/{selectedInstallation.videos.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Using style element properly without the jsx prop */}
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </section>
  );
};

export default PremiumInstallations;
