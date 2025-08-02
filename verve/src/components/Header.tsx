import React, { useState, useEffect } from 'react';
import { Menu, X, Chrome } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [plan, setPlan] = useState<string>('');
  const { getToken, isSignedIn } = useAuth();

  // Fetch billing plan when the user is signed-in
  useEffect(() => {
    const fetchPlan = async () => {
      if (!isSignedIn) return;
      try {
        const token = await getToken();
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.verve.dev'}/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setPlan(data.plan || '');
        }
      } catch (err) {
        console.error('plan fetch failed', err);
      }
    };
    fetchPlan();
  }, [isSignedIn, getToken]);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-xl border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/ChatGPT_Image_Jul_14__2025__02_20_20_AM-removebg-preview.png" 
                alt="Verve Logo" 
                className="h-8 w-auto"
              />
            </button>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#features" className="font-medium text-gray-300 hover:text-white transition-all duration-300 hover:tracking-wide">Features</a>
              <a href="#how-it-works" className="font-medium text-gray-300 hover:text-white transition-all duration-300 hover:tracking-wide">How it Works</a>
              <a href="#pricing" className="font-medium text-gray-300 hover:text-white transition-all duration-300 hover:tracking-wide">Pricing</a>
              <a href="#faq" className="font-medium text-gray-300 hover:text-white transition-all duration-300 hover:tracking-wide">FAQ</a>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <SignedOut>
              <SignInButton mode="modal">
                <span className="text-gray-300 hover:text-white font-medium">Sign&nbsp;in</span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              {plan && (
                <span className="text-xs bg-emerald-600/80 text-white px-2 py-0.5 rounded-lg mr-2 uppercase tracking-wider">
                  {plan}
                </span>
              )}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <a
              href="https://chrome.google.com/webstore/category/extensions" // placeholder link
              target="_blank"
              className="text-sm font-medium text-indigo-400 hover:text-white border border-indigo-500/60 rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-indigo-600/20"
            >
              Install
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#features" className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300">Features</a>
            <a href="#how-it-works" className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300">How it Works</a>
            <a href="#pricing" className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300">Pricing</a>
            <a href="#faq" className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300">FAQ</a>
            <a
              href="https://chrome.google.com/webstore/category/extensions"
              target="_blank"
              className="block w-full mt-4 text-center text-indigo-400 hover:text-white border border-indigo-500/60 rounded-full px-6 py-3 font-semibold hover:bg-indigo-600/20 transition-all duration-300"
            >
              Install
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;