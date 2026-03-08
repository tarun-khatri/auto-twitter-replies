import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '@clerk/clerk-react';

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Try it out. No strings attached.",
    features: [
      "15 AI replies per day",
      "Basic tone analysis",
      "Text-only tweet support",
      "Chrome extension included"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "12",
    period: "month",
    description: "For creators serious about growing.",
    features: [
      "Everything in Free",
      "Unlimited AI replies",
      "Deep personality analysis",
      "Image + chart understanding",
      "Clone any public account's style",
      "Multiple tone profiles",
      "Priority generation speed"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Team",
    price: "39",
    period: "month",
    description: "For agencies managing multiple brands.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared tone profiles",
      "Team usage analytics",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const { isSignedIn, getToken } = useAuth();

  const handleCtaClick = async (cta: string) => {
    if (cta === "Upgrade to Pro") {
      try {
        if (!isSignedIn) {
          alert('Please sign in to upgrade to Pro.');
          return;
        }
        const token = await getToken();
        const apiUrl = import.meta.env.VITE_API_URL as string;
        const res = await fetch(`${apiUrl}/billing/static-checkout-url`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`Checkout link failed: ${res.status}`);
        const data = await res.json();
        if (data?.url) {
          window.location.href = data.url;
        } else {
          throw new Error('No checkout URL in response');
        }
      } catch (e) {
        console.error('upgrade error', e);
        alert('Unable to open checkout. Please try again.');
      }
    } else if (cta === "Get Started Free") {
      console.log("Get Started Free clicked");
    } else if (cta === "Contact Sales") {
      console.log("Contact Sales clicked");
    }
  };

  return (
    <section id="pricing" className="py-28 px-6 bg-white relative">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-600 text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            PRICING
          </div>
          <h2 className="font-heading text-4xl md:text-[52px] text-gray-900 leading-tight mb-5">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Start free. Upgrade when you're hooked. Cancel anytime — no questions asked.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 animate-fade-up ${
                plan.popular
                  ? 'bg-gray-900 text-white shadow-glow-purple hover:shadow-[0_0_80px_-12px_rgba(124,58,237,0.35)]'
                  : 'bg-white border border-gray-200 hover:shadow-card hover:border-gray-300'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[12px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles size={12} />
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-7">
                <h3 className={`font-display text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-[14px] mb-5 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                <div className="flex items-baseline gap-1.5">
                  {plan.name === 'Pro' && (
                    <span className="text-gray-500 line-through text-[15px] mr-1">$27</span>
                  )}
                  <span className={`font-display text-[48px] font-bold leading-none ${plan.popular ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
                  <span className={`text-[14px] ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/{plan.period}</span>
                </div>
                {plan.name === 'Pro' && (
                  <div className="mt-2">
                    <span className="text-[12px] font-bold text-fuchsia-400 bg-fuchsia-500/10 px-2.5 py-1 rounded-full">56% OFF — early adopter</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-violet-500/20' : 'bg-emerald-50'
                    }`}>
                      <Check size={12} className={plan.popular ? 'text-violet-300' : 'text-emerald-600'} />
                    </div>
                    <span className={`text-[14px] leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleCtaClick(plan.cta)}
                className={`group w-full py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 text-center animate-fade-up" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-gray-400">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              30-day money-back guarantee
            </span>
            <span className="text-gray-200">|</span>
            <span>No setup fees</span>
            <span className="text-gray-200">|</span>
            <span>Cancel anytime</span>
            <span className="text-gray-200">|</span>
            <span>Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
