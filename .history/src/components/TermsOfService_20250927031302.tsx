import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using TechFlow Solutions' services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                TechFlow Solutions provides enterprise technology services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud infrastructure design, implementation, and management</li>
                <li>Cybersecurity solutions and consulting</li>
                <li>AI and machine learning implementation</li>
                <li>IT consulting and strategic planning</li>
                <li>Infrastructure management and support</li>
                <li>Custom digital solutions development</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Level Agreements</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                TechFlow Solutions commits to the following service standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>99.9% uptime guarantee for managed infrastructure services</li>
                <li>24/7 technical support for enterprise clients</li>
                <li>Response time within 2 business hours for critical issues</li>
                <li>ISO 27001 compliant security standards</li>
                <li>Regular security audits and compliance reporting</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Responsibilities</h2>
            <div className="space-y-4 text-gray-700">
              <p>Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information for service delivery</li>
                <li>Maintain confidentiality of access credentials and security information</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Pay fees according to agreed payment terms</li>
                <li>Provide reasonable cooperation for service implementation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                All intellectual property rights in our services, including software, documentation, 
                and methodologies, remain the property of TechFlow Solutions. Clients receive a 
                non-exclusive license to use our services as specified in their service agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                TechFlow Solutions' liability is limited to the fees paid for the specific service 
                that gave rise to the claim. We shall not be liable for any indirect, incidental, 
                special, or consequential damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Either party may terminate services with 30 days written notice. TechFlow Solutions 
                reserves the right to terminate services immediately for breach of these terms or 
                non-payment of fees.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">TechFlow Solutions</p>
                <p>Email: <a href="mailto:IT@tf-solutions.vercel.app" className="text-blue-600 hover:text-blue-700">IT@tf-solutions.vercel.app</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;