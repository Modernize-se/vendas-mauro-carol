export function generateWhatsAppLink({
  productName,
  customMessage,
}: {
  customMessage?: string;
  productName?: string;
}): string {
  // Updated with the actual phone number
  const phoneNumber = "5511995132003";
  if (!productName && !customMessage) {
    return `https://wa.me/${phoneNumber}`;
  }
  const message =
    customMessage ??
    encodeURIComponent(
      `Olá, estou interessado no produto "${productName}" que vocês estão vendendo. Podemos conversar sobre ele?`
    );

  return `https://wa.me/${phoneNumber}?text=${message}`;
}
