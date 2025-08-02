import React from 'react';
import { Chrome, Mail, Shield, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/ChatGPT_Image_Jul_14__2025__02_20_20_AM-removebg-preview.png" 
                alt="Verve Logo" 
                className="h-8 w-auto"
              />
              <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-wide">Verve</h3>
            </div>
            <p className="font-sans text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              The intelligent extension that helps you achieve 5x faster growth with personalized replies that sound authentically you.
            </p>
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
              <Chrome size={22} />
              <span className="group-hover:tracking-wide transition-all duration-300">Add to Chrome</span>
            </button>
          </div>

          <div>
            <h4 className="font-serif text-white font-bold mb-6 text-lg tracking-wide">Product</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#features" className="font-medium hover:text-white transition-all duration-300 hover:tracking-wide">Features</a></li>
              <li><a href="#how-it-works" className="font-medium hover:text-white transition-all duration-300 hover:tracking-wide">How it Works</a></li>
              <li><a href="#pricing" className="font-medium hover:text-white transition-all duration-300 hover:tracking-wide">Pricing</a></li>
              <li><a href="#faq" className="font-medium hover:text-white transition-all duration-300 hover:tracking-wide">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white font-bold mb-6 text-lg tracking-wide">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <HelpCircle size={18} />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <Mail size={18} />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <Shield size={18} />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-medium">
            © 2025 Verve. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-6 md:mt-0 text-gray-400 font-medium">
            <span className="italic">Made for creators who want to stand out</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;