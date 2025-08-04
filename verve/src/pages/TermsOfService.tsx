import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Verve ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Verve is an AI-powered Chrome extension that analyzes your social media content to generate personalized replies. Our service includes:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>AI-powered voice cloning and tone analysis</li>
              <li>Personalized reply generation for social media platforms</li>
              <li>Chrome extension functionality</li>
              <li>Account mimicking and style replication</li>
              <li>Context-aware intelligence for images and text</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-300 mb-4">
              To access certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              Our Service offers both free and premium subscription plans:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Free Plan:</strong> 15 personalized replies per day, basic features</li>
              <li><strong>Pro Plan:</strong> $12/month - unlimited replies, advanced features</li>
              <li><strong>Team Plan:</strong> $39/month - team collaboration features</li>
            </ul>
            <p className="text-gray-300 mb-4">
              All payments are processed securely through Stripe. Subscriptions automatically renew unless cancelled.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation Policy</h2>
            <p className="text-gray-300 mb-4">
              You may cancel your subscription at any time:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Through your account settings on our website</li>
              <li>By contacting our support team</li>
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>No refunds for partial months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Refund and Dispute Policy</h2>
            <p className="text-gray-300 mb-4">
              We offer a 30-day money-back guarantee for new subscribers:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Full refund within 30 days of first purchase</li>
              <li>Contact support@getverve.xyz for refund requests</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Disputes resolved through direct communication with our support team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Generate harmful, abusive, or inappropriate content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to reverse engineer or hack the Service</li>
              <li>Use the Service for spam or harassment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The Service and its original content, features, and functionality are owned by Verve and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Verve, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Email: support@getverve.xyz</li>
              <li>Website: getverve.xyz</li>
              <li>Business Hours: Monday - Friday, 9 AM - 6 PM EST</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 