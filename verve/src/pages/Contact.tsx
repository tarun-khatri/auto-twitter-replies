import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-6 text-[14px]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <h1 className="font-heading text-4xl md:text-[48px] text-gray-900 mb-3">Contact Us</h1>
          <p className="text-[16px] text-gray-500">We're here to help! Get in touch with our support team.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Get in Touch</h2>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Have questions about Verve? Need help with your account? We're here to help you get the most out of our AI-powered reply generation service.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email Support", line1: "support@getverve.xyz", line2: "For general inquiries and account support", color: 'bg-violet-50 text-violet-600' },
                { icon: MessageSquare, title: "Live Chat", line1: "Available during business hours", line2: "For immediate assistance", color: 'bg-blue-50 text-blue-600' },
                { icon: Clock, title: "Business Hours", line1: "Monday - Friday", line2: "9:00 AM - 6:00 PM EST", color: 'bg-amber-50 text-amber-600' },
                { icon: MapPin, title: "Response Time", line1: "Within 24 hours", line2: "During business days", color: 'bg-emerald-50 text-emerald-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-soft transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900">{item.title}</h3>
                    <p className="text-[14px] text-gray-700">{item.line1}</p>
                    <p className="text-[13px] text-gray-400">{item.line2}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 rounded-xl p-6">
              <h3 className="text-[14px] font-bold text-gray-900 mb-2">Quick Help</h3>
              <p className="text-[14px] text-gray-600 mb-3">Check our FAQ section for quick answers to common questions.</p>
              <button
                onClick={() => navigate('/#faq')}
                className="text-violet-600 hover:text-violet-700 text-[14px] font-semibold transition-colors"
              >
                View FAQ &rarr;
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-soft">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-emerald-700 text-[14px] font-medium">Thank you! Your message has been sent. We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-[13px] font-semibold text-gray-700 mb-1.5">{field.label} *</label>
                  <input
                    type={field.type} id={field.id} name={field.id}
                    value={(formData as any)[field.id]} onChange={handleChange} required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-[14px] placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="subject" className="block text-[13px] font-semibold text-gray-700 mb-1.5">Subject *</label>
                <select
                  id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-[14px] focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
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
                <label htmlFor="message" className="block text-[13px] font-semibold text-gray-700 mb-1.5">Message *</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-[14px] placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit" disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-bold py-3.5 px-6 rounded-full text-[14px] transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
