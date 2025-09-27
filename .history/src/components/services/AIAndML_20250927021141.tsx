import React from 'react';
import { ArrowLeft, Brain, BarChart, Cpu, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAndML = () => {
  const features = [
    'Custom AI model development',
    'Machine learning algorithms',
    'Predictive analytics',
    'Natural language processing',
    'Computer vision solutions',
    'Process automation',
    'Data pipeline optimization',
    'AI strategy consulting'
  ];

  const benefits = [
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable business intelligence and predictive insights.'
    },
    {
      icon: Cpu,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce costs.'
    },
    {
      icon: Zap,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI solutions tailored to your industry.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-6">
            <Brain className="w-12 h-12 text-purple-400 mr-4" />
            <h1 className="text-5xl font-bold">AI & Machine Learning</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Harness the power of artificial intelligence and machine learning to drive innovation, 
            automate processes, and unlock valuable insights from your data.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Intelligent Business Solutions
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our AI and machine learning services help organizations leverage artificial intelligence 
                to solve complex business challenges, automate processes, and gain competitive advantages 
                through data-driven decision making.
              </p>
              <p>
                We specialize in developing custom AI models, implementing machine learning algorithms, 
                and creating intelligent automation solutions that integrate seamlessly with your 
                existing systems and workflows.
              </p>
              <p>
                From predictive analytics to natural language processing, our team of data scientists 
                and AI engineers delivers solutions that transform how your business operates and 
                competes in the digital marketplace.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI and machine learning visualization"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Capabilities
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
            Business Impact
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
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

        {/* Use Cases */}
        <div className="bg-white rounded-2xl p-12 mb-20 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600 text-sm">Forecast trends, demand, and customer behavior</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Process Automation</h3>
              <p className="text-gray-600 text-sm">Automate repetitive tasks and workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Intelligent Chatbots</h3>
              <p className="text-gray-600 text-sm">Enhance customer service with AI-powered support</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Embrace AI Innovation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how AI and machine learning can transform your business operations.
          </p>
          <a 
            href="mailto:IT@tf-solutions.vercel.app?subject=AI%20and%20Machine%20Learning%20Consultation"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore AI Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIAndML;