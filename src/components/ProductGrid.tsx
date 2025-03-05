
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product, ProductFilter, SortOption } from '@/types/product';
import { ChevronDown, SlidersHorizontal, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<ProductFilter>({
    onlyAvailable: false,
  });
  const [sort, setSort] = useState<SortOption>("price-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    setCategories(uniqueCategories);
    
    // Initialize filters from URL parameters
    const categoryParam = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    
    if (categoryParam || searchQuery) {
      setFilters(prevFilters => ({
        ...prevFilters,
        category: categoryParam || undefined,
        searchQuery: searchQuery || undefined,
      }));
    }
  }, [products, searchParams]);
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    
    // Apply price filter
    if (filters.minPrice !== undefined) {
      result = result.filter(p => p.salePrice >= (filters.minPrice || 0));
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter(p => p.salePrice <= (filters.maxPrice || Infinity));
    }
    
    // Apply availability filter
    if (filters.onlyAvailable) {
      result = result.filter(p => p.available);
    }
    
    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.salePrice - b.salePrice;
        case 'price-desc':
          return b.salePrice - a.salePrice;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    
    setFilteredProducts(result);
  }, [products, filters, sort]);
  
  const clearFilters = () => {
    setFilters({
      onlyAvailable: false,
    });
    setSort('price-asc');
    setShowFilters(false);
  };
  
  const updateCategory = (category: string | undefined) => {
    setFilters(prev => ({ ...prev, category }));
    setShowFilters(false);
  };
  
  const updatePriceRange = (minPrice: number | undefined, maxPrice: number | undefined) => {
    setFilters(prev => ({ ...prev, minPrice, maxPrice }));
    setShowFilters(false);
  };
  
  const updateSort = (newSort: SortOption) => {
    setSort(newSort);
    setShowSortMenu(false);
  };
  
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-medium">
            {filters.category ? filters.category : "Todos os Produtos"}
            {filters.searchQuery && (
              <span className="ml-2 font-normal text-lg text-muted-foreground">
                Resultados para "{filters.searchQuery}"
              </span>
            )}
          </h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'} encontrados
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <SlidersHorizontal size={18} />
              <span>Filtros</span>
            </button>
            
            {showFilters && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-background glass-panel shadow-lg rounded-lg p-4 z-20 animate-fade-in">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Categoria</h3>
                  <div className="space-y-2">
                    <div 
                      className={cn(
                        "flex items-center space-x-2 cursor-pointer hover:text-primary",
                        !filters.category && "text-primary font-medium"
                      )}
                      onClick={() => updateCategory(undefined)}
                    >
                      <div className="w-4 h-4">
                        {!filters.category && <Check size={16} />}
                      </div>
                      <span>Todas as categorias</span>
                    </div>
                    
                    {categories.map(category => (
                      <div 
                        key={category}
                        className={cn(
                          "flex items-center space-x-2 cursor-pointer hover:text-primary",
                          filters.category === category && "text-primary font-medium"
                        )}
                        onClick={() => updateCategory(category)}
                      >
                        <div className="w-4 h-4">
                          {filters.category === category && <Check size={16} />}
                        </div>
                        <span>{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Preço</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      className={cn(
                        "px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors",
                        (!filters.minPrice && !filters.maxPrice) && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => updatePriceRange(undefined, undefined)}
                    >
                      Todos os preços
                    </button>
                    <button 
                      className={cn(
                        "px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors",
                        (filters.maxPrice === 1000) && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => updatePriceRange(0, 1000)}
                    >
                      Até R$ 1.000
                    </button>
                    <button 
                      className={cn(
                        "px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors",
                        (filters.minPrice === 1000 && filters.maxPrice === 3000) && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => updatePriceRange(1000, 3000)}
                    >
                      R$ 1.000 - R$ 3.000
                    </button>
                    <button 
                      className={cn(
                        "px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors",
                        (filters.minPrice === 3000) && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => updatePriceRange(3000, undefined)}
                    >
                      Acima de R$ 3.000
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.onlyAvailable}
                      onChange={() => setFilters(prev => ({ ...prev, onlyAvailable: !prev.onlyAvailable }))}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span>Mostrar apenas disponíveis</span>
                  </label>
                </div>
                
                <div className="flex justify-between pt-2 border-t border-border">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Limpar filtros
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    Aplicar filtros
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <span>Ordenar por</span>
              <ChevronDown size={18} />
            </button>
            
            {showSortMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-background glass-panel shadow-lg rounded-lg py-2 z-20">
                <div 
                  className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                  onClick={() => updateSort('price-asc')}
                >
                  <span>Menor preço</span>
                  {sort === 'price-asc' && <Check size={16} />}
                </div>
                <div 
                  className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                  onClick={() => updateSort('price-desc')}
                >
                  <span>Maior preço</span>
                  {sort === 'price-desc' && <Check size={16} />}
                </div>
                <div 
                  className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                  onClick={() => updateSort('name-asc')}
                >
                  <span>Nome (A-Z)</span>
                  {sort === 'name-asc' && <Check size={16} />}
                </div>
                <div 
                  className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                  onClick={() => updateSort('name-desc')}
                >
                  <span>Nome (Z-A)</span>
                  {sort === 'name-desc' && <Check size={16} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
          <p className="text-muted-foreground">
            Tente ajustar seus filtros ou busque por outros termos.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
