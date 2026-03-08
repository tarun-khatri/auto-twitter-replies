import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-6 text-[14px]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <h1 className="font-heading text-4xl md:text-[48px] text-gray-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-[14px]">
            Last updated: January 2025
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-8 md:p-10">
          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">1. Acceptance of Terms</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              By accessing and using Verve ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">2. Description of Service</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              Verve is an AI-powered Chrome extension that analyzes your social media content to generate personalized replies. Our service includes:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>AI-powered voice cloning and tone analysis</li>
              <li>Personalized reply generation for social media platforms</li>
              <li>Chrome extension functionality</li>
              <li>Account mimicking and style replication</li>
              <li>Context-aware intelligence for images and text</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">3. User Accounts and Registration</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              To access certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">4. Subscription and Payment Terms</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              Our Service offers both free and premium subscription plans:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Free Plan:</strong> 15 personalized replies per day, basic features</li>
              <li><strong>Pro Plan:</strong> $12/month - unlimited replies, advanced features</li>
              <li><strong>Team Plan:</strong> $39/month - team collaboration features</li>
            </ul>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              All payments are processed securely through Stripe. Subscriptions automatically renew unless cancelled.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">5. Cancellation Policy</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              You may cancel your subscription at any time:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>Through your account settings on our website</li>
              <li>By contacting our support team</li>
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">6. Refund and Dispute Policy</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              We offer a 30-day money-back guarantee for new subscribers:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>Full refund within 30 days of first purchase</li>
              <li>Contact support@getverve.xyz for refund requests</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Disputes resolved through direct communication with our support team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">7. Acceptable Use Policy</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>Generate harmful, abusive, or inappropriate content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to reverse engineer or hack the Service</li>
              <li>Use the Service for spam or harassment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">8. Privacy and Data Protection</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">9. Intellectual Property</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Verve and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">10. Limitation of Liability</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              In no event shall Verve, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">11. Contact Information</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-[15px] text-gray-600 mb-4 leading-relaxed list-disc list-inside space-y-2">
              <li>Email: support@getverve.xyz</li>
              <li>Website: getverve.xyz</li>
              <li>Business Hours: Monday - Friday, 9 AM - 6 PM EST</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-3 font-display">12. Changes to Terms</h2>
            <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 