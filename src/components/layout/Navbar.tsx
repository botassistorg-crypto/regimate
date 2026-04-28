import { Link } from 'react-router-dom';
import { MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('How It Works', 'কীভাবে কাজ করে'), path: '/#how-it-works' },
    { name: t('Results', 'রেজাল্ট'), path: '/#results' },
    { name: t('Contact', 'যোগাযোগ'), path: 'https://wa.me/8801700524647' },
  ];

  return (
    <nav className="fixed top-10 left-0 w-full h-[72px] bg-white/80 backdrop-blur-md border-b border-border-main z-[900] px-6 md:px-[80px]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://i.ibb.co.com/Swg9NQNn/Image-25-Regimate-Logo-Mark.png" 
            alt="Regimate" 
            className="h-8 w-8 object-contain" 
          />
          <span className="font-serif text-xl font-black text-text-primary tracking-tight">Regimate</span>
        </Link>

        {/* Center - Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-serif text-[15px] font-bold text-text-secondary hover:text-indigo-main transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right - Toggle + CTA */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-main text-sm font-bold text-text-secondary hover:bg-gray-50 transition-colors"
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
          
          <a 
            href="https://wa.me/8801700524647"
            className="bg-whatsapp text-white px-6 py-2.5 rounded-full font-bold shadow-whatsapp hover:scale-105 transition-transform flex items-center gap-2 text-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
