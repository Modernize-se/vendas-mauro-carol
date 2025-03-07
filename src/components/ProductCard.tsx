import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { formatCurrency, calculateDiscount } from "@/utils/format";
import { Tag, CheckCircle, ShoppingBag, Clock } from "lucide-react";
import { maxBy } from "lodash";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const delay = 100 + (index % 8) * 50; // Stagger animation based on index
      cardRef.current.style.animationDelay = `${delay}ms`;
      cardRef.current.classList.add("staggered-item");
    }
  }, [index]);

  const maxPrice = maxBy(product.references)?.price;
  const discount = calculateDiscount(product.salePrice, maxPrice);

  const availabilityIcon = {
    sold: <ShoppingBag size={14} className="mr-1 text-accent" />,
    reserved: <Clock size={14} className="mr-1 text-amber-500" />,
    available: <CheckCircle size={14} className="mr-1 text-emerald-600" />,
  };

  const availabilityText = {
    sold: "Vendido",
    reserved: "Reservado",
    available: "Disponível",
  };

  const availabilityBg = {
    sold: "bg-accent/90",
    reserved: "bg-amber-500/90",
    available: "bg-background/80",
  };

  return (
    <div
      ref={cardRef}
      className="group industrial-card rounded-md overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block relative h-full">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
          />

          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-accent text-white text-sm px-2 py-1 rounded-md font-medium flex items-center">
              <Tag size={14} className="mr-1" />
              {discount}% OFF
            </div>
          )}

          <div
            className={`absolute bottom-3 left-3 ${
              product.availability === "available"
                ? "bg-background/80 backdrop-blur-sm"
                : availabilityBg[product.availability]
            } text-sm px-2 py-1 rounded-md font-medium flex items-center`}
          >
            {availabilityIcon[product.availability]}
            <span
              className={`${
                product.availability === "available"
                  ? "text-foreground"
                  : "text-white"
              }`}
            >
              {availabilityText[product.availability]}
            </span>
          </div>

          {product.availability !== "available" && (
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center">
              <p className="text-lg font-medium text-foreground/90">
                {product.availability === "sold"
                  ? "Produto Vendido"
                  : "Produto Reservado"}
              </p>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-industrial-steel transition-colors">
            {product.name}
          </h3>

          <div className="mt-2">
            <span className="text-foreground font-medium text-lg">
              {formatCurrency(product.salePrice)}
            </span>

            {discount > 0 && (
              <span className="ml-2 text-muted-foreground line-through text-sm">
                {formatCurrency(maxPrice)}
              </span>
            )}
          </div>

          {product.references.length > 0 && (
            <div className="mt-2 text-xs text-muted-foreground">
              <p className="font-medium mb-1">Referências:</p>
              <div className="flex flex-wrap gap-x-2">
                {product.references.slice(0, 2).map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-industrial-steel"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {ref.storeName || "Loja"}: {formatCurrency(ref.price)}
                  </a>
                ))}
              </div>
            </div>
          )}

          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {product.category}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
