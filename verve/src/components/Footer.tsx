import React from 'react';
import { Chrome, Mail, Shield, HelpCircle, FileText, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <a 
              href={import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop"}
              target="_blank"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              <Chrome size={22} />
              <span className="group-hover:tracking-wide transition-all duration-300">Add to Chrome</span>
            </a>
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
            <h4 className="font-serif text-white font-bold mb-6 text-lg tracking-wide">Support & Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/contact" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <Mail size={18} />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <HelpCircle size={18} />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <Shield size={18} />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <FileText size={18} />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="font-medium hover:text-white transition-all duration-300 flex items-center gap-3 hover:tracking-wide">
                  <CreditCard size={18} />
                  Refund Policy
                </Link>
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

        {/* Contact Information for Stripe Compliance */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h5 className="text-white font-semibold mb-2">Customer Support</h5>
              <p className="text-gray-400 text-sm">support@getverve.xyz</p>
              <p className="text-gray-400 text-sm">24/7 Email Support</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-400 text-sm">Monday - Friday</p>
              <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">Response Time</h5>
              <p className="text-gray-400 text-sm">Within 24 hours</p>
              <p className="text-gray-400 text-sm">During business days</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;