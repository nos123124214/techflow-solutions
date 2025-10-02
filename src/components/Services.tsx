import { Cloud, Shield, Brain, Users, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      title: t.services.cloudInfrastructure.title,
      path: '/services/cloud-infrastructure',
      description: t.services.cloudInfrastructure.description,
      features: [
        t.services.cloudInfrastructure.feature1,
        t.services.cloudInfrastructure.feature2,
        t.services.cloudInfrastructure.feature3,
        t.services.cloudInfrastructure.feature4,
      ]
    },
    {
      icon: Shield,
      title: t.services.cybersecurity.title,
      path: '/services/cybersecurity',
      description: t.services.cybersecurity.description,
      features: [
        t.services.cybersecurity.feature1,
        t.services.cybersecurity.feature2,
        t.services.cybersecurity.feature3,
        t.services.cybersecurity.feature4,
      ]
    },
    {
      icon: Brain,
      title: t.services.aiMl.title,
      path: '/services/ai-machine-learning',
      description: t.services.aiMl.description,
      features: [
        t.services.aiMl.feature1,
        t.services.aiMl.feature2,
        t.services.aiMl.feature3,
        t.services.aiMl.feature4,
      ]
    },
    {
      icon: Users,
      title: t.services.itConsulting.title,
      path: null,
      description: t.services.itConsulting.description,
      features: [
        t.services.itConsulting.feature1,
        t.services.itConsulting.feature2,
        t.services.itConsulting.feature3,
        t.services.itConsulting.feature4,
      ]
    },
    {
      icon: Server,
      title: t.services.infrastructure.title,
      path: null,
      description: t.services.infrastructure.description,
      features: [
        t.services.infrastructure.feature1,
        t.services.infrastructure.feature2,
        t.services.infrastructure.feature3,
        t.services.infrastructure.feature4,
      ]
    },
    {
      icon: Smartphone,
      title: t.services.digital.title,
      path: null,
      description: t.services.digital.description,
      features: [
        t.services.digital.feature1,
        t.services.digital.feature2,
        t.services.digital.feature3,
        t.services.digital.feature4,
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.description}
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
                    {t.services.learnMore}
                  </Link>
                ) : (
                  <a
                    href={`mailto:it@techflow-sloutions.site?subject=Service%20Inquiry:%20${service.title}`}
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    {t.services.learnMore}
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
