import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '01700524647';

export default function FloatWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ashiq%2C%20I%20want%20to%20talk%20about%20growing%20my%20business.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-7 right-7 z-[9999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <MessageCircle className="text-white w-8 h-8" />
    </motion.a>
  );
}
