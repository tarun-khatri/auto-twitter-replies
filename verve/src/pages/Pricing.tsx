import React from 'react';
import { Check, Zap, Shield, Target, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-[56px] text-gray-900 leading-tight mb-5">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Start free and upgrade when you're ready to scale your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-card hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-1">Free</h3>
                <p className="text-[14px] text-gray-500 mb-4">Try it out. No strings attached.</p>
                <div className="font-display text-[48px] font-bold text-gray-900 leading-none">$0</div>
                <div className="text-[14px] text-gray-400">Forever</div>
              </div>

              <ul className="space-y-3 mb-8">
                {["15 daily personalized replies", "Basic tone analysis", "Chrome extension access", "Community support"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-emerald-600" />
                    </div>
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 rounded-full text-[14px] font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-glow-purple relative hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[12px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-white mb-1">Pro</h3>
                <p className="text-[14px] text-gray-400 mb-4">For creators serious about growing.</p>
                <div className="font-display text-[48px] font-bold text-white leading-none">$19</div>
                <div className="text-[14px] text-gray-400">per month</div>
              </div>

              <ul className="space-y-3 mb-8">
                {["Unlimited personalized replies", "Advanced tone analysis", "Image context analysis", "Account mimicking", "Priority support", "Analytics dashboard"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-violet-300" />
                    </div>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={async () => {
                  try {
                    const token = await (window as any).Clerk?.session?.getToken?.() || null;
                    if (!token) {
                      const clerk = (window as any).Clerk;
                      if (clerk?.openSignIn) clerk.openSignIn();
                      else alert('Please sign in first');
                      return;
                    }
                    const api = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                    const res = await fetch(`${api}/billing/static-checkout-url`, {
                      method: 'GET',
                      headers: { Authorization: `Bearer ${token}` },
                    });
                    if (!res.ok) throw new Error(await res.text());
                    const data = await res.json();
                    if (data?.url) window.location.href = data.url;
                  } catch (e: any) {
                    alert(e?.message || 'Checkout failed');
                  }
                }}
                className="group w-full py-3.5 rounded-full text-[14px] font-bold bg-white text-gray-900 hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                Upgrade to Pro
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Why Choose Pro */}
          <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-10 max-w-3xl mx-auto shadow-soft">
            <h3 className="font-heading text-3xl text-gray-900 text-center mb-8">Why Choose Pro?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Unlimited Growth', desc: 'No daily limits on engagement', gradient: 'from-violet-500/10 to-purple-500/10', color: 'text-violet-600' },
                { icon: Target, title: 'Advanced Features', desc: 'Image analysis & account cloning', gradient: 'from-blue-500/10 to-cyan-500/10', color: 'text-blue-600' },
                { icon: Shield, title: 'Priority Support', desc: 'Get help when you need it', gradient: 'from-emerald-500/10 to-teal-500/10', color: 'text-emerald-600' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-[14px] text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
