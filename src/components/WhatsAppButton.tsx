import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  link: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fixed?: boolean;
  isProductAvailable?: boolean;
}

const WhatsAppButton = ({
  link,
  className,
  size = "md",
  fixed = false,
  isProductAvailable = true,
}: WhatsAppButtonProps) => {
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all",
        sizeClasses[size],
        fixed && "fixed bottom-6 right-6 shadow-lg z-40",
        className
      )}
    >
      <MessageCircle
        size={size === "sm" ? 16 : size === "lg" ? 24 : 20}
        className="mr-2"
      />
      {isProductAvailable
        ? "Fale conosco para comprar já"
        : "Fale conosco mesmo assim"}
    </a>
  );
};

export default WhatsAppButton;
