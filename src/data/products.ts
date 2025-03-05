
import { Product } from "../types/product";
import { generateWhatsAppLink } from "../utils/whatsapp";

// Products based on the spreadsheet data
export const products: Product[] = [
  {
    id: "1",
    name: "Maquina Lava e Seca",
    description: "LavSec Samsumg WD11T 11KG IX1. Em perfeito estado de funcionamento, comprada recentemente. Ideal para otimizar espaço e tempo na rotina de lavagem.",
    salePrice: 3500.00,
    referencePrice: 5084.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Samsung",
      "Modelo": "WD11T 11KG IX1",
      "Capacidade": "11kg",
      "Tipo": "Lava e Seca",
      "Voltagem": "110V",
      "Estado": "Seminovo"
    }
  },
  {
    id: "2",
    name: "Purificador de Água Electrolux",
    description: "Purificador Electrolux Eletrônico Experience com Pure 4x e Painel Digital Bivolt Cinza PE12G. Água pura e saborosa a qualquer momento, fácil instalação.",
    salePrice: 800.00,
    referencePrice: 1200.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1590794086780-741be771269a?q=80&w=1587&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635525877634-0ba1cc3b3b36?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Electrolux",
      "Modelo": "PE12G Experience",
      "Cor": "Cinza",
      "Voltagem": "Bivolt",
      "Tecnologia": "Pure 4x",
      "Estado": "Seminovo"
    }
  },
  {
    id: "3",
    name: "Cafeteira Oster Flavor",
    description: "Cafeteira Oster Flavor Inox Programável - 127V. Prepare cafés deliciosos com programação de horário. Design elegante que combina com qualquer cozinha.",
    salePrice: 200.00,
    referencePrice: 328.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1585569695919-db237e7cc455?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626458938063-fff8c4fbc6d1?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Oster",
      "Modelo": "Flavor",
      "Material": "Inox",
      "Programável": "Sim",
      "Voltagem": "127V",
      "Estado": "Seminovo"
    }
  },
  {
    id: "4",
    name: "Micro-ondas 30L",
    description: "Forno de Micro-ondas Solo 30L PRETO 127V. Descongelamento rápido e aquecimento eficiente. Painel digital de fácil utilização.",
    salePrice: 600.00,
    referencePrice: 900.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1585659722983-3a531b1218d2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?q=80&w=1469&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "LG",
      "Capacidade": "30 litros",
      "Cor": "Preto",
      "Voltagem": "127V",
      "Tipo": "Solo",
      "Estado": "Seminovo"
    }
  },
  {
    id: "5",
    name: "Sofá Suede Veludo",
    description: "Sofá cinza suede veludo 2.70m - 2 módulos 1.20m e 2 braços 15cm. Confortável e elegante, ideal para sala de estar. Tecido de alta qualidade e estrutura resistente.",
    salePrice: 5000.00,
    referencePrice: 7500.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1365&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: true,
    specifications: {
      "Material": "Suede Veludo",
      "Dimensões": "2.70m comprimento",
      "Cor": "Cinza",
      "Estrutura": "Módulos com 2 braços",
      "Estado": "Seminovo"
    }
  },
  {
    id: "6",
    name: "Mesa de Jantar Acapulco",
    description: "Mesa de Jantar Acapulco 180x90 Off White com pés Natural. Elegante e espaçosa, perfeita para refeições em família ou receber amigos.",
    salePrice: 1200.00,
    referencePrice: 2000.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Material": "MDF/Madeira",
      "Dimensões": "180x90cm",
      "Cor": "Off White/Natural",
      "Estilo": "Moderno",
      "Estado": "Seminovo"
    }
  },
  {
    id: "7",
    name: "Conjunto 6 Cadeiras",
    description: "Conjunto 6 cadeiras estofadas linho cinza - pés de madeira cor natural. Combinam perfeitamente com a mesa de jantar, proporcionando conforto durante as refeições.",
    salePrice: 1500.00,
    referencePrice: 2200.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Material": "Madeira e linho",
      "Quantidade": "6 unidades",
      "Cor": "Cinza claro/Natural",
      "Estofamento": "Linho",
      "Estado": "Seminovo"
    }
  },
  {
    id: "8",
    name: "Buffet Lizz",
    description: "Buffet Lizz 1.90 Off White/Cedro. Móvel versátil para armazenamento e decoração, com acabamento refinado e portas que facilitam a organização dos itens.",
    salePrice: 500.00,
    referencePrice: 779.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1386&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Material": "MDF",
      "Dimensões": "1.90m largura",
      "Cor": "Off White/Cedro",
      "Portas": "4",
      "Estado": "Seminovo"
    }
  },
  {
    id: "9",
    name: "Rack com Painel para TV",
    description: "Rack com Painel para TV até 75 polegadas com LED Sublime 220cm Gelius Movies Off White/Natural. Unidade de entretenimento completa com iluminação LED.",
    salePrice: 800.00,
    referencePrice: 1261.29,
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574691250077-03a929faece5?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: true,
    specifications: {
      "Material": "100% MDF",
      "Dimensões": "220cm largura",
      "Cor": "Off White/Natural",
      "Suporta TV até": "75 polegadas",
      "Iluminação": "LED integrado",
      "Estado": "Seminovo"
    }
  },
  {
    id: "10",
    name: "Mesa de Escritório Kuandra",
    description: "Mesa de Escritório Kuandra Carvalho - A 75cm x L 180cm x P 70cm. Espaçosa e elegante, perfeita para home office ou estudo.",
    salePrice: 300.00,
    referencePrice: 460.92,
    imageUrls: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1632&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Escritório",
    available: true,
    specifications: {
      "Material": "MDF/Madeira",
      "Dimensões": "A 75cm x L 180cm x P 70cm",
      "Cor": "Carvalho/Preto",
      "Estilo": "Moderno",
      "Estado": "Seminovo"
    }
  },
  {
    id: "11",
    name: "Mesa de Escritório Studio",
    description: "Mesa de Escritório Studio Carvalho A 75cm x L 150cm X P 50cm. Design funcional e minimalista, ideal para espaços menores.",
    salePrice: 150.00,
    referencePrice: 257.46,
    imageUrls: [
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1365&auto=format&fit=crop"
    ],
    category: "Escritório",
    available: true,
    specifications: {
      "Material": "MDF/Madeira",
      "Dimensões": "A 75cm x L 150cm X P 50cm",
      "Cor": "Carvalho",
      "Estilo": "Minimalista",
      "Estado": "Seminovo"
    }
  },
  {
    id: "12",
    name: "Cadeira Escritório Diretor",
    description: "Cadeira Escritório Diretor Ergonômica NR17 Tela Mesh Tóquio 3329 Preto. Conforto superior para longas horas de trabalho, com ajustes de altura e reclinação.",
    salePrice: 400.00,
    referencePrice: 642.51,
    imageUrls: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1469&auto=format&fit=crop"
    ],
    category: "Escritório",
    available: true,
    specifications: {
      "Tipo": "Diretor Ergonômica",
      "Material": "Tela Mesh",
      "Cor": "Preto",
      "Certificação": "NR17",
      "Modelo": "Tóquio 3329",
      "Estado": "Seminovo"
    }
  },
  {
    id: "13",
    name: "Monitor Dell P2210T",
    description: "Monitor Dell P2210T (22\") + Cabo Display Port. Excelente para trabalho e estudo, com boa resolução e qualidade de imagem.",
    salePrice: 400.00,
    referencePrice: 600.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527443060795-0402a18106c2?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrônicos",
    available: true,
    specifications: {
      "Marca": "Dell",
      "Modelo": "P2210T",
      "Tamanho": "22 polegadas",
      "Conexões": "Display Port incluído",
      "Estado": "Usado, bom estado"
    }
  },
  {
    id: "14",
    name: "Puff Banqueta Redondo",
    description: "Puff Banqueta Redondo Luxo - Tecido Cinza Noturno. Versátil, pode ser usado como assento extra ou mesa de apoio. Design elegante que combina com qualquer ambiente.",
    salePrice: 150.00,
    referencePrice: 269.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1516&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Sala de Estar",
    available: true,
    specifications: {
      "Material": "Tecido",
      "Cor": "Cinza Noturno",
      "Estilo": "Redondo Luxo",
      "Multifuncional": "Banqueta/Mesinha",
      "Estado": "Seminovo"
    }
  },
  {
    id: "15",
    name: "Cama Box Baú Queen",
    description: "Cama Box Baú Bipartido Queen Star Flex Blindado Pistão Linha Hotel 30cm Prof. Interna E Externa 48cm já com pés de 6cm cor Cinza escuro tecido nylon grosso imita linho. Espaçosa e funcional com amplo espaço para armazenamento.",
    salePrice: 1000.00,
    referencePrice: 1470.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Quarto",
    available: true,
    specifications: {
      "Marca": "Star Flex",
      "Tipo": "Box Baú Bipartido",
      "Dimensões": "Queen",
      "Cor": "Cinza escuro",
      "Material": "Nylon grosso (imita linho)",
      "Altura": "48cm com pés",
      "Estado": "Seminovo"
    }
  },
  {
    id: "16",
    name: "Colchão Stearns Foster",
    description: "Colchão Estate Firm Cross System 28cm - Stearns Foster 1.58x1.98 M. Conforto excepcional com sistema de molas ensacadas para melhor suporte.",
    salePrice: 1800.00,
    referencePrice: 2790.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Quarto",
    available: true,
    specifications: {
      "Marca": "Stearns Foster",
      "Modelo": "Estate Firm Cross System",
      "Dimensões": "1.58x1.98 M",
      "Altura": "28cm",
      "Tipo": "Molas ensacadas",
      "Estado": "Seminovo"
    }
  },
  {
    id: "17",
    name: "Smart TV Samsung 55\"",
    description: "Smart TV Samsumg 55\" UHD 55AU7700 4K Processador Crystal Wi-Fi Tizen Comando de Voz. Imagem cristalina e recursos inteligentes para sua sala.",
    salePrice: 1800.00,
    referencePrice: 2553.28,
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601944179066-29b8f7e29c3d?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrônicos",
    available: true,
    specifications: {
      "Marca": "Samsung",
      "Modelo": "55AU7700",
      "Tamanho": "55 polegadas",
      "Resolução": "4K UHD",
      "Processador": "Crystal",
      "Recursos": "Wi-Fi, Comando de Voz",
      "Estado": "Seminovo"
    }
  },
  {
    id: "18",
    name: "TV LED TCL 32\"",
    description: "TV 32\" Led HD 32S615 HDR/WIFI. Ideal para quartos ou ambientes menores, com boa qualidade de imagem e recursos de Smart TV.",
    salePrice: 800.00,
    referencePrice: 1199.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=1462&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "Eletrônicos",
    available: true,
    specifications: {
      "Marca": "TCL",
      "Modelo": "32S615",
      "Tamanho": "32 polegadas",
      "Resolução": "HD",
      "Recursos": "HDR, WIFI, Android",
      "Estado": "Seminovo"
    }
  },
  {
    id: "19",
    name: "Kit Banheiro Acrílico Branco",
    description: "Kit de banheiro acrílico com 6 peças lançamento + BANHO E DECOR - Branco Perolado + Lixo. Conjunto completo para organização e decoração do seu banheiro.",
    salePrice: 200.00,
    referencePrice: 330.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Banheiro",
    available: true,
    specifications: {
      "Material": "Acrílico",
      "Cor": "Branco Perolado",
      "Peças": "6 + Lixeira",
      "Estilo": "Moderno",
      "Estado": "Novo"
    }
  },
  {
    id: "20",
    name: "Kit Lavabo Luxo Vidro Preto",
    description: "KIT LAVABO BANHEIRO LUXO VIDRO 5 + Lixo PECAS Cor: PRETO PRETO. Elegante conjunto que traz sofisticação ao seu banheiro com acabamento premium.",
    salePrice: 300.00,
    referencePrice: 450.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Banheiro",
    available: true,
    specifications: {
      "Material": "Vidro",
      "Cor": "Preto",
      "Peças": "5 + Lixeira",
      "Estilo": "Luxo",
      "Estado": "Seminovo"
    }
  },
  {
    id: "21",
    name: "Kit Banheiro Bambu",
    description: "Kit de Bancada para Banheiro Cerâmica Madeira de Bamboo Clara Fudji Sensea 3 peças + Lixo. Une funcionalidade e estética natural ao seu banheiro.",
    salePrice: 250.00,
    referencePrice: 400.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Banheiro",
    available: true,
    specifications: {
      "Material": "Cerâmica e Bamboo",
      "Cor": "Madeira Clara",
      "Modelo": "Fudji Sensea",
      "Peças": "3 + Lixeira",
      "Estado": "Seminovo"
    }
  },
  {
    id: "22",
    name: "Varal de Chão Retrátil",
    description: "Varal de Chão Com Abas Retrátil Slim Preto. Prático e dobrável, economiza espaço quando não está em uso. Ideal para apartamentos.",
    salePrice: 60.00,
    referencePrice: 100.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1574706472779-8006b1c8622f?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Lavanderia",
    available: true,
    specifications: {
      "Tipo": "Chão com Abas",
      "Material": "Metal",
      "Cor": "Preto",
      "Característica": "Retrátil, Slim",
      "Estado": "Seminovo"
    }
  },
  {
    id: "23",
    name: "Varal Mágico de Parede",
    description: "Varal Mágico 74cm com 4 varetas - alumínio - Branco. Solução compacta para secar roupas, pode ser recolhido quando não está em uso.",
    salePrice: 150.00,
    referencePrice: 229.90,
    imageUrls: [
      "https://images.unsplash.com/photo-1574706472779-8006b1c8622f?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Lavanderia",
    available: true,
    specifications: {
      "Tipo": "Mágico de Parede",
      "Material": "Alumínio",
      "Dimensão": "74cm com 4 varetas",
      "Cor": "Branco",
      "Estado": "Seminovo"
    }
  },
  {
    id: "24",
    name: "Aspirador Robô Multilaser",
    description: "Aspirador De Pó Robô Com Sensor Multilaser - Vermelho. Autonomia na limpeza diária, com sensores que evitam obstáculos e quedas.",
    salePrice: 300.00,
    referencePrice: 450.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1584792236017-75c58f8dc247?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?q=80&w=1386&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Multilaser",
      "Tipo": "Aspirador Robô",
      "Cor": "Vermelho",
      "Recursos": "Sensores anti-queda",
      "Estado": "Seminovo"
    }
  },
  {
    id: "25",
    name: "Aspirador Vertical WAP",
    description: "Aspirador de Pó e Água Vertical Sem Fio WAP Acqua Mob 2 em 1. Versatilidade para limpar diferentes superfícies, com bateria recarregável para maior liberdade de movimento.",
    salePrice: 250.00,
    referencePrice: 350.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527515673510-8e07b824a6c8?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "WAP",
      "Modelo": "Acqua Mob",
      "Tipo": "Vertical Sem Fio",
      "Funcionalidade": "Pó e Água 2 em 1",
      "Estado": "Seminovo"
    }
  },
  {
    id: "26",
    name: "Banqueta Giratória Milano",
    description: "Banqueta Giratória Milano Cinza. Design contemporâneo, ideal para bancadas de cozinha ou ilhas. Possui altura ajustável e base resistente.",
    salePrice: 250.00,
    referencePrice: 395.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1588866343700-2132ebe13ff6?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Sala de Jantar",
    available: true,
    specifications: {
      "Modelo": "Milano",
      "Cor": "Cinza",
      "Tipo": "Giratória",
      "Material": "Metal e estofado",
      "Estado": "Seminovo"
    }
  },
  {
    id: "27",
    name: "Blender Oster Myblend",
    description: "Blender Oster Myblend, 2 Jarras, Preto 110V, 250W, BLSTPB-BBL. Perfeito para preparar shakes de proteína e sucos. Compacto e portátil.",
    salePrice: 150.00,
    referencePrice: 250.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1505&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=1480&auto=format&fit=crop"
    ],
    category: "Eletrodomésticos",
    available: true,
    specifications: {
      "Marca": "Oster",
      "Modelo": "Myblend",
      "Potência": "250W",
      "Voltagem": "110V",
      "Acessórios": "2 Jarras",
      "Cor": "Preto",
      "Estado": "Seminovo"
    }
  },
  {
    id: "28",
    name: "Piano Digital Casio",
    description: "Piano Digital Stage CDP-S110 BK com Suporte para Piano Digital. Som de alta qualidade e teclado com resposta ao toque similar a um piano acústico.",
    salePrice: 2200.00,
    referencePrice: 3290.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1568219656418-15c329312bf1?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "Instrumentos Musicais",
    available: true,
    specifications: {
      "Marca": "Casio",
      "Modelo": "CDP-S110 BK",
      "Tipo": "Piano Digital",
      "Cor": "Preto",
      "Acessórios": "Suporte incluso",
      "Estado": "Seminovo"
    }
  },
  {
    id: "29",
    name: "Kit Organizadores de Geladeira",
    description: "Kit 6 Organizadores de geladeira 2,2L e um porta frios. Cor Transparente/branco. Otimize o espaço da sua geladeira e mantenha tudo organizado e de fácil acesso.",
    salePrice: 180.00,
    referencePrice: 300.00,
    imageUrls: [
      "https://images.unsplash.com/photo-1590794056486-72e61d222eeb?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1587&auto=format&fit=crop"
    ],
    category: "Organização",
    available: true,
    specifications: {
      "Material": "Plástico",
      "Cor": "Transparente/Branco",
      "Quantidade": "6 organizadores + 1 porta frios",
      "Capacidade": "2,2L cada",
      "Estado": "Seminovo"
    }
  }
];

// Add WhatsApp links to all products
products.forEach(product => {
  product.whatsappLink = generateWhatsAppLink(product.name);
});

