import { Product } from "../types/product";
import { generateWhatsAppLink } from "../utils/whatsapp";

// Products based on the spreadsheet data
export const products: Product[] = [
  {
    id: "lava-seca-samsung-11kg-wd11t504dbx",
    name: "Lava e Seca Samsung 11 Kg SmartThings Inox Look WD11T504DBX",
    description:
      "Lava e seca Samsung de 11 Kg, acabamento inox look, conectividade SmartThings com 12 programas de lavagem.",
    salePrice: 3000,
    references: [
      {
        price: 3989,
        link: "https://site.fastshop.com.br/lava---seca-11-kg-samsung-smartthings-inox-look-com-12-programas-de-lavagem---wd11t504dbx-sgwd11ti_prd/p",
        storeName: "Fast Shop",
      },
    ],
    imageUrls: [
      "https://fastshopbr.vtexassets.com/arquivos/ids/245848/0-SGWD11TI-PRD-1500-1.jpg?v=638703083866600000",
      "https://i.postimg.cc/fyMCcfRH/IMG-3944.jpg",
      "https://fastshopbr.vtexassets.com/arquivos/ids/245849/1-SGWD11TI-PRD-1500-2.jpg?v=638703083866600000",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Cor: "Inox Look",
      Capacidade: "11 kg",
      Voltagem: "127V",
      Potência: "1050W (lavagem), 1900W (secagem)",
      Dimensões: "AxLxP: 85 x 60 x 65 cm",
      Tecnologia: "SmartThings (Wi-Fi)",
      "Programas de Lavagem": "12 programas",
    },
    ownerComments:
      "Esta máquina é excelente. O aplicativo do Samsung Smart Things ajuda a controlar o setup de lavagem de qualquer tipo de roupa. As lavagens são rápidas e o aplicativo ajuda em tudo.",
  },
  {
    id: "pe12g-electrolux",
    name: "Purificador de Água Electrolux PE12G Bivolt",
    description:
      "Purificador de água Electrolux modelo PE12G, super compacto, tecnologia Peltier (super silencioso pois é sem compressor), água natural, fria e gelada, bivolt.",
    salePrice: 500,
    references: [
      {
        price: 649,
        link: "https://loja.electrolux.com.br/pe12g-pe12g-purif-agua-pelt-bivolt/p?idsku=2005159",
        storeName: "Electrolux",
      },
    ],
    imageUrls: [
      "https://electrolux.vtexassets.com/arquivos/ids/267946-1600-auto?v=638751551991800000&width=1600&height=auto&aspect=true",
      "https://i.postimg.cc/T1kVr8Sw/IMG-3935.jpg",
      "https://electrolux.vtexassets.com/arquivos/ids/267945-1200-auto?v=638751551991800000&width=1200&height=auto&aspect=true",
      "https://electrolux.vtexassets.com/arquivos/ids/267948-1200-auto?v=638751551991930000&width=1200&height=auto&aspect=true",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Cor: "Cinza",
      Voltagem: "Bivolt",
      Potência: "70W",
      Dimensões: "AxLxP: 35 x 42 x 16 cm",
      "Capacidade do Reservatório": "0,8 litros",
      "Temperatura da Água": "Natural, Fria e Gelada",
      Tecnologia: "Peltier (sem compressor)",
    },
    ownerComments:
      "Este filtro é excelente. Silencioso, compacto e a água gelada é realmente gelada. Também é bom que a água sai bem forte, então dá pra encher uma garrafa em poucos segundos.",
  },
  {
    id: "cafeteira-oster-flavor-vermelha",
    name: "Cafeteira Oster Flavor Vermelha Programável",
    description:
      "Cafeteira Oster Flavor programável, cor vermelha, com timer digital e jarra de vidro resistente. Capacidade para até 36 xícaras pequenas (1,8L).",
    salePrice: 200,
    references: [
      {
        price: 299,
        link: "https://www.oster.com.br/cafeteira-oster-flavor-vermelha-programavel/p?idsku=492",
        storeName: "Oster",
      },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/51DwxmJm1IL._AC_SL1000_.jpg",
      "https://i.postimg.cc/pTfk56Rh/IMG-3946.jpg",
      "https://osterbrasil.vteximg.com.br/arquivos/BVSTDC4401-11.jpg?v=636457333571500000",
      "https://m.media-amazon.com/images/I/51-UxSIhoAL._AC_SL1000_.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Cor: "Vermelha",
      Potência: "900W",
      Voltagem: "110V",
      Capacidade: "12 xícaras (jarra de 1,5L)",
      "Material da Jarra": "Vidro",
      Programável: "Sim",
      Dimensões: "Altura 32cm x Largura 20cm x Profundidade 25cm",
      "Filtro Permanente": "Sim",
      "Display Digital": "Sim",
    },
    ownerComments:
      "Gostamos muito desta cafeteira porque dá pra programar pro café sair quentinho na hora que acordamos. E o café fica ótimo",
  },
  {
    id: "microondas-lg-solo-30l-preto",
    name: "Microondas LG Solo 30L Tecnologia I Wave Preto",
    description:
      "Microondas LG Solo com capacidade de 30 litros, tecnologia I Wave, cor preta, voltagem 127V. Possui 16 programas e descongelamento automático por peso.",
    salePrice: 750,
    references: [
      {
        price: 1199.9,
        link: "https://www.mercadolivre.com.br/microondas-lg-solo-30l-com-tecnologia-i-wave-preto-127v-110v/p",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_828341-MLU77160700466_072024-F.webp",
      "https://i.postimg.cc/kXXwDsZG/IMG-3939.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_2X_681847-MLU77373839427_072024-F.webp",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Cor: "Preto",
      Capacidade: "30 litros",
      Potência: "800W",
      Voltagem: "127V",
      Dimensões: "AxLxP: 29 x 50,8 x 40 cm",
      Funções:
        "16 programas, descongelamento automático, trava de segurança, display digital",
    },
    ownerComments:
      "Microondas muito bom, fácil de usar e espaçoso. Está em perfeito estado e esquenta rapidinho a comida.",
  },
  {
    id: "5",
    name: "Sofá cinza suede veludo 2.70m - 2 módulos 1.20m e 2 braços 15cm",
    description:
      "Sofá cinza de suede veludo com 2.70m de largura, composto por 2 módulos de 1.20m e 2 braços de 15cm.",
    salePrice: 7500.0,
    references: [
      {
        price: 7500.0,
        link: "",
        storeName: "",
      },
    ],
    imageUrls: ["url_to_image1.jpg", "url_to_image2.jpg"],
    category: "Furniture",
    availability: "available",
    specifications: {
      Material: "Suede Veludo",
      Cor: "Cinza",
      Width: "2.70m",
      Modules: "2 x 1.20m",
      Armrest: "2 x 15cm",
    },
    ownerComments: "Comfortable and stylish, perfect for any living room.",
  },
  {
    id: "6",
    name: "Mesa de Jantar Acapulco 180x90 Off White com pés Natural",
    description:
      "Mesa de jantar modelo Acapulco com tampo de 180x90 cm na cor Off White e pés em madeira natural.",
    salePrice: 2000.0,
    references: [
      {
        price: 3000.0,
        link: "https://www.mobellomoveis.com.br/compra-exclusiva-adriana-mesa-natasha-com-tampo-fendi-personalizado",
        storeName: "Mobello Móveis",
      },
    ],
    imageUrls: [
      "https://www.mobellomoveis.com.br/compra-exclusiva-adriana-mesa-natasha-com-tampo-fendi-personalizado",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Dimensões: "180x90 cm",
      "Cor do Tampo": "Off White",
      "Material dos Pés": "Madeira Natural",
    },
    ownerComments: "Mesa em ótimo estado, sem arranhões ou marcas de uso.",
  },
  {
    id: "7",
    name: "Conjunto 6 cadeiras estofadas linho cinza - pés de madeira cor natural",
    description:
      "Conjunto de 6 cadeiras estofadas em linho cinza com pés de madeira na cor natural.",
    salePrice: 2000.0,
    references: [
      {
        price: 2200.0,
        link: "https://www.maislardecor.com.br/kit-com-6-cadeiras-daniela-madeira-macica-estofada-para-mesa-de-jantar-detalhe-de-madeira-nas-costas-linho-cinza-claro",
        storeName: "Mais Lar Decor",
      },
    ],
    imageUrls: [
      "https://www.maislardecor.com.br/kit-com-6-cadeiras-daniela-madeira-macica-estofada-para-mesa-de-jantar-detalhe-de-madeira-nas-costas-linho-cinza-claro",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Quantidade: "6 cadeiras",
      Estofado: "Linho Cinza",
      "Material dos Pés": "Madeira Maciça",
      "Cor dos Pés": "Natural",
    },
    ownerComments: "Cadeiras confortáveis e bem conservadas.",
  },
  {
    id: "8",
    name: "Buffet Lizz 1.90 Off White/Cedro",
    description:
      "Buffet Lizz com 1,90 m de comprimento nas cores Off White e Cedro.",
    salePrice: 779.9,
    references: [
      {
        price: 979.9,
        link: "https://www.mobly.com.br/buffet-lizz-4-pt-off-white-e-cedro-190-cm-1188355.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://www.mobly.com.br/buffet-lizz-4-pt-off-white-e-cedro-190-cm-1188355.html",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Comprimento: "1,90 m",
      Cor: "Off White/Cedro",
      "Número de Portas": "4",
      Material: "MDF",
    },
    ownerComments: "Buffet espaçoso e em excelente estado.",
  },
  {
    id: "9",
    name: "Rack com Painel para TV até 75 polegadas com LED Sublime 220cm Gelius Movies Off White/Natural",
    description:
      "Rack com painel para TV de até 75 polegadas, com iluminação LED, 220 cm de largura, modelo Gelius Movies nas cores Off White e Natural.",
    salePrice: 1261.29,
    references: [
      {
        price: 2261.29,
        link: "https://www.madeiramadeira.com.br/rack-com-painel-para-tv-ate-75-polegadas-com-led-sublime-220-100-mdf-730597.html",
        storeName: "MadeiraMadeira",
      },
    ],
    imageUrls: [
      "https://www.madeiramadeira.com.br/rack-com-painel-para-tv-ate-75-polegadas-com-led-sublime-220-100-mdf-730597.html",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Largura: "220 cm",
      "Capacidade para TV": "Até 75 polegadas",
      "Iluminação LED": "Sim",
      Cor: "Off White/Natural",
      Material: "MDF",
    },
    ownerComments: "Produto em perfeito estado, acompanha manual de montagem.",
  },
  {
    id: "10",
    name: "Mesa de Escritório Kuandra Carvalho - A 75cm x L 180cm x P 70cm",
    description:
      "Mesa de escritório modelo Kuandra na cor Carvalho, com altura de 75 cm, largura de 180 cm e profundidade de 70 cm.",
    salePrice: 260.92,
    references: [
      {
        price: 460.92,
        link: "https://www.mobly.com.br/mesa-de-escritorio-kuandra-carvalho-e-preta-1003996.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://www.mobly.com.br/mesa-de-escritorio-kuandra-carvalho-e-preta-1003996.html",
    ],
    category: "Móveis de Escritório",
    availability: "available",
    specifications: {
      Altura: "75 cm",
      Largura: "180 cm",
      Profundidade: "70 cm",
      Cor: "Carvalho",
      Material: "MDF",
    },
    ownerComments: "Mesa espaçosa e bem conservada, ideal para home office.",
  },
  {
    id: "11",
    name: "Cadeira Escritório Diretor Ergonômico NR17 Tela Mesh Tóquio 3329 Preto",
    description:
      "Cadeira ergonômica de escritório modelo Diretor NR17 com encosto em tela mesh, na cor preta.",
    salePrice: 442.51,
    references: [
      {
        price: 642.51,
        link: "https://www.madeiramadeira.com.br/cadeira-escritorio-diretor-ergonomico-nr17-tela-mesh-toquio-3329-preto-730100.html",
        storeName: "MadeiraMadeira",
      },
    ],
    imageUrls: [
      "https://www.madeiramadeira.com.br/cadeira-escritorio-diretor-ergonomico-nr17-tela-mesh-toquio-3329-preto-730100.html",
    ],
    category: "Móveis de Escritório",
    availability: "available",
    specifications: {
      Modelo: "Tóquio 3329",
      Cor: "Preto",
      "Material do Encosto": "Tela Mesh",
      "Norma Regulamentadora": "NR17",
      Ajustes: "Altura e Inclinação",
    },
    ownerComments:
      "Cadeira confortável e em ótimo estado, ideal para longas horas de trabalho.",
  },
  {
    id: "12",
    name: "Monitor Dell P2210T (22”) + Cabo Display Port",
    description:
      "Monitor Dell de 22 polegadas, modelo P2210T, acompanhado de cabo Display Port.",
    salePrice: 250.0,
    references: [
      {
        price: 400.0,
        link: "https://coretekcomputers.com/products/dell-p2210t-22-widescreen-lcd-flat-panel-monitor",
        storeName: "Coretek Computers",
      },
    ],
    imageUrls: [
      "https://coretekcomputers.com/products/dell-p2210t-22-widescreen-lcd-flat-panel-monitor",
    ],
    category: "Eletrônicos",
    availability: "available",
    specifications: {
      Modelo: "P2210T",
      "Tamanho da Tela": "22 polegadas",
      "Resolução Máxima": "1680 x 1050",
      Conexões: "DisplayPort, DVI, VGA",
      Ajustes: "Altura, Inclinação, Rotação",
    },
    ownerComments: "Monitor em perfeito funcionamento, sem dead pixels.",
  },
  {
    id: "13",
    name: "Puff Banqueta Redondo Luxo - Tecido Cinza Noturno",
    description:
      "Puff banqueta redondo de luxo, revestido em tecido cinza noturno.",
    salePrice: 269.9,
    references: [
      {
        price: 469.9,
        link: "https://produto.mercadolivre.com.br/MLB-2625216568-puff-decorativo-redondo-luxo-tecido-cinza-noturno-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://produto.mercadolivre.com.br/MLB-2625216568-puff-decorativo-redondo-luxo-tecido-cinza-noturno-_JM",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Formato: "Redondo",
      Material: "Tecido",
      Cor: "Cinza Noturno",
      Uso: "Banqueta, Puff Decorativo",
    },
    ownerComments: "Puff em excelente estado, sem manchas ou rasgos.",
  },
  {
    id: "14",
    name: "Cama Box Bau Bipartido Queen Star Flex Blindado Pistão Linha Hotel 30cm Prof. Interna e Externa 48cm",
    description:
      "Cama box baú bipartido tamanho queen da linha hotel, com pistão blindado e profundidade interna de 30cm e externa de 48cm.",
    salePrice: 970.0,
    references: [
      {
        price: 1470.0,
        link: "https://www.westwing.com.br/box-bau-bipartido-linho-cinza-37035.html",
        storeName: "Westwing",
      },
    ],
    imageUrls: [
      "https://www.westwing.com.br/box-bau-bipartido-linho-cinza-37035.html",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Tamanho: "Queen",
      "Profundidade Interna": "30 cm",
      "Profundidade Externa": "48 cm",
      Mecanismo: "Pistão Blindado",
      Material: "Linho Cinza",
    },
    ownerComments:
      "Cama box em ótimo estado, com amplo espaço de armazenamento.",
  },
  {
    id: "15",
    name: "Colchão Estate Firm Cross System 28cm - Stearns Foster 1.58x1.98 M",
    description:
      "Colchão modelo Estate Firm com 28cm de altura, tecnologia Cross System, da marca Stearns Foster, nas dimensões 1,58x1,98m.",
    salePrice: 1790.0,
    references: [
      {
        price: 2790.0,
        link: "https://www.sleephouse.com.br/col-estate-firm-cross-system-28cm---stearns-foster-088-x-188-m-sf0001_1049/p?idSku=46390",
        storeName: "Sleep House",
      },
    ],
    imageUrls: [
      "https://www.sleephouse.com.br/col-estate-firm-cross-system-28cm---stearns-foster-088-x-188-m-sf0001_1049/p?idSku=46390",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Modelo: "Estate Firm",
      Altura: "28 cm",
      Tecnologia: "Cross System",
      Marca: "Stearns Foster",
      Dimensões: "1,58 x 1,98 m",
    },
    ownerComments: "Colchão firme e confortável, pouco uso.",
  },
  {
    id: "16",
    name: 'Smart TV Samsung 55" UHD 55AU7700 4K Processador Crystal Wi-Fi Tizen Comando de Voz',
    description:
      "Smart TV Samsung de 55 polegadas com resolução 4K UHD, processador Crystal, conectividade Wi-Fi, sistema operacional Tizen e comando de voz integrado.",
    salePrice: 1553.28,
    references: [
      {
        price: 2553.28,
        link: "https://www.americanas.com.br/produto/3069509622/smart-tv-55-uhd-4k-samsung-55au7700-processador-crystal-4k-tela-sem-limites-visual-livre-de-cabos-alexa-built-in-controle-unico",
        storeName: "Americanas",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/618x463/smart-tv-55-uhd-4k-samsung-55au7700-processador-crystal-4k-tela-sem-limites-visual-livre-de-cabos-alexa-built-in-controle-unico/samsung/55au7700/7c3a6a8f5c8b1e9f9e4d9f3e0c2e2f5e.jpg",
    ],
    category: "Eletrônicos",
    availability: "available",
    specifications: {
      Resolução: "4K UHD",
      "Sistema Operacional": "Tizen",
      Conectividade: "Wi-Fi, Bluetooth",
      "Recursos Adicionais": "Comando de voz, Alexa integrada",
      Entradas: "3 HDMI, 2 USB",
    },
    ownerComments:
      "Televisão em perfeito estado, com imagem nítida e som de qualidade.",
  },
  {
    id: "17",
    name: 'TV 32" Led HD 32S615 HDR/WIFI',
    description:
      "Smart TV TCL de 32 polegadas com resolução HD, suporte a HDR e conectividade Wi-Fi.",
    salePrice: 1099.0,
    references: [
      {
        price: 1199.0,
        link: "https://www.magazineluiza.com.br/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/p/bgc6302d6b/et/tled/",
        storeName: "Magazine Luiza",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/618x463/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/tcl/32s615/7c3a6a8f5c8b1e9f9e4d9f3e0c2e2f5e.jpg",
    ],
    category: "Eletrônicos",
    availability: "available",
    specifications: {
      Resolução: "HD",
      "Sistema Operacional": "Android TV",
      Conectividade: "Wi-Fi, Bluetooth",
      "Recursos Adicionais": "Google Assistente integrado",
      Entradas: "2 HDMI, 1 USB",
    },
    ownerComments:
      "Ótima opção para quartos ou cozinhas, com acesso a aplicativos de streaming.",
  },
  {
    id: "18",
    name: "Kit de Banheiro Acrílico com 6 Peças + Lixeira - Branco Perolado",
    description:
      "Conjunto de acessórios de banheiro em acrílico branco perolado, composto por 6 peças e uma lixeira.",
    salePrice: 330.0,
    references: [
      {
        price: 430.0,
        link: "https://www.magazineluiza.com.br/kit-de-banheiro-acrilico-com-6-pecas-lancamento-banho-e-decor/p/be28868588/ud/udab/",
        storeName: "Magazine Luiza",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/618x463/kit-de-banheiro-acrilico-com-6-pecas-lancamento-banho-e-decor/banhoedecor/kitbanheiro6pbrancoperolado/7c3a6a8f5c8b1e9f9e4d9f3e0c2e2f5e.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Acrílico",
      Cor: "Branco Perolado",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, saboneteira, dois potes multiuso, lixeira",
    },
    ownerComments: "Kit elegante e funcional, ideal para organizar o banheiro.",
  },
  {
    id: "19",
    name: "KIT LAVABO BANHEIRO LUXO VIDRO 5 Peças - Preto",
    description: "Kit de lavabo de luxo em vidro preto, composto por 5 peças.",
    salePrice: 450.0,
    references: [
      {
        price: 450.0,
        link: "",
        storeName: "",
      },
    ],
    imageUrls: [],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Vidro",
      Cor: "Preto",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, saboneteira, dois potes multiuso",
    },
    ownerComments:
      "Conjunto sofisticado, adiciona um toque de elegância ao banheiro.",
  },
  {
    id: "20",
    name: "Kit de Bancada para Banheiro Cerâmica Madeira de Bamboo Clara Fudji Sensea 3 Peças + Lixeira",
    description:
      "Kit de bancada para banheiro em cerâmica com detalhes em madeira de bambu clara, modelo Fudji Sensea, composto por 3 peças e uma lixeira.",
    salePrice: 240,
    references: [
      {
        price: 1000,
        link: "",
        storeName: "",
      },
    ],
    imageUrls: [],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Cerâmica e Bambu",
      Cor: "Branco e Madeira Clara",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, saboneteira, lixeira",
    },
    ownerComments:
      "Design clean e moderno, perfeito para banheiros contemporâneos.",
  },
  {
    id: "aspirador-robo-multilaser-ho041",
    name: "Aspirador de Pó Robô Multilaser HO041",
    description:
      "Aspirador robô 3 em 1 que varre, aspira e passa pano. Equipado com sensores de obstáculos e antiqueda, ideal para diversos tipos de piso.",
    salePrice: 300,
    references: [
      {
        price: 450,
        link: "https://www.amazon.com.br/Aspirador-Recarreg%C3%A1vel-Multilaser-HO041-Vermelho/dp/B07MTHP5SF",
        storeName: "Amazon",
      },
    ],
    imageUrls: [],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Potência: "30W",
      "Duração da Bateria": "2 horas",
      "Tempo de Carregamento": "4 horas",
      "Capacidade da Bateria": "1800 mAh",
      "Modos de Limpeza": "Auto, Espiral, Borda",
      Sensores: "Obstáculos e antiqueda",
      Dimensões: "11,5 cm (A) x 38,2 cm (L) x 30,7 cm (P)",
      Peso: "1,5 kg",
    },
    ownerComments:
      "Perfeito para manter a casa limpa sem esforço. Funciona bem em pisos frios, madeira e tapetes de baixa espessura.",
    whatsAppLink: "",
  },
  {
    id: "aspirador-wap-acqua-mob",
    name: "Aspirador de Pó e Água Vertical Sem Fio WAP Acqua Mob 2 em 1",
    description:
      "Aspirador vertical sem fio 2 em 1 que aspira pó e líquidos. Leve, prático e ideal para limpezas rápidas e eficientes.",
    salePrice: 350.0,
    references: [
      {
        price: 550.0,
        link: "https://shopee.com.br/Aspirador-de-P%C3%B3-e-%C3%81gua-Vertical-sem-fio-WAP-Acqua-Mob-2-em-1-FW006484-i.548900434.14275039369",
        storeName: "Shopee",
      },
    ],
    imageUrls: [],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Tipo: "Sem fio",
      Função: "Aspira pó e água",
      Acessórios: "Bocal para cantos e frestas",
      "Capacidade do Reservatório": "500 ml",
      "Autonomia da Bateria": "Até 30 minutos",
      "Tempo de Carregamento": "3 a 4 horas",
      Peso: "1,3 kg",
    },
    ownerComments:
      "Ótimo para limpezas rápidas e diárias. A função sem fio proporciona maior mobilidade.",
    whatsAppLink: "",
  },
  {
    id: "banqueta-giratoria-milano-cinza",
    name: "Banqueta Giratória Milano Cinza",
    description:
      "Banqueta giratória com design moderno e assento estofado em cinza. Ideal para cozinhas americanas e áreas de convivência.",
    salePrice: 495.0,
    references: [
      {
        price: 895.0,
        link: "https://www.mobly.com.br/banqueta-giratoria-milano-cinza-553605.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [],
    category: "Móveis",
    availability: "available",
    specifications: {
      Material: "Assento estofado e estrutura metálica",
      Cor: "Cinza",
      Altura: "Ajustável de 60 cm a 80 cm",
      Base: "Cromada com apoio para os pés",
      "Peso Suportado": "Até 120 kg",
    },
    ownerComments:
      "Confortável e elegante, perfeita para complementar a decoração da cozinha.",
    whatsAppLink: "",
  },
  {
    id: "liquidificador-oster-myblend",
    name: "Blender Oster Myblend, 2 Jarras, Preto 110V, 250W, BLSTPB-BBL",
    description:
      "Liquidificador pessoal ideal para preparar shakes e smoothies. Acompanha duas jarras portáteis.",
    salePrice: 150.0,
    references: [
      {
        price: 250.0,
        link: "https://produto.mercadolivre.com.br/MLB-4023892426-liquidificador-oster-personal-blender-250w-2-jarras-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Potência: "250W",
      Voltagem: "110V",
      "Capacidade das Jarras": "600 ml cada",
      "Material das Lâminas": "Aço inoxidável",
      Acessórios: "2 jarras portáteis com tampa",
    },
    ownerComments:
      "Prático para o dia a dia, especialmente para quem prepara shakes pós-treino.",
    whatsAppLink: "",
  },
  {
    id: "piano-digital-casio-cdp-s110",
    name: "Piano Digital Stage CDP-S110 BK com Suporte para Piano Digital",
    description:
      "Piano digital compacto com 88 teclas e suporte dedicado. Ideal para estudantes e músicos profissionais.",
    salePrice: 2290.0,
    references: [
      {
        price: 3290.0,
        link: "https://produto.mercadolivre.com.br/MLB-2784305839-piano-digital-casio-cdp-s110-stage-profissional-suporte-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [],
    category: "Instrumentos Musicais",
    availability: "available",
    specifications: {
      Teclas: "88 teclas com ação de martelo escalonado",
      Polifonia: "64 vozes",
      Timbres: "10 sons integrados",
      Conectividade: "USB para host, entrada para pedal",
      Acessórios: "Suporte dedicado, pedal de sustain",
    },
    ownerComments:
      "Excelente qualidade de som e toque. O suporte incluído oferece estabilidade durante a performance.",
    whatsAppLink: "",
  },
  {
    id: "26",
    name: "Banquetas",
    description:
      "Banqueta giratória Milano na cor cinza, ideal para complementar a decoração de sua cozinha ou bar.",
    salePrice: 395.0,
    references: [
      {
        price: 595.0,
        link: "https://www.mobly.com.br/banqueta-giratoria-milano-cinza-553605.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://www.mobly.com.br/banqueta-giratoria-milano-cinza-553605.html",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Material: "Estrutura de aço cromado com assento estofado em PU",
      Dimensões: "Altura: 90 cm, Largura: 40 cm, Profundidade: 40 cm",
      "Peso Suportado": "120 kg",
      Cor: "Cinza",
    },
    ownerComments:
      "Banqueta confortável e elegante, perfeita para bancadas e ilhas de cozinha.",
  },
  {
    id: "27",
    name: "Blender Oster MyBlend",
    description:
      "Blender Oster MyBlend com 2 jarras, na cor preta, 110V, 250W, modelo BLSTPB-BBL.",
    salePrice: 450.0,
    references: [
      {
        price: 250.0,
        link: "https://produto.mercadolivre.com.br/MLB-4023892426-liquidificador-oster-personal-blender-250w-2-jarras-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_664682-MLB4023892426_122019-F.webp",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Potência: "250W",
      Capacidade: "Jarras de 600ml cada",
      Voltagem: "110V",
      Acessórios: "2 jarras portáteis com tampa",
    },
    ownerComments:
      "Liquidificador portátil ideal para preparar shakes e smoothies de maneira prática.",
  },
  {
    id: "28",
    name: "Piano Digital + Suporte",
    description:
      "Piano Digital Stage Casio CDP-S110 BK acompanhado de suporte para piano digital.",
    salePrice: 3290.0,
    references: [
      {
        price: 3290.0,
        link: "https://produto.mercadolivre.com.br/MLB-2784305839-piano-digital-casio-cdp-s110-stage-profissional-suporte-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_866759-MLB47899978133_102021-F.webp",
    ],
    category: "Instrumentos Musicais",
    availability: "available",
    specifications: {
      Teclas: "88 teclas com ação de martelo escalonado",
      Polifonia: "64 vozes",
      Timbres: "10 sons integrados",
      Conectividade: "USB tipo B, entrada para pedal",
    },
    ownerComments:
      "Piano digital compacto e de alta qualidade, perfeito para estudantes e profissionais.",
  },
  {
    id: "29",
    name: "Organizador de geladeira",
    description:
      "Kit com 6 organizadores de geladeira de 2,2L e um porta frios. Cor transparente/branco.",
    salePrice: 300.0,
    references: [
      {
        price: 300.0,
        link: "https://www.mercadolivre.com.br/kit-3-organizadores-de-geladeira-22l-e-porta-frios-duplo-ou-cor-transparente/p/MLB29531760",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_929351-MLB29531760_022019-F.webp",
    ],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Plástico BPA Free",
      Capacidade: "2,2L por organizador",
      Dimensões: "29 cm x 15 cm x 9 cm cada",
      Cor: "Transparente/Branco",
    },
    ownerComments:
      "Organizadores ideais para manter a geladeira arrumada e otimizar espaço.",
  },
  {
    id: "30",
    name: "Liquidificador",
    description:
      "Liquidificador de alta performance com design moderno e funcionalidades avançadas.",
    salePrice: 100.0,
    references: [
      {
        price: 400.0,
        link: "",
        storeName: "",
      },
    ],
    imageUrls: [],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Potência: "800W",
      Capacidade: "1,5L",
      Velocidades: "4 níveis",
      Funções: "Smoothie, Triturar Gelo, Autolimpeza",
    },
    ownerComments:
      "Liquidificador potente e versátil, ideal para diversas preparações na cozinha.",
  },
  {
    id: "31",
    name: "Máquina de lavar-louças",
    description:
      "Máquina de lavar-louças eficiente e moderna, ideal para facilitar o dia a dia na cozinha.",
    salePrice: 200.0,
    references: [
      {
        price: 4000.0,
        link: "",
        storeName: "",
      },
    ],
    imageUrls: [],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Capacidade: "14 serviços",
      "Programas de Lavagem": "6 programas, incluindo Eco, Intensivo e Rápido",
      "Eficiência Energética": "Classe A++",
      "Nível de Ruído": "44 dB",
    },
    ownerComments:
      "Máquina de lavar-louças espaçosa e silenciosa, garantindo louças limpas com economia de energia.",
  },
];

// Add WhatsApp links to all products
products.forEach((product) => {
  product.whatsAppLink = generateWhatsAppLink({ productName: product.name });
});
