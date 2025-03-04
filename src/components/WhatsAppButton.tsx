
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  link: string;
  className?: string;
  hasAnimation?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const WhatsAppButton = ({ 
  link, 
  className, 
  hasAnimation = true, 
  size = 'md' 
}: WhatsAppButtonProps) => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    if (hasAnimation) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [hasAnimation]);
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center bg-[#25D366] hover:bg-[#22c55e] text-white rounded-lg font-medium transition-all",
        sizeClasses[size],
        hasAnimation && animated && "animate-pulse",
        className
      )}
    >
      <MessageCircle size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="mr-2" />
      Perguntar sobre disponibilidade
    </a>
  );
};

export default WhatsAppButton;
