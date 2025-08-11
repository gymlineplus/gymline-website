
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.sku.toLowerCase()}`}
      className="group"
    >
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block bg-gymline-accent/10 text-gymline-accent rounded-full px-3 py-1 text-xs font-medium">
              {product.category}
            </span>
          </div>
          <h3 className="font-bold text-gymline-dark mb-2 group-hover:text-gymline-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gymline-dark/70 mb-4">
            SKU: {product.sku}
          </p>
          <p className="text-sm text-gymline-dark/60 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
