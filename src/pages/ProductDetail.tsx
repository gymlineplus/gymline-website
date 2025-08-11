
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Tag } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { category, sku } = useParams();
  const { toast } = useToast();
  
  const product = allProducts.find(
    p => p.category.toLowerCase().replace(/\s+/g, '-') === category && 
         p.sku.toLowerCase() === sku
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center text-gymline-accent hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to all products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleBookConsultation = () => {
    // Create the WhatsApp URL with product name in the message
    const phoneNumber = "919311771888"; // Format: country code (91) + number without the "+"
    const message = encodeURIComponent(`I'm interested in ${product.name}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to connect you with our consultant.",
      duration: 3000,
    });
  };

  // Format the description (split by newlines or commas)
  const formattedDescription = product.description
    .split(/[\n,]/)
    .filter(line => line.trim().length > 0)
    .map(line => line.trim());

  return (
    <>
      <Helmet>
        <title>{product.name} - Gymline</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gymline-accent hover:underline mb-8 block"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to all products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-lg overflow-hidden p-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-gymline-accent/10 text-gymline-accent rounded-full px-3 py-1 text-sm font-medium">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gymline-dark mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <Tag size={16} className="text-gymline-dark mr-2" />
              <span className="text-gymline-dark">SKU: {product.sku}</span>
            </div>

            <div className="border-t border-gray-200 py-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <ul className="space-y-3">
                {formattedDescription.map((line, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gymline-accent mr-2">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleBookConsultation}
                className="w-full bg-gymline-dark hover:bg-gymline-accent text-white"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
