import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Tag,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { formatCurrency, calculateDiscount } from "@/utils/format";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import { setupLazyLoading } from "@/utils/image-lazy-loading";
import { maxBy } from "lodash";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Find the product by id
    const foundProduct = products.find((p) => p.id === id);

    // Simulate loading
    setTimeout(() => {
      setProduct(foundProduct || null);
      setLoading(false);

      if (foundProduct) {
        // Find related products (same category, but not the same product)
        const related = products
          .filter(
            (p) =>
              p.category === foundProduct.category && p.id !== foundProduct.id
          )
          .slice(0, 4);

        setRelatedProducts(related);
      }

      setupLazyLoading();
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-3xl font-display font-medium mb-4">
              Produto não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O produto que você está procurando não está disponível ou foi
              removido.
            </p>
            <Link
              to="/"
              className="industrial-button inline-flex items-center justify-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar para a página inicial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const maxPrice = maxBy(product.references)?.price;
  const discount = calculateDiscount(product.salePrice, maxPrice);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="py-4 flex items-center text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link
              to={`/?category=${encodeURIComponent(product.category)}`}
              className="hover:text-foreground transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="animate-fade-in">
              <ImageGallery
                images={product.imageUrls}
                productName={product.name}
              />
            </div>

            <div className="flex flex-col animate-slide-in">
              <h1 className="text-2xl md:text-3xl font-display font-medium mb-2 tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-medium mr-3">
                  {formatCurrency(product.salePrice)}
                </span>

                {discount > 0 && (
                  <>
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {formatCurrency(maxPrice)}
                    </span>

                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium flex items-center">
                      <Tag size={14} className="mr-1" />
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {product.availability === "available" ? (
                <div className="bg-[#F2FCE2] text-emerald-700 rounded-md px-4 py-3 mb-6 flex items-center shadow-sm border border-emerald-100 animate-fade-in">
                  <CheckCircle size={20} className="mr-2 text-emerald-600" />
                  <span className="font-medium">
                    Produto disponível para compra imediata
                  </span>
                </div>
              ) : (
                <div className="bg-destructive/10 text-destructive rounded-md px-4 py-3 mb-6 flex items-center">
                  <AlertCircle size={20} className="mr-2" />
                  <span className="font-medium">
                    Produto indisponível no momento
                  </span>
                </div>
              )}

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Specifications Table */}
              {product.specifications &&
                Object.keys(product.specifications).length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-3">Especificações</h3>
                    <div className="rounded-md overflow-hidden border border-border">
                      <table className="w-full">
                        <tbody>
                          {Object.entries(product.specifications).map(
                            ([key, value]) => (
                              <tr
                                key={key}
                                className="border-b border-border last:border-0"
                              >
                                <td className="py-3 px-4 font-medium bg-secondary/50">
                                  {key}
                                </td>
                                <td className="py-3 px-4">{value}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              {/* Call to Action */}
              <div className="mt-auto pt-4">
                <WhatsAppButton
                  link={product.whatsAppLink || ""}
                  className="w-full md:w-auto"
                  size="lg"
                />

                <p className="text-sm text-muted-foreground mt-4">
                  Envie uma mensagem para consultar condições de pagamento e
                  retirada.
                </p>
              </div>
            </div>
          </div>

          {product.ownerComments && (
            <div className="mt-2 mb-14">
              <h3 className="text-lg font-medium ">Comentários do Mauro:</h3>
              <h3 className="text-lg font-medium text-muted-foreground">
                "{product.ownerComments}"
              </h3>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-display font-medium mb-6">
                Produtos Relacionados
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="group industrial-card rounded-md overflow-hidden staggered-item"
                  >
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="block h-full"
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={relatedProduct.imageUrls[0]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />

                        {calculateDiscount(relatedProduct.salePrice, maxPrice) >
                          0 && (
                          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-sm px-2 py-1 rounded-md font-medium flex items-center">
                            <Tag size={14} className="mr-1" />
                            {calculateDiscount(
                              relatedProduct.salePrice,
                              maxPrice
                            )}
                            % OFF
                          </div>
                        )}

                        {relatedProduct.availability === "available" && (
                          <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm text-sm px-2 py-1 rounded-md font-medium flex items-center">
                            <CheckCircle
                              size={14}
                              className="mr-1 text-emerald-600"
                            />
                            <span className="text-foreground">Disponível</span>
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-industrial-steel transition-colors">
                          {relatedProduct.name}
                        </h3>

                        <div>
                          <span className="text-foreground font-medium">
                            {formatCurrency(relatedProduct.salePrice)}
                          </span>

                          {calculateDiscount(
                            relatedProduct.salePrice,
                            maxPrice
                          ) > 0 && (
                            <span className="ml-2 text-muted-foreground line-through text-sm">
                              {formatCurrency(maxPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        link={product.whatsAppLink || ""}
        className="fixed bottom-6 right-6 z-40 shadow-lg"
        size="md"
      />
    </div>
  );
};

export default ProductDetails;
