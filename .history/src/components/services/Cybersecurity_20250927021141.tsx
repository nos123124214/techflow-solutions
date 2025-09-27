import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
  const features = [
    'Advanced threat detection',
    'Security incident response',
    'Vulnerability assessments',
    'Compliance management',
    'Security awareness training',
    'Penetration testing',
    '24/7 security monitoring',
    'Risk assessment and mitigation'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proactive Protection',
      description: 'Advanced threat detection prevents security incidents before they impact your business.'
    },
    {
      icon: Lock,
      title: 'Compliance Assurance',
      description: 'Meet regulatory requirements with comprehensive compliance management.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security operations center monitors your infrastructure around the clock.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-400 hover:text-red-300 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-6">
            <Shield className="w-12 h-12 text-red-400 mr-4" />
            <h1 className="text-5xl font-bold">Cybersecurity</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Protect your organization from evolving cyber threats with comprehensive security solutions. 
            Our expert team provides advanced threat detection, incident response, and compliance management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Enterprise Security Solutions
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                In today's threat landscape, cybersecurity is not optional—it's essential. Our 
                comprehensive security services protect your organization from sophisticated cyber 
                attacks while ensuring compliance with industry regulations.
              </p>
              <p>
                We provide end-to-end security solutions including threat detection, incident response, 
                vulnerability management, and security awareness training. Our security operations 
                center monitors your infrastructure 24/7 to detect and respond to threats in real-time.
              </p>
              <p>
                With ISO 27001 certification and expertise in frameworks like NIST, SOC 2, and GDPR, 
                we ensure your security posture meets the highest industry standards.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cybersecurity operations center"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Security Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Security Advantages
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Stats */}
        <div className="bg-white rounded-2xl p-12 mb-20 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Security by the Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">&lt;5min</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">0</div>
              <div className="text-gray-600">Successful Breaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-12 text-center text-white">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            Don't Wait for a Security Incident
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a comprehensive security assessment and protect your organization today.
          </p>
          <a 
            href="mailto:it@tf-solutions@vercel.app?subject=Cybersecurity%20Assessment"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Security Assessment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;