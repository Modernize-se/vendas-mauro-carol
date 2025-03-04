
export function setupLazyLoading(): void {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.classList.add('lazy-load');
          
          img.onload = () => {
            img.classList.remove('lazy-load');
            img.classList.add('loaded');
            img.removeAttribute('data-src');
          };
          
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  images.forEach(image => {
    imageObserver.observe(image);
  });
}

export function createImageUrl(url: string, width = 800): string {
  // If using a CDN or image optimization service, you could modify
  // the URL here to get an optimized version
  return url;
}
