
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function calculateDiscount(salePrice: number, referencePrice: number): number {
  if (!referencePrice || referencePrice <= salePrice) return 0;
  return Math.round(((referencePrice - salePrice) / referencePrice) * 100);
}
