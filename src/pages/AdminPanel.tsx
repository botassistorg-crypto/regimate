import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { GlassCard, PageTransition } from '../components/UI';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'sonner';
import { LayoutDashboard, Package, List, Users, ShoppingBag, Plus, Trash2, Edit2, X, Globe, Upload, Loader2, LogIn, LogOut } from 'lucide-react';

export const AdminPanel = () => {
  const { t, user, userProfile, categories, products, loading, handleLogout } = useApp();
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'visitors' | 'orders' | 'settings'>('products');
  const [visitors, setVisitors] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [sheetUrl, setSheetUrl] = useState(localStorage.getItem('regimate_sheet_url') || '');
  const [isUploading, setIsUploading] = useState(false);
  const [confirmModal, setConfirmModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const handleLogin = async () => {
    try {
      const { signInWithPopup, GoogleAuthProvider } = await import('firebase/auth');
      const { auth } = await import('../firebase');
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success('Logged in successfully');
    } catch (e) {
      toast.error('Login failed');
    }
  };

  useEffect(() => {
    if (userProfile?.role !== 'admin') return;
    const vSub = onSnapshot(collection(db, 'visitors'), (s) => setVisitors(s.docs.map(d => ({ id: d.id, ...d.data() }))));
    const oSub = onSnapshot(collection(db, 'orders'), (s) => setOrders(s.docs.map(d => ({ id: d.id, ...d.data() }))));
    return () => { vSub(); oSub(); };
  }, [userProfile]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const apiKey = (import.meta as any).env.VITE_IMGBB_API_KEY;
    if (!apiKey) {
      toast.error('ImgBB API Key is missing in .env');
      return;
    }

    setIsUploading(true);
    const body = new FormData();
    body.append('image', file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body
      });
      const data = await res.json();
      if (data.success) {
        setFormData({ ...formData, image: data.data.url });
        toast.success('Image uploaded successfully');
      } else {
        toast.error('Upload failed');
      }
    } catch (err) {
      toast.error('Error uploading image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSync = async () => {
    if (!sheetUrl) {
      toast.error('Please set a Google Sheet WebApp URL in Settings');
      return;
    }
    try {
      const response = await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitors, orders, timestamp: new Date().toISOString() })
      });
      toast.success('Data sent to Google Sheets!');
    } catch (err) {
      toast.error('Sync failed. Check your WebApp URL.');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <Loader2 className="animate-spin text-white w-12 h-12" />
        <p className="text-gray-400 animate-pulse uppercase tracking-[0.3em] text-[10px]">Initializing Secure Panel</p>
      </div>
    );
  }

  if (userProfile?.role !== 'admin') {
    return (
      <div className="text-center py-32 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-serif text-white tracking-tighter">Access Restricted</h2>
          <p className="text-gray-500 max-w-md mx-auto font-light leading-relaxed">
            This administrative interface is reserved for authorized personnel only. 
            {user ? " Your account does not have administrative privileges." : " Please authenticate with an administrator account to proceed."}
          </p>
          {user && user.email !== 'botassist.org@gmail.com' && (
            <p className="text-xs text-red-500/60 uppercase tracking-widest">
              Logged in as: {user.email}
            </p>
          )}
        </div>
        {!user ? (
          <button 
            onClick={handleLogin}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all"
          >
            <LogIn size={18} /> Authenticate as Admin
          </button>
        ) : user.email !== 'botassist.org@gmail.com' && (
          <button 
            onClick={handleLogout}
            className="inline-flex items-center gap-2 border border-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
          >
            <LogOut size={18} /> Switch Account
          </button>
        )}
      </div>
    );
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Product name is required');
      return;
    }
    try {
      const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      const data = {
        ...formData,
        slug,
        price: Number(formData.price || 0),
        updatedAt: new Date().toISOString()
      };
      if (formData.id) {
        await updateDoc(doc(db, 'products', formData.id), data);
        toast.success('Product updated successfully');
      } else {
        await addDoc(collection(db, 'products'), { ...data, createdAt: new Date().toISOString() });
        toast.success('Product added successfully');
      }
      setIsModalOpen(false);
      setFormData({});
    } catch (err) {
      toast.error('Error saving product');
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Category name is required');
      return;
    }
    try {
      const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      if (formData.id) {
        await updateDoc(doc(db, 'categories', formData.id), { ...formData, slug });
        toast.success('Category updated successfully');
      } else {
        await addDoc(collection(db, 'categories'), { ...formData, slug });
        toast.success('Category added successfully');
      }
      setIsModalOpen(false);
      setFormData({});
    } catch (err) {
      toast.error('Error saving category');
    }
  };

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-serif text-white flex items-center gap-2">
            <LayoutDashboard /> {t('adminPanel')}
          </h1>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'products', icon: Package, label: t('products') },
              { id: 'categories', icon: List, label: t('categories') },
              { id: 'visitors', icon: Users, label: t('visitors') },
              { id: 'orders', icon: ShoppingBag, label: t('orders') },
              { id: 'settings', icon: Globe, label: 'Settings' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id ? "bg-white text-black" : "text-white hover:bg-white/10"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <GlassCard className="p-6 overflow-hidden">
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white">{t('products')}</h2>
                <button 
                  onClick={() => { setFormData({ type: 'digital' }); setIsModalOpen(true); }} 
                  className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus size={18} /> {t('addProduct')}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                      <th className="py-4 px-2">{t('name')}</th>
                      <th className="py-4 px-2">{t('price')}</th>
                      <th className="py-4 px-2">{t('type')}</th>
                      <th className="py-4 px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-2 font-medium">{p.name}</td>
                        <td className="py-4 px-2">৳{p.price}</td>
                        <td className="py-4 px-2 uppercase text-[10px] tracking-widest">{p.type}</td>
                        <td className="py-4 px-2 text-right">
                          <button 
                            onClick={() => { setFormData(p); setIsModalOpen(true); }}
                            className="text-gray-400 hover:text-white mr-4"
                          >
                            <Edit2 size={16}/>
                          </button>
                          <button 
                            onClick={() => {
                              setConfirmModal({
                                title: 'Delete Product',
                                message: `Are you sure you want to delete "${p.name}"? This action cannot be undone.`,
                                onConfirm: async () => {
                                  await deleteDoc(doc(db, 'products', p.id));
                                  toast.success('Product deleted');
                                  setConfirmModal(null);
                                }
                              });
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={16}/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white">{t('categories')}</h2>
                <div className="flex gap-4">
                  <button 
                    onClick={async () => {
                      const seedCats = [
                        { name: 'Services', slug: 'services' },
                        { name: 'Digital Products', slug: 'digital-products' },
                        { name: 'E-Books', slug: 'ebooks' }
                      ];
                      for (const cat of seedCats) {
                        if (!categories.find(c => c.slug === cat.slug)) {
                          await addDoc(collection(db, 'categories'), cat);
                        }
                      }
                      toast.success('Seed categories added!');
                    }}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                  >
                    Seed Categories
                  </button>
                  <button 
                    onClick={() => { setFormData({}); setIsModalOpen(true); }} 
                    className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"
                  >
                    <Plus size={18} /> {t('addCategory')}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(cat => (
                  <div key={cat.id} className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center group">
                    <div>
                      <h3 className="font-bold text-white">{cat.name}</h3>
                      <p className="text-xs text-gray-400">{cat.slug}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => { setFormData(cat); setIsModalOpen(true); }}
                        className="text-gray-400 hover:text-white"
                      >
                        <Edit2 size={16}/>
                      </button>
                      <button 
                        onClick={() => {
                          setConfirmModal({
                            title: 'Delete Category',
                            message: `Are you sure you want to delete "${cat.name}"? This action will not delete products in this category, but they will become uncategorized.`,
                            onConfirm: async () => {
                              await deleteDoc(doc(db, 'categories', cat.id));
                              toast.success('Category deleted');
                              setConfirmModal(null);
                            }
                          });
                        }}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'visitors' && (
            <div className="space-y-4">
              <h2 className="text-xl text-white">{t('visitors')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-4 px-2">Time</th>
                      <th className="py-4 px-2">Path</th>
                      <th className="py-4 px-2">Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitors.sort((a,b) => b.timestamp.localeCompare(a.timestamp)).slice(0, 50).map(v => (
                      <tr key={v.id} className="border-b border-white/5">
                        <td className="py-4 px-2">{new Date(v.timestamp).toLocaleString()}</td>
                        <td className="py-4 px-2">{v.path}</td>
                        <td className="py-4 px-2 truncate max-w-[300px]">{v.userAgent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white">{t('orders')}</h2>
                <button 
                  onClick={handleSync}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
                >
                  Sync to Sheets
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-4 px-2">Date</th>
                      <th className="py-4 px-2">Product</th>
                      <th className="py-4 px-2">Amount</th>
                      <th className="py-4 px-2">Status</th>
                      <th className="py-4 px-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.sort((a,b) => b.createdAt.localeCompare(a.createdAt)).map(o => (
                      <tr key={o.id} className="border-b border-white/5">
                        <td className="py-4 px-2">{new Date(o.createdAt).toLocaleDateString()}</td>
                        <td className="py-4 px-2">{products.find(p => p.id === o.productId)?.name}</td>
                        <td className="py-4 px-2">৳{o.amount}</td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${
                            o.status === 'completed' ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-xs text-gray-400">
                          {o.paymentDetails?.txId} | {o.paymentDetails?.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-md">
              <h2 className="text-xl text-white">Admin Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Google Sheets WebApp URL</label>
                  <input 
                    type="url" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    placeholder="https://script.google.com/macros/s/..."
                    value={sheetUrl}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSheetUrl(val);
                      localStorage.setItem('regimate_sheet_url', val);
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Paste your Google Apps Script WebApp URL here to sync visitor and order data.
                  </p>
                </div>
              </div>
            </div>
          )}
        </GlassCard>

        {/* Add Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <GlassCard className="w-full max-w-lg p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-serif text-white">
                  {activeTab === 'products' ? t('addProduct') : t('addCategory')}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={activeTab === 'products' ? handleAddProduct : handleAddCategory} className="space-y-4">
                <input 
                  type="text" 
                  placeholder={t('name')}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {activeTab === 'products' && (
                  <>
                    <textarea 
                      placeholder={t('description')}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-32"
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    <input 
                      type="text" 
                      placeholder="Short Description"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      value={formData.shortDescription || ''}
                      onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="number" 
                        placeholder={t('price')}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      />
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        value={formData.type || 'digital'}
                      >
                        <option value="digital">Digital</option>
                        <option value="service">Service</option>
                      </select>
                    </div>
                    {formData.type === 'digital' && (
                      <input 
                        type="url" 
                        placeholder="Download URL (e.g. Google Drive link)"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                        value={formData.downloadUrl || ''}
                        onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                      />
                    )}
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      value={formData.categoryId || ''}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    >
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <div className="space-y-2">
                      <label className="block text-xs text-gray-400 uppercase tracking-widest">Product Image</label>
                      <div className="flex gap-2">
                        <input 
                          type="url" 
                          placeholder="Image URL"
                          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                          value={formData.image || ''}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        />
                        <label className="cursor-pointer bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors flex items-center justify-center min-w-[42px]">
                          {isUploading ? <Loader2 className="animate-spin" size={20} /> : <Upload size={20} />}
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={isUploading} />
                        </label>
                      </div>
                      {formData.image && (
                        <div className="mt-2 relative group">
                          <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded-lg border border-white/10" />
                          <button 
                            type="button"
                            onClick={() => setFormData({ ...formData, image: '' })}
                            className="absolute top-2 right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
                <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg">
                  {t('save')}
                </button>
              </form>
            </GlassCard>
          </div>
        )}
        {/* Confirmation Modal */}
        {confirmModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <GlassCard className="w-full max-w-md p-8 space-y-6 border-red-500/20">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-white">{confirmModal.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{confirmModal.message}</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setConfirmModal(null)}
                  className="flex-1 px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmModal.onConfirm}
                  className="flex-1 px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors uppercase tracking-widest text-xs font-bold"
                >
                  Confirm
                </button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
