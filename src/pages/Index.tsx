import { useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Plane, Home, Heart, Info, MapPin, ShoppingBag, ArrowRight } from 'lucide-react';
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[90vh] mb-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2070&auto=format&fit=crop" 
              alt="Itens cuidadosamente selecionados do nosso lar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/50"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10">
            <div className="max-w-2xl mb-8 md:mb-0">
              <div className="staggered-item">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
                  Nossa Mudança para Londres
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6 staggered-item">
                Peças escolhidas com carinho para nosso primeiro lar
              </h1>
              
              {/* Couple Photo - Only visible on mobile */}
              <div className="md:hidden flex justify-center my-6">
                <div className="relative rounded-full w-[90%] max-w-xs h-auto aspect-square flex items-center justify-center staggered-item">
                  {/* Frame border */}
                  <div className="absolute inset-0 rounded-full border-8 border-[#9F9EA1] shadow-lg"></div>
                  {/* Photo */}
                  <div className="rounded-full overflow-hidden w-[calc(100%-16px)] h-[calc(100%-16px)]">
                    <img 
                      src="https://tarahcoonan.com/wp-content/uploads/2016/07/19-15051-post/london-couples-photoshoot_01.jpg" 
                      alt="Casal em Londres" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 staggered-item">
                Estamos vendendo os itens que escolhemos com tanto cuidado para montar nosso lar, pois estamos de mudança para Londres e não podemos levá-los conosco.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 staggered-item">
                <a 
                  href="#products" 
                  className="glass-button font-medium rounded-lg px-6 py-3 text-center"
                >
                  Ver produtos
                </a>
                
                <a 
                  href={generateWhatsAppLink("Informações Gerais")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-medium rounded-lg px-6 py-3 bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors"
                >
                  <MessageCircle size={20} />
                  Fale conosco
                </a>
              </div>
            </div>
            
            {/* Larger Rounded Couple Photo with Frame - only visible on desktop */}
            <div className="hidden md:flex justify-center md:justify-end items-center w-full md:w-auto md:ml-auto">
              <div className="relative rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center staggered-item">
                {/* Frame border */}
                <div className="absolute inset-0 rounded-full border-8 border-[#9F9EA1] shadow-lg"></div>
                {/* Photo */}
                <div className="rounded-full overflow-hidden w-[calc(100%-16px)] h-[calc(100%-16px)]">
                  <img 
                    src="https://tarahcoonan.com/wp-content/uploads/2016/07/19-15051-post/london-couples-photoshoot_01.jpg" 
                    alt="Casal em Londres" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section id="story" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Nossa História</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um capítulo se fecha e outro se abre com nossa mudança para Londres.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Nosso Primeiro Lar</h3>
              <p className="text-muted-foreground">
                Em abril de 2023, montamos nosso primeiro lar juntos. Cada item que estamos vendendo foi escolhido com carinho para esse momento especial. São peças de qualidade que nos acompanharam em momentos inesquecíveis.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Nova Jornada</h3>
              <p className="text-muted-foreground">
                Em abril de 2025, embarcaremos em uma nova aventura em Londres e, infelizmente, não podemos levar nossos móveis e eletrodomésticos conosco. Nossa mudança está se aproximando rapidamente!
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Novo Lar para Nossas Coisas</h3>
              <p className="text-muted-foreground">
                Queremos que esses itens encontrem um novo lar onde serão tão amados quanto foram por nós. Cada peça tem sua história e esperamos que continue a criar memórias.
              </p>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section id="products" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira os itens que estamos vendendo antes da nossa mudança para Londres.
            </p>
          </div>
          
          <ProductGrid products={products} />
        </section>
        
        {/* How it Works Details Section */}
        <section id="how-it-works" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-display font-medium mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informações importantes sobre a compra dos nossos itens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-primary" />
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
            
            <div className="bg-secondary/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-medium">Estado dos Produtos</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Todos os itens estão em perfeito estado de conservação, com menos de 2 anos de uso e acompanhados de nota fiscal original.
              </p>
              <p className="text-muted-foreground">
                Os produtos foram escolhidos com muito carinho e cuidado para nosso lar.
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
                  className="inline-flex items-center justify-center gap-2 font-medium rounded-lg px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle size={20} />
                  Fale conosco
                </a>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Nosso lar" 
                  className="w-full h-80 object-cover rounded-lg"
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
