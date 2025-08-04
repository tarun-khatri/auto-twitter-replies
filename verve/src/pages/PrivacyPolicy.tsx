import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Verve ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered Chrome extension and related services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-white mb-3">2.1 Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We may collect personal information that you provide directly to us:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Name and email address (when you create an account)</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Social media handles and public profile information</li>
              <li>Communication preferences and settings</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.2 Usage Data</h3>
            <p className="text-gray-300 mb-4">
              We automatically collect certain information about your use of our service:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Extension usage patterns and features accessed</li>
              <li>Generated replies and interaction data</li>
              <li>Technical information (browser type, device information)</li>
              <li>Performance and error logs</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.3 Social Media Content</h3>
            <p className="text-gray-300 mb-4">
              To provide our AI-powered reply generation service, we analyze:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Public tweets and replies from your social media accounts</li>
              <li>Writing patterns, tone, and communication style</li>
              <li>Public profile information and bio</li>
              <li>Engagement patterns and audience interactions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Service Provision:</strong> To provide and maintain our AI-powered reply generation service</li>
              <li><strong>Personalization:</strong> To analyze your writing style and create personalized replies</li>
              <li><strong>Account Management:</strong> To manage your account, process payments, and provide customer support</li>
              <li><strong>Improvement:</strong> To improve our service, develop new features, and enhance user experience</li>
              <li><strong>Communication:</strong> To send you important updates, security alerts, and support messages</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our service (payment processing, hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure payment processing through Stripe</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</li>
              <li><strong>Usage Data:</strong> Retained for 2 years for service improvement and analytics</li>
              <li><strong>Payment Data:</strong> Retained as required by financial regulations</li>
              <li><strong>Social Media Analysis:</strong> Retained for 1 year to maintain personalized features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Maintain your authentication session</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze service usage and performance</li>
              <li>Provide personalized content and features</li>
            </ul>
            <p className="text-gray-300 mb-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Our service integrates with third-party services:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Stripe:</strong> Payment processing (subject to Stripe's privacy policy)</li>
              <li><strong>Clerk:</strong> Authentication services (subject to Clerk's privacy policy)</li>
              <li><strong>Social Media Platforms:</strong> For content analysis and reply generation</li>
              <li><strong>Analytics Services:</strong> For service improvement and user experience</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a notice in our service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Email: privacy@getverve.xyz</li>
              <li>Support Email: support@getverve.xyz</li>
              <li>Website: getverve.xyz</li>
              <li>Business Hours: Monday - Friday, 9 AM - 6 PM EST</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 