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
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
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
                className="h-24 w-auto"
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
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              {plan && (
                <div className="relative mr-2">
                  <span
                    className="text-xs bg-emerald-600/80 text-white px-2 py-0.5 rounded-lg uppercase tracking-wider flex items-center gap-1 cursor-default"
                    onClick={(e) => {
                      // Toggle tooltip on touch/click
                      const el = (e.currentTarget.nextSibling as HTMLElement);
                      if (el) el.style.display = el.style.display === 'none' || !el.style.display ? 'block' : 'none';
                    }}
                    onMouseEnter={(e) => {
                      const el = (e.currentTarget.nextSibling as HTMLElement);
                      if (el) el.style.display = 'block';
                    }}
                    onMouseLeave={(e) => {
                      const el = (e.currentTarget.nextSibling as HTMLElement);
                      if (el) el.style.display = 'none';
                    }}
                  >
                    {plan === 'PRO' && <span aria-hidden>👑</span>}
                    {plan}
                  </span>
                  {plan === 'PRO' && (
                    <div
                      role="tooltip"
                      style={{ display: 'none' }}
                      className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-700 bg-gray-900/95 text-gray-100 shadow-xl p-3 z-50"
                    >
                      <div className="text-xs font-semibold mb-2 text-emerald-300">PRO Benefits</div>
                      <ul className="list-disc list-inside text-xs space-y-1 text-gray-200">
                        <li>Unlimited replies</li>
                        <li>Understand image context</li>
                        <li>Faster replies</li>
                        <li>More personal replies</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <UserButton afterSignOutUrl="/" />
              <a
                href={import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop"}
                target="_blank"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 w-auto"
              >
                <Chrome size={16} />
                Install Extension
              </a>
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
            <SignedOut>
              <div className="mt-4">
                <SignInButton mode="modal">
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <a
                href={import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop"}
                target="_blank"
                className="mt-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 w-auto"
              >
                <Chrome size={16} />
                Install Extension
              </a>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;