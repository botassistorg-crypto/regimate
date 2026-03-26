import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { AdminPanel } from './pages/AdminPanel';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'motion/react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const VisitorTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const track = async () => {
      try {
        await addDoc(collection(db, 'visitors'), {
          path: location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        });
      } catch (e) {}
    };
    track();
  }, [location.pathname]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useApp();
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/5 blur-[160px] rounded-full" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 min-h-[70vh]">
        {children}
      </main>

      <footer className="relative z-10 py-24 px-4 border-t border-white/5 mt-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-[-0.05em] flex items-center gap-2">
              <span className="font-light">REGI</span>
              <span className="font-bold italic">MATE</span>
            </Link>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              {t('heroSubtitle')}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Contact</h3>
            <div className="space-y-4 text-sm text-gray-500 font-light">
              <p>Chittagong, Bangladesh</p>
              <p>+880 1628164979</p>
              <p>support@regimate.com</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Legal</h3>
            <div className="space-y-4 text-sm text-gray-500 font-light">
              <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
              <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
              <p className="hover:text-white cursor-pointer transition-colors">Refund Policy</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm w-full outline-none focus:border-white/20 transition-colors"
              />
              <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          <span>© 2026 Regimate. All rights reserved.</span>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <VisitorTracker />
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/checkout/:productId" element={<Checkout />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </AnimatePresence>
        </Layout>
        <Toaster position="bottom-right" theme="dark" />
      </Router>
    </AppProvider>
  );
}
