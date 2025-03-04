
import { useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Plane, Home, Heart } from 'lucide-react';
import { setupLazyLoading } from '@/utils/image-lazy-loading';

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
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <div className="staggered-item">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
                  Nossa Mudança para Londres
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6 staggered-item">
                Peças escolhidas com carinho para nosso primeiro lar
              </h1>
              
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
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-medium rounded-lg px-6 py-3 bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors"
                >
                  <MessageCircle size={20} />
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="container mx-auto px-4 mb-24">
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
                Cada item que estamos vendendo foi escolhido com carinho para montar nosso primeiro lar juntos. São peças de qualidade que nos acompanharam em momentos especiais.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Nova Jornada</h3>
              <p className="text-muted-foreground">
                Estamos embarcando em uma nova aventura em Londres e, infelizmente, não podemos levar nossos móveis e eletrodomésticos conosco.
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
        
        {/* Categories Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Categorias</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore os itens da nossa casa por categoria.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <a href="/?category=Sala%20de%20Estar" className="group relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop" 
                alt="Sala de Estar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-medium">Sala de Estar</h3>
              </div>
            </a>
            
            <a href="/?category=Sala%20de%20Jantar" className="group relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1470&auto=format&fit=crop" 
                alt="Sala de Jantar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-medium">Sala de Jantar</h3>
              </div>
            </a>
            
            <a href="/?category=Quarto" className="group relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1470&auto=format&fit=crop" 
                alt="Quarto" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-medium">Quarto</h3>
              </div>
            </a>
            
            <a href="/?category=Eletrodomésticos" className="group relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1587&auto=format&fit=crop" 
                alt="Eletrodomésticos" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-medium">Eletrodomésticos</h3>
              </div>
            </a>
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
                  href="https://wa.me/5511999999999" 
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
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Index;
