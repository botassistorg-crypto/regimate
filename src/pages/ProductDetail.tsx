import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GlassCard, PageTransition } from '../components/UI';
import { MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, t } = useApp();
  const product = products.find(p => p.slug === slug);
  const navigate = useNavigate();

  if (!product) return <div className="text-white text-center py-20">Product not found</div>;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <GlassCard className="overflow-hidden">
          <img 
            src={product.image || `https://picsum.photos/seed/${product.id}/1200/600`} 
            alt={product.name}
            className="w-full h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-serif text-white">{product.name}</h1>
              <span className="text-3xl font-bold text-white">৳{product.price}</span>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300">
              <ReactMarkdown>{product.description}</ReactMarkdown>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {product.type === 'digital' ? (
                <button 
                  onClick={() => navigate(`/checkout/${product.id}`)}
                  className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {t('buyNow')}
                </button>
              ) : (
                <a 
                  href={`https://wa.me/8801628164979?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} />
                  {t('contactUs')}
                </a>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </PageTransition>
  );
};
