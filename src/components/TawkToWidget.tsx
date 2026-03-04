import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToWidget = () => {
  useEffect(() => {
    // Replace with your actual Tawk.to property ID and widget ID
    const tawkPropertyId = 'YOUR_TAWK_PROPERTY_ID';
    const tawkWidgetId = 'YOUR_TAWK_WIDGET_ID';

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize the widget once loaded
    window.Tawk_API.onLoad = function () {
      window.Tawk_API?.setAttributes?.({
        name: 'Visitante SNEB',
      });
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
    };
  }, []);

  return null; // Tawk.to injects its own UI
};

export default TawkToWidget;
