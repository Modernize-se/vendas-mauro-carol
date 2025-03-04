
export function generateWhatsAppLink(productName: string): string {
  // Replace this with your actual phone number
  const phoneNumber = "5511999999999";
  
  const message = encodeURIComponent(
    `Olá, estou interessado no ${productName} que vocês estão vendendo antes da mudança para Londres. Ainda está disponível?`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
