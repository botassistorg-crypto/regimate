import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GlassCard, PageTransition } from '../components/UI';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'sonner';

export const Checkout = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, t, user } = useApp();
  const product = products.find(p => p.id === productId);
  const [txId, setTxId] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const navigate = useNavigate();

  const handleConfirm = async () => {
    if (!txId || !email) {
      toast.error('Please fill all fields');
      return;
    }
    try {
      await addDoc(collection(db, 'orders'), {
        userId: user?.uid || 'anonymous',
        productId: product?.id,
        amount: product?.price,
        status: 'pending',
        paymentMethod: 'bKash',
        paymentDetails: { txId, email },
        createdAt: new Date().toISOString()
      });
      toast.success('Order placed! We will verify your payment soon.');
      navigate('/');
    } catch (e) {
      toast.error('Error placing order');
    }
  };

  if (!product) return null;

  return (
    <PageTransition>
      <div className="max-w-md mx-auto">
        <GlassCard className="p-8 space-y-6">
          <h2 className="text-2xl font-serif text-white text-center">{t('checkout')}</h2>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-gray-400 text-sm">{t('sendMoney')}</p>
            <p className="text-2xl font-bold text-white mt-1">01628164979</p>
            <p className="text-xs text-gray-500 mt-2">Personal bKash Number</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-white outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('transactionId')}</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-white outline-none"
                placeholder="e.g. 8N7X6W5V"
                value={txId}
                onChange={(e) => setTxId(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-gray-400">{t('price')}</span>
            <span className="text-xl font-bold text-white">৳{product.price}</span>
          </div>
          <button 
            onClick={handleConfirm}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
          >
            {t('confirmPayment')}
          </button>
        </GlassCard>
      </div>
    </PageTransition>
  );
};
