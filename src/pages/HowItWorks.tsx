import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '01700524647';

const steps = [
  {
    id: 1,
    title: "We Analyze Your Business",
    body: "15-minute WhatsApp call. We find exactly where you are losing customers and which system fixes it fastest. No commitment required.",
    img: "https://i.ibb.co.com/tpsmbn8x/Image-12-Step-1-Discovery-Call.png",
    reverse: false
  },
  {
    id: 2,
    title: "We Build Your System",
    body: "In 48 hours your automatic response system is live across WhatsApp, Facebook, and Instagram simultaneously. Zero effort from you.",
    img: "https://i.ibb.co.com/bjrhmpNg/Image-13-Step-2-System-Setup.png",
    reverse: true
  },
  {
    id: 3,
    title: "You Start Getting Results",
    body: "Watch your inquiry response rate hit 100%. Never miss a customer again. Most clients see measurable results within the first 7 days.",
    img: "https://i.ibb.co.com/q3nXtnXV/Image-14-Step-3-Results.png",
    reverse: false
  },
  {
    id: 4,
    title: "We Optimize Monthly",
    body: "Every month the system learns from your real customers and improves automatically. Results compound over time with zero extra work.",
    img: "https://i.ibb.co.com/SXPQHWmS/Image-15-Step-4-Monthly-Growth.png",
    reverse: true
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-[72px]">
      <section className="section-padding bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-20 space-y-6">
            <div className="bg-[#EEF2FF] text-[#4F46E5] rounded-full px-4 py-1 text-sm font-semibold inline-block">The Roadmap</div>
            <h1 className="font-serif text-[42px] md:text-[64px] font-bold text-[#0F172A] leading-[1.1]">
              From First Message To
              <br/>
              <span className="text-[#4F46E5]">Full Results In 48 Hours</span>
            </h1>
            <p className="text-[#64748B] text-xl max-w-2xl mx-auto font-medium">
              We've perfected a 4-step deployment cycle that eliminates technical friction and begins generating ROI within your first week.
            </p>
          </header>

          <img 
            src="https://i.ibb.co.com/ZpNjqcWq/Image-28-Mobile-App-Mockup.png" 
            className="max-w-[500px] w-full mx-auto mb-24 shadow-[0_8px_48px_rgba(79,70,229,0.15)] rounded-[20px]" 
            alt="System Mockup" 
          />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 md:gap-20 ${step.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#4F46E5]/10 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <img src={step.img} alt={step.title} className="w-full rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] relative z-10" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center text-3xl font-extrabold text-[#4F46E5]">{step.id}</div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] leading-tight">{step.title}</h3>
                  <p className="text-[#64748B] text-lg md:text-xl leading-[1.8]">{step.body}</p>
                  <div className="pt-4">
                    <button className="flex items-center gap-2 text-[#4F46E5] font-bold text-lg hover:gap-4 transition-all">
                      Learn more about this stage <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F172A] px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-tight uppercase">Ready for Step 01?</h2>
          <p className="text-white/60 text-lg md:text-xl">Get your free business audit on WhatsApp today. No strings attached.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="btn-primary inline-flex items-center gap-3 py-5 px-10 text-xl"
          >
            Start Free Audit <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}

