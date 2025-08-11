
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts, productCategories, cardioCategories } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  
  // First try to find a matching main category
  const mainCategory = productCategories.find(
    cat => cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  
  // If no main category found, check for cardio subcategories
  const cardioSubcategory = cardioCategories.find(
    cat => cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  
  // Set the category based on whether it's a main category or cardio subcategory
  const category = mainCategory || cardioSubcategory;
  
  // Filter products by either main category or cardio subcategory
  const products = category 
    ? allProducts.filter(product => product.category === category)
    : [];

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-8">The category you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center text-gymline-accent hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" /> View all products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category} - Gymline</title>
        <meta name="description" content={`Browse our collection of premium ${category} fitness equipment for your gym.`} />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gymline-accent hover:underline mb-4 block"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to all products
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">{category}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={`${product.category}-${product.id}`} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gymline-dark/70">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CategoryPage;
