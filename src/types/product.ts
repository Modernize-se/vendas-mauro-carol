
export interface Product {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  referencePrice: number;
  imageUrls: string[];
  category: string;
  available: boolean;
  specifications?: Record<string, string>;
  whatsappLink?: string;
}

export type ProductFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  onlyAvailable?: boolean;
  searchQuery?: string;
};

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";
