import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

// UK Flag SVG component
const UKFlag = ({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) => (
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
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#t)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleNavigation =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (location.pathname !== "/") {
        // If not on the homepage, navigate first
        navigate("/");

        // Wait for navigation, then scroll smoothly
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // Delay to ensure the page has loaded
      } else {
        // If already on homepage, just scroll
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      setMobileMenuOpen(false);
    };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSmoothScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100; // Offset to account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    };

  // Function to scroll to top when clicking "Início"
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
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
            className="text-3xl font-display font-bold tracking-wide transition-opacity hover:opacity-80 flex items-center space-x-3"
          >
            <div className="flex flex-col text-center">
              <span className="text-2xl md:text-3xl drop-shadow-md leading-tight">
                Mauro e Carol
              </span>
              <span className="text-ukred text-2xl md:text-3xl leading-tight">
                em Londres
              </span>
            </div>
            <UKFlag className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={scrollToTop}
            >
              Início
            </Link>
            <Link
              to="/"
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleNavigation("products")}
            >
              Produtos
            </Link>
            <Link
              to="/"
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleNavigation("story")}
            >
              Nossa História
            </Link>
            <Link
              to="/"
              className="text-foreground/80 hover:text-ukblue transition-colors"
              onClick={handleNavigation("how-it-works")}
            >
              Como Funciona
            </Link>
          </nav>

          <div className="flex items-center">
            <button
              className="md:hidden p-2 pl-4 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background shadow-lg z-40 animate-fade-in">
          <nav className="container mx-auto py-8 px-6 flex flex-col space-y-6 bg-white">
            <a
              href="#"
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={scrollToTop}
            >
              Início
            </a>
            <a
              href="#story"
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleNavigation("story")}
            >
              Nossa História
            </a>
            <a
              href="#products"
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleNavigation("products")}
            >
              Produtos
            </a>
            <a
              href="#how-it-works"
              className="text-xl font-medium pb-4 border-b border-border/30"
              onClick={handleNavigation("how-it-works")}
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
