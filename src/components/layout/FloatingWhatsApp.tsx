import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '8801700524647';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-whatsapp text-white rounded-full flex items-center justify-center shadow-whatsapp z-[9999]"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ scale: 1.2 }}
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
}
