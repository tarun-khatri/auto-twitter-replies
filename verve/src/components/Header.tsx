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
            <div className="flex items-center gap-3">
              <img 
                src="/ChatGPT_Image_Jul_14__2025__02_20_20_AM-removebg-preview.png" 
                alt="Verve Logo" 
                className="h-8 w-auto"
              />
              <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-wide">Verve</h1>
            </div>
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
            <SignedIn>
              <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
                <Chrome size={20} />
                <span className="group-hover:tracking-wide transition-all duration-300">Add to Chrome</span>
              </button>
            </SignedIn>
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
            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300">
              <Chrome size={20} />
              Add to Chrome
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;