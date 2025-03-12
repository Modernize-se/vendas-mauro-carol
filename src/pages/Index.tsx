import { useEffect } from "react";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Home, Wrench, ShoppingBag, Heart } from "lucide-react";
import { setupLazyLoading } from "@/utils/image-lazy-loading";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    setupLazyLoading();

    // Animate elements on page load
    const staggerElements = document.querySelectorAll(".staggered-item");
    staggerElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("animate-enter");
      }, 100 + i * 50);
    });
  }, []);

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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section with fixed height */}
        <section className="relative min-h-[450px] md:min-h-[500px] mb-0 pb-6 md:pb-12 border-b border-border/30">
          <div className="absolute inset-0 bottom-[50px] md:bottom-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2000&auto=format&fit=crop"
              alt="Móveis de alta qualidade com design industrial"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
          </div>

          <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col md:flex-row items-center relative z-10">
            <div className="max-w-2xl mb-8 md:mb-0">
              {/* Updated title with a more personal touch and wine-red highlight */}
              <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6 staggered-item tracking-tight text-balance">
                Estamos vendendo{" "}
                <span className="text-ukred">peças especiais</span>
              </h1>

              {/* Added personal text below title */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 staggered-item">
                Estamos indo para Londres e por isso estamos vendendo os itens
                que escolhemos com carinho para montar nosso primeiro lar. Cada
                peça foi selecionada com cuidado e possui qualidade, histórias e
                momentos especiais. Todos os itens possuem no máximo 24 meses de
                uso.
              </p>

              {/* Couple Photo - Only visible on mobile */}
              <div className="md:hidden flex justify-center my-6">
                <div className="rounded-md overflow-hidden w-full max-w-xs shadow-md staggered-item">
                  <img
                    src="https://i.postimg.cc/htpTWNdm/20170115-135348-1.jpg"
                    alt="Casal em Londres"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 staggered-item mb-4">
                <a
                  href={generateWhatsAppLink({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-medium rounded-md px-6 py-3 bg-ukred text-white hover:bg-ukred/90 transition-colors"
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
                  src="https://i.postimg.cc/htpTWNdm/20170115-135348-1.jpg"
                  alt="Casal em Londres"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clear visual separator - only visible on desktop */}
        <div className="h-4 md:h-12 bg-background"></div>

        {/* Products Section - Fixed spacing */}
        <section id="products" className="bg-background pt-4 md:pt-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                Catálogo de Produtos
              </h2>
              {/* Removed repeating text below catalog title as requested */}
            </div>

            <ProductGrid products={products} />
          </div>
        </section>

        {/* Our Approach Section - With fixed spacing */}
        <section
          id="story"
          className="container mx-auto px-4 py-12 mb-12 border-t border-border/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Nossa História
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos indo passar um tempo na Inglaterra, e para isso vamos nos
              desfazer dos nossos móveis e eletrodomésticos. Oferecemos itens
              cuidadosamente escolhidos e bem conservados para seu lar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Todos os itens à venda foram escolhidos com atenção à qualidade
                e muito carinho para compor nosso primeiro lar. Materiais
                duráveis e design atemporal. São produtos de marcas reconhecidas
                que mantêm sua qualidade ao longo do tempo.
              </p>
            </div>

            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Conservação</h3>
              <p className="text-muted-foreground">
                Todos os itens estão cuidadosamente descritos e fidedignos à
                realidade. Todos com menos de 2 anos de uso e a maioria
                acompanhados de nota fiscal original.
              </p>
            </div>

            <div className="industrial-card rounded-md p-6 text-center">
              <div className="w-16 h-16 bg-industrial-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium mb-3">Motivação</h3>
              <p className="text-muted-foreground">
                Infelizmente não poderemos levar conosco todos os nossos itens,
                e não temos espaço suficiente para guardá-los. Por isso, estamos
                oferecendo essas peças de qualidade a preços atraentes. Essa é
                uma oportunidade ótima para adquirir móveis e eletrodomésticos
                que aliam qualidade, durabilidade e excelente custo-benefício.
              </p>
            </div>
          </div>
        </section>

        {/* Changed "Condições de Venda" to "Como Funciona" and removed "Contato" button */}
        <section id="how-it-works" className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2
              id="how-it-works-title"
              className="text-3xl md:text-4xl font-display font-medium mb-4"
            >
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informações importantes sobre a aquisição dos produtos.
            </p>
          </div>

          <div className="industrial-card rounded-md p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-industrial-steel/10 rounded-full flex items-center justify-center mr-4">
                <Home size={24} className="text-industrial-steel" />
              </div>
              <h3 className="text-xl font-medium">Retirada no Local</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Todos os itens deverão ser retirados em nosso apartamento, que
              fica na região do Morumbi, próximo ao estádio, em São Paulo - SP,
              ou a combinar.
            </p>
            <p className="text-muted-foreground">
              Vamos passar todas as informações e tirar qualquer dúvida via
              WhatsApp após confirmação do interesse de compra. Não temos como
              realizar entregas por correio ou transportadora, mas podemos
              combinar a melhor maneira de entregar o produto.
            </p>
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
                  Entre em contato conosco para mais informações, agendar uma
                  visita ou fazer uma proposta. Estamos abertos a negociações e
                  podemos responder quaisquer dúvidas sobre os produtos.
                </p>
                <a
                  href={generateWhatsAppLink({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="industrial-button inline-flex items-center justify-center gap-2 bg-ukred hover:bg-ukred/90"
                >
                  <MessageCircle size={20} />
                  Fale conosco
                </a>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://i.postimg.cc/htpTWNdm/20170115-135348-1.jpg"
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
      <WhatsAppButton link={generateWhatsAppLink({})} fixed={true} size="md" />
    </div>
  );
};

export default Index;
