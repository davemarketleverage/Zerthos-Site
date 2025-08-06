// SEO configurations for all pages
export const seoConfigs = {
  homepage: {
    title: "Zerthos - Modern Technology Solutions & Digital Transformation",
    description: "Leading provider of innovative technology solutions, digital transformation, and cutting-edge software development services. Transform your business with Zerthos.",
    keywords: "Zerthos, technology solutions, digital transformation, software development, innovation, tech company, AI, machine learning, cloud computing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zerthos",
      "url": "https://zerthos.com",
      "description": "Leading provider of innovative technology solutions and digital transformation services.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://zerthos.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },

  industries: {
    title: "Industry Solutions - Zerthos Technology Services",
    description: "Discover how Zerthos transforms industries with cutting-edge technology solutions. From healthcare to finance, gaming to aerospace - we deliver innovative solutions across all sectors.",
    keywords: "industry solutions, healthcare technology, financial services, gaming technology, energy solutions, government technology, media technology, AI solutions, manufacturing technology, aerospace technology, logistics technology, insurance technology, legal technology, edtech, biotech, ecommerce technology, cloud solutions",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Industry Technology Solutions",
      "description": "Comprehensive technology solutions for various industries including healthcare, finance, gaming, energy, government, media, AI, manufacturing, aerospace, logistics, insurance, legal, education, biotech, and ecommerce.",
      "provider": {
        "@type": "Organization",
        "name": "Zerthos"
      },
      "serviceType": "Technology Solutions",
      "areaServed": "Worldwide"
    }
  },

  technology: {
    title: "Technology & Innovation - Zerthos Advanced Solutions",
    description: "Explore Zerthos cutting-edge technology solutions including TalonX protocol, AI integration, cloud computing, and advanced data processing capabilities.",
    keywords: "TalonX protocol, AI technology, machine learning, cloud computing, data processing, technology innovation, software development, digital transformation, advanced technology",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TalonX Protocol",
      "description": "Advanced data transfer protocol for lightning-fast, secure, and reliable delivery across networks.",
      "applicationCategory": "Technology",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  },

  leadership: {
    title: "Leadership Team - Zerthos Executive Management",
    description: "Meet the visionary leaders behind Zerthos. Our executive team brings decades of experience in technology, innovation, and business transformation.",
    keywords: "leadership team, executive management, CEO, CTO, technology leaders, business executives, Zerthos leadership, management team",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zerthos",
      "description": "Technology company with experienced leadership team",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Leadership Team"
      }
    }
  },

  careers: {
    title: "Careers at Zerthos - Join Our Technology Team",
    description: "Join Zerthos and be part of a team that's revolutionizing technology. Explore career opportunities in software development, AI, and innovation.",
    keywords: "careers, job opportunities, software development jobs, AI jobs, technology careers, work at Zerthos, employment, hiring",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Technology Careers at Zerthos",
      "description": "Join our team of innovators and technology experts",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Zerthos"
      },
      "jobLocationType": "Remote, Hybrid, On-site"
    }
  },

  contact: {
    title: "Contact Zerthos - Get in Touch with Our Team",
    description: "Contact Zerthos for technology solutions, partnerships, or inquiries. Our expert team is ready to help transform your business with innovative technology.",
    keywords: "contact Zerthos, get in touch, technology consultation, business inquiry, customer support, partnership opportunities",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Zerthos",
      "description": "Get in touch with our technology experts",
      "mainEntity": {
        "@type": "Organization",
        "name": "Zerthos",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@zerthos.com"
        }
      }
    }
  },

  privacyPolicy: {
    title: "Privacy Policy - Zerthos Data Protection",
    description: "Learn about how Zerthos protects your privacy and handles personal data. Our comprehensive privacy policy ensures your information is secure.",
    keywords: "privacy policy, data protection, privacy, personal data, GDPR, data security, privacy rights",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Zerthos privacy policy and data protection practices"
    }
  },

  legalTerms: {
    title: "Legal Terms & Conditions - Zerthos",
    description: "Read Zerthos legal terms and conditions. Our comprehensive legal framework ensures transparency and protects both our company and customers.",
    keywords: "legal terms, terms and conditions, legal agreement, terms of service, legal framework, user agreement",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Legal Terms & Conditions",
      "description": "Zerthos legal terms and conditions"
    }
  },

  cookiesPolicy: {
    title: "Cookies Policy - Zerthos Cookie Usage",
    description: "Understand how Zerthos uses cookies to improve your browsing experience. Our cookies policy explains what cookies we use and why.",
    keywords: "cookies policy, cookie usage, website cookies, tracking cookies, cookie consent, data collection",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cookies Policy",
      "description": "Zerthos cookies policy and usage information"
    }
  }
}; 