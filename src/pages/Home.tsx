import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GlassCard, PageTransition } from '../components/UI';
import { Search, Shield, Zap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const { t, products, categories } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const categoryIdFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryIdFromUrl);

  useEffect(() => {
    setSelectedCategory(categoryIdFromUrl);
  }, [categoryIdFromUrl]);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                         p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? p.categoryId === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const features = [
    { icon: Shield, title: 'Secure Delivery', desc: 'Instant access to your digital assets.' },
    { icon: Zap, title: 'Bespoke Quality', desc: 'Hand-crafted solutions for your business.' },
    { icon: Award, title: 'Premium Support', desc: 'Dedicated assistance for every client.' }
  ];

  return (
    <PageTransition>
      <div className="space-y-24 pb-20">
        {/* Hero Section - Luxury Minimal */}
        <section className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden rounded-[40px] border border-white/5">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-40 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
          </div>

          <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">Digital Excellence</span>
              <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9]">
                Elevate Your <br />
                <span className="italic opacity-80">Digital Presence</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed"
            >
              Curated digital excellence. Discover a world of premium assets, bespoke creative services, and sophisticated automation designed for the modern visionary.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <div className="w-full max-w-md">
                <GlassCard className="flex items-center px-6 py-4 w-full rounded-full border-white/10">
                  <Search className="text-gray-400 mr-3" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search our collection..."
                    className="bg-transparent border-none focus:ring-0 text-white w-full placeholder-gray-500 outline-none text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features - Trust Elements */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4 text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto md:mx-0">
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Category Blocks Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif text-white tracking-tight">Browse Collections</h2>
            <p className="text-gray-500 font-light max-w-lg mx-auto">Select a category to explore our specialized digital offerings and professional services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }); }}
                className="cursor-pointer group relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10"
              >
                <img 
                  src={`https://picsum.photos/seed/${cat.slug}/800/600`} 
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Collection</span>
                  <h3 className="text-2xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                    {cat.name} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </motion.div>
            ))}
            {categories.length === 0 && (
              <div className="col-span-3 text-center py-20 border border-dashed border-white/10 rounded-[32px]">
                <p className="text-gray-500 italic">No categories created yet. Add them in the Admin Panel.</p>
              </div>
            )}
          </div>
        </section>

        {/* Categories & Products Filter Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-white">Our Collection</h2>
              <p className="text-sm text-gray-500">Curated digital assets for the modern creator.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => { setSelectedCategory(null); setSearchParams({}); }}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                  !selectedCategory ? "bg-white text-black border-white" : "text-white border-white/10 hover:bg-white/5"
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }); }}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                    selectedCategory === cat.id ? "bg-white text-black border-white" : "text-white border-white/10 hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/product/${product.slug}`} className="group block space-y-6">
                  <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/5 bg-white/5">
                    <img 
                      src={product.image || `https://picsum.photos/seed/${product.id}/800/1000`} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 px-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">{product.type}</span>
                        <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">{product.name}</h3>
                      </div>
                      <span className="text-lg font-light text-white">৳{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 font-light leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 border border-dashed border-white/10 rounded-[40px]">
              <p className="text-gray-500 font-light italic">No products found in this collection.</p>
            </div>
          )}
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 border-t border-white/5">
          <GlassCard className="p-12 md:p-20 rounded-[40px] text-center space-y-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-serif text-white max-w-2xl mx-auto leading-tight">
              Ready to transform your digital experience?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto font-light">
              Join our exclusive circle and stay updated with the latest premium assets and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Explore All
              </button>
              <button className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
                Contact Us
              </button>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageTransition>
  );
};
