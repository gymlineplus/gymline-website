
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { cardioProducts } from '@/data/products';

const CardioShowcase = () => {
  // Use actual cardio products from data
  const featuredCardioEquipment = cardioProducts.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gymline-charcoal to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Premium Cardio Equipment
          </h2>
          <p className="text-lg text-gray-300">
            Discover our cutting-edge cardio machines designed for peak performance and durability.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large featured item */}
          <Link 
            to={`/product/${featuredCardioEquipment[0].category.toLowerCase().replace(/\s+/g, '-')}/${featuredCardioEquipment[0].sku.toLowerCase()}`}
            className="lg:col-span-2 lg:row-span-2 group"
          >
            <Card className="h-full bg-gradient-to-br from-black/60 to-gymline-charcoal border border-gymline-accent/20 overflow-hidden hover:border-gymline-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(186,212,32,0.2)]">
              <div className="relative h-full min-h-[400px]">
                <img
                  src={featuredCardioEquipment[0].image}
                  alt={featuredCardioEquipment[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="mb-3">
                      <span className="inline-block bg-gymline-accent/20 text-gymline-accent rounded-full px-3 py-1 text-sm font-medium border border-gymline-accent/40">
                        {featuredCardioEquipment[0].category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {featuredCardioEquipment[0].name}
                    </h3>
                    <p className="text-gray-300 mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                      {featuredCardioEquipment[0].description}
                    </p>
                    <div className="flex items-center text-gymline-accent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      <span className="mr-2">Explore Details</span>
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Smaller grid items */}
          {featuredCardioEquipment.slice(1).map((item, index) => (
            <Link 
              key={item.id}
              to={`/product/${item.category.toLowerCase().replace(/\s+/g, '-')}/${item.sku.toLowerCase()}`}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-black/60 to-gymline-charcoal border border-gymline-accent/20 overflow-hidden hover:border-gymline-accent/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(186,212,32,0.15)]">
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="mb-2">
                        <span className="inline-block bg-gymline-accent/20 text-gymline-accent rounded-full px-2 py-1 text-xs font-medium border border-gymline-accent/40">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-gymline-accent text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <span className="mr-1">View Details</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-flex items-center bg-gymline-accent hover:bg-white text-black font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(186,212,32,0.3)] hover:shadow-[0_0_20px_rgba(186,212,32,0.4)]"
          >
            View All Cardio Equipment
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardioShowcase;
