
import { Product } from "../types/product";
import { generateWhatsAppLink } from "../utils/whatsapp";

// This would be replaced with data from your CSV/Excel import
export const products: Product[] = [
  {
    id: "1",
    name: "Sofá Modular de Veludo",
    description: "Sofá modular em veludo premium, perfeito para salas de estar espaçosas. Com design contemporâneo, este sofá oferece máximo conforto e elegância. Os módulos podem ser reorganizados conforme a necessidade.",
    salePrice: 3999.90,
    referencePrice: 5999.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1365&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: true,
    specifications: {
      "Material": "Veludo e Madeira",
      "Dimensões": "320 x 190 x 85 cm",
      "Cor": "Azul Petróleo",
      "Garantia": "3 anos"
    }
  },
  {
    id: "2",
    name: "Mesa de Jantar em Carvalho",
    description: "Mesa de jantar em madeira maciça de carvalho com acabamento natural. Design escandinavo com linhas limpas e atemporais. Perfeita para reunir família e amigos em refeições especiais.",
    salePrice: 2499.90,
    referencePrice: 3299.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Material": "Carvalho Maciço",
      "Dimensões": "200 x 100 x 76 cm",
      "Acabamento": "Óleo Natural",
      "Garantia": "5 anos"
    }
  },
  {
    id: "3",
    name: "Poltrona Lounge de Couro",
    description: "Poltrona lounge em couro legítimo com estrutura de madeira de nogueira. Inspirada em designs clássicos modernistas, esta peça traz conforto e elegância para qualquer ambiente.",
    salePrice: 1799.90,
    referencePrice: 2599.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: false,
    specifications: {
      "Material": "Couro Legítimo e Madeira de Nogueira",
      "Dimensões": "85 x 90 x 100 cm",
      "Cor": "Caramelo",
      "Garantia": "2 anos"
    }
  },
  {
    id: "4",
    name: "Cama King Size com Cabeceira Estofada",
    description: "Cama king size com cabeceira estofada em linho premium. Design minimalista com detalhes elegantes. Estrutura robusta em madeira maciça para máxima durabilidade.",
    salePrice: 4299.90,
    referencePrice: 5499.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Quarto",
    available: true,
    specifications: {
      "Material": "Madeira Maciça e Linho",
      "Dimensões": "193 x 203 x 120 cm",
      "Cor": "Bege",
      "Garantia": "10 anos na estrutura"
    }
  },
  {
    id: "5",
    name: "Geladeira Side by Side",
    description: "Geladeira side by side com dispensador de água e gelo. Tecnologia inverter para economia de energia e funcionamento silencioso. Interior espaçoso com iluminação LED.",
    salePrice: 7999.90,
    referencePrice: 9499.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Voltagem": "220V",
      "Capacidade": "540 litros",
      "Dimensões": "90 x 178 x 75 cm",
      "Cor": "Inox",
      "Eficiência Energética": "A++",
      "Garantia": "1 ano"
    }
  },
  {
    id: "6",
    name: "Luminária de Piso em Latão",
    description: "Luminária de piso articulada em latão com acabamento escovado. Peça elegante que proporciona iluminação direta e focada. Ideal para salas de estar e escritórios.",
    salePrice: 899.90,
    referencePrice: 1299.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "Iluminação",
    available: true,
    specifications: {
      "Material": "Latão Escovado",
      "Altura": "160 cm",
      "Diâmetro da Base": "25 cm",
      "Tipo de Lâmpada": "E27, max 60W",
      "Cor": "Dourado",
      "Garantia": "1 ano"
    }
  },
  {
    id: "7",
    name: "Tapete Persa Artesanal",
    description: "Tapete persa artesanal feito à mão com lã de alta qualidade. Padrões tradicionais em tons neutros que combinam com diversos estilos de decoração. Peça exclusiva que traz personalidade ao ambiente.",
    salePrice: 2199.90,
    referencePrice: 3199.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571115637755-d7521a52e3f9?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "Decoração",
    available: true,
    specifications: {
      "Material": "Lã Natural",
      "Dimensões": "300 x 200 cm",
      "Origem": "Irã",
      "Tipo": "Feito à mão"
    }
  },
  {
    id: "8",
    name: "Fogão Industrial 6 Bocas",
    description: "Fogão industrial profissional com 6 bocas e forno de alta potência. Ideal para cozinhas gourmet e uso intenso. Estrutura robusta em aço inoxidável de fácil limpeza.",
    salePrice: 3799.90,
    referencePrice: 4999.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590794086780-741be771269a?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: false,
    specifications: {
      "Material": "Aço Inoxidável",
      "Dimensões": "150 x 80 x 85 cm",
      "Voltagem": "220V",
      "Potência": "12.000W",
      "Tipo de Gás": "GLP/GN",
      "Garantia": "1 ano"
    }
  }
];

// Add WhatsApp links to all products
products.forEach(product => {
  product.whatsappLink = generateWhatsAppLink(product.name);
});
