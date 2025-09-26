import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Projects Completed' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: TrendingUp, number: '98%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'David Richardson',
      position: 'Chief Technology Officer',
      experience: '20+ years in enterprise technology',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Cloud Architecture, Digital Transformation'
    },
    {
      name: 'Lisa Wang',
      position: 'Head of Cybersecurity',
      experience: '18+ years in security solutions',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Security Strategy, Compliance Management'
    },
    {
      name: 'James Mitchell',
      position: 'AI & Data Solutions Director',
      experience: '15+ years in machine learning',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Machine Learning, Data Analytics'
    },
    {
      name: 'Maria Santos',
      position: 'Client Success Manager',
      experience: '12+ years in enterprise consulting',
      image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: 'Project Management, Client Relations'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leading Technology Innovation Since 2009
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of technology experts has been delivering enterprise-grade solutions 
            that empower businesses to thrive in an increasingly digital world.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Driving Digital Excellence
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009, TechFlow Solutions has grown from a small consulting firm to a 
                global technology leader serving Fortune 500 companies across multiple industries. 
                Our commitment to innovation and excellence has made us the trusted partner for 
                organizations seeking digital transformation.
              </p>
              <p>
                We specialize in cloud infrastructure, cybersecurity, AI implementation, and 
                strategic IT consulting. Our team of certified experts brings decades of combined 
                experience in designing, implementing, and managing enterprise-scale technology solutions.
              </p>
              <p>
                With offices in North America, Europe, and Asia-Pacific, we provide 24/7 support 
                and maintain the highest standards of security and compliance, including ISO 27001 
                certification and SOC 2 Type II compliance.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern office environment"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Executive Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <div className="text-blue-600 font-medium mb-2">
                  {member.position}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {member.experience}
                </div>
                <div className="text-xs text-gray-500">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;