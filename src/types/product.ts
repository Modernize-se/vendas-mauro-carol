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
  whatsAppLink?: string;
  material?: string; // Added material property
}

export type ProductFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  onlyAvailable?: boolean;
  searchQuery?: string;
  material?: string; // Added material filter
};

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";
