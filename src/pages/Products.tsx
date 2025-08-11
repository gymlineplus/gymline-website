
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, productCategories, cardioCategories, cardioProducts } from '@/data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCardioCategory, setSelectedCardioCategory] = useState<string | null>(null);
  
  let filteredProducts = allProducts;
  
  if (selectedCategory === "Cardio Equipment" && selectedCardioCategory) {
    // If a cardio subcategory is selected, filter by that subcategory
    filteredProducts = cardioProducts.filter(product => product.category === selectedCardioCategory);
  } else if (selectedCategory === "Cardio Equipment") {
    // If just Cardio Equipment is selected (without subcategory), show all cardio products
    filteredProducts = cardioProducts;
  } else if (selectedCategory) {
    // If any other main category is selected
    filteredProducts = allProducts.filter(product => product.category === selectedCategory);
  }

  return (
    <>
      <Helmet>
        <title>All Products - Gymline</title>
        <meta name="description" content="Browse our complete collection of premium fitness equipment for your gym or home workout space." />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">All Products</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedCardioCategory(null);
            }}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === null 
                ? 'bg-gymline-dark text-white' 
                : 'bg-gray-100 text-gymline-dark hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedCardioCategory(null);
              }}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category && !selectedCardioCategory
                  ? 'bg-gymline-dark text-white' 
                  : 'bg-gray-100 text-gymline-dark hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Conditionally show cardio subcategories */}
        {selectedCategory === "Cardio Equipment" && (
          <div className="flex flex-wrap gap-4 mb-8 ml-6">
            {cardioCategories.map((subCategory) => (
              <button
                key={subCategory}
                onClick={() => setSelectedCardioCategory(subCategory)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCardioCategory === subCategory
                    ? 'bg-gymline-accent text-white' 
                    : 'bg-gray-100 text-gymline-dark hover:bg-gray-200'
                }`}
              >
                {subCategory}
              </button>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.category}-${product.id}`} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
