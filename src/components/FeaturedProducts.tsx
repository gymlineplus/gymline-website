
import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Select 4 featured products (1 from each category if possible)
  const featured = [];
  const categories = [...new Set(allProducts.map(p => p.category))];
  
  for (const category of categories) {
    const product = allProducts.find(p => p.category === category);
    if (product) featured.push(product);
    if (featured.length >= 4) break;
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            Featured Products
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gymline-accent"></span>
          </h2>
          <p className="text-lg text-gymline-dark/70">
            Discover our premium selection of gym equipment designed for optimal performance and durability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <Link 
              key={`${product.category}-${product.id}`} 
              to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.category}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-gymline-accent text-black rounded-full px-3 py-1 text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <span className="text-gymline-accent font-medium text-sm flex items-center mt-4">
                    View all products
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/products">
            <Button variant="outline" className="border-2 border-gymline-accent text-gymline-dark hover:bg-gymline-accent hover:text-black transition-colors px-8 py-6">
              View All Products
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
