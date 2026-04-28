import { useLanguage } from '../../context/LanguageContext';

const WHATSAPP_NUMBER = '8801700524647';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border-main bg-white text-center relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <img 
          src="https://i.ibb.co.com/Swg9NQNn/Image-25-Regimate-Logo-Mark.png" 
          className="h-10 mx-auto opacity-50 grayscale" 
          alt="Regimate" 
        />
        <p className="text-text-secondary font-bold tracking-widest text-[11px] uppercase">
          © 2024 REGIMATE BUSINESS AUTOMATION · BANGLADESH
        </p>
        <div className="flex justify-center gap-8 text-text-secondary text-sm font-bold flex-wrap">
           <a href="/#how-it-works" className="hover:text-indigo-main transition-colors">{t('How It Works', 'কীভাবে কাজ করে')}</a>
           <a href="/#results" className="hover:text-indigo-main transition-colors">{t('Results', 'রেজাল্ট')}</a>
           <a href={WHATSAPP_LINK} className="hover:text-indigo-main transition-colors">{t('Contact', 'যোগাযোগ')}</a>
        </div>
      </div>
    </footer>
  );
}
