
import { useState } from "react";
import { Menu, X, Map, User, Sun, Moon, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Roamify</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Map className="h-5 w-5 mr-2" />
              Explore
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5 mr-2" />
              Stories
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Map className="h-5 w-5 mr-2" />
              Explore
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <MessageSquare className="h-5 w-5 mr-2" />
              Stories
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
            <Button variant="default" className="w-full" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
