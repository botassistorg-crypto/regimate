import { motion } from 'motion/react';
import { MessageCircle, Shield, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_NUMBER = '8801700524647';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* SECTION 1: THE HOOK */}
      <section className="section-padding flex flex-col items-center text-center px-6 bg-white min-h-[90vh] justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-[42px] md:text-[80px] font-black text-text-primary leading-[1.1] mb-6"
        >
          {t('Are You Losing', 'আপনি কি প্রতিদিন')} <br className="hidden md:block" />
          <span className="text-indigo-main underline decoration-indigo-main/30">
            {t('Customers Every Day?', 'কাস্টমার হারাচ্ছেন?')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-bold text-text-secondary mb-8 max-w-3xl"
        >
          {t('Every Message You Miss Is A Customer Your Competitor Just Gained.', 'যে মেসেজটি আপনি মিস করছেন, সেটি আপনার প্রতিযোগীর পাওয়া একজন নতুন কাস্টমার।')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-100 rounded-2xl p-6 mb-12 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-text-secondary">
            {t('They message at 10pm. You reply at 9am.', 'রাত ১০টায় কেউ মেসেজ করে। আপনি সকালে রিপ্লাই দেন।')} <br className="hidden md:block" />
            {t('They already booked your competitor.', 'ততক্ষণে সে অন্য জায়গায় চলে গেছে।')}
          </p>
        </motion.div>

        <motion.a 
          href={`${WHATSAPP_LINK}?text=Hi%20Ashiq%2C%20I%20am%20losing%20customers.%20Can%20you%20help%20me%20fix%20this%3F`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-12 py-6 mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('📱 Stop Losing Customers Now', '📱 আমার ব্যবসা ঠিক করুন')}
        </motion.a>

        <p className="text-text-secondary text-sm font-medium">
          {t('Free 30-day trial · No contract · bKash accepted', '৩০ দিন ফ্রি ট্রায়াল · কোনো কন্ট্র্যাক্ট নেই · bKash পেমেন্ট')}
        </p>
      </section>

      {/* SECTION 2: AGITATE THE PAIN */}
      <section className="section-padding px-6 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-16">
            {t('Does Your Business Look Like This?', 'আপনার ব্যবসা কি রকম দেখাচ্ছে?')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                emoji: '😴', 
                title: t('Messages come at night, you see them in morning', 'রাতে মেসেজ আসে, সকালে দেখেন'), 
                desc: t('By then the customer is gone', 'ততক্ষণে কাস্টমার চলে গেছে') 
              },
              { 
                emoji: '😤', 
                title: t('Good customers come but you cannot keep them', 'ভালো কাস্টমার আসে কিন্তু ধরে রাখতে পারেন না'), 
                desc: t('They buy once and never return', 'একবার কিনে আর ফেরে না') 
              },
              { 
                emoji: '😰', 
                title: t('No reviews, new customers do not trust you', 'রিভিউ নেই, নতুন কাস্টমার বিশ্বাস করে না'), 
                desc: t('Competitors are moving ahead', 'প্রতিযোগীরা এগিয়ে যাচ্ছে') 
              }
            ].map((pain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="custom-card group"
              >
                <div className="text-6xl mb-6">{pain.emoji}</div>
                <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">{pain.title}</h3>
                <p className="text-text-secondary">{pain.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-8">
            <p className="text-2xl font-bold text-text-primary max-w-2xl mx-auto leading-relaxed">
              {t('If any of these sound like you, we can fix this. For free. For 30 days.', 'যদি এর যেকোনো একটা আপনার সাথে মিলে যায়, আমরা আপনাকে সাহায্য করতে পারি। ৩০ দিন একদম ফ্রিতে।')}
            </p>
            <a href={WHATSAPP_LINK} className="btn-whatsapp inline-flex">
              {t('📱 Yes, I have this problem', '📱 হ্যাঁ, আমার এই সমস্যা আছে')}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section id="how-it-works" className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-16">
            {t('What Do We Do?', 'আমরা কী করি?')}
          </h2>

          <div className="text-center mb-24 max-w-4xl mx-auto">
            <p className="font-serif text-2xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
              {t('We talk to your customers 24 hours a day on your behalf. You do nothing.', 'আপনার ব্যবসার হয়ে আমরা ২৪ ঘণ্টা কাস্টমারের সাথে কথা বলি। আপনাকে কিছুই করতে হবে না।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                num: '১', 
                img: 'https://i.ibb.co.com/tpsmbn8x/Image-12-Step-1-Discovery-Call.png', 
                title: t('We understand your business', 'আমরা আপনার ব্যবসা বুঝি'), 
                body: t('15 minute WhatsApp call. We find where you are losing customers.', '১৫ মিনিটের WhatsApp কল। আপনি কোথায় কাস্টমার হারাচ্ছেন সেটা আমরা খুঁজে বের করি।')
              },
              { 
                num: '২', 
                img: 'https://i.ibb.co.com/bjrhmpNg/Image-13-Step-2-System-Setup.png', 
                title: t('We build the system', 'আমরা সিস্টেম বানাই'), 
                body: t('Within 48 hours automatic replies go live on your WhatsApp, Facebook, Instagram.', '৪৮ ঘণ্টার মধ্যে আপনার WhatsApp, Facebook, Instagram এ অটোমেটিক রিপ্লাই চালু হয়।')
              },
              { 
                num: '৩', 
                img: 'https://i.ibb.co.com/q3nXtnXV/Image-14-Step-3-Results.png', 
                title: t('You see results', 'আপনি রেজাল্ট দেখেন'), 
                body: t('Within 7 days you will see no messages being missed. Bookings and customers increasing.', '৭ দিনের মধ্যে আপনি দেখবেন কোনো মেসেজ মিস হচ্ছে না। বুকিং এবং কাস্টমার বাড়ছে।')
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full h-48 mb-8 bg-gray-50 rounded-2xl flex items-center justify-center p-6 overflow-hidden">
                   <img src={step.img} alt={step.title} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
                <div className="w-12 h-12 rounded-full bg-indigo-main flex items-center justify-center text-white text-2xl font-black mb-6 mx-auto">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 leading-tight">{step.title}</h3>
                <p className="text-[#64748B] text-base leading-relaxed max-w-[280px] mx-auto">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href={WHATSAPP_LINK} className="btn-whatsapp inline-flex">
              {t('📱 I Want To Start', '📱 আমি শুরু করতে চাই')}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROOF */}
      <section id="results" className="section-padding bg-[#F1F5F9] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-20">{t('Real Business, Real Results', 'রিয়েল বিজনেস, রিয়েল রেজাল্ট')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { type: t('Salon, Bangladesh', 'সেলুন, বাংলাদেশ'), before: t('20+ missed messages', '২০+ মেসেজ মিস'), after: t('0 missed messages', '০ মিস মেসেজ'), time: t('Within 7 days', '৭ দিনের মধ্যে') },
              { type: t('Restaurant, Bangladesh', 'রেস্টুরেন্ট, বাংলাদেশ'), before: t('40 bookings/mo', 'মাসে ৪০টা বুকিং'), after: t('120 bookings/mo', 'মাসে ১২০টা বুকিং'), time: t('Within 30 days', '৩০ দিনের মধ্যে') },
              { type: t('Clinic, Bangladesh', 'ক্লিনিক, বাংলাদেশ'), before: t('Almost no reviews', 'রিভিউ ছিল না বললেই চলে'), after: t('50+ positive reviews', '৫০+ পজিটিভ রিভিউ'), time: t('Within 60 days', '৬০ দিনের মধ্যে') }
            ].map((res, i) => (
              <div key={i} className="bg-white rounded-[24px] p-8 shadow-sm border border-border-main text-center">
                <div className="bg-indigo-main/10 text-indigo-main px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-6 uppercase">
                  {res.type}
                </div>
                <div className="space-y-4 mb-8">
                    <p className="text-text-secondary text-sm font-medium mb-1 line-through opacity-50">Before: {res.before}</p>
                    <div className="my-2 flex justify-center"><ArrowRight className="text-indigo-main rotate-90 lg:rotate-0" /></div>
                    <p className="text-3xl font-black text-indigo-main">{res.after}</p>
                </div>
                <div className="bg-bg-primary rounded-xl p-3 text-center text-sm font-bold text-text-secondary">
                   {t('Achieved:', 'অর্জন:')} {res.time}
                </div>
              </div>
            ))}
          </div>

          {/* TESTIMONIAL */}
          <div className="max-w-3xl mx-auto bg-white border border-border-main rounded-[32px] p-10 md:p-16 shadow-lg-main relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-main/5 rounded-full -mr-16 -mt-16"></div>
            <div className="text-yellow-400 text-3xl mb-8">⭐⭐⭐⭐⭐</div>
            <p className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-snug mb-10">
              {t('"Ashiq built a system for my salon that replies to customers even at night. No more missed customers. I just focus on my work."', '"আশিক ভাই আমার সেলুনের জন্য এমন একটা সিস্টেম বানিয়েছেন যেটা রাতেও কাস্টমারের মেসেজের রিপ্লাই দেয়। এখন আর কোনো কাস্টমার মিস হয় না। আমি শুধু কাজ করি।"')}
            </p>
            <div className="border-t border-border-main pt-8 space-y-2">
              <div className="text-xl font-bold text-text-primary">{t('Rahman Bhai', 'রহমান ভাই')}</div>
              <div className="text-indigo-main font-bold uppercase tracking-widest text-sm">{t('Salon Owner, Bangladesh', 'সেলুন মালিক, বাংলাদেশ')}</div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a href={WHATSAPP_LINK} className="btn-whatsapp inline-flex">
              {t('📱 I Also Want These Results', ' আমিও এই রেজাল্ট চাই')}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: REMOVE THE RISK */}
      <section className="section-padding bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-16">{t('Zero Risk', 'কোনো রিস্ক নেই')}</h2>
          
          <div className="text-center mb-20">
            <p className="font-serif text-2xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
              {t('Use it free for 30 days. If you do not see results, you pay nothing. Not one taka.', '৩০ দিন ফ্রিতে ব্যবহার করুন। যদি রেজাল্ট না পান, একটা টাকাও দিতে হবে না।')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            {[
              { icon: <Shield size={48} className="text-indigo-main" />, title: t('30 Day Guarantee', '৩০ দিনের গ্যারান্টি'), body: t('Results or its free', 'রেজাল্ট না হলে ফ্রি') },
              { icon: <Smartphone size={48} className="text-indigo-main" />, title: t('bKash Payment', 'bKash পেমেন্ট'), body: t('Easy local payments', 'সহজ বাংলাদেশি পেমেন্ট') },
              { icon: <Globe size={48} className="text-indigo-main" />, title: t('Expert Support', 'পার্সোনালাইজড সাপোর্ট'), body: t('Help in Bengali/English', 'সার্বক্ষণিক সহায়তা পাবেন') }
            ].map((g, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="flex justify-center">{g.icon}</div>
                <h4 className="text-xl font-bold text-text-primary">{g.title}</h4>
                <p className="text-text-secondary font-medium">{g.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-text-secondary uppercase tracking-widest">
              {t('No contracts. Cancel anytime.', 'কোনো কন্ট্র্যাক্ট নেই। যেকোনো সময় বন্ধ করতে পারবেন।')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING (ONE PACKAGE) */}
      <section className="section-padding bg-[#F1F5F9] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-16">{t('Start With One Package', 'একটাই প্যাকেজ দিয়ে শুরু করুন')}</h2>

          <div className="max-w-[520px] mx-auto bg-white border-4 border-indigo-main rounded-[32px] p-10 md:p-16 shadow-2xl relative overflow-visible">
            <div className="absolute top-[-24px] left-1/2 -translate-x-1/2 bg-success text-white px-8 py-2 rounded-full font-bold text-lg whitespace-nowrap shadow-lg">
              {t('Most Popular', 'সবচেয়ে জনপ্রিয়')}
            </div>
            
            <div className="text-center mb-8">
              <img 
                src="https://i.ibb.co.com/C31yHz95/Image-8-Package-1-Icon-Illustration.png" 
                alt="Package Icon" 
                className="w-24 h-24 mx-auto mb-6 object-contain" 
              />
              <h3 className="text-2xl font-bold text-text-primary mb-4">{t('Never Miss A Customer', 'নেভার মিস আ কাস্টমার')}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[64px] font-black text-indigo-main tracking-tighter">৳{language === 'en' ? '3,000' : '৩,০০০'}</span>
                <span className="text-text-secondary font-bold text-xl">/{t('mo', 'মাস')}</span>
              </div>
            </div>

            <ul className="space-y-5 mb-12">
              {[
                t('24/7 Automatic Message Replies', '২৪/৭ অটোমেটিক মেসেজ রিপ্লাই'),
                t('Automatic Appointment Booking', 'অ্যাপয়েন্টমেন্ট অটো বুকিং'),
                t('WhatsApp + Facebook + Instagram', 'WhatsApp + Facebook + Instagram'),
                t('Weekly Results Report', 'সাপ্তাহিক রেজাল্ট রিপোর্ট'),
                t('Bengali & English Support', 'বাংলা ও ইংরেজিতে সাপোর্ট')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-bold text-text-primary">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-indigo-main/5 rounded-2xl p-6 mb-10 border border-indigo-main/10 text-center">
              <p className="text-indigo-main font-bold leading-relaxed">
                {t('Save a staff salary. They work 8 hours. Our system works 24.', 'একজন স্টাফের বেতন বাঁচান। সে ৮ ঘণ্টা কাজ করে। আমাদের সিস্টেম ২৪ ঘণ্টা।')}
              </p>
            </div>

            <a href={`${WHATSAPP_LINK}?text=Hi%20Ashiq%2C%20I%20want%20the%203%2C000%20BDT%20package.%20Please%20explain%20how%20to%20start.`} className="btn-whatsapp w-full">
              {t('📱 Start on WhatsApp', '📱 WhatsApp এ শুরু করুন')}
            </a>
            
            <p className="text-center text-text-secondary text-sm font-bold mt-6">
              {t('30 Days Free · No Contract', '৩০ দিন ফ্রি · কোনো কন্ট্র্যাক্ট নেই')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="section-padding bg-navy px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-white font-serif text-4xl md:text-6xl font-black mb-8 leading-tight">
            {t('How Many More Customers Will You Lose?', 'আর কত কাস্টমার হারাবেন?')}
          </h2>
          
          <div className="space-y-6 mb-16">
            <p className="text-white/70 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              {t('Every day while you sleep, customers are messaging and leaving because nobody answered. Stop this today.', 'প্রতিদিন আপনি যখন ঘুমাচ্ছেন, কাস্টমার মেসেজ করছে এবং উত্তর না পেয়ে চলে যাচ্ছে। আজই এটা বন্ধ করুন।')}
            </p>
          </div>

          <motion.a
            href={WHATSAPP_LINK}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="btn-whatsapp px-12 py-8 rounded-full text-2xl font-black bg-whatsapp text-white shadow-[0_12px_48px_rgba(37,211,102,0.6)] inline-flex"
          >
            {t('📱 WhatsApp Now', '📱 এখনই WhatsApp করুন')}
          </motion.a>

          <p className="text-white/40 text-sm mt-8 font-medium">
            {t('Ashiq usually replies within 1 hour', 'আশিক সাধারণত ১ ঘণ্টার মধ্যে রিপ্লাই দেন')}
          </p>
        </div>
        
        {/* Background visual elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-main/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
}
