import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-xl">
                TechFlow
              </div>
              <span className="ml-2 text-gray-300 font-medium">Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:it@techflow-sloutions.site"
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

          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.services}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.cloudInfrastructure.title}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.cybersecurity.title}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.aiMl.title}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.itConsulting.title}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.infrastructure.title}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.services.digital.title}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{t.footer.company}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">{t.footer.aboutUs}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.header.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.careers}</a></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">{t.footer.termsOfService}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <span>{t.footer.globalSupport}</span>
              <span>•</span>
              <span>{t.footer.uptimeSla}</span>
              <span>•</span>
              <a href="mailto:it@techflow-sloutions.site" className="text-blue-400 hover:text-blue-300">
                it@techflow-sloutions.site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
