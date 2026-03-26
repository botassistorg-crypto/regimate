export type Language = 'en' | 'bn';

export interface Category {
  id: string;
  name: string;
  description?: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  categoryId: string;
  type: 'digital' | 'service';
  image?: string;
  slug: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod?: string;
  paymentDetails?: any;
  createdAt: string;
}

export interface Visitor {
  id: string;
  path: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
  location?: any;
}

export interface UserProfile {
  uid: string;
  email: string;
  role: 'admin' | 'user';
  displayName?: string;
}

export const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    search: 'Search...',
    checkout: 'Checkout',
    buyNow: 'Buy Now',
    contactUs: 'Contact Us',
    price: 'Price',
    all: 'All',
    description: 'Description',
    bkashNumber: 'bKash Number',
    sendMoney: 'Send money to this bKash number',
    transactionId: 'Transaction ID',
    confirmPayment: 'Confirm Payment',
    address: 'Chittagong, Bangladesh',
    chatbotServices: 'Chatbot Services',
    automationServices: 'Automation Services',
    digitalProducts: 'Digital Products',
    adminPanel: 'Admin Panel',
    categories: 'Categories',
    products: 'Products',
    visitors: 'Visitors',
    orders: 'Orders',
    addCategory: 'Add Category',
    addProduct: 'Add Product',
    name: 'Name',
    slug: 'Slug',
    type: 'Type',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    noProducts: 'No products found.',
    welcome: 'Welcome to Regimate',
    heroSubtitle: 'The Ultimate Destination for Premium Digital Assets & Bespoke Creative Services',
    footerText: '© 2026 Regimate. All rights reserved.',
  },
  bn: {
    home: 'হোম',
    services: 'সেবা',
    admin: 'অ্যাডমিন',
    login: 'লগইন',
    logout: 'লগআউট',
    search: 'অনুসন্ধান...',
    checkout: 'চেকআউট',
    buyNow: 'এখনই কিনুন',
    contactUs: 'যোগাযোগ করুন',
    price: 'মূল্য',
    all: 'সব',
    description: 'বর্ণনা',
    bkashNumber: 'বিকাশ নম্বর',
    sendMoney: 'এই বিকাশ নম্বরে টাকা পাঠান',
    transactionId: 'ট্রানজ্যাকশন আইডি',
    confirmPayment: 'পেমেন্ট নিশ্চিত করুন',
    address: 'চট্টগ্রাম, বাংলাদেশ',
    chatbotServices: 'চ্যাটবট সেবা',
    automationServices: 'অটোমেশন সেবা',
    digitalProducts: 'ডিজিটাল পণ্য',
    adminPanel: 'অ্যাডমিন প্যানেল',
    categories: 'বিভাগসমূহ',
    products: 'পণ্যসমূহ',
    visitors: 'ভিজিটর',
    orders: 'অর্ডার',
    addCategory: 'বিভাগ যোগ করুন',
    addProduct: 'পণ্য যোগ করুন',
    name: 'নাম',
    slug: 'স্লাগ',
    type: 'ধরণ',
    save: 'সংরক্ষণ করুন',
    cancel: 'বাতিল করুন',
    delete: 'মুছে ফেলুন',
    edit: 'সম্পাদনা করুন',
    noProducts: 'কোন পণ্য পাওয়া যায়নি।',
    welcome: 'রেজিমেট-এ স্বাগতম',
    heroSubtitle: 'প্রিমিয়াম ডিজিটাল অ্যাসেট এবং বেসপোক ক্রিয়েটিভ সার্ভিসের সেরা ঠিকানা',
    footerText: '© ২০২৬ রেজিমেট। সর্বস্বত্ব সংরক্ষিত।',
  }
};
