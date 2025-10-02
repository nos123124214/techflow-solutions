export type Language = 'en' | 'de' | 'es' | 'fr' | 'ar';

export interface Translations {
  header: {
    home: string;
    services: string;
    about: string;
    clients: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    certification: string;
    certificationSub: string;
    support: string;
    supportSub: string;
    projectsDelivered: string;
    projectsCount: string;
  };
  services: {
    title: string;
    description: string;
    cloudInfrastructure: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    cybersecurity: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    aiMl: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    itConsulting: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    infrastructure: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    digital: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    learnMore: string;
  };
  about: {
    title: string;
    subtitle: string;
    sectionTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  clients: {
    title: string;
    description: string;
    joinClients: string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
    author1: string;
    author2: string;
    author3: string;
    position1: string;
    position2: string;
    position3: string;
  };
  contact: {
    title: string;
    description: string;
    getStarted: string;
    getStartedDescription: string;
    email: string;
    responseTime: string;
    responseTimeValue: string;
    globalPresence: string;
    globalPresenceValue: string;
    support: string;
    supportValue: string;
    whyChoose: string;
    reason1: string;
    reason2: string;
    reason3: string;
    reason4: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    companyName: string;
    emailAddress: string;
    serviceInterest: string;
    selectService: string;
    projectDetails: string;
    projectDetailsPlaceholder: string;
    sendRequest: string;
    privacyNotice: string;
  };
  footer: {
    description: string;
    services: string;
    company: string;
    aboutUs: string;
    ourClients: string;
    careers: string;
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
    globalSupport: string;
    uptimeSla: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      clients: 'Clients',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      badge: 'Connecting You with Trusted Partners',
      title: 'Transform Your Business with',
      titleHighlight: 'Expert Technology Partners',
      description: 'We connect businesses with certified technology specialists who deliver cutting-edge solutions in cybersecurity, cloud infrastructure, AI adoption, and strategic IT consulting.',
      ctaPrimary: 'Find Your Solution',
      ctaSecondary: 'Explore Services',
      certification: 'Certified Partners',
      certificationSub: 'Trusted & Verified',
      support: '24/7 Support',
      supportSub: 'Global Coverage',
      projectsDelivered: 'Partner Projects',
      projectsCount: '500+',
    },
    services: {
      title: 'Comprehensive Technology Solutions',
      description: 'From cloud infrastructure to AI implementation, we connect you with specialized partners who provide end-to-end technology services tailored to your business needs.',
      cloudInfrastructure: {
        title: 'Cloud Infrastructure',
        description: 'Connect with cloud experts for scalable solutions with AWS, Azure, and Google Cloud. Migration, optimization, and management services.',
        feature1: 'Multi-cloud strategy',
        feature2: 'Cost optimization',
        feature3: 'Auto-scaling',
        feature4: '99.9% uptime SLA',
      },
      cybersecurity: {
        title: 'Cybersecurity',
        description: 'Partner with security specialists offering comprehensive protection against modern threats with advanced monitoring and response.',
        feature1: 'Threat detection',
        feature2: 'Compliance management',
        feature3: 'Security audits',
        feature4: '24/7 monitoring',
      },
      aiMl: {
        title: 'AI & Machine Learning',
        description: 'Access AI experts providing intelligent automation and predictive analytics to drive business insights and operational efficiency.',
        feature1: 'Predictive analytics',
        feature2: 'Process automation',
        feature3: 'Custom AI models',
        feature4: 'Data visualization',
      },
      itConsulting: {
        title: 'IT Consulting',
        description: 'Work with strategic technology consultants to align IT infrastructure with business objectives and growth.',
        feature1: 'Digital strategy',
        feature2: 'Architecture design',
        feature3: 'Technology roadmaps',
        feature4: 'Change management',
      },
      infrastructure: {
        title: 'Infrastructure Management',
        description: 'Partner with infrastructure specialists for complete lifecycle management from design to maintenance and optimization.',
        feature1: 'Server management',
        feature2: 'Network optimization',
        feature3: 'Disaster recovery',
        feature4: 'Performance monitoring',
      },
      digital: {
        title: 'Digital Solutions',
        description: 'Connect with development experts for custom software and digital transformation solutions for modern enterprises.',
        feature1: 'Custom applications',
        feature2: 'API development',
        feature3: 'Integration services',
        feature4: 'Mobile solutions',
      },
      learnMore: 'Learn More →',
    },
    about: {
      title: 'Connecting Businesses with Technology Excellence Since 2019',
      subtitle: 'Our experienced team specializes in connecting businesses with trusted technology partners who deliver enterprise-grade solutions for digital transformation.',
      sectionTitle: 'Building Trust Through Expert Partnerships',
      paragraph1: 'Established in 2019, our company was founded by a team of five professionals from diverse backgrounds who shared a vision of delivering the right solutions to organizations of all sizes. From the very beginning, our focus has been on connecting businesses with trusted and specialized partners to ensure they receive the most effective and reliable services.',
      paragraph2: 'Today, we provide a wide range of technology-driven solutions, including cybersecurity, cloud infrastructure, AI adoption, and strategic IT consulting. By collaborating with reputable and certified entities, we ensure that every client receives tailored solutions that meet their unique needs and industry standards.',
      paragraph3: 'Our approach is built on trust, expertise, and adaptability, enabling us to support organizations across different sectors in achieving their digital transformation goals with confidence and efficiency.',
    },
    clients: {
      title: 'Trusted by Industry Leaders',
      description: "We've connected organizations across industries with transformative technology partners who deliver measurable business results.",
      joinClients: 'Join 500+ satisfied clients worldwide',
      testimonial1: 'TechFlow Solutions connected us with the perfect cloud partner. Their expertise in matching our needs resulted in a 40% reduction in operational costs.',
      testimonial2: 'The cybersecurity partner they recommended was exceptional. Zero incidents since deployment, and their monitoring service gives us complete peace of mind.',
      testimonial3: 'Their network of AI specialists revolutionized our operations. We achieved 60% faster response times through the solutions they connected us with.',
      author1: 'Sarah Chen',
      author2: 'Michael Rodriguez',
      author3: 'Emma Thompson',
      position1: 'CTO',
      position2: 'IT Director',
      position3: 'VP of Operations',
    },
    contact: {
      title: 'Ready to Find Your Technology Partner?',
      description: 'Get in touch with our team to discuss how we can connect you with the right technology specialists to accelerate your digital transformation.',
      getStarted: 'Get Started Today',
      getStartedDescription: 'Our team is ready to understand your unique technology challenges and connect you with certified partners who deliver measurable results. Contact us today for a free consultation.',
      email: 'Email',
      responseTime: 'Response Time',
      responseTimeValue: 'Within 2 business hours',
      globalPresence: 'Partner Network',
      globalPresenceValue: 'North America • Europe • Asia-Pacific',
      support: 'Support',
      supportValue: '24/7 Partner Support Available',
      whyChoose: 'Why Choose TechFlow Solutions?',
      reason1: 'Certified and verified partner network',
      reason2: 'Tailored matching to your needs',
      reason3: 'Dedicated partnership management',
      reason4: 'Solutions for any business size',
      formTitle: 'Request a Consultation',
      firstName: 'First Name',
      lastName: 'Last Name',
      companyName: 'Company Name',
      emailAddress: 'Email Address',
      serviceInterest: 'Service Interest',
      selectService: 'Select a service',
      projectDetails: 'Project Details',
      projectDetailsPlaceholder: 'Tell us about your project requirements, timeline, and goals...',
      sendRequest: 'Send Request',
      privacyNotice: "By submitting this form, you agree to our privacy policy. We'll respond within 2 business hours.",
    },
    footer: {
      description: 'Connecting businesses with innovative technology partners. We facilitate enterprise-grade services that drive growth, enhance security, and accelerate digital transformation.',
      services: 'Services',
      company: 'Company',
      aboutUs: 'About Us',
      ourClients: 'Our Clients',
      careers: 'Careers',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      copyright: '© 2025 TechFlow Solutions. All rights reserved.',
      globalSupport: '24/7 Global Support',
      uptimeSla: 'Trusted Partners',
    },
  },
  de: {
    header: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      clients: 'Kunden',
      contact: 'Kontakt',
      getQuote: 'Angebot erhalten',
    },
    hero: {
      badge: 'Verbindung mit vertrauenswürdigen Partnern',
      title: 'Transformieren Sie Ihr Unternehmen mit',
      titleHighlight: 'Experten-Technologiepartnern',
      description: 'Wir verbinden Unternehmen mit zertifizierten Technologiespezialisten, die modernste Lösungen in den Bereichen Cybersicherheit, Cloud-Infrastruktur, KI-Einführung und strategische IT-Beratung liefern.',
      ctaPrimary: 'Lösung finden',
      ctaSecondary: 'Dienste erkunden',
      certification: 'Zertifizierte Partner',
      certificationSub: 'Vertrauenswürdig & verifiziert',
      support: '24/7 Support',
      supportSub: 'Globale Abdeckung',
      projectsDelivered: 'Partner-Projekte',
      projectsCount: '500+',
    },
    services: {
      title: 'Umfassende Technologielösungen',
      description: 'Von Cloud-Infrastruktur bis zur KI-Implementierung verbinden wir Sie mit spezialisierten Partnern, die End-to-End-Technologiedienste bieten, die auf Ihre Geschäftsanforderungen zugeschnitten sind.',
      cloudInfrastructure: {
        title: 'Cloud-Infrastruktur',
        description: 'Verbindung mit Cloud-Experten für skalierbare Lösungen mit AWS, Azure und Google Cloud. Migrations-, Optimierungs- und Verwaltungsdienste.',
        feature1: 'Multi-Cloud-Strategie',
        feature2: 'Kostenoptimierung',
        feature3: 'Auto-Skalierung',
        feature4: '99,9% Uptime-SLA',
      },
      cybersecurity: {
        title: 'Cybersicherheit',
        description: 'Partnerschaft mit Sicherheitsspezialisten, die umfassenden Schutz gegen moderne Bedrohungen mit erweiterten Überwachungs- und Reaktionsdiensten bieten.',
        feature1: 'Bedrohungserkennung',
        feature2: 'Compliance-Management',
        feature3: 'Sicherheitsaudits',
        feature4: '24/7 Überwachung',
      },
      aiMl: {
        title: 'KI & Machine Learning',
        description: 'Zugang zu KI-Experten, die intelligente Automatisierung und prädiktive Analysen zur Förderung von Geschäftseinblicken und betrieblicher Effizienz bereitstellen.',
        feature1: 'Prädiktive Analysen',
        feature2: 'Prozessautomatisierung',
        feature3: 'Benutzerdefinierte KI-Modelle',
        feature4: 'Datenvisualisierung',
      },
      itConsulting: {
        title: 'IT-Beratung',
        description: 'Zusammenarbeit mit strategischen Technologieberatern, um die IT-Infrastruktur mit Geschäftszielen und Wachstum in Einklang zu bringen.',
        feature1: 'Digitale Strategie',
        feature2: 'Architekturdesign',
        feature3: 'Technologie-Roadmaps',
        feature4: 'Change Management',
      },
      infrastructure: {
        title: 'Infrastrukturverwaltung',
        description: 'Partnerschaft mit Infrastrukturspezialisten für vollständiges Lifecycle-Management von Design bis Wartung und Optimierung.',
        feature1: 'Serververwaltung',
        feature2: 'Netzwerkoptimierung',
        feature3: 'Notfallwiederherstellung',
        feature4: 'Leistungsüberwachung',
      },
      digital: {
        title: 'Digitale Lösungen',
        description: 'Verbindung mit Entwicklungsexperten für maßgeschneiderte Software und digitale Transformationslösungen für moderne Unternehmen.',
        feature1: 'Benutzerdefinierte Anwendungen',
        feature2: 'API-Entwicklung',
        feature3: 'Integrationsdienste',
        feature4: 'Mobile Lösungen',
      },
      learnMore: 'Mehr erfahren →',
    },
    about: {
      title: 'Verbindung von Unternehmen mit Technologieexzellenz seit 2019',
      subtitle: 'Unser erfahrenes Team ist darauf spezialisiert, Unternehmen mit vertrauenswürdigen Technologiepartnern zu verbinden, die erstklassige Lösungen für die digitale Transformation liefern.',
      sectionTitle: 'Vertrauen durch Expertenpartnerschaften aufbauen',
      paragraph1: 'Unser Unternehmen wurde 2019 von einem Team aus fünf Fachleuten mit unterschiedlichen Hintergründen gegründet, die die Vision teilten, die richtigen Lösungen für Organisationen jeder Größe zu liefern. Von Anfang an lag unser Fokus darauf, Unternehmen mit vertrauenswürdigen und spezialisierten Partnern zu verbinden, um sicherzustellen, dass sie die effektivsten und zuverlässigsten Dienstleistungen erhalten.',
      paragraph2: 'Heute bieten wir eine breite Palette technologiegetriebener Lösungen, darunter Cybersicherheit, Cloud-Infrastruktur, KI-Einführung und strategische IT-Beratung. Durch die Zusammenarbeit mit seriösen und zertifizierten Einrichtungen stellen wir sicher, dass jeder Kunde maßgeschneiderte Lösungen erhält, die seinen individuellen Anforderungen und Industriestandards entsprechen.',
      paragraph3: 'Unser Ansatz basiert auf Vertrauen, Fachwissen und Anpassungsfähigkeit und ermöglicht es uns, Organisationen in verschiedenen Sektoren dabei zu unterstützen, ihre Ziele der digitalen Transformation mit Zuversicht und Effizienz zu erreichen.',
    },
    clients: {
      title: 'Vertraut von Branchenführern',
      description: 'Wir haben Organisationen branchenübergreifend mit transformativen Technologiepartnern verbunden, die messbare Geschäftsergebnisse liefern.',
      joinClients: 'Schließen Sie sich 500+ zufriedenen Kunden weltweit an',
      testimonial1: 'TechFlow Solutions hat uns mit dem perfekten Cloud-Partner verbunden. Ihre Expertise beim Abgleich unserer Bedürfnisse führte zu einer 40%igen Reduzierung der Betriebskosten.',
      testimonial2: 'Der von ihnen empfohlene Cybersicherheitspartner war außergewöhnlich. Null Vorfälle seit der Bereitstellung, und ihr Überwachungsservice gibt uns völligen Seelenfrieden.',
      testimonial3: 'Ihr Netzwerk von KI-Spezialisten revolutionierte unsere Abläufe. Wir erreichten 60% schnellere Reaktionszeiten durch die Lösungen, mit denen sie uns verbunden haben.',
      author1: 'Sarah Chen',
      author2: 'Michael Rodriguez',
      author3: 'Emma Thompson',
      position1: 'CTO',
      position2: 'IT-Direktor',
      position3: 'VP Operations',
    },
    contact: {
      title: 'Bereit, Ihren Technologiepartner zu finden?',
      description: 'Nehmen Sie Kontakt mit unserem Team auf, um zu besprechen, wie wir Sie mit den richtigen Technologiespezialisten verbinden können, um Ihre digitale Transformation zu beschleunigen.',
      getStarted: 'Jetzt starten',
      getStartedDescription: 'Unser Team ist bereit, Ihre individuellen Technologieherausforderungen zu verstehen und Sie mit zertifizierten Partnern zu verbinden, die messbare Ergebnisse liefern. Kontaktieren Sie uns noch heute für eine kostenlose Beratung.',
      email: 'E-Mail',
      responseTime: 'Antwortzeit',
      responseTimeValue: 'Innerhalb von 2 Werktagen',
      globalPresence: 'Partnernetzwerk',
      globalPresenceValue: 'Nordamerika • Europa • Asien-Pazifik',
      support: 'Support',
      supportValue: '24/7 Partner-Support verfügbar',
      whyChoose: 'Warum TechFlow Solutions wählen?',
      reason1: 'Zertifiziertes und verifiziertes Partnernetzwerk',
      reason2: 'Maßgeschneiderte Anpassung an Ihre Bedürfnisse',
      reason3: 'Dediziertes Partnerschaftsmanagement',
      reason4: 'Lösungen für jede Unternehmensgröße',
      formTitle: 'Beratung anfordern',
      firstName: 'Vorname',
      lastName: 'Nachname',
      companyName: 'Firmenname',
      emailAddress: 'E-Mail-Adresse',
      serviceInterest: 'Service-Interesse',
      selectService: 'Wählen Sie einen Service',
      projectDetails: 'Projektdetails',
      projectDetailsPlaceholder: 'Erzählen Sie uns von Ihren Projektanforderungen, Zeitplänen und Zielen...',
      sendRequest: 'Anfrage senden',
      privacyNotice: 'Durch das Absenden dieses Formulars stimmen Sie unserer Datenschutzrichtlinie zu. Wir antworten innerhalb von 2 Werktagen.',
    },
    footer: {
      description: 'Verbindung von Unternehmen mit innovativen Technologiepartnern. Wir ermöglichen erstklassige Dienstleistungen, die Wachstum fördern, Sicherheit erhöhen und digitale Transformation beschleunigen.',
      services: 'Dienstleistungen',
      company: 'Unternehmen',
      aboutUs: 'Über uns',
      ourClients: 'Unsere Kunden',
      careers: 'Karriere',
      privacyPolicy: 'Datenschutzrichtlinie',
      termsOfService: 'Nutzungsbedingungen',
      copyright: '© 2025 TechFlow Solutions. Alle Rechte vorbehalten.',
      globalSupport: '24/7 Globaler Support',
      uptimeSla: 'Vertrauenswürdige Partner',
    },
  },
  es: {
    header: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      clients: 'Clientes',
      contact: 'Contacto',
      getQuote: 'Solicitar cotización',
    },
    hero: {
      badge: 'Conectándote con socios de confianza',
      title: 'Transforme su negocio con',
      titleHighlight: 'Socios tecnológicos expertos',
      description: 'Conectamos empresas con especialistas tecnológicos certificados que ofrecen soluciones de vanguardia en ciberseguridad, infraestructura en la nube, adopción de IA y consultoría estratégica de TI.',
      ctaPrimary: 'Encuentre su solución',
      ctaSecondary: 'Explorar servicios',
      certification: 'Socios certificados',
      certificationSub: 'Confiables y verificados',
      support: 'Soporte 24/7',
      supportSub: 'Cobertura global',
      projectsDelivered: 'Proyectos de socios',
      projectsCount: '500+',
    },
    services: {
      title: 'Soluciones tecnológicas integrales',
      description: 'Desde infraestructura en la nube hasta implementación de IA, lo conectamos con socios especializados que ofrecen servicios tecnológicos de extremo a extremo adaptados a sus necesidades empresariales.',
      cloudInfrastructure: {
        title: 'Infraestructura en la nube',
        description: 'Conéctese con expertos en la nube para soluciones escalables con AWS, Azure y Google Cloud. Servicios de migración, optimización y gestión.',
        feature1: 'Estrategia multi-nube',
        feature2: 'Optimización de costos',
        feature3: 'Auto-escalado',
        feature4: 'SLA de tiempo de actividad del 99.9%',
      },
      cybersecurity: {
        title: 'Ciberseguridad',
        description: 'Asóciese con especialistas en seguridad que ofrecen protección integral contra amenazas modernas con monitoreo y respuesta avanzados.',
        feature1: 'Detección de amenazas',
        feature2: 'Gestión de cumplimiento',
        feature3: 'Auditorías de seguridad',
        feature4: 'Monitoreo 24/7',
      },
      aiMl: {
        title: 'IA y aprendizaje automático',
        description: 'Acceda a expertos en IA que proporcionan automatización inteligente y análisis predictivo para impulsar conocimientos empresariales y eficiencia operativa.',
        feature1: 'Análisis predictivo',
        feature2: 'Automatización de procesos',
        feature3: 'Modelos de IA personalizados',
        feature4: 'Visualización de datos',
      },
      itConsulting: {
        title: 'Consultoría de TI',
        description: 'Trabaje con consultores tecnológicos estratégicos para alinear la infraestructura de TI con los objetivos comerciales y el crecimiento.',
        feature1: 'Estrategia digital',
        feature2: 'Diseño de arquitectura',
        feature3: 'Hojas de ruta tecnológicas',
        feature4: 'Gestión del cambio',
      },
      infrastructure: {
        title: 'Gestión de infraestructura',
        description: 'Asóciese con especialistas en infraestructura para una gestión completa del ciclo de vida desde el diseño hasta el mantenimiento y la optimización.',
        feature1: 'Gestión de servidores',
        feature2: 'Optimización de red',
        feature3: 'Recuperación ante desastres',
        feature4: 'Monitoreo de rendimiento',
      },
      digital: {
        title: 'Soluciones digitales',
        description: 'Conéctese con expertos en desarrollo para software personalizado y soluciones de transformación digital para empresas modernas.',
        feature1: 'Aplicaciones personalizadas',
        feature2: 'Desarrollo de API',
        feature3: 'Servicios de integración',
        feature4: 'Soluciones móviles',
      },
      learnMore: 'Más información →',
    },
    about: {
      title: 'Conectando empresas con excelencia tecnológica desde 2019',
      subtitle: 'Nuestro equipo experimentado se especializa en conectar empresas con socios tecnológicos confiables que ofrecen soluciones de nivel empresarial para la transformación digital.',
      sectionTitle: 'Construyendo confianza a través de asociaciones expertas',
      paragraph1: 'Establecida en 2019, nuestra empresa fue fundada por un equipo de cinco profesionales de diversos orígenes que compartían la visión de entregar las soluciones correctas a organizaciones de todos los tamaños. Desde el principio, nuestro enfoque ha sido conectar empresas con socios confiables y especializados para garantizar que reciban los servicios más efectivos y confiables.',
      paragraph2: 'Hoy, proporcionamos una amplia gama de soluciones impulsadas por la tecnología, incluida la ciberseguridad, la infraestructura en la nube, la adopción de IA y la consultoría estratégica de TI. Al colaborar con entidades reputadas y certificadas, garantizamos que cada cliente reciba soluciones personalizadas que satisfagan sus necesidades únicas y los estándares de la industria.',
      paragraph3: 'Nuestro enfoque se basa en la confianza, la experiencia y la adaptabilidad, lo que nos permite apoyar a organizaciones de diferentes sectores para lograr sus objetivos de transformación digital con confianza y eficiencia.',
    },
    clients: {
      title: 'Confiado por líderes de la industria',
      description: 'Hemos conectado organizaciones de todas las industrias con socios tecnológicos transformadores que entregan resultados comerciales medibles.',
      joinClients: 'Únase a más de 500 clientes satisfechos en todo el mundo',
      testimonial1: 'TechFlow Solutions nos conectó con el socio de nube perfecto. Su experiencia en coincidir nuestras necesidades resultó en una reducción del 40% en los costos operativos.',
      testimonial2: 'El socio de ciberseguridad que recomendaron fue excepcional. Cero incidentes desde el despliegue, y su servicio de monitoreo nos da completa tranquilidad.',
      testimonial3: 'Su red de especialistas en IA revolucionó nuestras operaciones. Logramos tiempos de respuesta 60% más rápidos a través de las soluciones con las que nos conectaron.',
      author1: 'Sarah Chen',
      author2: 'Michael Rodriguez',
      author3: 'Emma Thompson',
      position1: 'CTO',
      position2: 'Director de TI',
      position3: 'VP de Operaciones',
    },
    contact: {
      title: '¿Listo para encontrar su socio tecnológico?',
      description: 'Póngase en contacto con nuestro equipo para discutir cómo podemos conectarlo con los especialistas tecnológicos adecuados para acelerar su transformación digital.',
      getStarted: 'Comience hoy',
      getStartedDescription: 'Nuestro equipo está listo para comprender sus desafíos tecnológicos únicos y conectarlo con socios certificados que entregan resultados medibles. Contáctenos hoy para una consulta gratuita.',
      email: 'Correo electrónico',
      responseTime: 'Tiempo de respuesta',
      responseTimeValue: 'Dentro de 2 días hábiles',
      globalPresence: 'Red de socios',
      globalPresenceValue: 'América del Norte • Europa • Asia-Pacífico',
      support: 'Soporte',
      supportValue: 'Soporte de socios 24/7 disponible',
      whyChoose: '¿Por qué elegir TechFlow Solutions?',
      reason1: 'Red de socios certificados y verificados',
      reason2: 'Coincidencia personalizada con sus necesidades',
      reason3: 'Gestión de asociaciones dedicada',
      reason4: 'Soluciones para cualquier tamaño de negocio',
      formTitle: 'Solicitar una consulta',
      firstName: 'Nombre',
      lastName: 'Apellido',
      companyName: 'Nombre de la empresa',
      emailAddress: 'Dirección de correo electrónico',
      serviceInterest: 'Interés en el servicio',
      selectService: 'Seleccione un servicio',
      projectDetails: 'Detalles del proyecto',
      projectDetailsPlaceholder: 'Cuéntenos sobre los requisitos, el cronograma y los objetivos de su proyecto...',
      sendRequest: 'Enviar solicitud',
      privacyNotice: 'Al enviar este formulario, acepta nuestra política de privacidad. Responderemos dentro de 2 días hábiles.',
    },
    footer: {
      description: 'Conectando empresas con socios tecnológicos innovadores. Facilitamos servicios de nivel empresarial que impulsan el crecimiento, mejoran la seguridad y aceleran la transformación digital.',
      services: 'Servicios',
      company: 'Empresa',
      aboutUs: 'Nosotros',
      ourClients: 'Nuestros clientes',
      careers: 'Carreras',
      privacyPolicy: 'Política de privacidad',
      termsOfService: 'Términos de servicio',
      copyright: '© 2025 TechFlow Solutions. Todos los derechos reservados.',
      globalSupport: 'Soporte global 24/7',
      uptimeSla: 'Socios confiables',
    },
  },
  fr: {
    header: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      clients: 'Clients',
      contact: 'Contact',
      getQuote: 'Obtenir un devis',
    },
    hero: {
      badge: 'Vous connecter avec des partenaires de confiance',
      title: 'Transformez votre entreprise avec',
      titleHighlight: 'Des partenaires technologiques experts',
      description: 'Nous connectons les entreprises avec des spécialistes technologiques certifiés qui offrent des solutions de pointe en cybersécurité, infrastructure cloud, adoption de l\'IA et conseil stratégique en TI.',
      ctaPrimary: 'Trouver votre solution',
      ctaSecondary: 'Explorer les services',
      certification: 'Partenaires certifiés',
      certificationSub: 'Fiables et vérifiés',
      support: 'Support 24/7',
      supportSub: 'Couverture mondiale',
      projectsDelivered: 'Projets partenaires',
      projectsCount: '500+',
    },
    services: {
      title: 'Solutions technologiques complètes',
      description: 'De l\'infrastructure cloud à la mise en œuvre de l\'IA, nous vous connectons avec des partenaires spécialisés qui fournissent des services technologiques de bout en bout adaptés à vos besoins commerciaux.',
      cloudInfrastructure: {
        title: 'Infrastructure cloud',
        description: 'Connectez-vous avec des experts cloud pour des solutions évolutives avec AWS, Azure et Google Cloud. Services de migration, d\'optimisation et de gestion.',
        feature1: 'Stratégie multi-cloud',
        feature2: 'Optimisation des coûts',
        feature3: 'Auto-dimensionnement',
        feature4: 'SLA de disponibilité de 99,9%',
      },
      cybersecurity: {
        title: 'Cybersécurité',
        description: 'Partenariat avec des spécialistes de la sécurité offrant une protection complète contre les menaces modernes avec surveillance et réponse avancées.',
        feature1: 'Détection des menaces',
        feature2: 'Gestion de la conformité',
        feature3: 'Audits de sécurité',
        feature4: 'Surveillance 24/7',
      },
      aiMl: {
        title: 'IA et apprentissage automatique',
        description: 'Accès à des experts en IA fournissant une automatisation intelligente et des analyses prédictives pour stimuler les informations commerciales et l\'efficacité opérationnelle.',
        feature1: 'Analyses prédictives',
        feature2: 'Automatisation des processus',
        feature3: 'Modèles d\'IA personnalisés',
        feature4: 'Visualisation des données',
      },
      itConsulting: {
        title: 'Conseil en TI',
        description: 'Travaillez avec des consultants technologiques stratégiques pour aligner l\'infrastructure TI avec les objectifs commerciaux et la croissance.',
        feature1: 'Stratégie numérique',
        feature2: 'Conception d\'architecture',
        feature3: 'Feuilles de route technologiques',
        feature4: 'Gestion du changement',
      },
      infrastructure: {
        title: 'Gestion de l\'infrastructure',
        description: 'Partenariat avec des spécialistes de l\'infrastructure pour une gestion complète du cycle de vie, de la conception à la maintenance et à l\'optimisation.',
        feature1: 'Gestion des serveurs',
        feature2: 'Optimisation du réseau',
        feature3: 'Reprise après sinistre',
        feature4: 'Surveillance des performances',
      },
      digital: {
        title: 'Solutions numériques',
        description: 'Connectez-vous avec des experts en développement pour des logiciels personnalisés et des solutions de transformation numérique pour les entreprises modernes.',
        feature1: 'Applications personnalisées',
        feature2: 'Développement d\'API',
        feature3: 'Services d\'intégration',
        feature4: 'Solutions mobiles',
      },
      learnMore: 'En savoir plus →',
    },
    about: {
      title: 'Connecter les entreprises à l\'excellence technologique depuis 2019',
      subtitle: 'Notre équipe expérimentée se spécialise dans la connexion des entreprises avec des partenaires technologiques de confiance qui fournissent des solutions d\'entreprise pour la transformation numérique.',
      sectionTitle: 'Bâtir la confiance grâce à des partenariats experts',
      paragraph1: 'Créée en 2019, notre entreprise a été fondée par une équipe de cinq professionnels issus de divers horizons qui partageaient la vision de fournir les bonnes solutions aux organisations de toutes tailles. Dès le début, notre objectif a été de connecter les entreprises avec des partenaires de confiance et spécialisés pour s\'assurer qu\'ils reçoivent les services les plus efficaces et fiables.',
      paragraph2: 'Aujourd\'hui, nous fournissons une large gamme de solutions axées sur la technologie, notamment la cybersécurité, l\'infrastructure cloud, l\'adoption de l\'IA et le conseil stratégique en TI. En collaborant avec des entités réputées et certifiées, nous nous assurons que chaque client reçoit des solutions sur mesure qui répondent à ses besoins uniques et aux normes de l\'industrie.',
      paragraph3: 'Notre approche repose sur la confiance, l\'expertise et l\'adaptabilité, nous permettant de soutenir les organisations de différents secteurs pour atteindre leurs objectifs de transformation numérique avec confiance et efficacité.',
    },
    clients: {
      title: 'Approuvé par les leaders de l\'industrie',
      description: 'Nous avons connecté des organisations de tous les secteurs avec des partenaires technologiques transformateurs qui fournissent des résultats commerciaux mesurables.',
      joinClients: 'Rejoignez plus de 500 clients satisfaits dans le monde',
      testimonial1: 'TechFlow Solutions nous a connectés avec le partenaire cloud parfait. Leur expertise en matière d\'adaptation à nos besoins a entraîné une réduction de 40% des coûts opérationnels.',
      testimonial2: 'Le partenaire de cybersécurité qu\'ils ont recommandé était exceptionnel. Zéro incident depuis le déploiement, et leur service de surveillance nous donne une tranquillité d\'esprit totale.',
      testimonial3: 'Leur réseau de spécialistes en IA a révolutionné nos opérations. Nous avons obtenu des temps de réponse 60% plus rapides grâce aux solutions avec lesquelles ils nous ont connectés.',
      author1: 'Sarah Chen',
      author2: 'Michael Rodriguez',
      author3: 'Emma Thompson',
      position1: 'CTO',
      position2: 'Directeur informatique',
      position3: 'VP des opérations',
    },
    contact: {
      title: 'Prêt à trouver votre partenaire technologique?',
      description: 'Contactez notre équipe pour discuter de la façon dont nous pouvons vous connecter avec les bons spécialistes technologiques pour accélérer votre transformation numérique.',
      getStarted: 'Commencez aujourd\'hui',
      getStartedDescription: 'Notre équipe est prête à comprendre vos défis technologiques uniques et à vous connecter avec des partenaires certifiés qui offrent des résultats mesurables. Contactez-nous dès aujourd\'hui pour une consultation gratuite.',
      email: 'E-mail',
      responseTime: 'Temps de réponse',
      responseTimeValue: 'Dans les 2 jours ouvrables',
      globalPresence: 'Réseau de partenaires',
      globalPresenceValue: 'Amérique du Nord • Europe • Asie-Pacifique',
      support: 'Support',
      supportValue: 'Support partenaire 24/7 disponible',
      whyChoose: 'Pourquoi choisir TechFlow Solutions?',
      reason1: 'Réseau de partenaires certifiés et vérifiés',
      reason2: 'Correspondance personnalisée à vos besoins',
      reason3: 'Gestion de partenariat dédiée',
      reason4: 'Solutions pour toute taille d\'entreprise',
      formTitle: 'Demander une consultation',
      firstName: 'Prénom',
      lastName: 'Nom',
      companyName: 'Nom de l\'entreprise',
      emailAddress: 'Adresse e-mail',
      serviceInterest: 'Intérêt pour le service',
      selectService: 'Sélectionnez un service',
      projectDetails: 'Détails du projet',
      projectDetailsPlaceholder: 'Parlez-nous de vos exigences de projet, de votre calendrier et de vos objectifs...',
      sendRequest: 'Envoyer la demande',
      privacyNotice: 'En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Nous vous répondrons dans les 2 jours ouvrables.',
    },
    footer: {
      description: 'Connecter les entreprises avec des partenaires technologiques innovants. Nous facilitons des services d\'entreprise qui stimulent la croissance, améliorent la sécurité et accélèrent la transformation numérique.',
      services: 'Services',
      company: 'Entreprise',
      aboutUs: 'À propos',
      ourClients: 'Nos clients',
      careers: 'Carrières',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions d\'utilisation',
      copyright: '© 2025 TechFlow Solutions. Tous droits réservés.',
      globalSupport: 'Support mondial 24/7',
      uptimeSla: 'Partenaires de confiance',
    },
  },
  ar: {
    header: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'عن الشركة',
      clients: 'العملاء',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض',
    },
    hero: {
      badge: 'نربطك بشركاء موثوقين',
      title: 'حوّل عملك مع',
      titleHighlight: 'شركاء تقنيين خبراء',
      description: 'نربط الشركات بمتخصصين تقنيين معتمدين يقدمون حلولًا متطورة في الأمن السيبراني والبنية التحتية السحابية واعتماد الذكاء الاصطناعي والاستشارات الاستراتيجية لتكنولوجيا المعلومات.',
      ctaPrimary: 'ابحث عن حلك',
      ctaSecondary: 'استكشف الخدمات',
      certification: 'شركاء معتمدون',
      certificationSub: 'موثوق ومُتحقق منه',
      support: 'دعم 24/7',
      supportSub: 'تغطية عالمية',
      projectsDelivered: 'مشاريع الشركاء',
      projectsCount: '+500',
    },
    services: {
      title: 'حلول تقنية شاملة',
      description: 'من البنية التحتية السحابية إلى تطبيق الذكاء الاصطناعي، نربطك بشركاء متخصصين يقدمون خدمات تقنية شاملة مصممة خصيصًا لاحتياجات عملك.',
      cloudInfrastructure: {
        title: 'البنية التحتية السحابية',
        description: 'اتصل بخبراء السحابة للحصول على حلول قابلة للتطوير مع AWS وAzure وGoogle Cloud. خدمات الترحيل والتحسين والإدارة.',
        feature1: 'استراتيجية السحابة المتعددة',
        feature2: 'تحسين التكلفة',
        feature3: 'التوسع التلقائي',
        feature4: 'اتفاقية مستوى الخدمة بنسبة 99.9٪',
      },
      cybersecurity: {
        title: 'الأمن السيبراني',
        description: 'شراكة مع متخصصي الأمن الذين يقدمون حماية شاملة ضد التهديدات الحديثة مع المراقبة والاستجابة المتقدمة.',
        feature1: 'كشف التهديدات',
        feature2: 'إدارة الامتثال',
        feature3: 'تدقيق الأمن',
        feature4: 'مراقبة 24/7',
      },
      aiMl: {
        title: 'الذكاء الاصطناعي والتعلم الآلي',
        description: 'الوصول إلى خبراء الذكاء الاصطناعي الذين يقدمون الأتمتة الذكية والتحليلات التنبؤية لدفع رؤى الأعمال والكفاءة التشغيلية.',
        feature1: 'التحليلات التنبؤية',
        feature2: 'أتمتة العمليات',
        feature3: 'نماذج ذكاء اصطناعي مخصصة',
        feature4: 'تصور البيانات',
      },
      itConsulting: {
        title: 'استشارات تكنولوجيا المعلومات',
        description: 'العمل مع مستشاري التكنولوجيا الاستراتيجيين لمواءمة البنية التحتية لتكنولوجيا المعلومات مع أهداف العمل والنمو.',
        feature1: 'الاستراتيجية الرقمية',
        feature2: 'تصميم الهندسة المعمارية',
        feature3: 'خرائط طريق التكنولوجيا',
        feature4: 'إدارة التغيير',
      },
      infrastructure: {
        title: 'إدارة البنية التحتية',
        description: 'شراكة مع متخصصي البنية التحتية لإدارة كاملة لدورة الحياة من التصميم إلى الصيانة والتحسين.',
        feature1: 'إدارة الخوادم',
        feature2: 'تحسين الشبكة',
        feature3: 'استعادة الكوارث',
        feature4: 'مراقبة الأداء',
      },
      digital: {
        title: 'الحلول الرقمية',
        description: 'اتصل بخبراء التطوير للبرمجيات المخصصة وحلول التحول الرقمي للمؤسسات الحديثة.',
        feature1: 'تطبيقات مخصصة',
        feature2: 'تطوير واجهة برمجة التطبيقات',
        feature3: 'خدمات التكامل',
        feature4: 'حلول الهاتف المحمول',
      },
      learnMore: 'معرفة المزيد ←',
    },
    about: {
      title: 'ربط الشركات بالتميز التقني منذ 2019',
      subtitle: 'فريقنا ذو الخبرة متخصص في ربط الشركات بشركاء تقنيين موثوقين يقدمون حلولًا على مستوى المؤسسة للتحول الرقمي.',
      sectionTitle: 'بناء الثقة من خلال الشراكات الخبيرة',
      paragraph1: 'تأسست شركتنا في عام 2019 من قبل فريق من خمسة محترفين من خلفيات متنوعة يتشاركون رؤية تقديم الحلول المناسبة للمؤسسات بجميع أحجامها. منذ البداية، كان تركيزنا على ربط الشركات بشركاء موثوقين ومتخصصين لضمان حصولهم على الخدمات الأكثر فعالية وموثوقية.',
      paragraph2: 'اليوم، نقدم مجموعة واسعة من الحلول التي تعتمد على التكنولوجيا، بما في ذلك الأمن السيبراني والبنية التحتية السحابية واعتماد الذكاء الاصطناعي والاستشارات الاستراتيجية لتكنولوجيا المعلومات. من خلال التعاون مع كيانات موثوقة ومعتمدة، نضمن حصول كل عميل على حلول مخصصة تلبي احتياجاته الفريدة ومعايير الصناعة.',
      paragraph3: 'يعتمد نهجنا على الثقة والخبرة والقدرة على التكيف، مما يمكننا من دعم المؤسسات في قطاعات مختلفة لتحقيق أهداف التحول الرقمي بثقة وكفاءة.',
    },
    clients: {
      title: 'موثوق به من قبل قادة الصناعة',
      description: 'لقد ربطنا المؤسسات عبر الصناعات بشركاء تقنيين متميزين يحققون نتائج أعمال قابلة للقياس.',
      joinClients: 'انضم إلى أكثر من 500 عميل راضٍ في جميع أنحاء العالم',
      testimonial1: 'ربطتنا TechFlow Solutions بشريك السحابة المثالي. أدت خبرتهم في مطابقة احتياجاتنا إلى تخفيض بنسبة 40٪ في التكاليف التشغيلية.',
      testimonial2: 'كان شريك الأمن السيبراني الذي أوصوا به استثنائيًا. صفر حوادث منذ النشر، وخدمة المراقبة الخاصة بهم تمنحنا راحة بال كاملة.',
      testimonial3: 'أحدثت شبكتهم من متخصصي الذكاء الاصطناعي ثورة في عملياتنا. حققنا أوقات استجابة أسرع بنسبة 60٪ من خلال الحلول التي ربطونا بها.',
      author1: 'سارة تشن',
      author2: 'مايكل رودريغيز',
      author3: 'إيما ثومبسون',
      position1: 'المدير التنفيذي للتكنولوجيا',
      position2: 'مدير تكنولوجيا المعلومات',
      position3: 'نائب رئيس العمليات',
    },
    contact: {
      title: 'هل أنت مستعد للعثور على شريكك التقني؟',
      description: 'تواصل مع فريقنا لمناقشة كيف يمكننا ربطك بمتخصصي التكنولوجيا المناسبين لتسريع تحولك الرقمي.',
      getStarted: 'ابدأ اليوم',
      getStartedDescription: 'فريقنا مستعد لفهم تحديات التكنولوجيا الفريدة الخاصة بك وربطك بشركاء معتمدين يقدمون نتائج قابلة للقياس. اتصل بنا اليوم للحصول على استشارة مجانية.',
      email: 'البريد الإلكتروني',
      responseTime: 'وقت الاستجابة',
      responseTimeValue: 'خلال يومي عمل',
      globalPresence: 'شبكة الشركاء',
      globalPresenceValue: 'أمريكا الشمالية • أوروبا • آسيا والمحيط الهادئ',
      support: 'الدعم',
      supportValue: 'دعم الشركاء 24/7 متاح',
      whyChoose: 'لماذا تختار TechFlow Solutions؟',
      reason1: 'شبكة شركاء معتمدة ومُتحقق منها',
      reason2: 'مطابقة مخصصة لاحتياجاتك',
      reason3: 'إدارة شراكة مخصصة',
      reason4: 'حلول لأي حجم عمل',
      formTitle: 'طلب استشارة',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      companyName: 'اسم الشركة',
      emailAddress: 'عنوان البريد الإلكتروني',
      serviceInterest: 'الاهتمام بالخدمة',
      selectService: 'حدد خدمة',
      projectDetails: 'تفاصيل المشروع',
      projectDetailsPlaceholder: 'أخبرنا عن متطلبات مشروعك والجدول الزمني والأهداف...',
      sendRequest: 'إرسال الطلب',
      privacyNotice: 'من خلال إرسال هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة بنا. سنرد خلال يومي عمل.',
    },
    footer: {
      description: 'ربط الشركات بشركاء تقنيين مبتكرين. نسهل الخدمات على مستوى المؤسسة التي تدفع النمو وتعزز الأمان وتسرع التحول الرقمي.',
      services: 'الخدمات',
      company: 'الشركة',
      aboutUs: 'عن الشركة',
      ourClients: 'عملاؤنا',
      careers: 'الوظائف',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      copyright: '© 2025 TechFlow Solutions. جميع الحقوق محفوظة.',
      globalSupport: 'دعم عالمي 24/7',
      uptimeSla: 'شركاء موثوقون',
    },
  },
};
