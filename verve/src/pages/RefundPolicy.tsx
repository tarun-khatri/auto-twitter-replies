import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RefundPolicy = () => {
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
            Refund Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="text-gray-300 mb-4">
              At Verve, we want you to be completely satisfied with our AI-powered reply generation service. This refund policy outlines the terms and conditions for refunds, cancellations, and dispute resolution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. 30-Day Money-Back Guarantee</h2>
            <p className="text-gray-300 mb-4">
              We offer a 30-day money-back guarantee for all new subscribers:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Eligibility:</strong> Available for first-time Pro and Team plan subscribers</li>
              <li><strong>Timeframe:</strong> 30 days from the date of your first payment</li>
              <li><strong>Coverage:</strong> Full refund of your subscription payment</li>
              <li><strong>No Questions Asked:</strong> We don't require a reason for the refund</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. How to Request a Refund</h2>
            <p className="text-gray-300 mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="text-gray-300 mb-4 list-decimal list-inside space-y-2">
              <li><strong>Contact Support:</strong> Email us at support@getverve.xyz</li>
              <li><strong>Include Details:</strong> Provide your account email and reason for refund</li>
              <li><strong>Account Verification:</strong> We'll verify your account and eligibility</li>
              <li><strong>Processing:</strong> Refunds are processed within 5-7 business days</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Refund Processing</h2>
            <p className="text-gray-300 mb-4">
              Once your refund is approved:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Timeline:</strong> 5-7 business days for processing</li>
              <li><strong>Method:</strong> Refunded to your original payment method</li>
              <li><strong>Notification:</strong> You'll receive an email confirmation</li>
              <li><strong>Account Status:</strong> Your account will be downgraded to Free plan</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation Policy</h2>
            <p className="text-gray-300 mb-4">
              You may cancel your subscription at any time:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Account Settings:</strong> Cancel through your account dashboard</li>
              <li><strong>Email Request:</strong> Send cancellation request to support@getverve.xyz</li>
              <li><strong>Effective Date:</strong> Cancellation takes effect at the end of your current billing period</li>
              <li><strong>No Partial Refunds:</strong> No refunds for partial months after the 30-day guarantee period</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Non-Refundable Items</h2>
            <p className="text-gray-300 mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Free plan usage (no payment made)</li>
              <li>Subscriptions cancelled after 30-day guarantee period</li>
              <li>Partial months of service</li>
              <li>Accounts suspended for policy violations</li>
              <li>Team plan seats that have been used</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Dispute Resolution</h2>
            <p className="text-gray-300 mb-4">
              If you have a dispute regarding your payment or refund:
            </p>
            <ol className="text-gray-300 mb-4 list-decimal list-inside space-y-2">
              <li><strong>Direct Communication:</strong> Contact our support team first</li>
              <li><strong>Documentation:</strong> Provide relevant account and payment information</li>
              <li><strong>Review Process:</strong> We'll review your case within 3 business days</li>
              <li><strong>Resolution:</strong> We'll work with you to find a fair solution</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Chargebacks and Payment Disputes</h2>
            <p className="text-gray-300 mb-4">
              We strongly encourage direct communication before initiating chargebacks:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Contact Us First:</strong> Reach out to our support team</li>
              <li><strong>Documentation:</strong> We'll provide all necessary documentation</li>
              <li><strong>Fair Resolution:</strong> We're committed to resolving issues fairly</li>
              <li><strong>Chargeback Fees:</strong> Unnecessary chargebacks may incur additional fees</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Special Circumstances</h2>
            <p className="text-gray-300 mb-4">
              We may consider refunds in special circumstances:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Technical Issues:</strong> Prolonged service outages or technical problems</li>
              <li><strong>Billing Errors:</strong> Incorrect charges or double billing</li>
              <li><strong>Service Changes:</strong> Significant changes to our service offering</li>
              <li><strong>Account Security:</strong> Unauthorized account access or fraud</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For refund requests, cancellations, or disputes:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Email:</strong> support@getverve.xyz</li>
              <li><strong>Response Time:</strong> Within 24 hours during business days</li>
              <li><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</li>
              <li><strong>Website:</strong> getverve.xyz</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting on our website. We will notify users of any material changes via email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 