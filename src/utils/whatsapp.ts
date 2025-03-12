const DEFAULT_MESSAGE =
  "Olá, gostaria de mais informações sobre os seguintes produtos à venda:";
export function generateWhatsAppLink({
  productName,
  customMessage = DEFAULT_MESSAGE,
}: {
  customMessage?: string;
  productName?: string;
}): string {
  // Updated with the actual phone number
  const phoneNumber = "5511995132003";
  if (!productName && !customMessage) {
    return `https://wa.me/${phoneNumber}`;
  }
  const message = productName
    ? encodeURIComponent(
        `Olá, estou interessado no produto "${productName}" que vocês estão vendendo. Podemos conversar sobre ele?`
      )
    : customMessage;

  return `https://wa.me/${phoneNumber}?text=${message}`;
}
