
import { useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Home, Wrench, ShoppingBag, Info, ArrowRight, Filter, Heart } from 'lucide-react';
import { setupLazyLoading } from '@/utils/image-lazy-loading';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    setupLazyLoading();
    
    // Animate elements on page load
    const staggerElements = document.querySelectorAll('.staggered-item');
    staggerElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-enter');
      }, 100 + i * 50);
    });
  }, []);
  
  // Function to handle smooth scrolling to sections
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section - More industrial, less boho */}
        <section className="relative h-[70vh] md:h-[80vh] mb-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2000&auto=format&fit=crop" 
              alt="Móveis de alta qualidade com design industrial" 
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10">
            <div className="max-w-2xl mb-8 md:mb-0">
              {/* Updated title with red highlight instead of gray */}
              <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6 staggered-item tracking-tight text-balance">
                Móveis sofisticados para um <span className="text-[#ea384c]">lar único</span>
              </h1>
              
              {/* Added new personal text below title */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 staggered-item">
                Vendendo os itens que escolhemos com carinho para montar nosso primeiro lar. Cada peça foi selecionada com cuidado e possui histórias e momentos especiais.
              </p>
              
              {/* Couple Photo - Only visible on mobile */}
              <div className="md:hidden flex justify-center my-6">
                <div className="rounded-md overflow-hidden w-full max-w-xs shadow-md staggered-item">
                  <img 
                    src="https://tarahcoonan.com/wp-content/uploads/2016/07/19-15051-post/london-couples-photoshoot_01.jpg" 
                    alt="Casal em Londres" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 staggered-item">
                Móveis e eletrodomésticos cuidadosamente selecionados, com design contemporâneo e excelente estado de conservação para complementar seu lar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 staggered-item mb-24 sm:mb-0">
                <a 
                  href="#products" 
                  className="industrial-button flex items-center justify-center gap-2"
                  onClick={handleSmoothScroll('products')}
                >
                  <ShoppingBag size={18} />
                  Ver produtos
                </a>
                
                {/* Changed button color to red */}
                <a 
                  href={generateWhatsAppLink("Informações Gerais")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-medium rounded-md px-6 py-3 bg-[#ea384c] text-white hover:bg-[#ea384c]/90 transition-colors"
                >
                  <MessageCircle size={18} />
                  Fale conosco
                </a>
              </div>
            </div>
            
            {/* Larger Photo with industrial frame - only visible on desktop */}
            <div className="hidden md:flex justify-center md:justify-end items-center w-full md:w-auto md:ml-auto">
              <div className="relative rounded-md overflow-hidden w-72 h-72 md:w-96 md:h-96 staggered-item shadow-lg border-4 border-industrial-metal/20">
                <img 
                  src="https://tarahcoonan.com/wp-content/uploads/2016/07/19-15051-post/london-couples-photoshoot_01.jpg" 
                  alt="Casal em Londres" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section - Moved up to emphasize products */}
        <section id="products" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Catálogo de Produtos</h2>
            {/* Removed repeating text below catalog title as requested */}
          </div>
          
          <ProductGrid products={products} />
        </section>
        
        {/* Our Approach Section - Replacing "Our Story" with focus on quality */}
        <section id="story" className="container mx-auto px-4 mb-24 pt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Nossa Seleção</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos itens cuidadosamente escolhidos e bem conservados para seu lar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Todos os itens à venda foram escolhidos com atenção aos detalhes e muito carinho para compor nosso primeiro lar. Materiais duráveis e design atemporal. São produtos de marcas reconhecidas que mantêm sua qualidade ao longo do tempo.
              </p>
            </div>
            
            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Conservação</h3>
              <p className="text-muted-foreground">
                Todos os itens estão cuidadosamente descritos e fidedignos à realidade. Com menos de 2 anos de uso e a maioria acompanhados de nota fiscal original.
              </p>
            </div>
            
            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Motivação</h3>
              <p className="text-muted-foreground">
                Em função de nossa mudança para Londres, infelizmente não poderemos levar conosco todos os nossos itens. Por isso, estamos oferecendo essas peças de qualidade a preços atraentes. Essa é uma oportunidade única para investir em móveis e eletrodomésticos que aliam sofisticação e excelente custo-benefício.
              </p>
            </div>
          </div>
        </section>
        
        {/* Changed "Condições de Venda" to "Como Funciona" and removed "Contato" button */}
        <section id="how-it-works" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-display font-medium mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informações importantes sobre a aquisição dos produtos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="industrial-card rounded-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-industrial-steel/10 rounded-full flex items-center justify-center mr-4">
                  <Home size={24} className="text-industrial-steel" />
                </div>
                <h3 className="text-xl font-medium">Retirada no Local</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Todos os itens deverão ser retirados em nosso apartamento, que fica na região do Morumbi, próximo ao estádio, em São Paulo - SP.
              </p>
              <p className="text-muted-foreground">
                O endereço exato será compartilhado via WhatsApp após confirmação da compra. Não realizamos entregas.
              </p>
            </div>
            
            <div className="industrial-card rounded-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-industrial-steel/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag size={24} className="text-industrial-steel" />
                </div>
                <h3 className="text-xl font-medium">Estado dos Produtos</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Todos os itens estão em perfeito estado de conservação, com menos de 2 anos de uso e acompanhados de nota fiscal original.
              </p>
              <p className="text-muted-foreground">
                Os produtos foram escolhidos com atenção aos detalhes, garantindo durabilidade e qualidade.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  Tem interesse em algum item?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Entre em contato conosco para mais informações, agendar uma visita ou fazer uma proposta. Estamos abertos a negociações e podemos responder quaisquer dúvidas sobre os produtos.
                </p>
                <a 
                  href={generateWhatsAppLink("Informações Gerais")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="industrial-button inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Fale conosco
                </a>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://tarahcoonan.com/wp-content/uploads/2016/07/19-15051-post/london-couples-photoshoot_01.jpg" 
                  alt="Nosso lar" 
                  className="w-full h-80 object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton 
        link={generateWhatsAppLink("Informações Gerais")} 
        fixed={true}
        size="md"
      />
    </div>
  );
};

export default Index;
