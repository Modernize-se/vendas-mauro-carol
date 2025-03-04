
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reset state when images change
    setCurrentIndex(0);
    setIsLoading(true);
  }, [images]);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    setIsLoading(true);
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsLoading(true);
  };
  
  return (
    <div className="w-full">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-secondary/30">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagem ${currentIndex + 1}`}
          className={`w-full h-full object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? 'border-primary'
                  : 'border-transparent hover:border-border'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20">
                <img
                  src={image}
                  alt={`${productName} - Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
