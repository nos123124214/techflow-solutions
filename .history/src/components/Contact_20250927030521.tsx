import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our technology experts to discuss how we can help accelerate 
            your digital transformation and drive sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of experts is ready to discuss your unique technology challenges and 
                design customized solutions that deliver measurable results. Contact us today 
                for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a 
                    href="mailto:technology-solutions@vercel.app" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    technology-solutions@vercel.app
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Response Time</div>
                  <div className="text-gray-600">Within 2 business hours</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Presence</div>
                  <div className="text-gray-600">North America • Europe • Asia-Pacific</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Support</div>
                  <div className="text-gray-600">24/7 Enterprise Support Available</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Why Choose TechFlow Solutions?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  ISO 27001 certified security standards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  99.9% uptime SLA guarantee
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Dedicated project management
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Scalable solutions for any business size
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Consultation
            </h3>
            <form 
              action="mailto:technology-solutions@vercel.app" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors">
                  <option>Select a service</option>
                  <option>Cloud Infrastructure</option>
                  <option>Cybersecurity</option>
                  <option>AI & Machine Learning</option>
                  <option>IT Consulting</option>
                  <option>Infrastructure Management</option>
                  <option>Digital Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Request
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy. We'll respond within 2 business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;