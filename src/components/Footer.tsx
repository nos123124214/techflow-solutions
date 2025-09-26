import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-xl">
                TechFlow
              </div>
              <span className="ml-2 text-gray-300 font-medium">Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative technology solutions. We deliver enterprise-grade 
              services that drive growth, enhance security, and accelerate digital transformation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:it-solutions@vercel.app" 
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Infrastructure Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 TechFlow Solutions. All rights reserved. ISO 27001 Certified.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <span>24/7 Global Support</span>
              <span>•</span>
              <span>99.9% Uptime SLA</span>
              <span>•</span>
              <a href="mailto:it-solutions@vercel.app" className="text-blue-400 hover:text-blue-300">
                it-solutions@vercel.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;