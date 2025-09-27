import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 text-sm border border-blue-500/30">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                Trusted by Fortune 500 Companies
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Enterprise Technology</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We deliver cutting-edge technology solutions that drive innovation, enhance security, and accelerate growth for global enterprises. Our expert team has successfully transformed over 500+ organizations worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:IT@tf-solutions.vercel.app?subject=Enterprise%20Solution%20Inquiry"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors group"
              >
                Start Your Digital Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center border-2 border-gray-400 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <div>
                  <div className="font-semibold text-lg">ISO 27001</div>
                  <div className="text-sm text-gray-400">Security Certified</div>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold text-lg">24/7 Support</div>
                  <div className="text-sm text-gray-400">Global Coverage</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern technology workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-xl z-20">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;