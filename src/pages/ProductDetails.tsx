import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Tag,
  CheckCircle,
  AlertCircle,
  Globe,
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
import { Testimonials } from "@/components/ui/testimonials";
import ProductCard from "@/components/ProductCard";

const ReferencePrices = ({
  references,
}: {
  references: Product["references"];
}) => (
  <div className="mb-8 p-6 bg-secondary rounded-xl shadow-md">
    <h3 className="text-lg font-medium mb-4">
      Compare os preços em marketplaces
    </h3>
    <ul className="space-y-3">
      {references.map((ref, index) => (
        <li
          key={index}
          className="flex items-center justify-between border-b pb-2 last:border-0"
        >
          <a
            href={ref.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline"
          >
            <Globe size={16} className="mr-2" />{" "}
            {ref.storeName || "Marketplace"}
          </a>
          <span className="font-medium">{formatCurrency(ref.price)}</span>
        </li>
      ))}
    </ul>
  </div>
);

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
            <Link
              to="/#products"
              className="hover:text-foreground transition-colors"
            >
              Produtos
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

          {/* Mobile View All Products Button */}
          <div className="md:hidden mb-6">
            <Link
              to="/#products"
              className="w-full block text-center px-4 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-md transition-colors"
            >
              Ver todos os {products.length} produtos
            </Link>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl font-display font-medium mb-4 tracking-tight">
            {product.name}
          </h1>

          {/* Price and Status Section */}
          <div className="mb-6">
            <div className="flex flex-col mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-medium">
                  {formatCurrency(product.salePrice)}
                </span>

                {discount > 0 && (
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium flex items-center">
                    <Tag size={14} className="mr-1" />
                    {discount}% OFF
                  </span>
                )}
              </div>

              {discount > 0 && (
                <span className="text-lg text-muted-foreground line-through mt-1">
                  {formatCurrency(maxPrice)}
                </span>
              )}
            </div>

            {product.availability === "available" ? (
              <div className="bg-[#F2FCE2] text-emerald-700 rounded-md px-4 py-3 flex items-center shadow-sm border border-emerald-100 animate-fade-in">
                <CheckCircle size={20} className="mr-2 text-emerald-600" />
                <span className="font-medium">Produto disponível</span>
              </div>
            ) : product.availability === "reserved" ? (
              <div className="bg-yellow-100 text-yellow-800 rounded-md px-4 py-3 flex items-center shadow-sm border border-yellow-300 animate-fade-in">
                <AlertCircle size={20} className="mr-2 text-yellow-700" />
                <span className="font-medium">
                  Este produto já está reservado e pode não estar mais
                  disponível
                </span>
              </div>
            ) : (
              <div className="bg-red-100 text-red-800 rounded-md px-4 py-3 flex items-center shadow-sm border border-red-300 animate-fade-in">
                <AlertCircle size={20} className="mr-2 text-red-700" />
                <span className="font-medium">
                  Que pena! Este produto já foi vendido
                </span>
              </div>
            )}
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
                  isProductAvailable={product.availability === "available"}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <ReferencePrices references={product.references} />
            {product.testimonials && product.testimonials.length > 0 && (
              <Testimonials testimonials={product.testimonials} />
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-8 md:mb-16">
              <h2 className="text-2xl font-display font-medium mb-4 md:mb-8">
                Produtos relacionados
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* View All Products Button (Below Related Products) */}
          <div className="mb-8 flex justify-center">
            <Link
              to="/#products"
              className="text-center px-4 py-3 bg-secondary/60 hover:bg-secondary/80 text-foreground rounded-md transition-colors md:min-w-[300px]"
            >
              Ver todos os {products.length} produtos
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        link={product.whatsAppLink || ""}
        isProductAvailable={product.availability === "available"}
        className="fixed bottom-6 right-6 z-40 shadow-lg"
        size="md"
      />
    </div>
  );
};

export default ProductDetails;
