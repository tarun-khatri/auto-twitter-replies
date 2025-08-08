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
            
            <h3 className="text-xl font-bold text-white mb-3">2.1 Authentication Information</h3>
            <p className="text-gray-300 mb-4">
              We collect authentication information to provide our service:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Clerk authentication tokens for user login and session management</li>
              <li>X (Twitter) authentication cookies to verify user login status</li>
              <li>User account credentials and session information</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.2 Personal Communications</h3>
            <p className="text-gray-300 mb-4">
              To provide our AI-powered reply generation service, we analyze:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Public tweets and replies from your X (Twitter) accounts</li>
              <li>Tweet content that you want to reply to</li>
              <li>Generated replies and interaction history</li>
              <li>Public profile information and bio from X</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.3 Website Content</h3>
            <p className="text-gray-300 mb-4">
              We access and process website content to provide our service:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Tweet text, images, and metadata from X pages</li>
              <li>User profile information and public account data</li>
              <li>Writing patterns, tone, and communication style analysis</li>
              <li>Engagement patterns and audience interactions</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3">2.4 User Activity</h3>
            <p className="text-gray-300 mb-4">
              We collect limited usage data to improve our service:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Extension usage patterns and features accessed</li>
              <li>Reply generation requests and quota usage</li>
              <li>Technical information (browser type, extension version)</li>
              <li>Performance and error logs for service improvement</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Service Provision:</strong> To provide and maintain our AI-powered reply generation service</li>
              <li><strong>Personalization:</strong> To analyze your writing style and create personalized replies that match your tone</li>
              <li><strong>Account Management:</strong> To manage your account, track usage quotas, and provide customer support</li>
              <li><strong>Improvement:</strong> To improve our AI models, develop new features, and enhance user experience</li>
              <li><strong>Security:</strong> To verify user authentication and prevent unauthorized access</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our service (Clerk for authentication, MongoDB for data storage, AI model providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication through Clerk</li>
              <li>MongoDB database with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your information for as long as necessary to provide our services:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</li>
              <li><strong>Usage Data:</strong> Retained for 2 years for service improvement and analytics</li>
              <li><strong>X Content Analysis:</strong> Retained for 1 year to maintain personalized features</li>
              <li><strong>Generated Replies:</strong> Stored locally in browser storage and optionally in our database for history</li>
              <li><strong>Authentication Tokens:</strong> Stored locally in browser storage and managed by Clerk</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information and account</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
              <li><strong>Local Storage:</strong> Clear extension data from your browser storage</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Browser Storage and Cookies</h2>
            <p className="text-gray-300 mb-4">
              Our extension uses browser storage and cookies to:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Store authentication tokens and session information</li>
              <li>Remember user preferences and settings</li>
              <li>Cache recent reply history and usage data</li>
              <li>Maintain user login status across browser sessions</li>
              <li>Track quota usage and account information</li>
            </ul>
            <p className="text-gray-300 mb-4">
              You can clear this data through your browser settings or the extension's logout function.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Our service integrates with third-party services:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li><strong>Clerk:</strong> Authentication services (subject to Clerk's privacy policy)</li>
              <li><strong>MongoDB:</strong> Database storage (subject to MongoDB's privacy policy)</li>
              <li><strong>X (Twitter):</strong> For content analysis and reply generation</li>
              <li><strong>AI Model Providers:</strong> For generating personalized replies</li>
              <li><strong>RSS Services:</strong> For fetching public tweet data (TwitRSS.me, xcancel.com)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Data Processing and AI</h2>
            <p className="text-gray-300 mb-4">
              Our AI-powered service processes your data as follows:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Analyzes your X posts to understand your writing style and tone</li>
              <li>Processes tweet content to generate contextually relevant replies</li>
              <li>Uses AI models to create personalized responses that match your communication style</li>
              <li>Stores analysis results to improve future reply generation</li>
              <li>All processing is done securely on our servers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
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