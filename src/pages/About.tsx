import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '01700524647';

export default function About() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-[72px]">
      <section className="section-padding bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative">
            <img src="https://i.ibb.co.com/F4mXvLY0/Image-19-Chittagong-City-Context.png" className="w-full h-[500px] object-cover rounded-[32px] shadow-2xl" alt="Bangladesh Business Center" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 z-10">
              <p className="font-bold text-[#0F172A] text-lg mb-1">Serving All Circles</p>
              <p className="text-[#64748B] text-sm font-medium">Nationwide Business Automation 🇧🇩</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-[#EEF2FF] text-[#4F46E5] rounded-full px-4 py-1 text-sm font-semibold inline-block uppercase tracking-wider">The Founder's Story</div>
            <h1 className="font-serif text-[42px] md:text-[56px] font-bold text-[#0F172A] leading-[1.1]">
              Built For Results.
              <br/>
              <span className="text-[#4F46E5]">For Bangladesh's Future.</span>
            </h1>
            <div className="space-y-6 text-[#64748B] text-lg md:text-xl leading-[1.8]">
              <p>
                I am Ashiq, founder of Regimate. I spent years studying how businesses lose customers through invisible gaps. Then I built systems to close those gaps automatically.
              </p>
              <p>
                Regimate is not a tech company. We are a results company. We do not sell software. We sell more customers, more revenue, and more time back in your hands.
              </p>
            </div>
            
            <div className="p-8 bg-[#EEF2FF] border-l-8 border-[#4F46E5] rounded-r-2xl">
              <p className="text-[#0F172A] font-bold text-2xl font-serif italic">
                "The biggest problem for Bangladeshi businesses wasn't marketing—it was follow-up."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white px-6 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <img 
              src="https://i.ibb.co.com/1GC5Wh9R/Image-20-Founder-image.png" 
              className="w-full rounded-[24px] shadow-xl grayscale-0" 
              alt="Ashiq - Founder" 
            />
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Ashiq</h3>
              <p className="text-[#4F46E5] font-bold uppercase text-sm tracking-widest mt-1">Founder & Lead Architect</p>
            </div>
          </div>
          <div className="space-y-8">
            <img 
              src="https://i.ibb.co.com/Txz92y7W/Image-21-Bangladesh-Business-Culture-Visual.png" 
              className="w-full rounded-[24px] shadow-xl grayscale-0 h-[400px] object-cover" 
              alt="Bangladesh Business Culture" 
            />
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[36px] font-extrabold text-[#4F46E5]">48hrs</div>
                <div className="text-[#64748B] font-medium uppercase text-xs tracking-widest mt-2">Avg Setup Velocity</div>
              </div>
              <div>
                <div className="text-[36px] font-extrabold text-[#4F46E5]">100%</div>
                <div className="text-[#64748B] font-medium uppercase text-xs tracking-widest mt-2">Local Support</div>
              </div>
            </div>
            <p className="text-[#64748B] text-lg leading-[1.8]">
              We believe in the power of automation to transform the local business landscape. Our team is dedicated to providing best-in-class support to every client we partner with.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#4F46E5] px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto space-y-10 relative z-10">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-tight uppercase">Join the Movement.</h2>
          <p className="text-white/80 text-lg md:text-xl">We are always looking for visionary partners who want to eliminate friction and scale their results.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-3 bg-white text-[#4F46E5] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Connect with Ashiq
          </a>
        </div>
      </section>
    </div>
  );
}

