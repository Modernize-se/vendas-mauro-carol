export interface Product {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  reference: {
    price: number;
    link: string;
    storeName?: string;
  };
  imageUrls: string[];
  category: string;
  availability: "sold" | "reserved" | "available";
  specifications?: Record<string, string>;
  ownerComments?: string;
  whatsAppLink?: string;
}

export type ProductFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  onlyAvailable?: boolean;
  searchQuery?: string;
};

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";
