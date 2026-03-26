import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useApp } from '../context/AppContext';
import { GlassCard } from './UI';
import { Globe, LogIn, LogOut, LayoutDashboard, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

export const Navbar = () => {
  const { t, language, setLanguage, user, userProfile, categories } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success('Logged in successfully');
    } catch (e) {
      toast.error('Login failed');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast.success('Logged out');
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 px-4 py-4">
      <GlassCard className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-[-0.05em] hover:opacity-80 transition-opacity flex items-center gap-2">
          <span className="font-light">REGI</span>
          <span className="font-bold italic">MATE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm hover:text-gray-400 transition-colors uppercase tracking-widest font-medium">{t('home')}</Link>
          
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/?category=${cat.id}`} 
              className="text-sm hover:text-gray-400 transition-colors uppercase tracking-widest font-medium"
            >
              {cat.name}
            </Link>
          ))}

          {userProfile?.role === 'admin' && (
            <Link to="/admin" className="text-sm flex items-center gap-1 hover:text-gray-400 transition-colors uppercase tracking-widest font-medium">
              <LayoutDashboard size={16} />
              {t('admin')}
            </Link>
          )}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1 text-sm hover:text-gray-400 transition-colors"
          >
            <Globe size={16} />
            {language === 'en' ? 'BN' : 'EN'}
          </button>
          {user ? (
            <button onClick={handleLogout} className="text-sm flex items-center gap-1 hover:text-gray-400 transition-colors">
              <LogOut size={16} />
              {t('logout')}
            </button>
          ) : (
            <button onClick={handleLogin} className="text-sm flex items-center gap-1 hover:text-gray-400 transition-colors">
              <LogIn size={16} />
              {t('login')}
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </GlassCard>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 z-50"
          >
            <GlassCard className="p-6 flex flex-col gap-6">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium border-b border-white/5 pb-2">{t('home')}</Link>
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Collections</span>
                <div className="flex flex-col gap-4 pl-2">
                  {categories.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/?category=${cat.id}`} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm hover:text-gray-400 transition-colors uppercase tracking-widest font-medium"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {userProfile?.role === 'admin' && (
                <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-sm flex items-center gap-2 hover:text-gray-400 transition-colors uppercase tracking-widest font-medium border-t border-white/5 pt-4">
                  <LayoutDashboard size={16} />
                  {t('admin')}
                </Link>
              )}
              
              <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                <button 
                  onClick={() => { setLanguage(language === 'en' ? 'bn' : 'en'); setIsMenuOpen(false); }}
                  className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
                >
                  <Globe size={16} />
                  {language === 'en' ? 'Bengali' : 'English'}
                </button>
                {user ? (
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-red-400">
                    <LogOut size={16} />
                    {t('logout')}
                  </button>
                ) : (
                  <button onClick={() => { handleLogin(); setIsMenuOpen(false); }} className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-white">
                    <LogIn size={16} />
                    {t('login')}
                  </button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
