import React from 'react';
import { Cloud, Shield, Brain, Users, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      path: '/services/cloud-infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud. Migration, optimization, and management services.',
      features: ['Multi-cloud strategy', 'Cost optimization', 'Auto-scaling', '99.9% uptime SLA']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      path: '/services/cybersecurity',
      description: 'Comprehensive security solutions protecting against modern threats with advanced monitoring and response.',
      features: ['Threat detection', 'Compliance management', 'Security audits', '24/7 monitoring']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      path: '/services/ai-machine-learning',
      description: 'Intelligent automation and predictive analytics to drive business insights and operational efficiency.',
      features: ['Predictive analytics', 'Process automation', 'Custom AI models', 'Data visualization']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      path: null,
      description: 'Strategic technology consulting to align IT infrastructure with business objectives and growth.',
      features: ['Digital strategy', 'Architecture design', 'Technology roadmaps', 'Change management']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      path: null,
      description: 'Complete infrastructure lifecycle management from design to maintenance and optimization.',
      features: ['Server management', 'Network optimization', 'Disaster recovery', 'Performance monitoring']
    },
    {
      icon: Smartphone,
      title: 'Digital Solutions',
      path: null,
      description: 'Custom software development and digital transformation solutions for modern enterprises.',
      features: ['Custom applications', 'API development', 'Integration services', 'Mobile solutions']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud infrastructure to AI implementation, we provide end-to-end technology services 
            that transform how businesses operate and compete in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="mb-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.path ? (
                  <Link 
                    to={service.path}
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More →
                  </Link>
                ) : (
                  <a 
                    href={`mailto:technology-solutions@vercel.app?subject=Service%20Inquiry:%20${service.title}`}
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;