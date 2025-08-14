import React from 'react';
import { Check, Star, Zap, Shield, Users, Target } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Choose Your Plan
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade when you're ready to scale your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-white mb-4 tracking-wide">Free</h3>
              <div className="text-5xl font-bold text-white mb-2">$0</div>
              <div className="text-gray-400 font-medium">Forever</div>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>15 daily personalized replies</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Basic tone analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Chrome extension access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Community support</span>
              </div>
            </div>

            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md border border-indigo-500/50 rounded-3xl p-10 hover:border-indigo-400/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-white mb-4 tracking-wide">Pro</h3>
              <div className="text-5xl font-bold text-white mb-2">$19</div>
              <div className="text-gray-400 font-medium">per month</div>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Unlimited personalized replies</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Advanced tone analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Image context analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Account mimicking</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Priority support</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Analytics dashboard</span>
              </div>
            </div>

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
                     headers: {
                       Authorization: `Bearer ${token}`,
                     },
                   });
                   if (!res.ok) throw new Error(await res.text());
                   const data = await res.json();
                   if (data?.url) window.location.href = data.url;
                 } catch (e: any) {
                   alert(e?.message || 'Checkout failed');
                 }
               }}
               className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
             >
               Upgrade to Pro
             </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl font-bold text-white mb-8 tracking-wide">Why Choose Pro?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Unlimited Growth</h4>
                <p className="text-gray-400">No daily limits on your engagement potential</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Advanced Features</h4>
                <p className="text-gray-400">Image analysis and account mimicking capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Priority Support</h4>
                <p className="text-gray-400">Get help when you need it most</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 