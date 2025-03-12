import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Product, ProductFilter, SortOption } from "@/types/product";
import { ChevronDown, SlidersHorizontal, Check, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
}

const MOBILE_ITEMS_PER_PAGE = 20; // 10 rows * 2 columns

const ProductGrid = ({ products }: ProductGridProps) => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [displayedItems, setDisplayedItems] = useState(MOBILE_ITEMS_PER_PAGE);
  const [filters, setFilters] = useState<ProductFilter>({
    onlyAvailable: false,
  });
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Extract unique categories and materials
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    setCategories(uniqueCategories);

    // Initialize filters from URL parameters
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    const materialParam = searchParams.get("material");

    if (categoryParam || searchParam || materialParam) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: categoryParam || undefined,
        searchQuery: searchParam || undefined,
        material: materialParam || undefined,
      }));

      if (searchParam) {
        setSearchQuery(searchParam);
      }
    }
  }, [products, searchParams]);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Apply price filter
    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.salePrice >= (filters.minPrice || 0));
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter(
        (p) => p.salePrice <= (filters.maxPrice || Infinity)
      );
    }

    // Apply availability filter
    if (filters.onlyAvailable) {
      result = result.filter((p) => p.availability === "available");
    }

    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.salePrice - b.salePrice;
        case "price-desc":
          return b.salePrice - a.salePrice;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
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
    setSort("name-asc");
    setSearchQuery("");
    setShowFilters(false);
  };

  const updateCategory = (category: string | undefined) => {
    setFilters((prev) => ({ ...prev, category }));
    setShowFilters(false);
  };

  const updatePriceRange = (
    minPrice: number | undefined,
    maxPrice: number | undefined
  ) => {
    setFilters((prev) => ({ ...prev, minPrice, maxPrice }));
    setShowFilters(false);
  };

  const updateSort = (newSort: SortOption) => {
    setSort(newSort);
    setShowSortMenu(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, searchQuery: searchQuery || undefined }));
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-4">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setFilters((prev) => ({
                  ...prev,
                  searchQuery: e.target.value || undefined,
                }));
              }}
              className="w-full pl-4 pr-12 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground">
              <Search size={18} />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2.5 border border-border rounded-md hover:bg-secondary/50 transition-colors"
              >
                <SlidersHorizontal size={18} />
                <span>Filtros</span>
              </button>

              {showFilters && (
                <div className="fixed md:absolute left-0 md:right-0 md:left-auto top-full mt-2 w-full md:w-80 bg-background glass-panel shadow-lg rounded-md p-4 z-20 animate-fade-in max-h-[80vh] overflow-y-auto">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Categoria</h3>
                      {filters.category && (
                        <button
                          onClick={() => updateCategory(undefined)}
                          className="text-xs text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded hover:bg-secondary/60 transition-colors"
                        >
                          Limpar
                        </button>
                      )}
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin pr-1">
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

                      {categories.map((category) => (
                        <div
                          key={category}
                          className={cn(
                            "flex items-center space-x-2 cursor-pointer hover:text-primary",
                            filters.category === category &&
                              "text-primary font-medium"
                          )}
                          onClick={() => updateCategory(category)}
                        >
                          <div className="w-4 h-4">
                            {filters.category === category && (
                              <Check size={16} />
                            )}
                          </div>
                          <span>{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.onlyAvailable}
                        onChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            onlyAvailable: !prev.onlyAvailable,
                          }))
                        }
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
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-2 px-4 py-2.5 border border-border rounded-md hover:bg-secondary/50 transition-colors"
                onClick={() => setShowSortMenu(!showSortMenu)}
              >
                <span>Ordenar</span>
                <ChevronDown size={18} />
              </button>

              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-background glass-panel shadow-lg rounded-md py-2 z-20">
                  <div
                    className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                    onClick={() => updateSort("name-asc")}
                  >
                    <span>Nome (A-Z)</span>
                    {sort === "name-asc" && <Check size={16} />}
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                    onClick={() => updateSort("name-desc")}
                  >
                    <span>Nome (Z-A)</span>
                    {sort === "name-desc" && <Check size={16} />}
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                    onClick={() => updateSort("price-asc")}
                  >
                    <span>Menor preço</span>
                    {sort === "price-asc" && <Check size={16} />}
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-secondary/50 cursor-pointer flex items-center justify-between"
                    onClick={() => updateSort("price-desc")}
                  >
                    <span>Maior preço</span>
                    {sort === "price-desc" && <Check size={16} />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(filters.category ||
          filters.material ||
          filters.minPrice ||
          filters.maxPrice ||
          filters.searchQuery ||
          filters.onlyAvailable) && (
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-sm text-muted-foreground">
              Filtros ativos:
            </span>

            {filters.category && (
              <div className="flex items-center bg-secondary text-foreground text-sm px-2 py-1 rounded-md">
                <span className="mr-1">Categoria: {filters.category}</span>
                <button
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, category: undefined }))
                  }
                  className="ml-1 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {filters.material && (
              <div className="flex items-center bg-secondary text-foreground text-sm px-2 py-1 rounded-md">
                <span className="mr-1">Material: {filters.material}</span>
                <button
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, material: undefined }))
                  }
                  className="ml-1 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {(filters.minPrice !== undefined ||
              filters.maxPrice !== undefined) && (
              <div className="flex items-center bg-secondary text-foreground text-sm px-2 py-1 rounded-md">
                <span className="mr-1">
                  Preço:
                  {filters.minPrice === undefined
                    ? " Até "
                    : filters.maxPrice === undefined
                    ? " Acima de "
                    : " Entre "}
                  {filters.minPrice !== undefined && `R$ ${filters.minPrice}`}
                  {filters.minPrice !== undefined &&
                    filters.maxPrice !== undefined &&
                    " e "}
                  {filters.maxPrice !== undefined && `R$ ${filters.maxPrice}`}
                </span>
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: undefined,
                      maxPrice: undefined,
                    }))
                  }
                  className="ml-1 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {filters.searchQuery && (
              <div className="flex items-center bg-secondary text-foreground text-sm px-2 py-1 rounded-md">
                <span className="mr-1">Busca: "{filters.searchQuery}"</span>
                <button
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, searchQuery: undefined }));
                    setSearchQuery("");
                  }}
                  className="ml-1 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {filters.onlyAvailable && (
              <div className="flex items-center bg-secondary text-foreground text-sm px-2 py-1 rounded-md">
                <span className="mr-1">Apenas disponíveis</span>
                <button
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, onlyAvailable: false }))
                  }
                  className="ml-1 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <button
              onClick={clearFilters}
              className="text-xs text-primary hover:text-primary/80 underline underline-offset-2"
            >
              Limpar todos
            </button>
          </div>
        )}
      </div>

      {/* Results summary */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-medium">
          {filters.category ? filters.category : "Todos os Produtos"}
          {filters.material && (
            <span className="font-normal"> • {filters.material}</span>
          )}
        </h2>
        <p className="text-muted-foreground">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "produto" : "produtos"} encontrados
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-xl font-medium mb-2">
            Nenhum produto encontrado
          </h3>
          <p className="text-muted-foreground">
            Tente ajustar seus filtros ou busque por outros termos.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
            {filteredProducts
              .slice(
                0,
                window.innerWidth < 640
                  ? displayedItems + 2
                  : filteredProducts.length
              )
              .map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    window.innerWidth < 640 &&
                      index >= displayedItems &&
                      "opacity-20"
                  )}
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
          </div>

          {window.innerWidth < 640 &&
            filteredProducts.length > displayedItems && (
              <div className="relative mt-[-120px] h-[160px] flex items-start justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent" />
                <button
                  onClick={() =>
                    setDisplayedItems((prev) => prev + MOBILE_ITEMS_PER_PAGE)
                  }
                  className="relative z-10 px-6 py-3 mt-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                >
                  Ver mais {filteredProducts.length - displayedItems} produtos
                </button>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
