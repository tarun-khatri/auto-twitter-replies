import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [plan, setPlan] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const chromeUrl = import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/ChatGPT_Image_Jul_14__2025__02_20_20_AM-removebg-preview.png"
              alt="Verve Logo"
              className="h-9 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-display text-[22px] font-bold text-gray-900 tracking-tight">Verve</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {['Features', 'How it Works', 'Pricing', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/60 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-[15px] font-medium text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100/60 transition-all">
                  Sign In
                </button>
              </SignInButton>
              <a
                href={chromeUrl}
                target="_blank"
                className="group flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </SignedOut>
            <SignedIn>
              {plan && (
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  plan === 'PRO'
                    ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200'
                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                  {plan}
                </span>
              )}
              <UserButton afterSignOutUrl="/" />
              <a
                href={chromeUrl}
                target="_blank"
                className="group flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Install Extension
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </SignedIn>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
          <div className="px-6 py-5 space-y-1">
            {['Features', 'How it Works', 'Pricing', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-3 text-[15px] text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full bg-gray-900 text-white text-[15px] font-semibold px-5 py-3 rounded-full hover:bg-gray-800 transition-all">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <a
                  href={chromeUrl}
                  target="_blank"
                  className="block text-center bg-gray-900 text-white text-[15px] font-semibold px-5 py-3 rounded-full hover:bg-gray-800 transition-all"
                >
                  Install Extension
                </a>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
