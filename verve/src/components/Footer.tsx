import React from 'react';
import { Mail, Shield, HelpCircle, FileText, CreditCard, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const chromeUrl = import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop";

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/ChatGPT_Image_Jul_14__2025__02_20_20_AM-removebg-preview.png"
                alt="Verve Logo"
                className="h-8 w-auto brightness-200"
              />
              <span className="font-display text-xl font-bold text-white tracking-tight">Verve</span>
            </div>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6 max-w-sm">
              AI-powered replies that sound like you. Grow faster on X without spending hours in the reply section.
            </p>
            <a
              href={chromeUrl}
              target="_blank"
              className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all border border-white/10 hover:border-white/20"
            >
              Add to Chrome — Free
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Product links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-display font-bold text-[14px] uppercase tracking-wider mb-5">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-gray-500 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-4">
            <h4 className="text-white font-display font-bold text-[14px] uppercase tracking-wider mb-5">Support & Legal</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, label: 'Contact Us', to: '/contact' },
                { icon: HelpCircle, label: 'Help Center', to: '/contact' },
                { icon: Shield, label: 'Privacy Policy', to: '/privacy' },
                { icon: FileText, label: 'Terms of Service', to: '/terms' },
                { icon: CreditCard, label: 'Refund Policy', to: '/refund' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[14px] text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <link.icon size={14} className="text-gray-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mt-14 mb-10" />

        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { title: 'Customer Support', lines: ['support@getverve.xyz', '24/7 Email Support'] },
            { title: 'Business Hours', lines: ['Monday - Friday', '9:00 AM - 6:00 PM EST'] },
            { title: 'Response Time', lines: ['Within 24 hours', 'During business days'] },
          ].map((block) => (
            <div key={block.title} className="text-center">
              <p className="text-[13px] font-semibold text-gray-300 mb-1.5">{block.title}</p>
              {block.lines.map((line, i) => (
                <p key={i} className="text-[13px] text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-600">
          <p>&copy; {new Date().getFullYear()} Verve. All rights reserved.</p>
          <p className="italic text-gray-700">Built for creators who refuse to be ignored</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
