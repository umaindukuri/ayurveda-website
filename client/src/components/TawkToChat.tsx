import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function TawkToChat() {
  const [isAvailable, setIsAvailable] = useState(false);

  // Check consultation hours: 8 AM - 1 PM, 5 PM - 9 PM
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const hours = now.getHours();
      const day = now.getDay();

      // Closed on Sunday (day 0)
      if (day === 0) {
        setIsAvailable(false);
        return;
      }

      // Available: 8-13 (8 AM - 1 PM) or 17-21 (5 PM - 9 PM)
      const available = (hours >= 8 && hours < 13) || (hours >= 17 && hours < 21);
      setIsAvailable(available);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Initialize Tawk.to live chat
  useEffect(() => {
    const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID || 'default/default';
    
    if (typeof window !== 'undefined') {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/1h0qs9e1h`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      script.onload = () => {
        if (propertyId === 'default/default') {
          toast.info('Live Chat Demo: Replace VITE_TAWK_PROPERTY_ID with your Tawk.to property ID', {
            duration: 5000,
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  // Add availability indicator to Tawk widget
  useEffect(() => {
    const addIndicator = () => {
      const tawkWidget = document.querySelector('iframe[src*="tawk"]')?.parentElement;
      if (tawkWidget) {
        let indicator = tawkWidget.querySelector('.tawk-availability-indicator') as HTMLElement;
        if (!indicator) {
          indicator = document.createElement('div');
          indicator.className = 'tawk-availability-indicator';
          indicator.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: ${isAvailable ? '#10b981' : '#ef4444'};
            border: 2px solid white;
            box-shadow: 0 0 0 2px ${isAvailable ? '#10b981' : '#ef4444'};
            z-index: 1000;
            animation: ${isAvailable ? 'pulse 2s infinite' : 'none'};
          `;
          indicator.title = isAvailable ? 'Chat Available Now' : 'Chat Offline';
          tawkWidget.appendChild(indicator);
        } else {
          indicator.style.backgroundColor = isAvailable ? '#10b981' : '#ef4444';
          indicator.style.boxShadow = `0 0 0 2px ${isAvailable ? '#10b981' : '#ef4444'}`;
          indicator.style.animation = isAvailable ? 'pulse 2s infinite' : 'none';
          indicator.title = isAvailable ? 'Chat Available Now' : 'Chat Offline';
        }
      }
    };

    const timer = setTimeout(addIndicator, 2000);
    return () => clearTimeout(timer);
  }, [isAvailable]);

  // Add CSS animation for pulse effect
  useEffect(() => {
    if (!document.getElementById('tawk-pulse-animation')) {
      const style = document.createElement('style');
      style.id = 'tawk-pulse-animation';
      style.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return null;
}
