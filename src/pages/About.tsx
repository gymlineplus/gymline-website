
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Gymline</title>
        <meta name="description" content="Learn more about Gymline and our mission to provide premium fitness equipment for gyms worldwide." />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Gymline</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-12">
            We are dedicated to providing high-quality fitness equipment for commercial gyms and home workout spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2005, Gymline started with a simple mission: to create premium fitness equipment that combines durability, functionality, and aesthetics. What began as a small workshop has grown into a global brand trusted by fitness centers and enthusiasts worldwide.
            </p>
            <p>
              Our team of engineers, fitness professionals, and designers work together to develop equipment that not only meets but exceeds industry standards. We believe that quality equipment is the foundation of any successful fitness regimen.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern gym with premium equipment" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="font-bold text-xl mb-4 text-gymline-accent">Quality</h3>
              <p className="text-gymline-dark/70">
                We never compromise on materials or craftsmanship, ensuring our products stand the test of time even in the most demanding environments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="font-bold text-xl mb-4 text-gymline-accent">Innovation</h3>
              <p className="text-gymline-dark/70">
                We continuously research and implement new technologies and design principles to improve user experience and results.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="font-bold text-xl mb-4 text-gymline-accent">Service</h3>
              <p className="text-gymline-dark/70">
                We believe in building lasting relationships with our clients through exceptional service, from consultation to after-sales support.
              </p>
            </div>
          </div>
        </div>
        
        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 h-40 w-40 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Team Member {i}</h3>
                <p className="text-gymline-dark/70">Position Title</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      
      <Stats />
      <Footer />
    </>
  );
};

export default About;
