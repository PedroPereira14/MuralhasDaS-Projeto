// Fonte única de dados dos pratos — usada na Home, na página Pratos
// e na página de detalhe de cada prato. Para editar um prato (nome,
// descrição, foto, categoria), basta mudar aqui.

export const categories = [
  { id: 'entradas', label: 'Entradas & Petiscos' },
  { id: 'mar', label: 'Do Mar' },
  { id: 'carnes', label: 'Carnes' },
  { id: 'arroz-massa', label: 'Arroz & Massa' },
  { id: 'sobremesa', label: 'Sobremesa' }
]

export const pratos = [
  {
    slug: 'presunto',
    name: 'Presunto Fatiado na Hora',
    category: 'entradas',
    description: 'Cortado fino a partir da peça, no momento em que é pedido.',
    longDescription:
      'Presunto de cura lenta, cortado à faca diretamente da peça assim que é pedido, para chegar à mesa no seu melhor: fatias finas, macias e com o sabor intacto.',
    image: '/media/pratos/presunto.jpg'
  },
  {
    slug: 'tabua-enchidos',
    name: 'Tábua de Enchidos Grelhados',
    category: 'entradas',
    description: 'Seleção de chouriço, morcela e farinheira grelhados, servidos numa tábua.',
    longDescription:
      'Uma seleção de enchidos tradicionais — chouriço, morcela e farinheira — grelhados na brasa e servidos numa tábua de madeira, ideais para partilhar antes do prato principal.',
    image: '/media/pratos/tabua-enchidos.jpg'
  },
  {
    slug: 'ameijoas-bulhao-pato',
    name: 'Amêijoas à Bulhão Pato',
    category: 'entradas',
    description: 'Amêijoas salteadas em azeite, alho, vinho branco e coentros.',
    longDescription:
      'Amêijoas frescas salteadas em azeite, alho, vinho branco e coentros — um clássico da cozinha portuguesa, servido com o próprio caldo para acompanhar com pão.',
    image: '/media/pratos/ameijoas-bulhao-pato.jpg'
  },
  {
    slug: 'lagostins-grelhados',
    name: 'Lagostins Grelhados',
    category: 'mar',
    description: 'Lagostins inteiros grelhados na brasa, servidos com limão.',
    longDescription:
      'Lagostins inteiros grelhados na brasa até ficarem bem tostados por fora e suculentos por dentro, servidos simplesmente com folhas verdes e limão para realçar o sabor do marisco.',
    image: '/media/pratos/lagostins-grelhados.jpg'
  },
  {
    slug: 'filetes-peixe',
    name: 'Filetes de Peixe Fritos',
    category: 'mar',
    description: 'Peixe do dia em fina massa frita, acompanhado de arroz de tomate.',
    longDescription:
      'Filetes de peixe do dia, envolvidos numa massa fina e fritos até dourarem, servidos com salada da época e acompanhados de arroz de tomate.',
    image: '/media/pratos/filetes-peixe.jpg'
  },
  {
    slug: 'bacalhau-a-bras',
    name: 'Bacalhau à Brás',
    category: 'mar',
    description: 'Bacalhau desfiado com batata palha e ovo, finalizado com azeitona preta.',
    longDescription:
      'Bacalhau desfiado salteado com cebola e batata palha, envolvido em ovo e finalizado com azeitona preta e salsa fresca — um dos pratos mais icónicos de Portugal.',
    image: '/media/pratos/bacalhau-a-bras.jpg'
  },
  {
    slug: 'cabrito-assado',
    name: 'Cabrito Assado no Forno',
    category: 'carnes',
    description: 'Assado lentamente com batata a murro, cenoura e laranja.',
    longDescription:
      'Cabrito assado lentamente no forno até se desfazer à primeira garfada, acompanhado de batata a murro, cenoura assada e um toque cítrico de laranja.',
    image: '/media/pratos/cabrito-assado.jpg'
  },
  {
    slug: 'costeletas-borrego',
    name: 'Costeletas de Borrego Grelhadas',
    category: 'carnes',
    description: 'Grelhadas na brasa e finalizadas com flor de sal, acompanhadas de batata frita.',
    longDescription:
      'Costeletas de borrego grelhadas na brasa e finalizadas com flor de sal, servidas com batata frita às rodelas — simples e cheias de sabor.',
    image: '/media/pratos/costeletas-borrego.jpg'
  },
  {
    slug: 'posta-gratinada',
    name: 'Posta Gratinada da Casa',
    category: 'carnes',
    description: 'Coberta com molho e queijo gratinado, servida com batata frita às rodelas.',
    longDescription:
      'Posta coberta com um molho da casa e queijo gratinado, finalizada com azeitona e ervas frescas, servida com batata frita às rodelas.',
    image: '/media/pratos/posta-gratinada.jpg'
  },
  {
    slug: 'posta-bacon',
    name: 'Posta Enrolada em Bacon',
    category: 'carnes',
    description: 'Envolvida em fatias de bacon e assada no forno com batata e legumes salteados.',
    longDescription:
      'Posta envolvida em fatias de bacon e assada lentamente no forno com batata, cenoura e um raminho de alecrim, até o bacon ficar estaladiço.',
    image: '/media/pratos/posta-bacon.jpg'
  },
  {
    slug: 'arroz-tomate',
    name: 'Arroz de Tomate',
    category: 'arroz-massa',
    description: 'Acompanhamento clássico da casa, malandrinho e temperado com coentros.',
    longDescription:
      'Arroz de tomate malandrinho, cozinhado lentamente e temperado com coentros frescos — o acompanhamento clássico da casa para os pratos de peixe.',
    image: '/media/pratos/arroz-tomate.jpg'
  },
  {
    slug: 'arroz-cabidela',
    name: 'Arroz de Cabidela',
    category: 'arroz-massa',
    description: 'Arroz malandrinho de carne, cozinhado à moda tradicional com couve.',
    longDescription:
      'Arroz malandrinho de carne, cozinhado à moda tradicional com couve — um prato de sabor intenso e bem português.',
    image: '/media/pratos/arroz-cabidela.jpg'
  },
  {
    slug: 'arroz-lampreia',
    name: 'Arroz de Lampreia',
    category: 'arroz-massa',
    description: 'Prato tradicional português, de sabor intenso e confecção demorada.',
    longDescription:
      'Um prato tradicional português de sabor intenso e confecção demorada, preparado à moda da casa.',
    image: '/media/pratos/arroz-lampreia.jpg'
  },
  {
    slug: 'talharim-camarao',
    name: 'Talharim com Camarão e Brócolos',
    category: 'arroz-massa',
    description: 'Talharim salteado com camarão, brócolos e manjericão fresco.',
    longDescription:
      'Talharim salteado com camarão, brócolos e manjericão fresco, envolvido num toque de azeite e alho — leve e cheio de sabor.',
    image: '/media/pratos/talharim-camarao.jpg'
  },
  {
    slug: 'cheesecake-frutos-vermelhos',
    name: 'Cheesecake de Frutos Vermelhos',
    category: 'sobremesa',
    description: 'Base amanteigada, recheio cremoso e calda de frutos vermelhos.',
    longDescription:
      'Base amanteigada, recheio cremoso e uma calda generosa de frutos vermelhos — a sobremesa mais pedida da casa.',
    image: '/media/pratos/cheesecake-frutos-vermelhos.jpg'
  },
  {
    slug: 'doce-da-casa',
    name: 'Doce da Casa com Sorvete',
    category: 'sobremesa',
    description: 'Doce conventual em calda de caramelo, acompanhado de sorvete e hortelã.',
    longDescription:
      'Doce conventual em calda de caramelo, servido com uma bola de sorvete e um raminho de hortelã fresca.',
    image: '/media/pratos/doce-da-casa.jpg'
  }
]

export function getPratoBySlug(slug) {
  return pratos.find((p) => p.slug === slug)
}

export function getPratosByCategory(categoryId) {
  return pratos.filter((p) => p.category === categoryId)
}
