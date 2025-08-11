
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram } from 'lucide-react';
import { productCategories } from '@/data/products';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-gymline-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Footer Top - Newsletter */}
        <div className="bg-gymline-accent/10 p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay updated</h3>
              <p className="text-white/80">
                Subscribe to our newsletter for exclusive product updates and fitness tips.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white text-white"
              />
              <Button className="bg-gymline-accent text-black hover:bg-gymline-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-8">
              Premium gym equipment for commercial and home use. Build your dream fitness space with our high-quality products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gymline-accent transition-colors bg-white/5 p-2 rounded-full">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gymline-accent transition-colors bg-white/5 p-2 rounded-full">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              Product Categories
              <ArrowUpRight className="ml-1 h-4 w-4 text-gymline-accent" />
            </h3>
            <ul className="space-y-4">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-gymline-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gymline-accent rounded-full mr-2"></span>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              Quick Links
              <ArrowUpRight className="ml-1 h-4 w-4 text-gymline-accent" />
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-gymline-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gymline-accent rounded-full mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              Contact Info
              <ArrowUpRight className="ml-1 h-4 w-4 text-gymline-accent" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gymline-accent mt-0.5" />
                <span className="text-gray-300">
                  Gymline Corporate Office<br />
                  A-95, DDA Shed, Okhla Phase II<br />
                  New Delhi, 110020
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gymline-accent" />
                <span className="text-gray-300">+91 9311771888</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gymline-accent" />
                <a href="mailto:info@gymline.com" className="text-gray-300 hover:text-gymline-accent transition-colors">
                  info@gymline.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Gymline. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
