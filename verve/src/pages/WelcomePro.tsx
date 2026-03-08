import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '@clerk/clerk-react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

const WelcomePro: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [verifying, setVerifying] = useState<boolean>(true);
  const [isPro, setIsPro] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL as string;
  const { getToken } = useAuth();

  const qs = useMemo(() => new URLSearchParams(window.location.search), []);

  useEffect(() => {
    let mounted = true;
    let attempts = 0;
    const MAX_ATTEMPTS = 20;

    async function pollPlan() {
      if (!mounted) return;
      attempts++;
      try {
        const token = await getToken()?.catch(() => null);
        const res = await fetch(`${apiUrl}/users/me`, token ? { headers: { Authorization: `Bearer ${token}` } } : { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (mounted) {
            const pro = (data?.plan || 'FREE') === 'PRO';
            setIsPro(pro);
            setVerifying(!pro);
          }
          if (!(data?.plan === 'PRO') && attempts < MAX_ATTEMPTS) {
            setTimeout(pollPlan, 1500);
          } else if (!(data?.plan === 'PRO') && mounted) {
            setVerifying(false);
          }
        } else {
          if (mounted && attempts < MAX_ATTEMPTS) setTimeout(pollPlan, 2000);
          else if (mounted) setVerifying(false);
        }
      } catch {
        if (mounted && attempts < MAX_ATTEMPTS) setTimeout(pollPlan, 2000);
        else if (mounted) setVerifying(false);
      }
    }
    pollPlan();
    return () => { mounted = false; };
  }, [apiUrl]);

  const openChromeStore = () => {
    const url = import.meta.env.VITE_CHROME_WEBSTORE_URL || 'https://chrome.google.com/webstore/category/extensions';
    window.open(url, '_blank');
  };

  const openTwitter = () => {
    window.open('https://x.com/home', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-10 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-violet-100/40 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-100/40 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-glow-purple">
              <Sparkles size={28} className="text-white" />
            </div>

            <h1 className="font-heading text-4xl text-gray-900 mb-3">You're PRO!</h1>
            <p className="text-gray-500 text-[16px] mb-6">
              {verifying ? 'Activating your subscription...' : isPro ? 'Your subscription is active.' : 'Payment received — activation may take a moment.'}
            </p>

            {!verifying && (
              <p className="mb-8 text-[14px] font-bold text-violet-600 bg-violet-50 inline-block px-4 py-2 rounded-full">Unlimited replies unlocked</p>
            )}

            <div className="text-left max-w-md mx-auto space-y-3">
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-4">Quick start checklist</p>

              {[
                { num: '01', text: 'Install & pin the Chrome extension', action: 'Open Store', onClick: openChromeStore, color: 'bg-violet-50 text-violet-600 hover:bg-violet-100' },
                { num: '02', text: 'Connect Twitter / enter your public ID', action: 'How it works', onClick: () => {}, href: '#features', color: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
                { num: '03', text: 'Start your first AI personalized reply', action: 'Open X', onClick: openTwitter, color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-xl px-5 py-4 transition-all">
                  <span className="text-[12px] font-bold text-gray-300 font-display">{item.num}</span>
                  <span className="flex-1 text-[14px] text-gray-700 font-medium">{item.text}</span>
                  <button
                    onClick={item.onClick}
                    className={`text-[12px] font-bold px-4 py-1.5 rounded-full transition-colors flex-shrink-0 flex items-center gap-1.5 ${item.color}`}
                  >
                    {item.action}
                    <ExternalLink size={10} />
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[12px] text-gray-400">
              Return status: {qs.get('status') || 'success'}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-gray-400 hover:text-gray-700 text-[14px] transition-colors flex items-center justify-center gap-1.5">
            <ArrowRight size={14} className="rotate-180" />
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePro;
