import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    setSearchOpen(false);
  }, [location]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
  };
  
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
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
            </Link>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {searchOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 px-4 py-3 bg-background/95 backdrop-blur-md shadow-md rounded-b-lg animate-slide-in">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full bg-transparent border-b border-border/50 py-2 px-0 focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit" 
                className="ml-2 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Submit search"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        )}
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
            <form onSubmit={handleSearch} className="mt-6 flex items-center">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full bg-transparent border-b border-primary/50 py-2 px-0 focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="ml-2 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Submit search"
              >
                <Search size={18} />
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
