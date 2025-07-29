import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import industriesHeroWave from '../../assets/industries-hero-wave.jpg';

export const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('Healthcare');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    'Healthcare',
    'Government & Defense',
    'Finance',
    'Media & Entertainment',
    'AI & Big Data',
    'Manufacturing & Aut'
  ];

  const emergingSectors = [
    'Education Technology (EdTech)',
    'Energy & Utilities',
    'Biotechnology & Genomics',
    'eCommerce & Retail',
    'Cloud Services & SaaS Providers'
  ];

  const additionalIndustries = [
    'Aerospace & Aviation',
    'Gaming & Interactive Media',
    'Logistics & Supply Chain',
    'Insurance',
    'Legal & eDiscovery'
  ];

  const industryData = {
    'Healthcare': {
      title: 'TalonX in Healthcare: Move data at the speed of care',
      description: 'Hospitals, labs, and imaging centers rely on huge diagnostic files, EMRs, and genomic datasets — all of which need to move securely and immediately. TalonX allows instant, high-fidelity transfer of these files between facilities, devices, or systems — without waiting for uploads, downloads, or risk of degradation.',
      benefits: [
        'Rapid movement of MRI, CT, and PET scan files',
        'EMR and PACS integration without performance lag',
        'Secure transfer without needing to repackage sensitive files',
        'HIPAA-ready frameworks, with exact data preservation'
      ],
      conclusion: 'TalonX transforms patient data from a delay to a decision.',
      image: '/healthcare-image.jpg'
    },
    'Gaming & Interactive Media': {
      title: 'TalonX in Gaming: Powering the next generation of play',
      description: 'From global updates to real-time multiplayer sync, game developers rely on rapid and reliable data delivery. TalonX removes delays between creation, deployment, and experience.',
      benefits: [
        'Accelerate game patch and asset delivery',
        'Enhance multiplayer performance with low-latency data sync',
        'Improve user experience for cloud gaming',
        'Distribute content globally without lag or compromise'
      ],
      conclusion: 'TalonX levels up your infrastructure.',
      image: '/gaming-image.jpg'
    },
    'Energy & Utilities': {
      title: 'TalonX in Energy: Powering smarter infrastructure',
      description: 'Smart grids, sensors, and remote systems rely on real-time data to manage consumption and prevent outages. TalonX moves that data securely, instantly, and efficiently.',
      benefits: [
        'Real-time transmission of smart meter and grid data',
        'Improve forecasting and predictive analytics',
        'Support remote monitoring of critical infrastructure',
        'Move energy market data without delay'
      ],
      conclusion: 'TalonX helps power flow smarter.',
      image: '/energy-image.jpg'
    },
    'Government & Defense': {
      title: 'TalonX in Government & Defense: Secure data at mission speed',
      description: 'Government agencies and defense organizations require the highest levels of security and reliability for data transmission. TalonX delivers military-grade encryption with unmatched speed.',
      benefits: [
        'Classified data transmission with zero compromise',
        'Real-time intelligence sharing across agencies',
        'Secure communication in hostile environments',
        'Compliance with federal security standards'
      ],
      conclusion: 'TalonX ensures mission-critical data arrives when it matters most.',
      image: '/government-image.jpg'
    },
    'Finance': {
      title: 'TalonX in Finance: Trading at the speed of light',
      description: 'Financial markets move in microseconds. TalonX enables high-frequency trading, real-time risk management, and instant settlement processing with zero latency.',
      benefits: [
        'Ultra-low latency trading execution',
        'Real-time risk assessment and management',
        'Instant settlement and clearing processes',
        'Secure compliance reporting and auditing'
      ],
      conclusion: 'TalonX gives you the competitive edge in every trade.',
      image: '/finance-image.jpg'
    },
    'Media & Entertainment': {
      title: 'TalonX in Media: Deliver content at the speed of thought',
      description: 'From live streaming to content distribution, media companies need to deliver high-quality content instantly to global audiences. TalonX makes it possible.',
      benefits: [
        '4K/8K live streaming without buffering',
        'Global content distribution in real-time',
        'Seamless cloud gaming experiences',
        'Instant video editing and collaboration'
      ],
      conclusion: 'TalonX brings your content to life instantly.',
      image: '/media-image.jpg'
    },
    'AI & Big Data': {
      title: 'TalonX in AI: Process data at the speed of intelligence',
      description: 'AI and machine learning require massive datasets to be processed and analyzed in real-time. TalonX enables instant data movement for faster insights.',
      benefits: [
        'Real-time model training and inference',
        'Instant data pipeline processing',
        'Seamless cloud AI integration',
        'Accelerated research and development'
      ],
      conclusion: 'TalonX accelerates your AI journey.',
      image: '/ai-image.jpg'
    },
    'Manufacturing & Aut': {
      title: 'TalonX in Manufacturing: Automate at the speed of innovation',
      description: 'Modern manufacturing relies on real-time data from sensors, IoT devices, and automation systems. TalonX ensures every component communicates instantly.',
      benefits: [
        'Real-time IoT sensor data processing',
        'Instant automation system coordination',
        'Predictive maintenance optimization',
        'Supply chain visibility and control'
      ],
      conclusion: 'TalonX powers the factory of the future.',
      image: '/manufacturing-image.jpg'
    },
    'Aerospace & Aviation': {
      title: 'TalonX in Aerospace: Navigate data at the speed of flight',
      description: 'Aerospace and aviation industries demand real-time data transmission for flight safety, navigation, and operational efficiency. TalonX ensures critical data reaches its destination instantly.',
      benefits: [
        'Real-time flight data and telemetry transmission',
        'Instant weather and navigation updates',
        'Secure communication between aircraft and ground control',
        'Rapid maintenance and safety system alerts'
      ],
      conclusion: 'TalonX keeps your operations flying high.',
      image: '/aerospace-image.jpg'
    },
    'Logistics & Supply Chain': {
      title: 'TalonX in Logistics: Streamline operations at the speed of commerce',
      description: 'Modern supply chains require instant visibility and coordination across global networks. TalonX enables real-time tracking, optimization, and decision-making.',
      benefits: [
        'Real-time shipment tracking and visibility',
        'Instant inventory and warehouse management',
        'Optimized route planning and delivery coordination',
        'Seamless integration with IoT and sensor networks'
      ],
      conclusion: 'TalonX delivers efficiency at every step.',
      image: '/logistics-image.jpg'
    },
    'Insurance': {
      title: 'TalonX in Insurance: Process claims at the speed of need',
      description: 'Insurance companies need to process vast amounts of data quickly for claims, risk assessment, and customer service. TalonX accelerates every aspect of insurance operations.',
      benefits: [
        'Real-time claims processing and assessment',
        'Instant risk analysis and underwriting',
        'Rapid fraud detection and prevention',
        'Seamless customer data integration'
      ],
      conclusion: 'TalonX protects your business with speed.',
      image: '/insurance-image.jpg'
    },
    'Legal & eDiscovery': {
      title: 'TalonX in Legal: Access information at the speed of justice',
      description: 'Legal professionals require instant access to massive document repositories and real-time collaboration tools. TalonX makes legal research and eDiscovery lightning fast.',
      benefits: [
        'Instant document search and retrieval',
        'Real-time collaboration on case files',
        'Rapid eDiscovery and data processing',
        'Secure client communication and file sharing'
      ],
      conclusion: 'TalonX accelerates the pursuit of justice.',
      image: '/legal-image.jpg'
    },
    'Education Technology (EdTech)': {
      title: 'TalonX in EdTech: Learn at the speed of curiosity',
      description: 'Educational technology platforms need to deliver content, assessments, and collaborative tools instantly to students worldwide. TalonX powers the future of learning.',
      benefits: [
        'Real-time video streaming and virtual classrooms',
        'Instant access to educational content and resources',
        'Seamless collaboration tools and group projects',
        'Rapid assessment and feedback systems'
      ],
      conclusion: 'TalonX makes learning limitless.',
      image: '/edtech-image.jpg'
    },
    'Biotechnology & Genomics': {
      title: 'TalonX in Biotech: Analyze data at the speed of discovery',
      description: 'Biotechnology and genomics research generates massive datasets that need to be processed, analyzed, and shared instantly. TalonX accelerates scientific breakthroughs.',
      benefits: [
        'Real-time genomic data processing and analysis',
        'Instant sharing of research findings globally',
        'Rapid drug discovery and clinical trial data',
        'Seamless collaboration across research institutions'
      ],
      conclusion: 'TalonX accelerates the pace of discovery.',
      image: '/biotech-image.jpg'
    },
    'eCommerce & Retail': {
      title: 'TalonX in eCommerce: Sell at the speed of desire',
      description: 'E-commerce platforms need to handle massive traffic, process transactions instantly, and provide real-time inventory and customer data. TalonX powers seamless shopping experiences.',
      benefits: [
        'Real-time inventory and pricing updates',
        'Instant transaction processing and payment verification',
        'Seamless customer experience across all touchpoints',
        'Rapid analytics and personalized recommendations'
      ],
      conclusion: 'TalonX turns clicks into conversions instantly.',
      image: '/ecommerce-image.jpg'
    },
    'Cloud Services & SaaS Providers': {
      title: 'TalonX in Cloud: Scale at the speed of demand',
      description: 'Cloud service providers and SaaS companies need to deliver applications and services with zero latency to users worldwide. TalonX ensures your cloud services perform flawlessly.',
      benefits: [
        'Global content delivery with zero latency',
        'Instant application scaling and load balancing',
        'Real-time data synchronization across regions',
        'Seamless API performance and integration'
      ],
      conclusion: 'TalonX powers your cloud at the speed of light.',
      image: '/cloud-image.jpg'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FFFCE5]">
        <div className="max-w-7xl mx-auto lg:h-[40vh] flex items-center">
          <div className="grid lg:grid-cols-3 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#333333] leading-tight font-heading">
                Industries we serve
              </h1>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl">
                Built for Every Industry That Moves Data. From healthcare to defense, media to AI, TalonX delivers unmatched speed, adaptability, and precision, transforming how entire industries operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl font-semibold text-[#333333] leading-relaxed">
                TalonX isn't just another data tool. It's a category-defining breakthrough in digital movement.
              </p>
            </div>
            <div>
              <p className="text-lg text-[#333333] leading-relaxed">
                Across industries where data transfer is critical, TalonX replaces lag, inefficiency, and limitation with near-instant, lossless delivery. Explore how it's shaping the future of your industry below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-2 py-3 text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeIndustry === industry
                    ? 'text-[#E8B96F] border-b-2 border-[#E8B96F]'
                    : 'text-[#333333] hover:text-[#E8B96F] hover:border-b-2 hover:border-[#E8B96F]/50'
                }`}
              >
                {industry}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Industry Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {activeIndustry && industryData[activeIndustry] && (
            <div className="space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight font-heading">
                {industryData[activeIndustry].title}
              </h2>
              
              <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-xl flex items-center justify-center shadow-sm">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Industry-specific image placeholder</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl">
                {industryData[activeIndustry].description}
              </p>
              
              <ul className="space-y-4 max-w-4xl">
                {industryData[activeIndustry].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#E8B96F] mr-4 mt-1 text-lg">•</span>
                    <span className="text-[#333333] text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xl md:text-2xl font-bold text-[#333333]">
                {industryData[activeIndustry].conclusion}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Industries Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Industries List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-10 font-heading">
                Additional industries served
              </h2>
              <div className="space-y-6">
                {additionalIndustries.map((industry, index) => (
                  <div
                    key={industry}
                    className={`flex items-center cursor-pointer transition-all duration-300 py-2 ${
                      activeIndustry === industry ? 'text-[#E8B96F] font-bold' : 'text-[#333333] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => setActiveIndustry(industry)}
                  >
                    {activeIndustry === industry && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`text-lg ${activeIndustry === industry ? 'ml-0' : 'ml-7'}`}>
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Industry Details */}
            <div>
              {activeIndustry && industryData[activeIndustry] ? (
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] font-heading">
                    {industryData[activeIndustry].title}
                  </h3>
                  
                  <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-xl flex items-center justify-center shadow-sm">
                    <div className="text-center text-gray-500">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Industry-specific image placeholder</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#333333] leading-relaxed">
                    {industryData[activeIndustry].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {industryData[activeIndustry].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#E8B96F] mr-3 mt-1 text-lg">•</span>
                        <span className="text-[#333333] text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xl font-bold text-[#333333]">
                    {industryData[activeIndustry].conclusion}
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg">Select an industry to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Sectors Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Sectors List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-10 font-heading">
                Emerging & digital-first sectors
              </h2>
              <div className="space-y-6">
                {emergingSectors.map((sector, index) => (
                  <div
                    key={sector}
                    className={`flex items-center cursor-pointer transition-all duration-300 py-2 ${
                      activeIndustry === sector ? 'text-[#E8B96F] font-bold' : 'text-[#333333] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => setActiveIndustry(sector)}
                  >
                    {activeIndustry === sector && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`text-lg ${activeIndustry === sector ? 'ml-0' : 'ml-7'}`}>
                      {sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Sector Details */}
            <div>
              {activeIndustry && industryData[activeIndustry] ? (
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] font-heading">
                    {industryData[activeIndustry].title}
                  </h3>
                  
                  <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-xl flex items-center justify-center shadow-sm">
                    <div className="text-center text-gray-500">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Sector-specific image placeholder</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#333333] leading-relaxed">
                    {industryData[activeIndustry].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {industryData[activeIndustry].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#E8B96F] mr-3 mt-1 text-lg">•</span>
                        <span className="text-[#333333] text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xl font-bold text-[#333333]">
                    {industryData[activeIndustry].conclusion}
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg">Select a sector to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-heading">
                Need a tailored solution?
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                Our TalonX and vault_encrypt technologies adapt to your specific needs with minimal code changes. Get enterprise-grade support from our expert team.
              </p>
            </div>
            
            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#F09A07] text-white font-semibold rounded-xl hover:bg-[#E08A07] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact our team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 