import { FaWhatsapp } from 'react-icons/fa';

export default function AirtimeWhatsApp() {
  const phoneNumber = import.meta.env.VITE_MOBILE_NUMBER;
  

  const handleWhatsAppClick = () => {
    const message = "Hello, I’d like to chat with you from about devsch";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="text-sm font-medium">Chat</span>
      </button>
    </div>
  );
}
