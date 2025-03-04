
import { Product } from "../types/product";
import { generateWhatsAppLink } from "../utils/whatsapp";

// Products based on the spreadsheet data
export const products: Product[] = [
  {
    id: "1",
    name: "Cama Box Casal Anjos",
    description: "Cama box casal da marca Anjos. Adquirida em 2022, em ótimo estado de conservação. Possui molas ensacadas e é muito confortável. Acompanha base e colchão.",
    salePrice: 1200.00,
    referencePrice: 2200.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Quarto",
    available: true,
    specifications: {
      "Marca": "Anjos",
      "Dimensões": "138 x 188 cm",
      "Ano de compra": "2022",
      "Estado": "Seminovo",
      "Tipo": "Molas ensacadas"
    }
  },
  {
    id: "2",
    name: "Cômoda de Madeira",
    description: "Cômoda em madeira maciça com 5 gavetas. Perfeita para armazenar roupas e outros itens. Design clássico que combina com qualquer decoração.",
    salePrice: 550.00,
    referencePrice: 1200.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1365&auto=format&fit=crop"
    ],
    category: "Quarto",
    available: true,
    specifications: {
      "Material": "Madeira maciça",
      "Dimensões": "120 x 50 x 80 cm",
      "Cor": "Marrom escuro",
      "Gavetas": "5"
    }
  },
  {
    id: "3",
    name: "Sofá 3 Lugares",
    description: "Sofá confortável de 3 lugares em tecido suede cinza. Ideal para sala de estar, possui almofadas removíveis e estrutura resistente.",
    salePrice: 800.00,
    referencePrice: 1800.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1365&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: true,
    specifications: {
      "Material": "Suede",
      "Dimensões": "220 x 90 x 85 cm",
      "Cor": "Cinza",
      "Lugares": "3",
      "Estrutura": "Madeira e espuma D-33"
    }
  },
  {
    id: "4",
    name: "Mesa de Jantar com 4 Cadeiras",
    description: "Conjunto de mesa de jantar com 4 cadeiras em madeira de demolição. Mesa robusta e cadeiras confortáveis, ideais para refeições em família.",
    salePrice: 900.00,
    referencePrice: 1800.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Material": "Madeira de demolição",
      "Dimensões da mesa": "120 x 80 x 75 cm",
      "Cadeiras": "4 unidades",
      "Acabamento": "Verniz natural"
    }
  },
  {
    id: "5",
    name: "Geladeira Frost Free Brastemp",
    description: "Geladeira Frost Free Brastemp 375 litros, cor inox, com freezer. Em perfeito estado de funcionamento, sem arranhões ou amassados.",
    salePrice: 1500.00,
    referencePrice: 3000.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Brastemp",
      "Modelo": "Frost Free",
      "Capacidade": "375 litros",
      "Cor": "Inox",
      "Voltagem": "220V",
      "Ano": "2020"
    }
  },
  {
    id: "6",
    name: "Fogão 5 Bocas Electrolux",
    description: "Fogão 5 bocas Electrolux, acendimento automático, forno de alta performance. Possui mesa de vidro temperado e queimadores de alta eficiência.",
    salePrice: 850.00,
    referencePrice: 1500.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590794086780-741be771269a?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Electrolux",
      "Bocas": "5",
      "Tipo": "Mesa de vidro",
      "Acendimento": "Automático",
      "Voltagem": "220V"
    }
  },
  {
    id: "7",
    name: "TV Smart Samsung 50 polegadas",
    description: "Smart TV Samsung 50 polegadas LED 4K, com controle remoto, wifi e Bluetooth. Perfeita para assistir filmes e séries com alta qualidade de imagem.",
    salePrice: 1800.00,
    referencePrice: 2800.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601944179066-29b8f7e29c3d?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrônicos",
    available: true,
    specifications: {
      "Marca": "Samsung",
      "Tamanho": "50 polegadas",
      "Resolução": "4K",
      "Tipo": "LED",
      "Conexões": "HDMI, USB, Wifi, Bluetooth",
      "Ano": "2021"
    }
  },
  {
    id: "8",
    name: "Máquina de Lavar Brastemp 12kg",
    description: "Máquina de lavar Brastemp 12kg, com diversas funções de lavagem e centrifugação. Produto em ótimo estado e funcionando perfeitamente.",
    salePrice: 1200.00,
    referencePrice: 2500.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Brastemp",
      "Capacidade": "12kg",
      "Tipo": "Automática",
      "Funções": "Múltiplos ciclos de lavagem",
      "Voltagem": "220V",
      "Ano": "2019"
    }
  },
  {
    id: "9",
    name: "Micro-ondas Panasonic 32L",
    description: "Micro-ondas Panasonic 32 litros, com grill e diversas funções pré-programadas. Produto em ótimo estado e funcionando perfeitamente.",
    salePrice: 400.00,
    referencePrice: 900.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1585659722983-3a531b1218d2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?q=80&w=1469&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Panasonic",
      "Capacidade": "32 litros",
      "Funções": "Grill, Descongelar, Pré-programadas",
      "Potência": "900W",
      "Voltagem": "220V"
    }
  },
  {
    id: "10",
    name: "Notebook Dell Inspiron",
    description: "Notebook Dell Inspiron, processador Intel Core i5, 8GB RAM, 256GB SSD. Ideal para trabalho e estudo, com bateria em bom estado.",
    salePrice: 2200.00,
    referencePrice: 3500.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1632&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrônicos",
    available: true,
    specifications: {
      "Marca": "Dell",
      "Modelo": "Inspiron",
      "Processador": "Intel Core i5",
      "Memória": "8GB RAM",
      "Armazenamento": "256GB SSD",
      "Sistema": "Windows 10",
      "Ano": "2021"
    }
  }
];

// Add WhatsApp links to all products
products.forEach(product => {
  product.whatsappLink = generateWhatsAppLink(product.name);
});
