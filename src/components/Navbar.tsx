
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { productCategories, cardioCategories } from '@/data/products';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Strength equipment categories
  const strengthCategories = [
    "Alexzender Series",
    "Eclips Series",
    "Endurance Plus Series",
    "Iron Series"
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-gymline-charcoal to-black sticky top-0 z-50 shadow-md border-b border-gymline-accent/30">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-6">
        {/* Logo with extra padding for the image-based logo */}
        <Link to="/" className="z-10 py-2">
          <Logo />
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gymline-accent transition-colors font-medium">
              Home
            </Link>

            {/* Cardio Equipment Dropdown - moved before Strength Equipment */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-gymline-accent focus:bg-transparent data-[state=open]:bg-transparent px-0 text-white">
                    <span className="font-medium">
                      Cardio Equipment
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] bg-black/95 border border-gymline-accent/20 shadow-[0_0_15px_rgba(186,212,32,0.2)]">
                      {cardioCategories.map((subcategory) => (
                        <li key={subcategory}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block p-2 hover:bg-gymline-accent/20 rounded-md text-white hover:text-gymline-accent transition-colors"
                            >
                              {subcategory}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Strength Equipment Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-gymline-accent focus:bg-transparent data-[state=open]:bg-transparent px-0 text-white">
                    <span className="font-medium">
                      Strength Equipment
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] bg-black/95 border border-gymline-accent/20 shadow-[0_0_15px_rgba(186,212,32,0.2)]">
                      {strengthCategories.map((subcategory) => (
                        <li key={subcategory}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block p-2 hover:bg-gymline-accent/20 rounded-md text-white hover:text-gymline-accent transition-colors"
                            >
                              {subcategory}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="text-white hover:text-gymline-accent transition-colors font-medium">
              About
            </Link>

            <Link to="/contact" className="text-white hover:text-gymline-accent transition-colors font-medium">
              Contact
            </Link>
          </div>
        )}

        {/* Desktop Book Appointment Button - now redirects to contact page */}
        {!isMobile && (
          <div className="flex items-center">
            <Button 
              className="bg-gymline-accent hover:bg-white text-black font-medium shadow-[0_0_15px_rgba(186,212,32,0.3)]"
              asChild
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-gradient-to-br from-black via-gymline-charcoal to-black z-5 pt-20 px-6 overflow-y-auto">
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className="text-white hover:text-gymline-accent transition-colors text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Cardio Equipment with subcategories - moved before Strength Equipment */}
              <div className="space-y-2">
                <h3 className="text-white font-medium text-xl border-b border-gymline-accent/30 pb-2">Cardio Equipment</h3>
                <div className="pl-4 space-y-3">
                  {cardioCategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white hover:text-gymline-accent transition-colors block text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Strength Equipment with subcategories */}
              <div className="space-y-2">
                <h3 className="text-white font-medium text-xl border-b border-gymline-accent/30 pb-2">Strength Equipment</h3>
                <div className="pl-4 space-y-3">
                  {strengthCategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white hover:text-gymline-accent transition-colors block text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="text-white hover:text-gymline-accent transition-colors text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-white hover:text-gymline-accent transition-colors text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Book Appointment Button - now redirects to contact page */}
              <Button 
                className="bg-gymline-accent hover:bg-white/80 text-black w-full mt-4 font-medium shadow-[0_0_15px_rgba(186,212,32,0.3)]"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
