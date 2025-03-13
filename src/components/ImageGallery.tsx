import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Product } from "@/types/product";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  availability: Product["availability"];
}

const ImageGallery = ({
  images,
  productName,
  availability,
}: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset state when images change
    setCurrentIndex(0);
    setIsLoading(true);

    // Preload first image to detect if it's already cached
    const img = new Image();
    img.src = images[0];
    if (img.complete) {
      setIsLoading(false);
    }
  }, [images]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsLoading(true);
  };

  return (
    <div className="w-full">
      <Carousel
        className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-secondary/30"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square w-full">
                <img
                  src={image}
                  alt={`${productName} - Imagem ${index + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-500 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setIsLoading(false)}
                />

                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {availability !== "available" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`absolute transform rotate-[-20deg] rounded-lg px-8 py-2 border-4 ${
                        availability === "reserved"
                          ? "border-amber-500 bg-amber-500/20 text-amber-600"
                          : "border-red-500 bg-red-500/20 text-red-600"
                      } font-bold text-3xl uppercase tracking-wider shadow-lg`}
                    >
                      {availability === "reserved" ? "Reservado" : "Vendido"}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? "border-primary"
                  : "border-transparent hover:border-border"
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
