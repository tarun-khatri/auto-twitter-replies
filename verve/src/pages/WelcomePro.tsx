import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '@clerk/clerk-react';

const WelcomePro: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [verifying, setVerifying] = useState<boolean>(true);
  const [isPro, setIsPro] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL as string;
  const { getToken } = useAuth();

  const qs = useMemo(() => new URLSearchParams(window.location.search), []);

  useEffect(() => {
    let mounted = true;
    async function pollPlan() {
      try {
        // Prefer Clerk token if available; fall back to cookie
        const token = await getToken()?.catch(() => null);
        const res = await fetch(`${apiUrl}/users/me`, token ? { headers: { Authorization: `Bearer ${token}` } } : { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (mounted) {
            const pro = (data?.plan || 'FREE') === 'PRO';
            setIsPro(pro);
            setVerifying(!pro);
          }
          if (!(data?.plan === 'PRO')) setTimeout(pollPlan, 1500);
        } else {
          if (mounted) setTimeout(pollPlan, 2000);
        }
      } catch {
        if (mounted) setTimeout(pollPlan, 2000);
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
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="bg-gray-800/40 border border-gray-700/60 rounded-3xl p-8 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">You're PRO! 👑</div>
          <div className="text-gray-300 mb-6">{verifying ? 'Activating your subscription…' : 'Your subscription is active.'}</div>

          {/* Confetti placeholder (minimal; avoid adding libs) */}
          {!verifying && (
            <div className="mb-6 text-emerald-300 font-semibold">Welcome aboard! Unlimited replies unlocked.</div>
          )}

          <div className="text-left mx-auto max-w-xl">
            <div className="text-white font-semibold mb-3">Quick start checklist</div>
            <ol className="list-decimal list-inside space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1">Install & pin the Chrome extension</span>
                <button
                  className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1 rounded"
                  onClick={openChromeStore}
                >Open Store</button>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">Connect Twitter / enter your public ID</span>
                <a
                  className="ml-auto bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded"
                  href="#features"
                >How it works</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">Start your first AI personalized reply</span>
                <button
                  className="ml-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-1 rounded"
                  onClick={openTwitter}
                >Open X now</button>
              </li>
            </ol>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Return status: {qs.get('status') || 'success'}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-gray-300 hover:text-white text-sm underline">← Back to home</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePro;


