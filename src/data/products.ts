import { Product } from "../types/product";
import { generateWhatsAppLink } from "../utils/whatsapp";

// Products based on the spreadsheet data
export const products: Product[] = [
  {
    id: "1",
    name: "Lava e Seca Samsung 11 Kg ",
    description:
      "Lava e seca Samsung de 11 Kg SmartThings Inox Look WD11T504DBX, acabamento inox look, conectividade SmartThings com 12 programas de lavagem.",
    salePrice: 3000,
    references: [
      {
        price: 3999,
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
    availability: "sold",
    specifications: {
      Cor: "Inox",
      Capacidade: "11 kg",
      Voltagem: "127V",
      Potência: "1050W (lavagem), 1900W (secagem)",
      Dimensões: "AxLxP: 85 x 60 x 65 cm",
      Conectividade: "SmartThings (Wi-Fi)",
      "Programas de Lavagem": "12 programas",
    },
    testimonials: [
      {
        ownerComment:
          "Esta máquina é excelente. O aplicativo Samsung Smart Things ajuda a controlar o setup de lavagem de qualquer tipo de roupa. As lavagens são rápidas e o aplicativo é muito útil para todas as funções.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Máquina silenciosa e eficiente, com ótimos recursos de personalização e integração com aplicativo.",
        username: "Carol",
      },
    ],
  },
  {
    id: "2",
    name: "Purificador Electrolux ",
    description:
      "Purificador de água Electrolux modelo PE12G Bivolt, super compacto, tecnologia Peltier (silencioso pois é sem compressor), água natural, fria e gelada.",
    salePrice: 500,
    references: [
      {
        price: 699,
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
    availability: "reserved",
    specifications: {
      Cor: "Cinza",
      Voltagem: "Bivolt",
      Potência: "70W",
      Dimensões: "AxLxP: 35 x 16 x 42 cm",
      "Temperatura da Água": "Natural, Fria e Gelada",
      Tecnologia: "Peltier (sem compressor)",
    },
    testimonials: [
      {
        ownerComment:
          "Este filtro é excelente. Silencioso, compacto e a água gelada é realmente gelada. Também é bom que a água sai bem forte, então dá pra encher uma garrafa em poucos segundos.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Design elegante e compacto, perfeito para ambientes modernos. Silencioso e potente, tanto na temperatura quanto na vazão.",
        username: "Carol",
      },
    ],
  },
  {
    id: "3",
    name: "Cafeteira Oster Flavor Inox Programável",
    description:
      "Cafeteira Oster Flavor programável, prateada, com timer digital e jarra de vidro resistente. Capacidade para até 36 xícaras pequenas (1,8L). Não recomendada para lava-louças.",
    salePrice: 150,
    references: [
      {
        price: 354.49,
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
    availability: "sold",
    specifications: {
      Cor: "Inox",
      Potência: "900W",
      Voltagem: "110V",
      Capacidade: "12 xícaras (jarra de 1,5L)",
      "Material da Jarra": "Vidro",
      Programável: "Sim",
      Dimensões: "AxLxP: 33 x 22.5 x 23.5 cm",
      "Filtro Permanente": "Sim",
    },
    testimonials: [
      {
        ownerComment:
          "Gostamos muito desta cafeteira porque dá para programar o café para sair quentinho na hora em que acordamos. O café fica ótimo, o segredo é colocar água até o nível de 7 xícaras 7 colheres (de sopa) de café.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Prepara um café delicioso e mantém a temperatura ideal por horas.",
        username: "Carol",
      },
    ],
  },
  {
    id: "4",
    name: "Microondas LG Solo 30L",
    description:
      "Microondas LG Solo com capacidade de 30 litros, tecnologia I Wave que esquenta a comida de forma uniforme. Cor preta, voltagem 127V. Possui 16 programas e descongelamento automático por peso.",
    salePrice: 850,
    references: [
      {
        price: 1199.9,
        link: "https://www.mercadolivre.com.br/microondas-lg-solo-30l-com-tecnologia-i-wave-preto-127v-110v/p/MLB15562041#polycard_client=search-nordic&searchVariation=MLB15562041&wid=MLB3670097834&position=4&search_layout=stack&type=product&tracking_id=547c2b05-e00e-4d47-b1fd-7a9dd621f3a2",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_828341-MLU77160700466_072024-F.webp",
      "https://i.postimg.cc/kXXwDsZG/IMG-3939.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_2X_681847-MLU77373839427_072024-F.webp",
    ],
    category: "Eletrodomésticos",
    availability: "reserved",
    specifications: {
      Cor: "Preto",
      Capacidade: "30 litros",
      Potência: "800W",
      Voltagem: "127V",
      Dimensões: "AxLxP: 29 x 50,8 x 40 cm",
      Funções:
        "16 programas, descongelamento automático, trava de segurança, display digital",
    },
    testimonials: [
      {
        ownerComment:
          "Microondas muito bom, fácil de usar e espaçoso. Está em perfeito estado e esquenta rapidinho a comida.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Microondas perfeito, fácil de usar e esquenta muito rápido. Em 1 minuto as marmitas da geladeira já estão quentinhas.",
        username: "Carol",
      },
    ],
  },
  {
    id: "5",
    name: "Sofá 2 módulos reclinável e retrátil",
    description:
      "Sofá cinza de suede veludo com 2,70m de largura, composto por 2 módulos de 1,20m e 2 braços de 15cm. Possui um pequeno detalhe no tecido em um dos lados",
    salePrice: 4500.0,
    references: [],
    imageUrls: [
      "https://i.postimg.cc/15tcytnN/IMG-3928.jpg",
      "https://i.postimg.cc/W3w61qw0/IMG-3929.jpg",
      "https://i.postimg.cc/gJWHpH8Y/IMG-3930.jpg",
      "https://i.postimg.cc/Vk2FG8N0/IMG-3931.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Material: "Suede Veludo",
      Cor: "Cinza",
      Comprimento: "Estendido: 180cm. Recolhido: 125cm",
      Largura: "270cm",
      Altura: "120cm (encosto na vertical)",
      "Altura do apoio de braço": "60cm",
    },
    testimonials: [
      {
        ownerComment:
          "Este sofá foi uma excelente compra que fizemos. Pagamos aproximadamente R$ 6.500 em uma loja de móveis de luxo na Teodoro Sampaio em março de 2023. Sempre deixamos ele esticado e perto da janela para pegar sol e ventilar. Fizemos higienização nele em 26/02/2025, pois estava com alguns pontinhos que pareciam fungos. Os pontinhos sumiram, mas ainda ficaram algumas pequenas marcas de deterioração no tecido, conforme as imagens.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Confortável e elegante, perfeito para qualquer sala de estar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "6",
    name: "Mesa de Jantar Acapulco ",
    description:
      "Mesa de jantar modelo Acapulco com tampo de vidro de dimensões 184x90 cm na cor Off-White e base com design diferenciado em madeira natural. LEVE A MESA + CADEIRAS POR R$2.500,00",
    salePrice: 1500.0,
    references: [
      {
        price: 5142.8,
        link: "https://www.mobellomoveis.com.br/mesa-natasha-base-ripada-de-madeira-macica-imbuia-tampo-com-vidro-4mm-off-white",
        storeName: "Mobello Móveis",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/YqbnxZgQ/IMG-3949.jpg",
      "https://i.postimg.cc/x1Z6wm6C/IMG-3950.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Dimensões: "AxLxP: 80 x 90 x 184 cm",
      "Cor do Tampo": "Off-white",
      "Material da base": "Madeira Natural",
    },
    testimonials: [
      {
        ownerComment:
          "Mesa em ótimo estado, sem absolutamente nada de arranhões ou marcas de uso. Sempre usamos proteção em baixo de pratos, copos e objetos. Geralmente não usamos para comer, então ela está praticamente intacta.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Mesa elegante que combina com diversos estilos de decoração.",
        username: "Carol",
      },
    ],
  },
  {
    id: "6.5",
    name: "Conjunto Mesa de Jantar Acapulco + 6 Cadeiras",
    description:
      "Conjunto completo de mesa de jantar com 6 cadeiras. Mesa modelo Acapulco com tampo de vidro de dimensões 184x90 cm na cor Off-White e base com design diferenciado em madeira natural. Acompanha 6 cadeiras estofadas em linho cinza com pés de madeira na cor natural, tecido impermeabilizado em março de 2023.",
    salePrice: 2800.0,
    references: [
      {
        price: 5242.8,
        link: "https://www.mobellomoveis.com.br/mesa-natasha-base-ripada-de-madeira-macica-imbuia-tampo-com-vidro-4mm-off-white",
        storeName: "Mobello Móveis (Mesa similar)",
      },
      {
        price: 1783.77,
        link: "https://www.maislardecor.com.br/kit-com-6-cadeiras-maiara-madeira-macica-estofadas-para-mesa-de-jantar-linho-cinza-claro",
        storeName: "Mais Lar Decor (Cadeiras similares)",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/YqbnxZgQ/IMG-3949.jpg",
      "https://i.postimg.cc/x1Z6wm6C/IMG-3950.jpg",
      "https://i.postimg.cc/2SyH9GFM/IMG-3951.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      "Dimensões da Mesa": "AxLxP: 80 x 90 x 184 cm",
      "Cor do Tampo": "Off-white",
      "Material da base": "Madeira Natural",
      "Estofado das Cadeiras": "Linho Cinza",
      "Material dos Pés das Cadeiras": "Madeira Maciça",
      "Cor dos Pés das Cadeiras": "Natural",
      "Altura do assento das Cadeiras": "48cm",
      "Dimensões das Cadeiras": "AxLxP: 100 x 45 x 61 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Conjunto completo em excelente estado. A mesa está sem arranhões ou marcas de uso, pois sempre usamos proteção e não comemos nela frequentemente. As cadeiras também estão bem conservadas, com o tecido impermeabilizado em março de 2023.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Conjunto elegante e funcional. A combinação da mesa com as cadeiras cria um ambiente acolhedor e sofisticado.",
        username: "Carol",
      },
    ],
  },
  {
    id: "7",
    name: "Conjunto de 6 cadeiras estofadas",
    description:
      "6 cadeiras estofadas em linho cinza com pés de madeira na cor natural. Tecido impermeabilizado em março de 2023. LEVE A MESA + CADEIRAS POR R$2.500,00",
    salePrice: 1500.0,
    references: [
      {
        price: 1783.77,
        link: "https://www.maislardecor.com.br/kit-com-6-cadeiras-maiara-madeira-macica-estofadas-para-mesa-de-jantar-linho-cinza-claro",
        storeName: "Mais Lar Decor (produto similar)",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/2SyH9GFM/IMG-3951.jpg",
      "https://i.postimg.cc/x1Z6wm6C/IMG-3950.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Quantidade: "6 cadeiras",
      Estofado: "Linho Cinza",
      "Material dos Pés": "Madeira Maciça",
      "Cor dos Pés": "Natural",
      "Altura do assento": "48cm",
      Dimensões: "AxLxP: 100 x 45 x 61 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Cadeiras confortáveis e bem conservadas. Como usamos pouco a mesa de jantar, todas elas estão praticamente intactas.",
        username: "Mauro",
      },
      {
        ownerComment: "Cadeiras resistentes e com acabamento impecável.",
        username: "Carol",
      },
    ],
  },
  {
    id: "8",
    name: "Buffet Lizz",
    description:
      "Buffet Lizz com 1,90 m de comprimento nas cores Off-white e Cedro. Com porta xícaras instalado na parte superior para otimizar espaço.",
    salePrice: 779.9,
    references: [
      {
        price: 1110.52,
        link: "https://www.mobly.com.br/buffet-lizz-4-pt-off-white-e-cedro-190-cm-1188355.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://static.mobly.com.br/p/Modern-Buffet-Lizz-4-PT-Off-White-e-Cedro-190-cm-0879-5538811-1.jpg",
      "https://static.mobly.com.br/p/Modern-Buffet-Lizz-4-PT-Off-White-e-Cedro-190-cm-0881-5538811-3.jpg",
      "https://i.postimg.cc/T35VW4cd/IMG-3920.jpg",
      "https://i.postimg.cc/pdDKs573/IMG-3921.jpg",
      "https://i.postimg.cc/ZqkrPxfr/IMG-3923.jpg",
    ],
    category: "Móveis",
    availability: "sold",
    specifications: {
      Cor: "Off-white/Cedro",
      "Número de Portas": "4",
      Material: "MDF",
      Dimensões:
        "AxLxP: 79 x 180 x 38 cm. Cada pezinho ainda tem mais 5cm para os lados, totalizando 190cm de comprimento.",
    },
    testimonials: [
      {
        ownerComment:
          "Comprei este buffet na Mobly e. Está em perfeito estado, montagem perfeita e foi muito pouco usado.",
        username: "Mauro",
      },
      {
        ownerComment: "Móvel versátil com ótimo espaço de armazenamento.",
        username: "Carol",
      },
    ],
  },
  {
    id: "9",
    name: "Rack com Painel para TV até 75 polegadas com LED Sublime",
    description:
      "Rack com painel para TV de até 75 polegadas, com iluminação LED, 220 cm de largura, modelo Gelius nas cores Off-white e Natural.",
    salePrice: 950,
    references: [
      {
        price: 1299.98,
        link: "https://www.madeiramadeira.com.br/rack-com-painel-para-tv-ate-75-polegadas-com-led-sublime-220-100-mdf-730597.html",
        storeName: "MadeiraMadeira",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/MKvRhFN7/IMG-3908.jpg",
      "https://product-hub-prd.madeiramadeira.com.br/730597/images/08ad9b79-dffc-440c-9cc3-1d2b4476b758aoffwhite1651547326198zoom.jpg?width=700&canvas=1:1&bg-color=FFF",
      "https://product-hub-prd.madeiramadeira.com.br/730597/images/fbcce19e-ebe3-48dd-80e4-435769044544aoffwhite1651547327196zoom.jpg?width=700&canvas=1:1&bg-color=FFF",
      "https://i.postimg.cc/bvH2xcSh/IMG-3904.jpg",
      "https://i.postimg.cc/CMvkrgPM/IMG-3907.jpg",
      "https://i.postimg.cc/g0PZLkJs/IMG-3909.jpg",
      "https://i.postimg.cc/nrwmX4j9/IMG-3910.jpg",
    ],
    category: "Móveis",
    availability: "sold",
    specifications: {
      Largura: "220 cm (Rack e Painel)",
      "Dimensões do Rack": "AxLxP: 50 x 220 x 42 cm",
      "Dimensões do Painel": "AxLxP: 133 x 220 x 8 cm",
      "Capacidade para TV": "Até 75 polegadas",
      "Iluminação LED": "Sim",
      Cor: "Off-white/Natural",
      Material: "MDF",
      Inclui: "Tomada inteligente para ligar o LED e suporte para TV",
    },
    testimonials: [
      {
        ownerComment:
          "Recebemos em março de 2023. Depois de um tempo, instalei a tomada inteligente para ligar o LED com comando de voz ou aplicativo. O rack está em perfeito estado. Compramos em conjunto com o buffet que também está anunciado aqui. Estou dando de brinde a tomada e o suporte para TV, sem parafusos.",
        username: "Mauro",
      },
      {
        ownerComment:
          "O painel com LED cria um ambiente acolhedor na sala. Com a tomada inteligente que estamos dando de brinde, a gente só pede pra Alexa ligar e desligar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "10",
    name: "Mesa de Escritório Kuandra",
    description:
      "Mesa de escritório modelo Kuandra na cor Carvalho. Muito resistente, com estrutura de aço.",
    salePrice: 380.0,
    references: [
      {
        price: 625.46,
        link: "https://www.mobly.com.br/mesa-de-escritorio-kuandra-carvalho-e-preta-1003996.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://static.mobly.com.br/p/Compace-Mesa-de-EscritC3B3rio-Kuandra-Carvalho-e-Preta-3259-6993001-5.jpg",
      "https://static.mobly.com.br/p/Compace-Mesa-de-EscritC3B3rio-Kuandra-Carvalho-e-Preta-3257-6993001-3.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Altura: "75 cm",
      Comprimento: "180 cm",
      Largura: "70 cm",
      Cor: "Carvalho",
      Material:
        "Estrutura em aço com acabamento em pintura epóxi e tampo em MDP 30mm com acabamento em BP acetinado",
    },
    testimonials: [
      {
        ownerComment:
          "Essa mesa é muito boa. É a que eu uso pra trabalhar diariamente. Muito resistente, muito bem fixada no lugar e também é leve e fácil de movimentar.",
        username: "Mauro",
      },
      {
        ownerComment: "Espaço de trabalho funcional com acabamento refinado.",
        username: "Carol",
      },
    ],
  },
  {
    id: "12",
    name: "Cadeira de Escritório Ergonômica",
    description:
      "Cadeira ergonômica de escritório modelo Diretor NR17 com encosto em tela mesh Tóquio 3329, na cor preta.",
    salePrice: 500,
    references: [
      {
        price: 599.98,
        link: "https://www.madeiramadeira.com.br/cadeira-escritorio-diretor-ergonomico-nr17-tela-mesh-toquio-3329-preto-730100.html",
        storeName: "MadeiraMadeira",
      },
    ],
    imageUrls: [
      "https://product-hub-prd.madeiramadeira.com.br/730100/images/730100_3.jpg?width=700&canvas=1:1&bg-color=FFF",
      "https://product-hub-prd.madeiramadeira.com.br/730100/images/ddb41c85-8ef9-4994-8982-0adf69671b8caordesign1651596599194zoom.jpg?width=700&canvas=1:1&bg-color=FFF",
      "https://i.postimg.cc/qRV482GM/331c6282-6802-4bfb-934e-50e09615c719.jpg",
      "https://i.postimg.cc/MGjzM9VF/78a7d66b-f4be-4768-a840-121d1ab11421.jpg",
    ],
    category: "Móveis",
    availability: "reserved",
    specifications: {
      Modelo: "Tóquio 3329",
      Cor: "Preto",
      "Material do Encosto": "Tela Mesh",
      "Norma Regulamentadora": "NR17",
      Ajustes: "Altura e Inclinação",
    },
    testimonials: [
      {
        ownerComment:
          "É a cadeira que eu passo horas todos os dias, portanto é muito importante que seja confortável. Está em perfeito estado e com várias opções de regulagem.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Excelente ergonomia para longas horas de trabalho como meu marido gosta de ficar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "13",
    name: 'Monitor Dell P2210T (22") com Cabo Display Port',
    description:
      "2 unidades do Monitor Dell de 22 polegadas, modelo P2210T, acompanhado de cabo Display Port.",
    salePrice: 250.0,
    references: [
      {
        price: 400.0,
        link: "https://coretekcomputers.com/products/dell-p2210t-22-widescreen-lcd-flat-panel-monitor",
        storeName: "Coretek Computers",
      },
    ],
    imageUrls: [
      "https://coretekcomputers.com/cdn/shop/products/P2210T1_1024x1024.jpg?v=1605811590",
      "https://i.postimg.cc/zG7xwNSL/IMG-3493.jpg",
      "https://i.postimg.cc/vmm33K30/IMG-3498.jpg",
      "https://i.postimg.cc/BQW74Mnv/IMG-3499.jpg",
      "https://i.postimg.cc/HsQZxXr9/IMG-3500.jpg",
      "https://i.postimg.cc/13sWNX6h/IMG-4007.jpg",
    ],
    category: "Eletrônicos",
    availability: "sold",
    specifications: {
      Modelo: "P2210T",
      "Tamanho da Tela": "22 polegadas",
      "Resolução Máxima": "1680 x 1050",
      Conexões: "DisplayPort, DVI, VGA",
      Ajustes: "Altura, Inclinação, Rotação",
      Inclui: "Cabo DisplayPort e cabo de alimentação",
    },
    testimonials: [
      {
        ownerComment:
          'Monitor em perfeito funcionamento, sem nada de detalhe e imagem clara e nítida. Eu usava antigamente, antes de mudar para um de 27". Tenho 2 pra vender, dá pra fazer um descontinho se levar os 2.',
        username: "Mauro",
      },
      {
        ownerComment:
          "Qualidade de imagem consistente e cores bem calibradas. Uso diariamente para trabalhar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "14",
    name: "Puff-Banqueta Redondo reversível",
    description:
      "Puff banqueta redondo, revestido em tecido cinza noturno. Vira mesa de centro.",
    salePrice: 330,
    references: [
      {
        price: 469.9,
        link: "https://produto.mercadolivre.com.br/MLB-2625216568-puff-decorativo-redondo-luxo-tecido-cinza-noturno-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_628979-MLB49784175520_042022-F.webp",
      "https://i.postimg.cc/rF3Wc92v/IMG-3913.jpg",
      "https://i.postimg.cc/t466gVX7/IMG-3914.jpg",
      "https://i.postimg.cc/hvGx4yjq/IMG-3915.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Formato: "Redondo",
      Material: "Tecido",
      Cor: "Cinza Escuro",
      Uso: "Banqueta e Puff Decorativo",
      Dimensões: "AxLxP: 49 x 45 x 45 cm",
      "Diâmetro do assento": "42cm",
    },
    testimonials: [
      {
        ownerComment:
          "Essa banquetinha foi uma ótima compra. É muito prática, eu uso pra tocar piano, e usamos como mesinha também. Está com as marquinhas de uso da mesinha que estão na foto, mas está quase perfeita.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Peça versátil que funciona bem como assento e mesa auxiliar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "15",
    name: "Cama Box Baú Bipartido Queen Star Flex",
    description:
      "Cama box baú bipartido tamanho queen. Pistão da linha Hotel, com baú blindado e profundidade interna de 30cm e altura de 48cm.",
    salePrice: 1900,
    references: [
      {
        price: 2602.05,
        link: "https://www.westwing.com.br/box-bau-bipartido-linho-cinza-37035.html",
        storeName: "Westwing",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/Njj6cHmM/IMG-4008.jpg",
      "https://i.postimg.cc/SKXxLSFV/IMG-4003.jpg",
      "https://i.postimg.cc/k4Q9wDjN/bd2f6404-164a-4801-ae89-363d2b5a8648.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Tamanho: "Queen",
      "Profundidade Interna": "30 cm",
      Dimensões:
        "AxLxP: 47 x 158 x 198 cm. Altura do box (sem o pezinho): 41cm",
      Medida: "Queen size",
      Mecanismo: "Pistão a gás",
      Material: "Linho Cinza",
    },
    testimonials: [
      {
        ownerComment:
          "Box em excelente estado, com amplo espaço de armazenamento. O pistão também funciona perfeitamente. Dá pra levantar a tampa com facilidade, mesmo com o colchão em cima.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Tampa de abertura e fechamento suaves e muito prático para organização, ainda mais por separar o baú de cada um.",
        username: "Carol",
      },
    ],
  },
  {
    id: "15.1",
    name: "Colchão Estate Firm Stearns Foster",
    description:
      "Colchão modelo Estate Firm com 28cm de altura, tecnologia Cross System, da marca Stearns Foster, nas dimensões 1,58x1,98m.",
    salePrice: 1500,
    references: [
      {
        price: 1997.68,
        link: "https://www.sleephouse.com.br/col-estate-firm-cross-system-28cm---stearns-foster-088-x-188-m-sf0001_1049/p?idSku=46390",
        storeName: "Sleep House",
      },
    ],
    imageUrls: [
      "https://sleephouse.vteximg.com.br/arquivos/ids/165231-1000-1000/Colch-o-Stearns-Foster-Estate-Molas-Ensacadas-Firm-Cross-System-0.jpg",
      "https://i.postimg.cc/vHRhsvsh/IMG_4005.jpg",
      "https://i.postimg.cc/BnpB2917/IMG_4004.jpg",
      "https://i.postimg.cc/SKK7rT6S/IMG_4002.jpg",
      "https://i.postimg.cc/FsjZsJF4/IMG_4003.jpg",
      "https://i.postimg.cc/PqFbFWym/IMG_4009.jpg",
    ],
    category: "Móveis",
    availability: "reserved",
    specifications: {
      Modelo: "Estate Firm",
      Marca: "Stearns Foster",
      Dimensões: "AxLxP: 28 x 158 x 198 cm",
      Medida: "Queen Size",
    },
    testimonials: [
      {
        ownerComment:
          "Colchão ótimo, fizemos questão de comprar o melhor que encontramos, sem economia. Está em perfeito estado, porque compramos uma proteção de colchão, que posso até dar de brinde. É um lençol um pouco mais grosso que serve pra proteger o colchão.",
        username: "Mauro",
      },
      {
        ownerComment: "Proporciona uma noite de sono confortável e relaxante.",
        username: "Carol",
      },
    ],
  },
  {
    id: "16",
    name: 'Televisão Samsung 55" UHD 4K',
    description:
      "Smart TV Samsung de 55 polegadas com resolução 4K UHD, processador Crystal, conectividade Wi-Fi, comando de voz integrado.",
    salePrice: 2200,
    references: [
      {
        price: 2999,
        link: "https://www.americanas.com.br/produto/3069509622/smart-tv-55-uhd-4k-samsung-55au7700-processador-crystal-4k-tela-sem-limites-visual-livre-de-cabos-alexa-built-in-controle-unico",
        storeName: "Americanas",
      },
    ],
    imageUrls: [
      "https://images-americanas.b2w.io/produtos/01/00/img/3069509/6/3069509649_4SZ.jpg",
      "https://images-americanas.b2w.io/produtos/01/00/img/3069509/6/3069509649_12SZ.jpg",
      "https://i.postimg.cc/nrwmX4j9/IMG-3910.jpg",
      "https://i.postimg.cc/rsz02DnV/IMG-3901.jpg",
      "https://i.postimg.cc/sXTQLYJH/IMG-3902.jpg",
      "https://i.postimg.cc/rmVRgn5t/IMG-3903.jpg",
      "https://i.postimg.cc/MKvRhFN7/IMG-3908.jpg",
    ],
    category: "Eletrônicos",
    availability: "reserved",
    specifications: {
      Resolução: "4K UHD",
      "Sistema Operacional": "Tizen",
      Conectividade: "Wi-Fi, Bluetooth",
      "Recursos Adicionais": "Comando de voz, Alexa integrada",
      Entradas: "3 HDMI, 2 USB",
      Medida: '55"',
      Dimensões: "AxLxP: 71 x 123 x 9 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Televisão em perfeito estado, com imagem nítida e som de qualidade. Responde imediatamente aos comandos, não é aquele tipo de TV que fica demorando vários segundos pra mudar de canal. Também conecta muito fácil com o meu celular, e meu PC via bluetooth.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Cores perfeitas e sistema smart TV intuitivo e bem responsivo. É nossa televisão principal.",
        username: "Carol",
      },
    ],
  },
  {
    id: "17",
    name: 'Televisão TCL 32" Led HD',
    description:
      "Smart TV TCL de 32 polegadas com resolução HD, suporte a HDR e conectividade Wi-Fi.",
    salePrice: 400.0,
    references: [
      {
        price: 1199.0,
        link: "https://www.magazineluiza.com.br/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/p/bgc6302d6b/et/tled/",
        storeName: "Magazine Luiza",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/800x560/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/takahashieletro/d012f970524e11eda00f4201ac185019/922780382724cc8835abeef1f21bd582.jpeg",
      "https://i.postimg.cc/FKJTNK6x/IMG-3947.jpg",
    ],
    category: "Eletrônicos",
    availability: "sold",
    specifications: {
      Resolução: "HD",
      "Sistema Operacional": "Android TV",
      Conectividade: "Wi-Fi, Bluetooth",
      "Recursos Adicionais": "Google Assistente integrado",
      Entradas: "2 HDMI, 1 USB",
      Medida: '32"',
      Dimensões: "AxLxP: 42 x 72 x 8 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Televisão que deixamos no nosso quarto, mas praticamente não usamos. Estamos dando um desconto espetacular porque o sistema operacional é um pouco lento, mas para o que precisamos, está ótimo.",
        username: "Mauro",
      },
      {
        ownerComment: "Ideal para ambientes menores como quarto ou escritório.",
        username: "Carol",
      },
    ],
  },
  {
    id: "18",
    name: "Kit de Banheiro Acrílico com 6 Peças + Lixeira - Branco Perolado",
    description:
      "Conjunto de acessórios de banheiro em acrílico branco perolado, composto por 6 peças e uma lixeira.",
    salePrice: 300.0,
    references: [
      {
        price: 270,
        link: "https://www.magazineluiza.com.br/kit-de-banheiro-acrilico-com-6-pecas-lancamento-banho-e-decor/p/be28868588/ud/udab/",
        storeName: "Magazine Luiza",
      },
      {
        price: 49.9,
        link: "https://www.tokstok.com.br/lixeira-7-l-branco-brilhante-epicentro/p",
        storeName: "Tok&Stok",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/800x560/kit-de-banheiro-acrilico-com-6-pecas-lancamento-banho-e-decor/banhoedecor/fffa7618e73711ec82724201ac185078/a6999dd9aa792acba40ec9c5fcb88159.jpeg",
      "https://i.postimg.cc/FK2nLSSq/IMG-3958.jpg",
      "https://i.postimg.cc/B6H7cvcv/IMG-3960.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "reserved",
    specifications: {
      Material: "Acrílico",
      Cor: "Branco Perolado",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, porta-aromatizador, dois potes multiuso, organizador de bancada e lixeira",
    },
    testimonials: [
      {
        ownerComment:
          "Kit elegante e funcional, ideal para organizar o banheiro.",
        username: "Carol",
      },
    ],
  },
  {
    id: "19",
    name: "Kit de Banheiro Preto",
    description:
      "Kit de lavabo em vidro preto, composto por 5 peças. Possui um pequeno defeito no canto de uma das tampas.",
    salePrice: 200.0,
    references: [
      {
        price: 360.0,
        link: "https://www.magazineluiza.com.br/kit-de-banheiro-luxo-5-pecas-lavabo-difusor-porta-escova-porta-treco-bnadeja-jc-style/p/dg31353j09/ud/udab/",
        storeName: "MagaLu",
      },
      {
        price: 49.9,
        link: "https://www.tokstok.com.br/lixeira-7-l-preto-brilhante-epicentro/p",
        storeName: "Tok & Stok",
      },
    ],
    imageUrls: [
      "https://a-static.mlcdn.com.br/800x560/kit-de-banheiro-luxo-5-pecas-lavabo-difusor-porta-escova-porta-treco-bnadeja-jc-style/jcstyle/kitbanhei5pecaspretopreto/4263909afe807b24b15bf2002f6c875f.jpeg",
      "https://i.postimg.cc/WpDwBZL8/IMG_4035.jpg",
      "https://i.postimg.cc/J795MhRL/IMG_4036.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "sold",
    specifications: {
      Material: "Vidro",
      Cor: "Preto",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, porta-aromatizador, porta-treco multiuso e lixeira",
    },
    testimonials: [
      {
        ownerComment:
          "Estamos dando um bom desconto porque ele está com uma trinquinha num dos cantos de uma tampa porque eu deixei cair na pia.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "20",
    name: "Kit de Bancada para Banheiro Cerâmica Madeira de Bambu Clara Fudji Sensea 5 Peças e Lixeira",
    description:
      "Kit de bancada para banheiro em cerâmica com detalhes em madeira de bambu clara, modelo Fudji Sensea, composto por 3 peças e uma lixeira.",
    salePrice: 700,
    references: [
      {
        price: 79.9,
        link: "https://www.tokstok.com.br/bandeja-38-cm-x-24-cm-bambu-bamboo/p",
        storeName: "Tok & Stok  - Bandeja grande",
      },
      {
        price: 154.9,
        link: "https://www.leroymerlin.com.br/porta-objetos-de-bancada-para-banheiro-fibra-natural-marrom-natural-bamboo-sensea_89830923",
        storeName: "LeroyMerlin - Porta objetos",
      },
      {
        price: 104.9,
        link: "https://www.leroymerlin.com.br/bandeja-para-banheiro-de-madeira-marrom-natural-bamboo-sensea_89830762",
        storeName: "LeroyMerlin - Bandeja pequena",
      },
      {
        price: 89.9,
        link: "https://www.leroymerlin.com.br/porta-sabonete-liquido-de-bancada-para-banheiro-300ml-ceramica-madeira-clara-fudji-sensea_89830076",
        storeName: "LeroyMerlin - Porta-sabonete",
      },
      {
        price: 94.9,
        link: "https://www.leroymerlin.com.br/porta-objetos-de-bancada-para-banheiro-ceramica-madeira-clara-fudji-sensea_89830090",
        storeName: "LeroyMerlin - Porta-objetos (cerâmica)",
      },
      {
        price: 178.42,
        link: "https://www.leroymerlin.com.br/lixeira-para-banheiro-3l-metal-e-madeira-pedal-branca-sensea_90503504",
        storeName: "LeroyMerlin - Lixeira",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/YSfJKGSP/2f8fd7fd-c7e9-4dc1-b799-67a2ea1540e9.jpg",
      "https://i.postimg.cc/25fPKFCv/ae641d85-818e-40b1-8deb-01310bf82ada.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Cerâmica e Bambu",
      Cor: "Branco e Madeira Clara",
      "Itens Inclusos":
        "Porta-sabonete líquido, porta-escovas, saboneteira, lixeira e kit com 2 bandejas",
    },
    testimonials: [
      {
        ownerComment:
          "Colocamos este kit no nosso banheiro para impressionar as visitas e parece que deu certo. Todos elogiaram a decoração.",
        username: "Mauro",
      },
      {
        ownerComment: "Kit de banheiro muito prático e completo.",
        username: "Carol",
      },
    ],
  },
  {
    id: "21",
    name: "Varal de Chão",
    description: "Varal de Chão Com Abas Retrátil Slim Preto ",
    salePrice: 50.0,
    references: [
      {
        price: 78.99,
        link: "https://www.mercadolivre.com.br/varal-chao-com-abas-retratil-slim-preto-mor/p/MLB24672996#polycard_client=search-nordic&searchVariation=MLB24672996&wid=MLB5306070068&position=3&search_layout=grid&type=product&tracking_id=cd5f81ff-3124-425c-bfc8-34f7be2ee29a&sid=search",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_933390-MLU72826544065_112023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_703171-MLU70636393863_072023-F.webp",
      "https://i.postimg.cc/PqLRJyCY/11b82ac8-a82a-4aad-9b1a-bcb006245451.jpg",
      "https://i.postimg.cc/VkkTQm17/f24d6b43-ae96-4aa2-8e89-21c25facacfa.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "reserved",
    specifications: {
      Material: "Aço",
      Dimensões:
        "Altura aberto: 89 cm, Largura aberto: 49 cm, Comprimento aberto: 144 cm",
      "Mais informações": "6 varetas e é extensível",
      Cor: "Preto",
    },
    testimonials: [
      {
        ownerComment: "Varal de chão muito bom. Fácil de guardar e de usar.",
        username: "Carol",
      },
    ],
  },
  {
    id: "22",
    name: "Varal de Parede",
    description: "Varal Mágico 74cm com 4 varetas - alumínio - Branco",
    salePrice: 100.0,
    references: [
      {
        price: 168.2,
        link: "https://www.mercadolivre.com.br/varal-magico-74cm/p/MLB25609404?pdp_filters=item_id%3AMLB5112058044&from=gshop&matt_tool=37064035&matt_word=&matt_source=google&matt_campaign_id=22090354481&matt_ad_group_id=173090606396&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882732977&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB25609404-product&matt_product_partition_id=2390507632238&matt_target_id=pla-2390507632238&cq_src=google_ads&cq_cmp=22090354481&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goD5Jp255kCFTVcRMtPMZQJfCrRMIdt8h422DAe4_MxSu1wmNvSRsPxoCoUUQAvD_BwE",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_901319-MLU70791468198_082023-F.webp",
      "https://i.postimg.cc/kXnYKqVn/IMG-3952.jpg",
      "https://i.postimg.cc/5ymPTkrd/IMG-3953.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "available",
    specifications: {
      Material: "Alumínio",
      Dimensões:
        "Altura aberto: 8 cm, Largura aberto: 35 cm, Comprimento aberto: 74 cm",
      Cor: "Branco",
    },
    testimonials: [
      {
        ownerComment:
          "Esse varal é muito resistente e fica bem compacto quando dobrado.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "23",
    name: "Aspirador de Pó Robô Multilaser",
    description:
      "Aspirador robô 3 em 1 que varre, aspira e passa pano. Equipado com sensores de obstáculos e antiqueda, ideal para diversos tipos de piso.",
    salePrice: 250,
    references: [
      {
        price: 450,
        link: "https://www.amazon.com.br/Aspirador-Recarreg%C3%A1vel-Multilaser-HO041-Vermelho/dp/B07MTHP5SF?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AOYW3WN7VBOJS",
        storeName: "Amazon",
      },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/51TPurBPfVL._AC_SL1000_.jpg",
      "https://i.postimg.cc/HsHRzbN1/IMG-3966.jpg",
      "https://i.postimg.cc/66CFCMYh/IMG-3967.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "sold",
    specifications: {
      Potência: "30W",
      "Duração da Bateria": "2 horas",
      "Tempo de Carregamento": "4 horas",
      "Capacidade da Bateria": "1800 mAh",
      "Modos de Limpeza": "Auto, Espiral, Borda",
      Sensores: "Obstáculos e antiqueda",
      Dimensões: "AxLxP: 11,5 cm x 38,2 cm x 30,7 cm",
      Peso: "1,5 kg",
    },
    testimonials: [
      {
        ownerComment:
          "Parece uma joaninha gigante andando em casa. Tem que ficar um pouco de olho que ele às vezes empaca quando tem desnível, ele não é smart. Funciona com um sensorzinho de obstáculos.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "24",
    name: "Aspirador de Pó e Água Vertical Sem Fio WAP Acqua Mob 2 em 1",
    description:
      "Aspirador vertical sem fio 2 em 1 que aspira pó e líquidos. Leve, prático e ideal para limpezas rápidas e eficientes.",
    salePrice: 350.0,
    references: [
      {
        price: 550.0,
        link: "https://shopee.com.br/Aspirador-de-P%C3%B3-e-%C3%81gua-Vertical-sem-fio-WAP-Acqua-Mob-2-em-1-FW006484-i.548900434.14275039369?xptdk=3f21d5c7-a056-4ae1-be46-f1bc14afcf0e",
        storeName: "Shopee",
      },
    ],
    imageUrls: [
      "https://down-br.img.susercontent.com/file/f2cec769d6f07bbdf1f0e401b21bf801.webp",
      "https://i.postimg.cc/sgHL3qg3/IMG-3964.jpg",
      "https://i.postimg.cc/VLRTVdyr/IMG-3965.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "reserved",
    specifications: {
      Tipo: "Sem fio",
      Função: "Aspira pó e água",
      Acessórios: "Bocal para cantos e frestas",
      "Autonomia da Bateria": "Até 30 minutos",
      "Tempo de Carregamento": "3 a 4 horas",
      Peso: "1,3 kg",
    },
    testimonials: [
      {
        ownerComment:
          "Esse aspira bem e rapidinho. Fácil de usar e a bateria dura várias aspirações. Podem levar sem erro. Ele é pequeno, fácil de guardar e tem várias ponteiras para diferentes usos.",
        username: "Mauro",
      },
      {
        ownerComment: "Prático para limpezas rápidas e manutenção diária.",
        username: "Carol",
      },
    ],
  },
  {
    id: "25",
    name: "Banqueta Giratória Milano",
    description:
      "Banquetas giratórias Milano com design moderno e assento estofado em cinza. Ideal para cozinhas americanas e áreas de convivência. Possui pequenas marcas no tecido nos cantos superiores. LEVE AS DUAS POR R$400,00",
    salePrice: 150.0,
    references: [
      {
        price: 436.48,
        link: "https://www.mobly.com.br/banqueta-giratoria-milano-cinza-553605.html",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://static.mobly.com.br/p/Keva-Banqueta-GiratC3B3ria-Milano-Cinza-4272-506355-1.jpg",
      "https://static.mobly.com.br/p/Keva-Banqueta-GiratC3B3ria-Milano-Cinza-4274-506355-2.jpg",
      "https://i.postimg.cc/k4wMwGwt/IMG_3925.jpg",
      "https://i.postimg.cc/ZnMbtQGb/IMG_3927.jpg",
      "https://i.postimg.cc/50DL4Pd3/IMG_4032.jpg",
      "https://i.postimg.cc/7Y0M6yLT/IMG_4033.jpg",
      "https://i.postimg.cc/XYWKBDZ1/IMG_4034.jpg",
    ],
    category: "Móveis",
    availability: "reserved",
    specifications: {
      Material: "Assento estofado e estrutura metálica",
      Cor: "Cinza",
      "Altura do assento": "Ajustável de 60 cm a 80 cm",
      Base: "Cromada com apoio para os pés",
      "Peso Suportado": "Até 120 kg",
      Dimensões: "Altura máxima: 106cm, diâmetro: 50cm",
    },
    testimonials: [
      {
        ownerComment:
          "Essa banqueta é muito prática. Eu usei bastante e ela acabou ficando com uns rasguinhos de leve nos cantos. Temos 2, então posso fazer um descontinho extra pra quem levar o par.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Banquetas confortáveis e altura ajustável perfeita para bancada. Meu marido danificou um pouco o revestimento das pontas de tanto ficar girando, mas ainda está muito confortável.",
        username: "Carol",
      },
    ],
  },
  {
    id: "26",
    name: "Blender Oster MyBlend",
    description:
      "Liquidificador pessoal Blender Oster Myblend com 2 jarras portáteis, Preto 110V, 250W, BLSTPB-BBL. Produto ideal para preparar shakes e smoothies.",
    salePrice: 200.0,
    references: [
      {
        price: 264.9,
        link: "https://www.carrefour.com.br/blender-myblend-2-jarras-oster-220v-mp18351998/p",
        storeName: "Carrefour",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_976851-MLB71543411984_092023-F.webp",
      "https://i.postimg.cc/KcVjz36j/3562331a-e6c7-4435-85e3-dd6a2a346929.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "reserved",
    specifications: {
      Potência: "250W",
      Voltagem: "110V",
      "Capacidade das Jarras": "600 ml cada",
      "Material das Lâminas": "Aço inoxidável",
      Acessórios: "2 jarras portáteis com tampa",
    },
    testimonials: [
      {
        ownerComment:
          "Este blender é muito prático para o dia a dia. Fácil de lavar também. A Carol gosta bastante.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Excelente para preparar vitaminas e shakes. Lava muito bem na lava-louças",
        username: "Carol",
      },
    ],
  },
  {
    id: "27",
    name: "Piano Digital Casio CDP-S110 com Suporte",
    description:
      "Piano Digital Stage CDP-S110 BK compacto com 88 teclas e suporte dedicado. Ideal para estudantes e músicos profissionais. Acompanha suporte para Piano Digital, mas sem suporte de partitura.",
    salePrice: 2900.0,
    references: [
      {
        price: 3125.0,
        link: "https://produto.mercadolivre.com.br/MLB-2784305839-piano-digital-casio-cdp-s110-stage-profissional-suporte-_JM",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/1tn3PLBB/image.png",
      "https://http2.mlstatic.com/D_NQ_NP_2X_965503-MLB54102766402_032023-F.webp",
      "https://i.postimg.cc/jS2HPjSS/image.png",
    ],
    category: "Instrumentos Musicais",
    availability: "available",
    specifications: {
      Teclas: "88 teclas com ação de martelo escalonado",
      Polifonia: "64 vozes",
      Timbres: "10 sons integrados",
      Conectividade: "USB para host, entrada para pedal",
      Acessórios: "Suporte dedicado, pedal de sustain",
      Dimensões: "AxLxP: 70 x 132 x 24 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Esse piano eu não gostaria de vender, mas não vai ter jeito. Ele é excelente, o som é muito limpo e realista, o melhor piano digital que eu já tive. Comprei também com o suporte original da Casio, e vou dar de brinde o pedal de sustain.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "11",
    name: "Mesa de Escritório Studio",
    description: "Mesa de Escritório Studio Carvalho A 75cm x L 150cm X P 50cm",
    salePrice: 260.0,
    references: [
      {
        price: 301.45,
        link: "https://www.mobly.com.br/mesa-de-escritorio-studio-carvalho-150-cm-801435.html?custom_campaign=search_escritorio&custom_source=google&custom_medium=cpc&gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goOYs7kEooB18PkGiwd7vfYkqydTUwtPQ3C5KJEf5MHFrNo3FgBBV5RoCYhAQAvD_BwE",
        storeName: "Mobly",
      },
    ],
    imageUrls: [
      "https://static.mobly.com.br/p/Compace-Mesa-de-EscritC3B3rio-Studio-Carvalho-150-cm-3489-534108-2.jpg",
      "https://static.mobly.com.br/p/Compace-Mesa-de-EscritC3B3rio-Studio-Carvalho-150-cm-3491-534108-3.jpg",
    ],
    category: "Móveis",
    availability: "available",
    specifications: {
      Material: "Estrutura em aço, tampo em MDP e acabamento epóxi texturizado",
      Altura: "75 cm",
      Comprimento: "150 cm",
      Largura: "50 cm",
      "Peso Suportado": "14,2 kg",
      Cor: "Carvalho e Preto",
    },
    testimonials: [
      {
        ownerComment:
          "Mesa de escritório muito boa. Faremos um desconto extra para quem levar a outra mesa do conjunto.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "28",
    name: "Organizador de geladeira",
    description:
      "Kit com 6 organizadores de geladeira de 2,2L e um porta frios. Cor transparente/branco.",
    salePrice: 250.0,
    references: [
      {
        price: 300.0,
        link: "https://www.mercadolivre.com.br/kit-3-organizadores-de-geladeira-22l-e-porta-frios-duplo-ou-cor-transparente/p/MLB29531760",
        storeName: "Mercado Livre",
      },
    ],
    imageUrls: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_914490-MLU73764835966_012024-F.webp",
      "https://i.postimg.cc/4dfjJf7x/3648a21b-cd87-495a-bcd8-1bc62475c2ae.jpg",
      "https://i.postimg.cc/ZKXkrzgw/b038606a-db9d-4a8e-998c-1a7ea922bdfb.jpg",
    ],
    category: "Utilidades Domésticas",
    availability: "reserved",
    specifications: {
      Material: "Plástico BPA Free",
      Capacidade: "2,2L por organizador",
      Dimensões: "AxLxP: 9 x 29 x 15cm",
      Cor: "Transparente/Branco",
    },
    testimonials: [
      {
        ownerComment:
          "Organizadores ideais para manter a geladeira arrumada, otimizar espaço e prolongar a qualidade dos alimentos frescos.",
        username: "Carol",
      },
    ],
  },
  {
    id: "29",
    name: "Liquidificador Arno PowerMix 550",
    description:
      "Liquidificador prático e funcional com 2 níveis de velocidade.",
    salePrice: 50,
    references: [
      {
        price: 100.0,
        link: "https://www.amazon.com.br/Arno-LQ10-Liquidificador-Power-Preto/dp/B07R445FNM/ref=asc_df_B07R445FNM/?tag=googleshopp00-20&linkCode=df0&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=15896182093808683000&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195869&hvtargid=pla-956125898572&mcid=1c292080eef030da9e3765785a0940b1&language=pt_BR&gad_source=1&th=1",
        storeName: "Amazon",
      },
    ],
    imageUrls: [
      "https://lojaarno.vtexassets.com/arquivos/ids/166557-1200-auto?v=638626964618030000&width=1200&height=auto&aspect=true",
      "https://i.postimg.cc/2jcNSZxR/ef614147-93ca-4e26-b88b-fbd7cca5b304.jpg",
      "https://i.postimg.cc/281RbSHq/eead0e82-5391-4f41-9f91-5aa1dbeaef28.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "sold",
    specifications: {
      Modelo: "Arno Powermix 550 LQ10",
      Potência: "550W (110V)",
      Capacidade: "2L",
      Velocidades: "2 níveis",
      Dimensões: "AxLxP: 39,4 x 20,3 x 18,5 cm",
    },
    testimonials: [
      {
        ownerComment:
          "Liquidificador simples e prático, ideal para diversas preparações na cozinha. Lava direitinho na lava-louças.",
        username: "Mauro",
      },
      {
        ownerComment: "Excelente para preparar vitaminas e molhos.",
        username: "Carol",
      },
    ],
  },
  {
    id: "30",
    name: "Máquina de lavar louças Brastemp BLF10BR",
    description:
      "Máquina de lavar louças eficiente e moderna, ideal para facilitar o dia a dia na cozinha.",
    salePrice: 3700.0,
    references: [
      {
        price: 4000.0,
        link: "https://www.brastemp.com.br/lava-loucas-10-servicos-brastemp-cor-inox-com-ciclo-pesado/p?idsku=326020167&utmi_cp=cpc&utmi_campaign=cpc&gad_source=1&gclid=Cj0KCQjwm7q-BhDRARIsACD6-fWaUKnGKTZhnXXwWPjk_LQus2ofbpWEzeJPLvnbIb1J0G5qTw7XJMgaArcxEALw_wcB",
        storeName: "",
      },
    ],
    imageUrls: [
      "https://brastemp.vtexassets.com/arquivos/ids/224004-500-500?v=637699034121630000&width=500&height=500&aspect=true",
      "https://brastemp.vtexassets.com/arquivos/ids/224007-500-500?v=637699034126970000&width=500&height=500&aspect=true",
      "https://i.postimg.cc/Wp7X2C5x/IMG-3938.jpg",
      "https://i.postimg.cc/0yzf0Q9q/IMG-3937.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "sold",
    specifications: {
      Modelo: "Brastemp BLF10BR",
      Capacidade: "10 serviços",
      "Programas de Lavagem": "6 programas, incluindo Eco, Intensivo e Rápido",
      "Eficiência Energética": "Classe A++",
      "Nível de Ruído": "44 dB",
      Dimensões: "AxLxP: 84,5 x 44,8 x 63,7cm",
    },
    testimonials: [
      {
        ownerComment:
          "Prezamos pela qualidade na hora da compra e acertamos em cheio. Máquina muito silenciosa e lava muito bem. Mesmo cheia de louças sujas ele deixa todas elas limpinhas e brilhantes. Basta colocar um sabãozinho em pó e ela já identifica o nível de sujeira com o modo Smart Sensor.",
        username: "Mauro",
      },
      {
        ownerComment: "Economia significativa de tempo na cozinha.",
        username: "Carol",
      },
    ],
  },
  {
    id: "31",
    name: "Geladeira Samsung BAROSA RL4353",
    description:
      "Geladeira Duplex Inverse BAROSA RL4353 com Smart Sensor para manter a temperatura, rack para Vinho e porta reversível. Ou seja: se adapta ao design da cozinha possibilitando abrir de ambos os lados. Freezer com 4 gavetas na parte inferior.",
    salePrice: 5000,
    references: [
      {
        price: 6576.74,
        link: "https://www.samsung.com/br/refrigerators/bottom-mount-freezer/435l-ez-clean-steel-rl4353rbasl-az/",
        storeName: "Samsung",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/D0fQJfxH/IMG-3932.jpg",
      "https://images.samsung.com/is/image/samsung/p6pim/br/rl4353rbasl-bz/gallery/br-bottom-freezer-rl4353rbasl-rl4353rbasl-bz-537712356?$684_547_JPG$",
      "https://images.samsung.com/is/image/samsung/br-bottom-freezer-rl4353rbasl-rl4353rbasl-bz-frontangleopensilver-192805607?$684_547_JPG$",
      "https://images.samsung.com/is/image/samsung/br-bottom-freezer-rl4353rbasl-rl4353rbasl-bz-topanglesilver-192805610?$684_547_JPG$",
      "https://i.postimg.cc/HL59FhJZ/IMG-3934.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Voltagem: "110V",
      "Capacidade total": "435L - Freezer 132 L e Refrigerador 303 L",
      "Material das Lâminas": "Aço inoxidável",
      Dimensões: "AxLxP: 185 x 70 x 69 cm",
      Acessórios:
        "Porta reversível, puxador embutido, all-around Cooling, rack para vinhos, iluminação LED e sensores.",
    },
    testimonials: [
      {
        ownerComment:
          "Compramos esta geladeira pela qualidade e pela possibilidade de inverter o lado de abertura da porta. Acabamos não precisando trocar o lado, ela ainda abre da esquerda pra direita. Extremamente silenciosa e gela muito bem. Dá pra controlar direitinho a temperatura tanto do freezer quanto da geladeira.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Organização interna bem planejada, iluminação eficiente e o freezer é enorme. O controle de temperatura também é perfeito.",
        username: "Carol",
      },
    ],
  },
  {
    id: "32",
    name: "Air Fryer Electrolux",
    description:
      "Air Fryer Electrolux por Rita Lobo 3,2L Digital Cinza Experience Com Função Virar 1400W (EAF20)",
    salePrice: 250.0,
    references: [
      {
        price: 329,
        link: "https://loja.electrolux.com.br/air-fryer-electrolux-por-rita-lobo-32l-digital-cinza-experience-com-funcao-virar-1400w--eaf20-/p?idsku=310118747&gad_source=1&gclid=Cj0KCQjwm7q-BhDRARIsACD6-fVclkrhxwOrDPLLLqBAtJTZ-KGwl1KxyVakt5VOIic15gAy4LEFj0YaAg6dEALw_wcB&gclsrc=aw.ds",
        storeName: "Eletrolux",
      },
    ],
    imageUrls: [
      "https://electrolux.vtexassets.com/arquivos/ids/222842-1200-1200?v=638036159709630000&width=1200&height=1200&aspect=true",
      "https://electrolux.vtexassets.com/arquivos/ids/222843-1200-1200?v=638036159840070000&width=1200&height=1200&aspect=true",
      "https://i.postimg.cc/2jFx9L3V/IMG-4012.jpg",
      "https://i.postimg.cc/cL6MJDhn/IMG-4013.jpg",
      "https://i.postimg.cc/rFVNBytg/IMG-4014.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "reserved",
    specifications: {
      Potência: "1400W",
      Voltagem: "110V",
      Material: "Air Fryer com painel digital e 9 receitas pré-programadas.",
      Dimensões: "AxLxP: 32,3 x 28,9 x 39,3 cm",
      Cor: "Cinza e Preto",
    },
    testimonials: [
      {
        ownerComment:
          "Essa air fryer ajuda muito por conta da praticidade. Uma vez deixei cair a panela interna na bancada e acabou fazendo um pequeno amassado que não atrapalha em nada o funcionamento.",
        username: "Mauro",
      },
      {
        ownerComment: "Prepara alimentos de forma rápida e saudável.",
        username: "Carol",
      },
    ],
  },
  {
    id: "33",
    name: "Cafeteira Dolce Gusto + Cápsulas",
    description:
      "Dolce Gusto Mini Me Preta 110v. Leve também 5 caixas de cápsulas de sabores variados.",
    salePrice: 200,
    references: [
      {
        price: 399.9,
        link: "https://www.nescafe-dolcegusto.com.br/maquinas-cafe/mini-me-automatica-maquina-de-cafe-preta-110v",
        storeName: "Nescafé-Dolce Gusto",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/FHc9P2GX/image.png",
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/_/2/_2-mini-me-autom_tica-m_quina-de-caf_-preta-_110v_.webp",
      "https://i.postimg.cc/c4FB0qRW/IMG-4015.jpg",
      "https://i.postimg.cc/YCVNL1Dy/IMG-4016.jpg",
    ],
    category: "Eletrodomésticos",
    availability: "available",
    specifications: {
      Potência: "1500W",
      Capacidade: "0.8L",
      Voltagem: "110V",
      Acessórios: "Bandeja de coleta removível",
    },
    testimonials: [
      {
        ownerComment:
          "Cafeteira muito prática. Resolvi agora que vou dar umas 5 caixas de cápsulas de brinde pra quem levar. Sabores variados",
        username: "Mauro",
      },
      {
        ownerComment:
          "Café sempre na temperatura ideal e com sabor perfeito. Muito prática.",
        username: "Carol",
      },
    ],
  },
  {
    id: "34",
    name: "Painel ripado Curupixá - 8 peças para montar",
    description: "8 peças de painel ripado Curupixá 6x270cm, Premium Moldurama",
    salePrice: 165,
    references: [
      {
        price: 330,
        link: "https://www.leroymerlin.com.br/painel-ripado-em-mdf-6x270cm-curupixa-premium-moldurama-4-pecas_91916475",
        storeName: "Leroy Merlin (4 peças)",
      },
    ],
    imageUrls: [
      "https://cdn.leroymerlin.com.br/products/painel_ripado_madeira_mdf_curupixa_2,70mx1,5cmx6cm_moldurama_91916475_6cf2_600x600.jpg",
      "https://cdn.leroymerlin.com.br/products/painel_ripado_madeira_mdf_curupixa_2,70mx1,5cmx6cm_moldurama_91916475_f8fe_600x600.jpg",
      "https://cdn.leroymerlin.com.br/products/painel_ripado_madeira_mdf_curupixa_2,70mx1,5cmx6cm_moldurama_91916475_87fc_600x600.jpg",
      "https://i.postimg.cc/Y0ggh1tw/IMG_4030.jpg",
    ],
    category: "Móveis",
    availability: "sold",
    specifications: {
      Comprimento: "270cm",
      Largura: "6cm cada",
      "Área total": "270cm x 40cm",
    },
    testimonials: [
      {
        ownerComment:
          "Compramos as peças na Leroy Merlin para montar o painel mas acabamos não instalando pois preferimos o nosso painel do conjunto com rack. Guardamos no depósito para dar a você a oportunidade de montar e aproveitar a um preço de 2 conjuntos pelo preço de 1.",
        username: "Mauro",
      },
    ],
  },
  {
    id: "35",
    name: "Piano Digital Yamaha DGX-630",
    description:
      "Piano Digital Yamaha DGX-630 com banqueta, pedal de sustain e apoio de partitura. Teclado com 88 teclas com peso de piano, diversos timbres e funções de aprendizado.",
    salePrice: 1200,
    references: [
      {
        price: 1700.0,
        link: "https://ba.olx.com.br/regiao-de-vitoria-da-conquista-e-barreiras/instrumentos-musicais/piano-teclado-digital-yamaha-portable-grand-dgx-620-1370629459",
        storeName: "OLX",
      },
    ],
    imageUrls: [
      "https://i.postimg.cc/kXSk316K/IMG_4057.jpg",
      "https://i.postimg.cc/pdW7jP0J/IMG_4058.jpg",
      "https://media.guitarcenter.com/is/image/MMGS7/706176000000000-01-600x600.jpg",
    ],
    category: "Instrumentos Musicais",
    availability: "sold",
    specifications: {
      Teclas: "88 teclas com peso de piano",
      Dimensões: "LxPxA: 139 x 45 x 79 cm",
      Acessórios: "Banqueta, pedal de sustain e apoio de partitura",
      Timbres: "Mais de 500 vozes instrumentais",
      Polifonia: "64 notas",
      "Funções Especiais": "Modo Dual, Split, Metrônomo, Gravador",
    },
    testimonials: [
      {
        ownerComment:
          "Este foi o primeiro piano digital que ganhei, e é excelente para iniciantes. Aprendi muito sobre teoria musical e técnicas de piano por conta de todas as funcionalidades do piano através do display digital. Também é possível gravar músicas e reproduzir com centenas de timbres e acompanhamentos. Está com apenas sinais de uso, ótimo pra quem estiver começando e quiser um instrumento de qualidade.",
        username: "Mauro",
      },
      {
        ownerComment:
          "Piano digital completo, com ótimo peso nas teclas e som muito realista. Acompanha todos os acessórios necessários para começar a tocar imediatamente. O pedal de sustain e a banqueta estão em perfeito estado. O piano tem sinais de uso pois está sendo usado faz mais de 10 anos, mas foi muito bem conservado.",
        username: "Carol",
      },
    ],
  },
];

// Add WhatsApp links to all products
products.forEach((product) => {
  product.whatsAppLink = generateWhatsAppLink({ productName: product.name });
});
