import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const WHATSAPP_NUMBER = '01700524647';

const packages = [
  {
    name: "Never Miss A Customer",
    price: "3,000",
    icon: "https://i.ibb.co.com/C31yHz95/Image-8-Package-1-Icon-Illustration.png",
    badge: "✓ MOST POPULAR · START HERE",
    badgeColor: "#10B981",
    features: [
      "24/7 automatic customer response",
      "Automatic appointment booking",
      "Optimized business page listing",
      "WhatsApp + Facebook + Instagram",
      "Weekly results report"
    ],
    highlight: "⚡ Setup in 48 hours. Results in 7 days."
  },
  {
    name: "Customer Growth Engine",
    price: "7,000",
    icon: "https://i.ibb.co.com/PZHJ7hJ2/Image-9-Package-2-Icon-Illustration.png",
    badge: "⭐ BEST VALUE",
    badgeColor: "#4F46E5",
    featured: true,
    features: [
      "Everything in Package 1",
      "Automatic review collection",
      "Automatic referral program",
      "Post-purchase offer sequences",
      "Monthly growth strategy report"
    ],
    highlight: "📈 Avg client sees 40% more repeat customers"
  },
  {
    name: "Business Autopilot",
    price: "15,000",
    icon: "https://i.ibb.co.com/TD8K3gxR/Image-10-Package-3-Icon-Illustration.png",
    badge: "🚀 COMPLETE SYSTEM",
    badgeColor: "#1A1A2E",
    features: [
      "Everything in Package 2",
      "VIP customer recognition program",
      "Automatic content creation",
      "Daily business dashboard",
      "Competitor monitoring",
      "Priority WhatsApp support"
    ],
    highlight: "🤖 Your entire business runs itself"
  }
];

export default function Packages() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-[72px]">
      {/* Header */}
      <section className="relative overflow-hidden section-padding px-6">
        <img 
          src="https://i.ibb.co.com/9mRvTxnz/Image-11-Packages-Section-Background.png" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
          alt=""
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <header className="space-y-4 mb-20">
            <h1 className="font-serif text-[42px] md:text-[64px] font-extrabold text-[#0F172A] leading-[1.1]">
              Simple Pricing.<br/><span className="text-[#4F46E5]">Pure ROI.</span>
            </h1>
            <p className="text-[#64748B] text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              No long-term contracts. No hidden fees. Just high-performance automation built for Bangladesh's top businesses.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white border-2 rounded-[20px] p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ${pkg.featured ? 'lg:scale-[1.05] border-[#4F46E5] shadow-[0_20px_60px_rgba(79,70,229,0.2)]' : 'border-[#E2E8F0]'}`}
              >
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[11px] font-bold whitespace-nowrap" style={{ backgroundColor: pkg.badgeColor }}>
                  {pkg.badge}
                </div>
                <img src={pkg.icon} alt={pkg.name} className="w-20 h-20 mx-auto mb-6 object-contain" />
                <h3 className="text-xl font-bold text-[#0F172A] text-center mb-4">{pkg.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-sm text-[#64748B]">BDT </span>
                  <span className="text-[52px] font-extrabold text-[#4F46E5]">{pkg.price}</span>
                  <span className="text-sm text-[#64748B]">/month</span>
                </div>
                <hr className="border-[#E2E8F0] mb-6" />
                <ul className="text-left space-y-3.5 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-[15px] text-[#0F172A]">
                      <span className="text-[#10B981] text-lg shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#EEF2FF] rounded-lg p-3.5 text-center text-[#4F46E5] text-[13px] font-bold mb-6">
                  {pkg.highlight}
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ashiq%2C%20I%20want%20the%20${pkg.name}%20package.`}
                  className="w-full btn-primary flex items-center justify-center h-14"
                >
                  Get Started on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img src="https://i.ibb.co.com/Pvsrgx4s/Image-31-Trust-Badges-Row.png" className="max-w-[600px] w-full mx-auto mb-4" alt="Trust Badges" />
            <p className="text-[#64748B] text-sm mb-12">
              All packages include bKash payment · No contracts · Cancel anytime · Personalized support
            </p>
            <img src="https://i.ibb.co.com/tMqy5TPs/Image-29-Bangladesh-Payment-Visual.png" className="max-w-[300px] w-full mx-auto rounded-xl" alt="Payment Methods" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-white border-y border-[#E2E8F0] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-center text-[#0F172A] mb-16">The Regimate Advantage.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-[#F1F5F9] rounded-[40px] space-y-6">
               <h4 className="text-2xl font-bold uppercase text-[#EF4444]">Traditional Admin</h4>
               <ul className="space-y-4 font-medium text-[#64748B]">
                  <li className="flex items-center gap-2">• BDT 20,000+ Monthly Salary</li>
                  <li className="flex items-center gap-2">• High training & management overhead</li>
                  <li className="flex items-center gap-2">• Only available 8-9 hours per day</li>
                  <li className="flex items-center gap-2">• Inconsistent response quality</li>
                  <li className="flex items-center gap-2">• High turnover risk in local market</li>
               </ul>
            </div>
            <div className="p-12 bg-[#0F172A] text-white rounded-[40px] space-y-6 border-4 border-[#4F46E5] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5] opacity-10 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
               <h4 className="text-2xl font-bold uppercase text-[#4F46E5]">Regimate System</h4>
               <ul className="space-y-4 font-medium text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="text-[#10B981]">✓</span>
                    Starts at BDT 3,000 - scalable ROI
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#10B981]">✓</span>
                    Zero management needed
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#10B981]">✓</span>
                    Operates 24/7/365 without breaks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#10B981]">✓</span>
                    Instant responses (under 10 seconds)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#10B981]">✓</span>
                    Precise, quality control
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

