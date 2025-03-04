
export function generateWhatsAppLink(productName: string): string {
  // Replace this with your actual phone number
  const phoneNumber = "5511999999999";
  
  const message = encodeURIComponent(
    `Olá, estou interessado no ${productName} que vi no site! Ainda está disponível?`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
