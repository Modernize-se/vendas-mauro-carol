import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-medium transition-opacity hover:opacity-80 flex items-center"
          >
            Mauro e Carol <span className="text-primary ml-2">em Londres</span>
            <Flag className="ml-2 text-[#CF142B]" size={20} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Início
            </Link>
            <a href="#story" className="text-foreground/80 hover:text-foreground transition-colors">
              Nossa História
            </a>
            <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">
              Produtos
            </a>
          </nav>
          
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="container mx-auto py-8 px-6 flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium pb-4 border-b border-border/30">
              Início
            </Link>
            <a href="#story" className="text-xl font-medium pb-4 border-b border-border/30">
              Nossa História
            </a>
            <a href="#products" className="text-xl font-medium pb-4 border-b border-border/30">
              Produtos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
