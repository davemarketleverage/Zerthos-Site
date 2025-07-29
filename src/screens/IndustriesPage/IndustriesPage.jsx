/**
 * IndustriesPage Component with Lazy Loading Implementation
 * 
 * This component implements lazy loading for industry images to improve performance
 * and user experience. Key features:
 * 
 * 1. LazyImage Component: Handles individual image loading with loading states
 * 2. useLazyImage Hook: Custom hook for image loading logic
 * 3. Image Preloading: Preloads all images in the background for faster switching
 * 4. Priority Loading: Active images are loaded first
 * 5. Smooth Transitions: Fade effects when switching between industries
 * 6. Loading Indicators: Visual feedback during image loading
 * 
 * Performance optimizations:
 * - Debounced image loading to prevent too many simultaneous requests
 * - Priority-based preloading for active images
 * - Smooth transitions to mask loading delays
 * - Error handling for failed image loads
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import industriesHeroWave from '../../assets/industries-hero-wave.jpg';
import healthcareImage from '../../assets/healthcare-image.jpg';
import gamingImage from '../../assets/gaming-image.jpg';
import energyImage from '../../assets/energy-image.jpg';
import governmentImage from '../../assets/government-image.jpg';
import financeImage from '../../assets/finance-image.jpg';
import mediaImage from '../../assets/media-image.jpg';
import aiImage from '../../assets/ai-image.jpg';
import manufacturingImage from '../../assets/manufacturing-image3.jpg';
import aerospaceImage from '../../assets/aerospace-image.jpg';
import logisticsImage from '../../assets/logistics-image.jpg';
import insuranceImage from '../../assets/insurance-image.jpg';
import legalImage from '../../assets/legal-image.jpg';
import edtechImage from '../../assets/edtech-image.jpg';
import biotechImage from '../../assets/biotech-image.jpg';
import ecommerceImage from '../../assets/ecommerce-image.jpg';
import cloudImage from '../../assets/cloud-image.jpg';

// Custom hook for lazy loading images
const useLazyImage = (imageSrc) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const loadImage = useCallback(() => {
    if (!imageSrc) return;

    setImageLoaded(false);
    setImageError(false);

    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  useEffect(() => {
    // Add a small delay to prevent too many simultaneous requests
    const timer = setTimeout(() => {
      loadImage();
    }, 50);
    
    return () => clearTimeout(timer);
  }, [loadImage]);

  return { imageLoaded, imageError, reloadImage: loadImage };
};

// Lazy Image Component
const LazyImage = ({ src, alt, className, fallbackClassName = "bg-gray-200" }) => {
  const { imageLoaded, imageError } = useLazyImage(src);

  if (imageError) {
    return (
      <div className={`${className} ${fallbackClassName} flex items-center justify-center`}>
        <div className="text-gray-500 text-center">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      {!imageLoaded && (
        <div className={`absolute inset-0 ${fallbackClassName} flex items-center justify-center z-10`}>
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E8B96F] mb-2"></div>
            <p className="text-sm text-gray-500">Loading...</p>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-500 ease-in-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      />
    </div>
  );
};

export const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('Healthcare');
  const [activeAdditionalIndustry, setActiveAdditionalIndustry] = useState('Aerospace & Aviation');
  const [activeEmergingSector, setActiveEmergingSector] = useState('Education Technology (EdTech)');
  const [isVisible, setIsVisible] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle industry transitions with smooth loading
  const handleIndustryChange = (newIndustry, setter) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setter(newIndustry);
      setIsTransitioning(false);
    }, 150);
  };

  // Preload images for better performance
  useEffect(() => {
    const preloadImage = (src, priority = false) => {
      if (preloadedImages.has(src)) return;
      
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
      };
      img.src = src;
    };

    // Preload all industry images - moved after industryData definition
    const preloadAllImages = () => {
      // First, preload active images with priority
      const activeImages = [
        industryData[activeIndustry]?.image,
        industryData[activeAdditionalIndustry]?.image,
        industryData[activeEmergingSector]?.image
      ].filter(Boolean);

      activeImages.forEach(image => preloadImage(image, true));

      // Then preload all other images
      Object.values(industryData).forEach(industry => {
        if (industry.image && !activeImages.includes(industry.image)) {
          preloadImage(industry.image);
        }
      });
    };

    // Delay preloading to ensure industryData is defined
    const timer = setTimeout(preloadAllImages, 100);
    return () => clearTimeout(timer);
  }, [preloadedImages, activeIndustry, activeAdditionalIndustry, activeEmergingSector]);

  const industries = [
    'Healthcare',
    'Government & Defense',
    'Finance',
    'Media & Entertainment',
    'AI & Big Data',
    'Manufacturing & Automotive'
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
      image: healthcareImage
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
      image: gamingImage
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
      image: energyImage
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
      image: governmentImage
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
      image: financeImage
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
      image: mediaImage
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
      image: aiImage
    },
    'Manufacturing & Automotive': {
      title: 'TalonX in Manufacturing: Automate at the speed of innovation',
      description: 'Modern manufacturing relies on real-time data from sensors, IoT devices, and automation systems. TalonX ensures every component communicates instantly.',
      benefits: [
        'Real-time IoT sensor data processing',
        'Instant automation system coordination',
        'Predictive maintenance optimization',
        'Supply chain visibility and control'
      ],
      conclusion: 'TalonX powers the factory of the future.',
      image: manufacturingImage
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
      image: aerospaceImage
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
      image: logisticsImage
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
      image: insuranceImage
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
      image: legalImage
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
      image: edtechImage
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
      image: biotechImage
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
      image: ecommerceImage
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
      image: cloudImage
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
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              {preloadedImages.size > 0 && preloadedImages.size < Object.keys(industryData).length && (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#E8B96F] mr-2"></div>
                  Preloading images... ({preloadedImages.size}/{Object.keys(industryData).length})
                </span>
              )}

            </div>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => handleIndustryChange(industry, setActiveIndustry)}
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
            <div className={`space-y-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight font-heading">
                {industryData[activeIndustry].title}
              </h2>
              
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/1]">
                <LazyImage
                  src={industryData[activeIndustry].image} 
                  alt={`${activeIndustry} industry`}
                  className="w-full h-full object-cover"
                />
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
                      activeAdditionalIndustry === industry ? 'text-[#E8B96F] font-bold' : 'text-[#333333] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => handleIndustryChange(industry, setActiveAdditionalIndustry)}
                  >
                    {activeAdditionalIndustry === industry && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`text-lg ${activeAdditionalIndustry === industry ? 'ml-0' : 'ml-7'}`}>
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Industry Details */}
            <div>
              {activeAdditionalIndustry && industryData[activeAdditionalIndustry] ? (
                <div className={`space-y-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] font-heading">
                    {industryData[activeAdditionalIndustry].title}
                  </h3>
                  
                  <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                    <LazyImage 
                      src={industryData[activeAdditionalIndustry].image} 
                      alt={`${activeAdditionalIndustry} industry`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-lg text-[#333333] leading-relaxed">
                    {industryData[activeAdditionalIndustry].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {industryData[activeAdditionalIndustry].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#E8B96F] mr-3 mt-1 text-lg">•</span>
                        <span className="text-[#333333] text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xl font-bold text-[#333333]">
                    {industryData[activeAdditionalIndustry].conclusion}
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
                      activeEmergingSector === sector ? 'text-[#E8B96F] font-bold' : 'text-[#333333] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => handleIndustryChange(sector, setActiveEmergingSector)}
                  >
                    {activeEmergingSector === sector && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`text-lg ${activeEmergingSector === sector ? 'ml-0' : 'ml-7'}`}>
                      {sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Sector Details */}
            <div>
              {activeEmergingSector && industryData[activeEmergingSector] ? (
                <div className={`space-y-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] font-heading">
                    {industryData[activeEmergingSector].title}
                  </h3>
                  
                  <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                    <LazyImage 
                      src={industryData[activeEmergingSector].image} 
                      alt={`${activeEmergingSector} sector`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-lg text-[#333333] leading-relaxed">
                    {industryData[activeEmergingSector].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {industryData[activeEmergingSector].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#E8B96F] mr-3 mt-1 text-lg">•</span>
                        <span className="text-[#333333] text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xl font-bold text-[#333333]">
                    {industryData[activeEmergingSector].conclusion}
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