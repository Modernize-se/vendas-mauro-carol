import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

const Footer = () => {
  // Function to handle smooth scrolling to sections
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
    };

  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
          {/* Column 1: Logo/Title and Image */}
          <div>
            <Link
              to="/"
              className="text-2xl font-display font-medium mb-6 flex items-center"
            >
              Mauro e Carol <span className="text-ukred ml-2">em Londres</span>
              <UKFlag className="ml-2" />
            </Link>
          </div>

          {/* Column 4: Contact (without email) */}
          <div>
            <h3 className="font-medium text-lg mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-ukred" />
                <span className="text-muted-foreground">
                  São Paulo - SP, próximo ao estádio do Morumbi
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-ukred" />
                <a
                  href="tel:+5511995132003"
                  className="text-muted-foreground hover:text-ukblue transition-colors"
                >
                  (11) 99513-2003
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Modernize-se A.T. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
