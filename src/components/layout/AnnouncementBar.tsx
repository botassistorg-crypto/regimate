import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const WHATSAPP_NUMBER = '8801700524647';

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <motion.a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ashiq%2C%20I%20want%20to%20start%20my%2030-day%20free%20trial.`}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 bg-indigo-main flex items-center justify-center text-white text-sm font-semibold sticky top-0 z-[1000] px-4 text-center"
      whileHover={{ backgroundColor: '#4338CA' }}
    >
      {t('🎁 Start now and get your first 30 days completely free', '🎁 এখন শুরু করলে প্রথম ৩০ দিন সম্পূর্ণ ফ্রি')}
    </motion.a>
  );
}
