import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Send } from 'lucide-react';
import Logo from "../assets/bleoni-logo.png";

const WhatsAppContactModal: React.FC = () => {
  const [message, setMessage] = useState('');
  const phoneNumber = '38344561298';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const fullMessage = `Emri: Bleon Zllanoga\n\nMesazhi: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage('');
  };

  return (
    <>
      {/* WhatsApp Floating Button - Transparent */}
      <button
        onClick={() => document.getElementById('whatsapp-modal')?.classList.remove('hidden')}
        className="fixed bottom-6 left-6 z-50 bg-transparent border-2 border-[#25D366] text-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-[#25D366] hover:text-white group"
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        
        {/* Tooltip */}
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Na kontaktoni në WhatsApp
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </span>
      </button>

      <div id="whatsapp-modal" className="fixed inset-0 z-[100] hidden">
        <div 
          className="fixed inset-0 bg-black/50"
          onClick={() => document.getElementById('whatsapp-modal')?.classList.add('hidden')}
        ></div>
        
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
          <div className="bg-white rounded-lg shadow-2xl mx-4 overflow-hidden">
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">WhatsApp</h3>
                  <p className="text-white/90 text-sm">Dërgo mesazh drejtpërdrejt</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gray-100 mb-4 flex items-center justify-center overflow-hidden border-4 border-[#25D366]/10">
                  <img 
                    src={Logo} 
                    alt="Bleoni Keramik Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">Bleon Zllanoga</h4>
                  <p className="text-gray-600 text-sm mt-1">Pronar - Bleoni Keramik</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Shkruani mesazhin tuaj këtu..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] outline-none transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  Dërgo në WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.showWhatsAppModal = function() {
            document.getElementById('whatsapp-modal').classList.remove('hidden');
          }
          window.hideWhatsAppModal = function() {
            document.getElementById('whatsapp-modal').classList.add('hidden');
          }
        `
      }} />
    </>
  );
};

export default WhatsAppContactModal;