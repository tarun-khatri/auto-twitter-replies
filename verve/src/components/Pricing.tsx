import React from 'react';
import { Check, Chrome, Zap } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "5 personalized replies per day",
      "Basic tone analysis",
      "Text post analysis",
      "Chrome extension"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "12",
    period: "month",
    description: "For serious creators and professionals",
    features: [
      "Unlimited personalized replies",
      "Advanced tone analysis",
      "Image context analysis",
      "Account mimicking",
      "Priority support",
      "Analytics dashboard",
      "Custom tone profiles"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Team",
    price: "39",
    period: "month",
    description: "For agencies and teams",
    features: [
      "Everything in Pro",
      "5 team members",
      "Shared tone profiles",
      "Team analytics",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Simple, Transparent Pricing
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your growth goals. Start free, upgrade when ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/40 backdrop-blur-md border rounded-3xl p-10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-slide-up ${
                plan.popular 
                  ? 'border-indigo-500 ring-2 ring-indigo-500/30 shadow-indigo-500/20' 
                  : 'border-gray-600/50 hover:border-indigo-400/50'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-gold text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg animate-glow">
                    <Zap size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 tracking-wide">{plan.name}</h3>
                <p className="text-gray-400 mb-6 font-medium">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">${plan.price}</span>
                  <span className="text-gray-400 font-medium">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-4">
                    <Check size={22} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`group w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-gold text-white shadow-lg hover:shadow-indigo-500/25'
                    : 'bg-gray-700 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 text-white shadow-lg'
                }`}
              >
                {index === 0 && <Chrome size={22} />}
                <span className="group-hover:tracking-wide transition-all duration-300">{plan.cta}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-gray-400 mb-6 font-medium text-lg">All plans include our 30-day money-back guarantee</p>
          <div className="inline-flex items-center gap-8 text-gray-400 font-medium">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;