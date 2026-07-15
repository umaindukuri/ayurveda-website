import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const phoneNumber = '919281332544'; // Dr. Kalyan's WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Dr.%20Kalyan%20Ayurveda%2C%20I%20would%20like%20to%20book%20a%20consultation.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
