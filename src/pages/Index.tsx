
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TrustBadges from '@/components/TrustBadges';
import Stats from '@/components/Stats';
import PremiumInstallations from '@/components/PremiumInstallations';
import LogoMarquee from '@/components/LogoMarquee';
import Footer from '@/components/Footer';

const Index = () => {
  // Logo data for the marquee
  const logoData = [
    { id: 1, name: "Kenzo" },
    { id: 2, name: "Badman" },
    { id: 3, name: "MOF" },
    { id: 4, name: "Taiso" },
    { id: 5, name: "Fitfuel" },
    { id: 6, name: "Everyday Fitness" },
    { id: 6, name: "Anytime Fitness" },
    { id: 6, name: "Gold's Gym"},
    { id: 6, name: "Abs Fitness"},
  ];
  
  return (
    <>
      <Helmet>
        <title>Gymline - Premium Fitness Equipment</title>
        <meta name="description" content="Explore premium gym equipment for commercial and home use. Build your ultimate workout space with Gymline's high-quality fitness products." />
      </Helmet>

      <Navbar />
      <Hero />
      <FeaturedProducts />
      <LogoMarquee logos={logoData} />
      <PremiumInstallations />
      <TrustBadges />
      <Stats />
      <Footer />
    </>
  );
};

export default Index;
