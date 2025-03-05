
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// UK Flag SVG component
const UKFlag = ({ className, size = 20 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 60 30" 
    width={size} 
    height={size / 2}
    className={className}
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

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
  
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Offset to account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-ukblue/10" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-medium transition-opacity hover:opacity-80 flex items-center"
          >
            Mauro e Carol <span className="text-ukred ml-2">em Londres</span>
            <UKFlag className="ml-2" size={24} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-ukblue transition-colors">
              Início
            </Link>
            <a 
              href="#story" 
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleSmoothScroll('story')}
            >
              Nossa História
            </a>
            <a 
              href="#products" 
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleSmoothScroll('products')}
            >
              Produtos
            </a>
            <a 
              href="#how-it-works-title" 
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleSmoothScroll('how-it-works-title')}
            >
              Como Funciona
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
        <div className="fixed inset-0 top-[72px] bg-background shadow-lg z-40 animate-fade-in">
          <nav className="container mx-auto py-8 px-6 flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium pb-4 border-b border-border/30">
              Início
            </Link>
            <a 
              href="#story" 
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleSmoothScroll('story')}
            >
              Nossa História
            </a>
            <a 
              href="#products" 
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleSmoothScroll('products')}
            >
              Produtos
            </a>
            <a 
              href="#how-it-works-title" 
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleSmoothScroll('how-it-works-title')}
            >
              Como Funciona
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
