
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight, Flag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-medium mb-4 flex items-center">
              Mauro e Carol <span className="text-primary ml-2">em Londres</span>
              <Flag className="ml-2 text-[#CF142B]" size={20} />
            </Link>
            <p className="text-muted-foreground mb-6">
              Vendendo os itens que escolhemos com carinho para montar nosso primeiro lar. 
              Cada peça foi selecionada com cuidado e possui histórias e momentos especiais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/?category=Sala%20de%20Estar" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Sala de Estar
                </Link>
              </li>
              <li>
                <Link to="/?category=Sala%20de%20Jantar" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Sala de Jantar
                </Link>
              </li>
              <li>
                <Link to="/?category=Quarto" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Quarto
                </Link>
              </li>
              <li>
                <Link to="/?category=Eletrodomésticos" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Eletrodomésticos
                </Link>
              </li>
              <li>
                <Link to="/?category=Iluminação" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Iluminação
                </Link>
              </li>
              <li>
                <Link to="/?category=Decoração" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Decoração
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Sobre Nossa Mudança</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Condições de Venda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-muted-foreground">
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary" />
                <a href="tel:+551199999999" className="text-muted-foreground hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary" />
                <a href="mailto:contato@maurocarolemlondres.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@maurocarolemlondres.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Mauro e Carol em Londres. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
