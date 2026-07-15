import { useEffect } from 'react';
import { toast } from 'sonner';

export function TawkToChat() {
  useEffect(() => {
    // Initialize Tawk.to live chat
    // Replace 'default/default' with your actual Tawk.to property ID
    const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID || 'default/default';
    
    // Create Tawk object if it doesn't exist
    if (typeof window !== 'undefined') {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      // Load Tawk.to script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/1h0qs9e1h`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      script.onload = () => {
        // Show info toast on first load (demo mode)
        if (propertyId === 'default/default') {
          toast.info('Live Chat Demo: Replace VITE_TAWK_PROPERTY_ID with your Tawk.to property ID', {
            duration: 5000,
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        // Cleanup: remove script if component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return null;
}
