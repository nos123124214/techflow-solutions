import React from 'react';
import { Quote, Star } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      quote: "TechFlow Solutions transformed our entire IT infrastructure in just 6 months. Their cloud migration strategy reduced our operational costs by 40% while improving system reliability.",
      author: "Sarah Chen",
      position: "CTO",
      company: "Global Manufacturing Corp",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "The cybersecurity implementation was flawless. We've seen zero security incidents since deployment, and their 24/7 monitoring gives us complete peace of mind.",
      author: "Michael Rodriguez",
      position: "IT Director",
      company: "Financial Services Ltd",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      quote: "Their AI solutions have revolutionized our customer service operations. We've achieved 60% faster response times and significantly improved customer satisfaction scores.",
      author: "Emma Thompson",
      position: "VP of Operations",
      company: "Tech Innovations Inc",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const clients = [
    "Global Manufacturing Corp",
    "Financial Services Ltd", 
    "Tech Innovations Inc",
    "Healthcare Systems United",
    "Energy Solutions International",
    "Retail Giants Network"
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with organizations across industries to deliver transformative technology solutions 
            that drive measurable business results.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-gray-100 px-4 py-6 rounded-lg text-center text-sm font-medium text-gray-600 w-full">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-blue-600 font-medium">
              Join 500+ satisfied clients worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;