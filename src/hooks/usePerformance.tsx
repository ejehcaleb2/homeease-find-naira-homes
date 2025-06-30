
import { useCallback, useMemo } from 'react';

export const usePerformance = () => {
  // Debounce function for search inputs
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Memoized formatter functions
  const formatPrice = useMemo(() => (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }, []);

  const formatNumber = useMemo(() => (num: number) => {
    return new Intl.NumberFormat('en-NG').format(num);
  }, []);

  // Optimized image loading
  const optimizeImage = useCallback((src: string, width?: number, height?: number) => {
    if (!src) return '';
    
    // If it's an Unsplash image, optimize it
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('fit', 'crop');
      params.set('auto', 'format');
      params.set('q', '80');
      
      return `${baseUrl}?${params.toString()}`;
    }
    
    return src;
  }, []);

  return {
    debounce,
    formatPrice,
    formatNumber,
    optimizeImage,
  };
};
