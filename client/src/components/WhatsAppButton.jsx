import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Chat on WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
