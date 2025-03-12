import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Testimonial } from "@/types/product";

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  maxDisplayed?: number;
}

const testimonialImages: Record<Testimonial["username"], string> = {
  Mauro: "https://i.postimg.cc/d16VLZ8S/Screenshot-at-Mar-11-20-44-27-2.jpg",
  Carol: "https://i.postimg.cc/j2jdNqcq/Screenshot-at-Mar-11-21-34-38-1.png",
};

export function Testimonials({
  testimonials,
  className,
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-4",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden"
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-full h-auto p-3 md:p-5 relative bg-card border-border rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src={testimonialImages[testimonial.username]}
                    alt={testimonial.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-3 md:mt-5 mb-3 md:mb-5">
                  <p className="text-foreground font-medium">
                    {testimonial.ownerComment}
                  </p>
                </div>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
