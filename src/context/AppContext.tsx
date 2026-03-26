import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Language, translations, Category, Product, UserProfile } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  user: User | null;
  userProfile: UserProfile | null;
  categories: Category[];
  products: Product[];
  t: (key: keyof typeof translations['en']) => string;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const docRef = doc(db, 'users', u.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile({ uid: u.uid, ...docSnap.data() } as UserProfile);
        } else {
          const role = u.email === 'botassist.org@gmail.com' ? 'admin' : 'user';
          setUserProfile({ uid: u.uid, email: u.email!, role, displayName: u.displayName || '' } as UserProfile);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    const catSub = onSnapshot(collection(db, 'categories'), (s) => {
      setCategories(s.docs.map(d => ({ id: d.id, ...d.data() })) as Category[]);
    });

    const prodSub = onSnapshot(collection(db, 'products'), (s) => {
      setProducts(s.docs.map(d => ({ id: d.id, ...d.data() })) as Product[]);
    });

    return () => {
      unsubscribe();
      catSub();
      prodSub();
    };
  }, []);

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, user, userProfile, categories, products, t, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
