export const categories = [
  'Vitaminas e Suplementos', 'Dermocosméticos', 'Performance e Bem-estar',
  'Saúde da Mulher', 'Saúde Masculina', 'Imunidade', 'Saúde Digestiva',
  'Manipulados Personalizados',
] as const;

export interface Product {
  id: string;
  name: string;
  description: string;
  category: typeof categories[number];
  price: string;
  previousPrice?: string;
  rating: string;
  reviews: number;
}

export const products: readonly Product[] = [
  { id: 'creme', name: 'Creme Anti-idade', description: 'com Ácido Hialurônico', category: categories[1], price: '62,90', previousPrice: '89,90', rating: '4,9', reviews: 128 },
  { id: 'omega', name: 'Ômega 3', description: 'Alta Concentração', category: categories[0], price: '49,90', rating: '4,8', reviews: 96 },
  { id: 'hidratante', name: 'Hidratante Corporal', description: 'Nutritivo', category: categories[1], price: '39,90', rating: '4,9', reviews: 74 },
  { id: 'serum', name: 'Sérum Vitamina C', description: 'Antioxidante', category: categories[1], price: '55,90', previousPrice: '79,90', rating: '4,8', reviews: 203 },
  { id: 'colageno', name: 'Colágeno Verisol®', description: 'Peptídeos Bioativos', category: categories[0], price: '119,90', rating: '4,8', reviews: 167 },
];
