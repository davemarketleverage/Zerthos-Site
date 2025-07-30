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
import industriesFooter from '../../assets/industries-footer.png';
import logoSvg from '../../assets/logo.svg';

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
          <div className="grid lg:grid-cols-10 gap-12 items-center w-full">
            {/* Left Content - 70% */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#333333] leading-tight font-heading">
                Industries we serve
              </h1>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl">
                Built for Every Industry That Moves Data. From healthcare to defense, media to AI, TalonX delivers unmatched speed, adaptability, and precision, transforming how entire industries operate.
              </p>
            </div>
            
            {/* Right Content - TalonX Logo - 30% */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end items-center">
              <div className="relative w-40 h-20 lg:w-64 lg:h-32">
                <img 
                  className="w-full h-full object-contain" 
                  alt="TalonX Logo" 
                  src={logoSvg} 
                />
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1299" height="396" viewBox="0 0 1299 396" fill="none" className='absolute bottom-0 right-0 z-0'>
  <path opacity="0.6" d="M1180.87 445.173C958.124 113.862 809.06 35.3581 675.104 106.144C558.998 167.5 454.575 341.222 323.297 559.63C318.119 568.246 312.896 576.933 307.631 585.685C293.738 608.78 279.913 629.48 266.177 648.002L268.641 648C282.17 629.684 295.776 609.266 309.449 586.542C314.715 577.79 319.935 569.103 325.115 560.486C456.242 342.329 560.542 168.806 676.165 107.708C808.964 37.5332 957.14 115.953 1179.11 446.108C1232.34 525.285 1282.31 583.271 1329 624.169V621.41C1282.84 580.795 1233.46 523.383 1180.87 445.173ZM210.906 648.002L210.908 648H210.906V648.002ZM1180.88 458.369C960.292 122.257 811.971 39.8357 678.73 108.565C560.87 169.362 455.163 348.651 321.609 575.173C316.984 583.017 312.325 590.919 307.631 598.875C297.174 616.596 286.761 632.931 276.395 648H278.797C288.974 633.157 299.195 617.105 309.452 599.718C314.146 591.762 318.803 583.859 323.431 576.016C456.83 349.759 562.414 170.679 679.765 110.145C811.843 42.0137 959.28 124.339 1179.1 459.284C1232.32 540.375 1282.29 599.736 1329 641.605V638.83C1282.82 597.255 1233.44 538.461 1180.88 458.369ZM1180.87 431.982C955.819 105.383 805.977 30.8968 671.256 103.861C557.007 165.737 453.946 333.846 325.044 544.108C319.295 553.488 313.492 562.95 307.637 572.491C289.927 601.345 272.327 626.384 254.872 647.997V648H257.405C274.629 626.562 291.986 601.805 309.441 573.364C315.297 563.823 321.099 554.361 326.849 544.981C455.605 334.959 558.549 167.042 672.327 105.421C805.902 33.075 954.857 107.491 1179.11 432.932C1232.36 510.202 1282.32 566.816 1329 606.745V604.004C1282.85 564.35 1233.47 508.315 1180.87 431.982ZM1180.86 418.788C953.358 96.8225 802.707 26.4638 667.157 101.744C554.881 164.101 453.263 326.536 326.846 528.614C320.506 538.746 314.106 548.976 307.639 559.299C285.641 594.412 263.806 623.753 242.204 647.997L242.207 648H244.828C266.172 623.887 287.733 594.834 309.438 560.185C315.905 549.862 322.306 539.633 328.646 529.501C454.922 327.647 556.425 165.391 668.247 103.289C802.665 28.6367 952.43 98.9375 1179.12 419.757C1232.38 495.123 1282.34 550.36 1329 589.322V586.612C1282.86 547.918 1233.48 493.256 1180.86 418.788ZM1180.86 405.596C950.726 88.1572 799.228 22.0558 662.777 99.8056C552.606 162.582 452.521 319.287 328.709 513.145C321.764 524.019 314.744 535.01 307.645 546.108C280.743 588.155 254.07 621.728 227.764 648H230.544C256.542 621.805 282.885 588.503 309.434 547.01C316.533 535.912 323.555 524.921 330.498 514.047C454.169 320.408 554.144 163.876 663.888 101.345C799.214 24.2342 949.823 90.2906 1179.12 406.581C1232.39 480.061 1282.35 533.911 1329 571.905V569.227C1282.87 531.493 1233.49 478.201 1180.86 405.596ZM1180.85 392.401C947.903 79.3932 795.52 17.6952 658.094 98.0809C550.155 161.217 451.708 312.123 330.636 497.708C323.066 509.313 315.405 521.055 307.649 532.919C275.002 582.859 242.665 620.547 210.908 648H213.876C245.272 620.53 277.208 583.117 309.428 533.832C317.184 521.968 324.844 510.227 332.414 498.62C453.353 313.238 551.696 162.493 659.218 99.6024C795.533 19.8657 947.031 81.534 1179.13 393.405C1232.42 465.002 1282.37 517.465 1329 554.492V551.858C1282.88 515.083 1233.5 463.155 1180.85 392.401ZM1180.84 379.209C944.868 70.5106 791.557 13.3809 653.06 96.5888C547.513 160.003 450.812 305.036 332.63 482.296C324.411 494.622 316.089 507.104 307.652 519.724C267.982 579.074 228.752 620.639 190.435 647.997L190.438 648H193.786C231.631 620.474 270.331 579.146 309.428 520.653C317.864 508.033 326.187 495.551 334.405 483.224C452.466 306.154 549.06 161.276 654.216 98.0975C791.608 15.5501 944.034 72.663 1179.14 380.229C1232.44 449.951 1282.38 501.035 1329 537.096V534.502C1282.89 498.681 1233.51 448.114 1180.84 379.209ZM1180.84 366.013C941.59 61.4951 787.31 9.1252 647.643 95.3681C544.653 158.964 449.834 298.039 334.692 466.918C325.148 480.918 315.475 495.107 307.66 506.534C258.796 577.99 210.555 622.981 163.852 648H167.876C213.918 622.514 261.387 577.717 309.42 507.477C319.89 492.168 328.233 479.931 336.46 467.861C451.474 299.167 546.192 160.241 648.82 96.869C787.392 11.3011 940.788 63.6684 1179.14 367.056C1232.45 434.91 1282.39 484.621 1329 519.718V517.149C1282.9 482.288 1233.53 433.078 1180.84 366.013ZM1180.83 352.817C938.042 52.3363 782.74 4.94922 641.792 94.4628C541.548 158.124 448.752 291.145 336.84 451.571C327.26 465.303 317.543 479.235 307.666 493.343C243.991 584.299 181.301 631.143 121.661 648H128.41C186.615 629.604 247.579 582.625 309.415 494.3C319.292 480.192 329.009 466.26 338.589 452.528C450.379 292.28 543.068 159.406 642.993 95.9472C782.86 7.12458 937.274 54.5267 1179.15 353.883C1232.47 419.876 1282.41 468.214 1329 502.347V499.815C1282.91 465.909 1233.53 418.05 1180.83 352.817ZM0.00195312 645.579C2.50305 646.431 5.01758 647.232 7.54004 648H14.2803C9.48804 646.69 4.72778 645.224 0.00195312 643.601V645.579ZM1180.82 339.628C934.18 43.0195 777.818 0.872793 635.45 93.9208C538.136 157.524 447.538 284.373 339.06 436.262C329.073 450.245 318.927 464.45 307.671 480.147C198.951 631.737 92.9017 657.223 0.00195312 625.558V627.538C93.5635 659.175 200.227 633.362 309.409 481.126C319.43 467.156 330.194 452.08 340.8 437.232C449.164 285.507 539.664 158.789 636.668 95.3915C777.97 3.03941 933.452 45.2188 1179.16 340.704C1232.5 404.844 1282.42 451.816 1329 484.984V482.496C1282.92 449.545 1233.55 403.035 1180.82 339.628ZM1180.81 326.431C929.962 33.5158 772.486 -3.08165 628.539 93.8065C534.382 157.183 446.179 277.731 341.369 420.984C330.333 436.07 319.111 451.407 307.677 466.955C199.119 614.6 93.0106 638.993 0.00195312 607.524V609.499C93.6592 640.944 200.37 616.238 309.401 467.947C320.833 452.4 332.056 437.062 343.092 421.976C447.801 278.866 535.917 158.437 629.778 95.2587C772.678 -0.924437 929.273 35.7243 1179.17 327.53C1232.52 389.821 1282.44 435.43 1329 467.635V465.185C1282.93 433.187 1233.55 388.019 1180.81 326.431ZM1180.8 313.236C925.329 23.7927 766.692 -6.89129 620.98 94.1942C530.239 157.146 444.654 271.246 343.767 405.75C331.845 421.643 319.711 437.821 307.687 453.761C199.291 597.455 93.125 620.758 0.00195312 589.495V591.468C93.7549 622.712 200.517 599.104 309.396 454.774C321.889 438.211 333.791 422.345 345.483 406.756C446.275 272.383 531.775 158.392 622.245 95.6298C766.92 -4.73683 924.683 26.0201 1179.18 314.357C1232.54 374.809 1282.45 419.059 1329 450.304V447.885C1282.93 416.841 1233.56 373.013 1180.8 313.236ZM1180.79 300.042C920.21 13.8198 760.363 -10.5122 612.658 95.1815C525.619 157.463 442.921 264.939 346.263 390.553C333.656 406.936 320.812 423.627 307.689 440.568C199.458 580.294 93.2339 602.515 0.00195312 571.464V573.438C93.8533 604.478 200.665 581.959 309.391 441.596C322.513 424.657 335.357 407.965 347.961 391.582C444.529 266.085 527.147 158.712 613.944 96.6034C760.631 -8.35981 919.607 16.0632 1179.19 301.183C1232.56 359.802 1282.47 402.698 1329 432.981V430.596C1282.94 400.504 1233.57 358.012 1180.79 300.042ZM1180.78 286.843C914.514 3.54801 753.412 -13.8906 603.432 96.9042C520.428 158.222 440.932 258.852 348.859 375.406C335.604 392.186 322.085 409.3 307.697 427.374C199.628 563.131 93.3456 584.271 0.00195312 553.434V555.411C93.9489 586.233 200.812 564.806 309.383 428.423C323.04 411.267 336.928 393.685 350.545 376.447C442.533 260.001 521.954 159.464 604.745 98.3026C753.721 -11.7474 913.961 5.80288 1179.2 288.01C1232.58 344.801 1282.48 386.348 1329 415.669V413.318C1282.95 384.179 1233.58 343.017 1180.78 286.843ZM1180.77 273.648C908.121 -7.09702 745.725 -16.9652 593.116 99.5233C514.543 159.499 438.635 253.023 351.567 360.302C337.43 377.722 322.991 395.508 307.705 414.18C199.801 545.95 93.4598 566.024 0.00195312 535.414V537.401C94.0447 568.002 200.961 547.645 309.375 415.249C324.013 397.371 338.778 379.181 353.237 361.364C440.22 254.193 516.05 160.762 594.464 100.908C746.079 -14.8218 907.616 -4.81673 1179.21 274.841C1232.6 329.813 1282.49 370.014 1329 398.378V396.053C1282.96 367.864 1233.59 328.03 1180.77 273.648ZM1180.76 260.451C900.87 -18.1975 737.148 -19.6264 581.464 103.284C507.768 161.464 435.935 247.54 354.396 345.245C339.341 363.286 323.951 381.726 307.714 400.983C199.969 528.771 93.5688 547.771 0.00195312 517.39V519.374C94.1456 549.746 201.112 530.465 309.367 402.075C325.025 383.504 340.708 364.714 356.047 346.33C437.514 248.714 509.283 162.715 582.832 104.647C737.546 -17.493 900.415 -15.9006 1179.22 261.665C1232.62 314.828 1282.51 353.686 1329 381.091V378.799C1282.97 351.558 1233.59 313.049 1180.76 260.451ZM1180.75 247.255C892.524 -29.8979 727.473 -21.7342 568.102 108.53C499.855 164.313 432.706 242.497 357.347 330.243C341.173 349.073 324.623 368.344 307.727 387.786C200.141 511.579 93.6831 529.51 0.00195312 499.365V501.349C94.2466 531.481 201.263 513.277 309.354 388.902C326.413 369.272 342.887 350.094 358.981 331.352C434.285 243.674 501.383 165.548 569.494 109.875C727.916 -19.6121 892.128 -27.5844 1179.23 248.492C1232.64 299.848 1282.52 337.368 1329 363.815V361.556C1282.98 335.265 1233.6 298.076 1180.75 247.255ZM1180.74 234.062C882.732 -42.4179 716.383 -23.0671 552.473 115.793C490.432 168.351 428.772 238.05 360.43 315.303C343.408 334.546 325.966 354.261 307.732 374.592C268.7 418.116 229.8 448.06 191.594 467.112C137.615 494.029 85.01 499.204 35.3799 490.232C23.4084 488.068 11.6073 485.078 0 481.373L0.00195312 481.376V483.313C11.4764 486.946 23.14 489.881 34.9707 492.021C85.0687 501.079 138.152 495.861 192.604 468.706C231.033 449.542 270.14 419.446 309.346 375.728C327.231 355.783 344.851 335.865 362.051 316.426C430.337 239.236 491.948 169.593 553.893 117.116C716.873 -20.9569 882.397 -40.0857 1179.25 235.318C1232.66 284.877 1282.54 321.062 1329 346.555V344.327C1282.98 318.984 1233.6 283.112 1180.74 234.062ZM1180.72 220.861C870.904 -56.1395 703.368 -23.2332 533.628 125.982C478.809 174.171 423.791 234.492 363.662 300.418C345.487 320.347 326.843 340.786 307.748 361.397C270.204 401.922 232.747 430.209 195.896 448.586C138.946 476.987 83.4231 481.714 31.2334 471.395C20.684 469.308 10.267 466.607 0.00195312 463.362V465.293C10.1237 468.465 20.3893 471.115 30.79 473.172C83.453 483.584 139.465 478.822 196.904 450.178C233.965 431.698 271.615 403.268 309.335 362.555C328.632 341.729 347.18 321.391 365.268 301.561C425.362 235.675 480.345 175.392 535.081 127.276C703.907 -21.1388 870.64 -53.7844 1179.26 222.147C1232.68 269.916 1282.56 304.769 1329 329.305V327.105C1282.99 302.708 1233.61 268.149 1180.72 220.861ZM1180.71 207.666C855.921 -71.8305 687.475 -21.4685 509.734 140.867C463.732 182.883 417.14 232.38 367.048 285.597C347.831 306.011 328.101 326.972 307.754 348.202C271.759 385.759 235.823 412.368 200.41 430.031C140.175 460.069 81.4303 464.217 26.4443 452.347C17.5294 450.421 8.71252 448.072 0.00488281 445.348L0.00195312 445.345V447.28C8.55273 449.934 17.2079 452.228 25.958 454.116C81.425 466.094 140.677 461.913 201.415 431.623C237.035 413.86 273.16 387.116 309.324 349.379C329.756 328.06 349.45 307.141 368.627 286.766C418.706 233.565 465.285 184.084 511.207 142.138C688.065 -19.3902 855.737 -69.4444 1179.27 208.974C1232.71 254.956 1282.57 288.486 1329 312.069V309.898C1283 286.448 1233.61 253.195 1180.71 207.666ZM1180.69 194.47C834.959 -91.5095 666.365 -15.7649 476.09 165.034C442.017 197.411 407.231 233.18 370.602 270.845C350.358 291.661 329.546 313.061 307.767 335.001C273.391 369.626 239.052 394.544 205.152 411.448C141.286 443.297 78.9584 446.709 20.9131 433.038C13.8773 431.38 6.90747 429.47 0.00195312 427.332V429.266C6.73462 431.334 13.532 433.189 20.3896 434.803C78.924 448.59 141.772 445.154 206.159 413.043C240.256 396.038 274.778 370.994 309.313 336.208C330.822 314.544 351.775 292.996 372.159 272.037C408.762 234.398 443.521 198.655 477.597 166.276C667.014 -13.7056 834.88 -89.0796 1179.29 195.805C1232.73 240.01 1282.59 272.215 1329 294.846V292.7C1283 270.193 1233.62 238.248 1180.69 194.47ZM1180.67 181.272C774.222 -141.424 612.61 19.2615 374.334 256.17C352.833 277.547 330.705 299.545 307.777 321.808C275.108 353.532 242.446 376.739 210.146 392.845C142.251 426.704 75.9415 429.178 14.5498 413.428C9.67041 412.177 4.82019 410.806 0.00195312 409.331V411.255C4.6322 412.662 9.29175 413.972 13.9805 415.177C75.8745 431.056 142.718 428.565 211.156 394.437C243.637 378.238 276.474 354.912 309.301 323.037C332.311 300.694 354.404 278.728 375.87 257.384C613.33 21.2901 774.389 -138.843 1179.31 182.632C1232.75 225.066 1282.6 255.953 1329 277.629V275.514C1283.01 253.952 1233.62 223.307 1180.67 181.272ZM0 409.331H0.00195312V409.329L0 409.331Z" fill="url(#paint0_linear_184_356)"/>
  <defs>
    <linearGradient id="paint0_linear_184_356" x1="1329" y1="249" x2="259.084" y2="252.891" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F09A07"/>
      <stop offset="1" stop-color="#F09A07" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
      </section>

      {/* Lower Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-[#333333] leading-relaxed font-heading">
                TalonX isn't just another data tool. It's a category-defining breakthrough in digital movement.
              </p>
            </div>
            <div>
              <p className="text-lg text-[#565B68] leading-relaxed font-inter">
                Across industries where data transfer is critical, TalonX replaces lag, inefficiency, and limitation with near-instant, lossless delivery. Explore how it's shaping the future of your industry below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          
          <nav className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => handleIndustryChange(industry, setActiveIndustry)}
                className={`px-2 py-3 text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap font-heading lg:text-lg ${
                  activeIndustry === industry
                    ? 'text-[#202020] border-b-2 border-[#E8B96F]'
                    : 'text-[#565B68] hover:text-[#E8B96F] hover:border-b-2 hover:border-[#E8B96F]/50'
                }`}
              >
                {industry}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Industry Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#333333] mb-10 md:!mb-15 lg:!mb-20 font-heading lg:text-6xl">
                Additional industries served
              </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Industries List */}
            <div>
              <div className="space-y-6">
                {additionalIndustries.map((industry, index) => (
                  <div
                    key={industry}
                    className={`flex items-center cursor-pointer transition-all duration-300 py-2 font-heading  ${
                      activeAdditionalIndustry === industry ? 'text-[#202020] font-bold' : 'text-[#565B68] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => handleIndustryChange(industry, setActiveAdditionalIndustry)}
                  >
                    {activeAdditionalIndustry === industry && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`${activeAdditionalIndustry === industry ? 'ml-0 md:text-2xl lg:text-3xl' : 'ml-0 text-lg lg:text-2xl'}`}>
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Industry Details */}
            <div>
              {activeAdditionalIndustry && industryData[activeAdditionalIndustry] ? (
                <div className={`space-y-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                  <h3 className="text-2xl md:text-3xl text-[#333333] font-heading">
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
                      <li key={index} className="flex items-start !mt-0">
                        <span className="text-[#000] mr-3 mb-1 text-lg">•</span>
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#333333] mb-10 md:!mb-15 lg:!mb-20 font-heading lg:text-6xl">
                Emerging & digital-first sectors
              </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Sectors List */}
            <div>
              <div className="space-y-6">
                {emergingSectors.map((sector, index) => (
                  <div
                    key={sector}
                    className={`flex items-center cursor-pointer transition-all duration-300 py-2 font-heading  ${
                      activeEmergingSector === sector ? 'text-[#202020] font-bold' : 'text-[#565B68] hover:text-[#E8B96F]'
                    }`}
                    onClick={() => handleIndustryChange(sector, setActiveEmergingSector)}
                  >
                    {activeEmergingSector === sector && (
                      <div className="w-3 h-3 bg-[#E8B96F] rounded-full mr-4 flex-shrink-0"></div>
                    )}
                    <span className={`${activeEmergingSector === sector ? 'ml-0 md:text-2xl lg:text-3xl' : 'ml-0 text-lg lg:text-2xl'}`}>
                      {sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Sector Details */}
            <div>
              {activeEmergingSector && industryData[activeEmergingSector] ? (
                <div className={`space-y-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                  <h3 className="text-2xl md:text-3xl text-[#333333] font-heading">
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
                      <li key={index} className="flex items-start !mt-0">
                        <span className="text-[#000] mr-3 mb-1 text-lg">•</span>
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 md:h-[50vh] relative">
        <img src={industriesFooter} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="max-w-7xl mx-auto flex items-center h-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="h-full">
              <h2 className="text-3xl md:text-4xl text-[#333333] mb-6 font-heading">
                Need a tailored solution?
              </h2>
              
            </div>
            
            {/* Right Content */}
            <div className="flex justify-center lg:justify-end flex-col gap-4">
              <p className="text-lg text-[#333333] leading-relaxed">
                Our TalonX and vault_encrypt technologies adapt to your specific needs with minimal code changes. Get enterprise-grade support from our expert team.
              </p>
              <div>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact our team
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 