
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Heart, Search, Home, Shield, Star } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">HomeEase</span>
              <span className="text-xs text-slate-500">Premium Rentals</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/listings" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Browse Homes
            </Link>
            <Link to="/services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/agents" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Find Agents
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/favorites')}
              className="text-slate-700 hover:text-blue-600"
            >
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-slate-700 hover:text-blue-600"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button 
              onClick={() => navigate('/register')}
              className="bg-gradient-primary hover:opacity-90 text-white shadow-lg btn-premium"
            >
              <Shield className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/listings" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Homes
              </Link>
              <Link 
                to="/services" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/agents" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Agents
              </Link>
              <Link 
                to="/about" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/favorites');
                    setIsMenuOpen(false);
                  }}
                  className="justify-start text-slate-700"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Favorites
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="justify-start text-slate-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-primary hover:opacity-90 text-white justify-start shadow-lg"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
