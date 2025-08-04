import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            Contact Us
          </h1>
          <p className="text-gray-400 text-xl">
            We're here to help! Get in touch with our support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about Verve? Need help with your account? We're here to help you get the most out of our AI-powered reply generation service.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-1">support@getverve.xyz</p>
                  <p className="text-gray-400 text-sm">For general inquiries and account support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-1">Available during business hours</p>
                  <p className="text-gray-400 text-sm">For immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-300 mb-1">Monday - Friday</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-300 mb-1">Within 24 hours</p>
                  <p className="text-gray-400 text-sm">During business days</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">Quick Help</h3>
              <p className="text-gray-300 mb-4">
                Check our FAQ section for quick answers to common questions.
              </p>
              <button
                onClick={() => navigate('/#faq')}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                View FAQ →
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400">Thank you! Your message has been sent. We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Payment</option>
                  <option value="refund">Refund Request</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-400">98% satisfaction rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-2">Average Response Time</h3>
            <p className="text-gray-400">Under 24 hours</p>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-2">Support Team</h3>
            <p className="text-gray-400">Expert assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 