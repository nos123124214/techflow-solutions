import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CloudInfrastructure from './components/services/CloudInfrastructure';
import Cybersecurity from './components/services/Cybersecurity';
import AIAndML from './components/services/AIAndML';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <HomePage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/ai-machine-learning" element={<AIAndML />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
