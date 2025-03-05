
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { formatCurrency, calculateDiscount } from '@/utils/format';
import { Tag } from 'lucide-react';

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
      cardRef.current.classList.add('staggered-item');
    }
  }, [index]);

  const discount = calculateDiscount(product.salePrice, product.referencePrice);
  
  return (
    <div 
      ref={cardRef}
      className="group card-hover rounded-xl overflow-hidden bg-background border border-border/40"
    >
      <Link to={`/product/${product.id}`} className="block relative h-full">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-ukred text-white text-sm px-2 py-1 rounded-full font-medium flex items-center">
              <Tag size={14} className="mr-1" />
              {discount}% OFF
            </div>
          )}
          
          {!product.available && (
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center">
              <p className="text-lg font-medium text-foreground/90">Indisponível</p>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-ukblue transition-colors">
            {product.name}
          </h3>
          
          <div className="mt-2">
            <span className="text-foreground font-medium text-lg">
              {formatCurrency(product.salePrice)}
            </span>
            
            {discount > 0 && (
              <span className="ml-2 text-muted-foreground line-through text-sm">
                {formatCurrency(product.referencePrice)}
              </span>
            )}
          </div>
          
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {product.category}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
