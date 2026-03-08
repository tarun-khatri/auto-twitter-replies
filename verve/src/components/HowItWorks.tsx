import React from 'react';
import { UserPlus, Download, Link2, Cpu, Send, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in 10 seconds flat. No credit card, no setup headaches. Just your email and you're in.",
    time: "10 sec",
    color: 'bg-violet-50 text-violet-600 border-violet-100',
    iconBg: 'bg-violet-100',
  },
  {
    icon: Download,
    title: "Install Extension",
    description: "One-click Chrome install. The Verve button appears directly on every tweet in your feed.",
    time: "1 click",
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Link2,
    title: "Pick a Voice",
    description: "Connect your X account or enter any public handle. Verve will learn that writing style.",
    time: "Any handle",
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Cpu,
    title: "AI Learns Your Tone",
    description: "Verve scans hundreds of tweets, decodes your personality, humor, slang, and communication patterns.",
    time: "100+ tweets",
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Send,
    title: "Reply Like a Pro",
    description: "Hit the Verve button on any tweet. Get a personalized reply in under 2 seconds. Post it. Done.",
    time: "< 2 sec",
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    iconBg: 'bg-pink-100',
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-white relative">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full text-violet-600 text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            HOW IT WORKS
          </div>
          <h2 className="font-heading text-4xl md:text-[52px] text-gray-900 leading-tight mb-5">
            Live in Under 2 Minutes
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            No tutorials. No configuration. Sign up, install, and watch your engagement transform instantly.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-violet-200 via-amber-200 to-pink-200 hidden md:block" />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-6 p-6 bg-gray-50/50 hover:bg-white rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-card transition-all duration-300">
                  {/* Icon */}
                  <div className={`relative z-10 w-[56px] h-[56px] ${step.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={24} className={step.color.split(' ')[1]} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[12px] font-bold text-gray-300 font-display">STEP {index + 1}</span>
                      <div className="h-px flex-1 bg-gray-100" />
                      <span className={`text-[12px] font-bold px-3 py-1 rounded-full border ${step.color}`}>
                        {step.time}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-1.5">{step.title}</h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-14 text-center animate-fade-up" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-pink-50 border border-violet-100 rounded-2xl px-8 py-5 shadow-soft">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-glow-purple">
              <Cpu size={20} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-display text-[16px] font-bold text-gray-900">That's it. Seriously.</p>
              <p className="text-[14px] text-gray-500">Most users generate their first reply within 90 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
