import { motion } from 'motion/react';

export default function Results() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-[72px]">
      <section className="section-padding bg-white px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6 mb-20">
          <div className="bg-[#EEF2FF] text-[#4F46E5] rounded-full px-4 py-1 text-sm font-semibold inline-block uppercase tracking-wider">Proof of Velocity</div>
          <h1 className="font-serif text-[42px] md:text-[64px] font-bold text-[#0F172A] leading-[1.1]">
            Real Results From
            <br/>
            <span className="text-[#4F46E5]">Real Businesses</span>
          </h1>
          <p className="text-[#64748B] text-xl max-w-2xl mx-auto font-medium">
            We don't measure success by "likes". We measure by the reduction in friction and the increase in your bottom line.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="bg-[#EEF2FF] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-bold inline-block tracking-wide">Healthcare & Specialized Services</div>
                <h3 className="text-[32px] md:text-[42px] font-bold text-[#0F172A] leading-tight font-serif">Aesthetic Dental Hub: From Manual Chaos to 85% Auto-Booking.</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-[#0F172A]">The Challenge</h4>
                  <p className="text-[#64748B] text-lg leading-[1.8]">
                    Managing over 150 inquiries daily across Facebook and WhatsApp. The front-desk staff was overwhelmed, leading to response times of over 4 hours. By the time they replied, patients had often already consulted another clinic.
                  </p>
                  <h4 className="text-xl font-bold text-[#0F172A]">The Solution</h4>
                  <p className="text-[#64748B] text-lg leading-[1.8]">
                    We implemented an intelligent triage system that identifies the type of treatment needed, provides pricing instantly, and allows patients to choose available time slots without human intervention.
                  </p>
                </div>
                <div className="bg-[#F8FAFC] rounded-[24px] p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { v: "14s", l: "Avg Response Time" },
                      { v: "+52%", l: "Appointment Volume" },
                      { v: "0", l: "Missed After-Hours Leads" },
                      { v: "180+", l: "Hrs Saved / Month" }
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="text-[28px] font-extrabold text-[#4F46E5] leading-none">{s.v}</div>
                        <div className="text-[11px] text-[#64748B] mt-2 font-bold uppercase tracking-widest">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-[#E2E8F0]">
                    <p className="text-[#4F46E5] font-semibold italic text-base">
                      "Before Regimate, we were basically throwing money away on ads because we couldn't handle the inquiries. Now, the system handles the noise and our staff only speaks to confirmed patients."
                    </p>
                    <p className="text-[#0F172A] font-bold text-sm mt-4">— Dr. Ahmed S., Clinical Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="bg-[#EEF2FF] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-bold inline-block tracking-wide">E-commerce & Retail</div>
                <h3 className="text-[32px] md:text-[42px] font-bold text-[#0F172A] leading-tight font-serif">Premium Lifestyle Brand: Scaling Without Increasing Staff.</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-[#0F172A]">The Challenge</h4>
                  <p className="text-[#64748B] text-lg leading-[1.8]">
                    A growing local fashion brand was struggling with 'price inquiries' and 'size availability' questions that took up 90% of their team's time, leaving no room for actual sales-closing or customer service.
                  </p>
                  <h4 className="text-xl font-bold text-[#0F172A]">The Solution</h4>
                  <p className="text-[#64748B] text-lg leading-[1.8]">
                    We synced their inventory with a WhatsApp catalog bot. Now, when a customer asks for price or size, the bot instantly shows availability and allows for one-click ordering.
                  </p>
                </div>
                <div className="bg-[#F8FAFC] rounded-[24px] p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { v: "3.2x", l: "ROI on Ad Spend" },
                      { v: "92%", l: "Automated Checkout" },
                      { v: "24/7", l: "Sales Operation" },
                      { v: "40%", l: "Repeat Purchase Rate" }
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="text-[28px] font-extrabold text-[#4F46E5] leading-none">{s.v}</div>
                        <div className="text-[11px] text-[#64748B] mt-2 font-bold uppercase tracking-widest">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-[#E2E8F0]">
                    <p className="text-[#4F46E5] font-semibold italic text-base">
                      "I used to stay up until 2 AM replying to customers. Now I wake up to confirmed orders on my dashboard. Regimate literally gave me my life back while doubling my sales."
                    </p>
                    <p className="text-[#0F172A] font-bold text-sm mt-4">— Samira R., Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="section-padding bg-[#F1F5F9] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-center text-[#0F172A] mb-16 uppercase tracking-tight">Wall of Trust.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { author: 'Rahim J.', bio: "Entrepreneur", text: 'My WhatsApp has never been this organized. I finally have time to focus on my business instead of just replying to hi and price all day.' },
              { author: 'Farhana S.', bio: "Clinic Manager", text: 'We noticed a massive drop in lost leads within 48 hours. Most people book themselves now through the automated calendar.' },
              { author: 'Shahed A.', bio: "Business Owner", text: 'The investment paid for itself in the first 5 days. Truly a game-changer for our branch performance.' }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-white border border-[#E2E8F0] rounded-[24px] space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                 <div className="text-[#F59E0B] text-xl">⭐⭐⭐⭐⭐</div>
                 <p className="text-[#64748B] italic font-medium leading-[1.7]">"{t.text}"</p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/20 flex items-center justify-center font-bold text-[#4F46E5]">
                     {t.author[0]}
                   </div>
                   <div>
                     <p className="text-sm font-bold text-[#0F172A]">{t.author}</p>
                     <p className="text-[12px] text-[#64748B] font-medium">{t.bio}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

