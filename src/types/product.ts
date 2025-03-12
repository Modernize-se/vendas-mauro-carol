export interface Testimonial {
  ownerComment: string;
  username: "Mauro" | "Carol";
}

export interface Product {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  references: {
    price: number;
    link: string;
    storeName?: string;
  }[];
  imageUrls: string[];
  category:
    | "Eletrodomésticos"
    | "Móveis"
    | "Eletrônicos"
    | "Utilidades Domésticas"
    | "Instrumentos Musicais";
  availability: "sold" | "reserved" | "available";
  specifications?: Record<string, string>;
  testimonials?: Testimonial[];
  whatsAppLink?: string;
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
