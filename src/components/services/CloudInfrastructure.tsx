import { ArrowLeft, Cloud, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudInfrastructure = () => {
  const features = [
    'Multi-cloud architecture design',
    'AWS, Azure, Google Cloud expertise',
    'Automated scaling and load balancing',
    'Cost optimization strategies',
    'Migration planning and execution',
    'Disaster recovery solutions',
    '99.9% uptime SLA guarantee',
    '24/7 monitoring and support'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Improved Performance',
      description: 'Optimized infrastructure delivers faster response times and better user experience.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your infrastructure globally with automatic resource allocation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-6">
            <Cloud className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold">Cloud Infrastructure</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your business with scalable, secure, and cost-effective cloud solutions. 
            Our expert team designs and manages enterprise-grade infrastructure across all major cloud platforms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Enterprise Cloud Solutions
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our cloud infrastructure services help organizations migrate, optimize, and manage 
                their IT infrastructure in the cloud. We provide comprehensive solutions that reduce 
                costs, improve performance, and enhance security.
              </p>
              <p>
                With expertise across AWS, Microsoft Azure, and Google Cloud Platform, we design 
                multi-cloud strategies that avoid vendor lock-in while maximizing the unique 
                strengths of each platform.
              </p>
              <p>
                From initial assessment to ongoing management, our certified cloud architects ensure 
                your infrastructure is optimized for performance, security, and cost-effectiveness.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cloud infrastructure visualization"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What's Included
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
            Key Benefits
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
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

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how cloud infrastructure can accelerate your business.
          </p>
          <a 
            href="mailto:it@techflow-sloutions.site?subject=Cloud%20Infrastructure%20Consultation"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure;