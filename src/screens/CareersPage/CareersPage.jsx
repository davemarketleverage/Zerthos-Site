/**
 * CareersPage Component with Lazy Loading Implementation
 * 
 * This component implements lazy loading for career images to improve performance
 * and user experience. Key features:
 * 
 * 1. LazyImage Component: Handles individual image loading with loading states
 * 2. useLazyImage Hook: Custom hook for image loading logic
 * 3. Image Preloading: Preloads all images in the background for faster loading
 * 4. Loading Indicators: Visual feedback during image loading
 * 5. Error Handling: Graceful fallback for failed image loads
 * 
 * Performance optimizations:
 * - Debounced image loading to prevent too many simultaneous requests
 * - Background preloading for all career images
 * - Smooth transitions to mask loading delays
 * - Error handling for failed image loads
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { SEO } from '../../components/ui/seo';
import { seoConfigs } from '../../lib/seo-configs';
import { ArrowUpRight, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import careersHeroGrid from '../../assets/careers-hero-grid.svg';
import careerPhoto from '../../assets/career-photo.jpeg';
import careers1 from '../../assets/careers1.png';
import careers2 from '../../assets/careers2.png';
import careers3 from '../../assets/careers3.png';
import careers4 from '../../assets/careers4.png';
import careers6 from '../../assets/careers8.jpg';
import careers5 from '../../assets/career7.jpg';

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

const jobs = [
  {
    id: "business-development",
    title: "Business development",
    type: "Onsite - Full time",
    location: "San Francisco, CA",
    description: "We're looking for a dynamic Business Development professional to drive growth and establish strategic partnerships. You'll be responsible for identifying new business opportunities, building relationships with potential clients, and contributing to our market expansion strategy.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain relationships with potential clients",
      "Develop strategic partnerships",
      "Conduct market research and competitive analysis",
      "Collaborate with cross-functional teams"
    ],
    requirements: [
      "3+ years of experience in business development",
      "Strong communication and negotiation skills",
      "Proven track record of meeting sales targets",
      "Experience in the technology sector preferred"
    ]
  },
  {
    id: "senior-ui-developer",
    title: "Senior UI developer",
    type: "Onsite - Full time",
    location: "San Francisco, CA",
    description: "Join our engineering team as a Senior UI Developer and help us create exceptional user experiences. You'll work on cutting-edge web applications using modern technologies and collaborate with designers and backend developers.",
    responsibilities: [
      "Develop responsive and accessible user interfaces",
      "Collaborate with designers and product managers",
      "Write clean, maintainable code",
      "Mentor junior developers",
      "Participate in code reviews"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expertise in React, TypeScript, and modern CSS",
      "Experience with design systems and component libraries",
      "Strong problem-solving skills"
    ]
  },
  {
    id: "hr-generalist",
    title: "HR generalist",
    type: "Onsite - Full time",
    location: "San Francisco, CA",
    description: "We're seeking an HR Generalist to support our growing team. You'll handle various HR functions including recruitment, employee relations, benefits administration, and HR operations.",
    responsibilities: [
      "Manage full-cycle recruitment process",
      "Handle employee relations and conflict resolution",
      "Administer benefits and compensation programs",
      "Maintain HR records and ensure compliance",
      "Support performance management processes"
    ],
    requirements: [
      "3+ years of HR experience",
      "Knowledge of employment laws and regulations",
      "Strong interpersonal and communication skills",
      "Experience with HRIS systems preferred"
    ]
  },
  {
    id: "3d-motion-designer",
    title: "3D motion designer",
    type: "Onsite - Full time",
    location: "San Francisco, CA",
    description: "Join our creative team as a 3D Motion Designer and bring our visual concepts to life. You'll create stunning animations, visual effects, and motion graphics for our products and marketing materials.",
    responsibilities: [
      "Create 3D animations and motion graphics",
      "Develop visual effects for product demos",
      "Collaborate with marketing and product teams",
      "Maintain brand consistency across all visual assets",
      "Stay updated with industry trends and tools"
    ],
    requirements: [
      "3+ years of experience in 3D motion design",
      "Proficiency in Cinema 4D, After Effects, and related tools",
      "Strong portfolio demonstrating creative and technical skills",
      "Experience with real-time rendering preferred"
    ]
  },
  {
    id: "backend-engineer",
    title: "Backend engineer",
    type: "Onsite - Full time",
    location: "San Francisco, CA",
    description: "We're looking for a Backend Engineer to build scalable and reliable systems that power our applications. You'll work on high-performance APIs, database design, and infrastructure optimization.",
    responsibilities: [
      "Design and implement scalable backend systems",
      "Develop RESTful APIs and microservices",
      "Optimize database performance and queries",
      "Ensure system security and data protection",
      "Collaborate with frontend and DevOps teams"
    ],
    requirements: [
      "4+ years of backend development experience",
      "Expertise in Node.js, Python, or similar languages",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Knowledge of database design and optimization"
    ]
  }
];

const whyJoinReasons = [
  {
    title: "Innovative work environment",
    description: "Immerse yourself in a culture of innovation, where your ideas are not just welcomed but encouraged. Zerthos is a place where creativity flourishes."
  },
  {
    title: "Career growth",
    description: "We invest in our team's professional development. From workshops to mentorship programs, we are committed to helping you reach your career goals."
  },
  {
    title: "Collaborative team",
    description: "Join a team that values collaboration. At Zerthos, we believe that great ideas come from diverse minds working together towards a common vision."
  }
];

export const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

    // Preload all career images
    const careerImages = [
      careersHeroGrid,
      careerPhoto,
      careers1,
      careers2,
      careers3,
      careers4,
      careers5,
      careers6
    ];

    careerImages.forEach(image => preloadImage(image));
  }, [preloadedImages]);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApply = (job) => {
    const subject = `Application for ${job.title} position`;
    const body = `Dear Hiring Team,

I am writing to express my interest in the ${job.title} position at Zerthos.

Please find my resume attached.

Best regards,
[Your Name]`;
    
    const mailtoLink = `mailto:careers@zerthos.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <SEO {...seoConfigs.careers} />
      <div className="min-h-screen bg-white">
        <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[#FFF9EC] to-transparent">
          <LazyImage 
            src={careersHeroGrid} 
            alt="Careers hero grid background" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto ">
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-light text-[#333333] leading-tight mt-8 font-heading pt-8 xl:text-[80px]">
            Explore exciting opportunities
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#333333] leading-relaxed max-w-3xl text-left font-inter">
            We believe in fostering a dynamic and collaborative work environment that empowers our team to create digital excellence.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#333333] mb-12 font-heading">
            Why join Zerthos/TalonX?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {whyJoinReasons.map((reason, index) => (
              <div key={index} className="relative">
                <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mb-4 font-inter">
                  {reason.title}
                </h3>
                <p className="text-lg text-[#333333] leading-relaxed">
                  {reason.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gray-200"></div>
                )}
                {index < 2 && (
                  <div className="md:hidden w-full h-px bg-gray-200 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
{/* Mobile: Vertical Stack */}
<div className="block md:hidden space-y-4">
            {[
              { src: careers1, alt: "Team collaboration and innovation" },
              { src: careers2, alt: "Modern workspace environment" },
              { src: careers3, alt: "Professional development opportunities" },
              { src: careers4, alt: "Work-life balance culture" },
              { src: careers5, alt: "Team building activities" },
              { src: careers6, alt: "Cutting-edge technology workspace" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-gray-100 relative group"
              >
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>


          {/* Collage Grid */}
          <div className="grid-cols-3 grid-rows-5 gap-4 md:gap-6 max-h-[900px] hidden md:grid">
            {[
              { src: careers1, alt: "Team collaboration and innovation", className: "row-span-2" },
              { src: careers2, alt: "Modern workspace environment", className: "row-span-3" },
              { src: careers3, alt: "Professional development opportunities", className: "row-span-2" },
              { src: careers4, alt: "Work-life balance culture", className: "row-span-3" },
              { src: careers5, alt: "Team building activities", className: "row-span-3" },
              { src: careers6, alt: "Cutting-edge technology workspace", className: "row-span-2" },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden bg-gray-100 ${img.className} col-span-1  relative group`}
              >
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-normal text-[#333333] mb-8 font-heading">
            What our team says
          </h3>
          
          <blockquote className="text-2xl md:text-3xl lg:text-5xl font-normal text-[#333333] leading-relaxed mb-8 font-heading">
            "Working at Zerthos has been a transformative experience. The collaborative atmosphere and challenging projects have fueled my growth."
          </blockquote>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <LazyImage 
                src={careerPhoto} 
                alt="Harry Donald" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#333333]">Harry Donald</p>
              <p className="text-gray-600 text-sm">Business development executive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#202020] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 font-heading leading-tight ">
              Current openings
            </h2>
            <p className="text-gray-300 text-2xl max-w-2xl leading-relaxed text-left">
              If you think you might be a good fit for our team we'd love to hear from you!
            </p>
          </div>
          
          <div className="space-y-0">
            {jobs.map((job, index) => (
              <div key={job.id} className="group">
                <div 
                  className="flex items-center justify-between gap-4 py-6 cursor-pointer hover:bg-gray-800/30 transition-colors duration-200 flex-wrap"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#F09A07] transition-colors duration-200">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm font-normal">
                      {job.type}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#F09A07] transition-colors duration-200" />
                  </div>
                </div>
                
                {index < jobs.length - 1 && (
                  <div className="border-b border-gray-700"></div>
                )}
                
                {/* Expanded Job Details */}
                {expandedJob === job.id && (
                  <div className="bg-gray-800/50 mt-4 rounded-lg p-6 border border-gray-700">
                    {/* Job Description */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-lg mb-3">About This Role</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    
                    {/* Responsibilities and Requirements */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="flex justify-end">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="bg-[#F09A07] hover:bg-[#F09A07]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Apply for this position</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 md:h-[50vh] relative">

      <svg className="absolute bottom-0 left-0 z-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 424" fill="none">
  <path d="M965.9 321.908C970.081 320.282 974.251 318.562 978.417 316.746C1047.11 286.803 1102.78 235.216 1156.62 185.33C1241.68 106.506 1329.64 25.0001 1469.96 29.9751L1470 28.8101C1436.17 27.6123 1404.68 31.1781 1373.74 39.7112C1346.17 47.3161 1319.67 58.7262 1292.71 74.592C1242.65 104.06 1198.55 144.929 1155.9 184.45C1048.22 284.235 936.871 387.414 717.52 321.657C707.509 318.655 697.336 315.556 687.496 312.558C637.271 297.25 585.332 281.418 532.931 272.142C504.713 267.145 478.627 264.398 453.177 263.739C424.604 262.999 397.57 264.895 370.52 269.531C309.926 279.914 251.794 303.824 192.797 342.626C160.834 363.645 128.223 389.47 95.8638 419.377C61.918 450.75 27.0717 487.708 -7.70494 529.223L-6.89396 530C101.772 400.288 199.203 329.082 289.237 294.051C435.786 237.032 562.781 275.756 687.199 313.678C697.039 316.676 707.213 319.779 717.228 322.78C743.971 330.797 770.049 336.573 794.741 339.952C818.278 343.173 841.331 344.317 863.266 343.357C899.189 341.786 932.901 334.752 965.902 321.912L965.9 321.908Z" fill="url(#paint0_linear_184_607)"/>
  <path d="M945.85 317.804C950.908 315.836 955.959 313.738 961.005 311.518C1029.72 281.244 1087.19 231.193 1142.78 182.791C1233.14 104.101 1326.59 22.731 1469.22 27.7834L1469.25 26.6184C1434.87 25.4013 1402.65 28.9371 1370.76 37.4388C1342.33 45.0173 1314.81 56.3926 1286.63 72.2183C1234.26 101.617 1187.41 142.421 1142.09 181.881C1030.87 278.733 915.859 378.883 707.117 324.736C692.617 320.976 677.793 316.966 663.457 313.089C564.908 286.44 463.009 258.883 352.677 278.194C324.16 283.185 295.736 291.271 268.224 302.205C238.712 313.94 209.05 329.427 180.061 348.241C149.334 368.182 118.253 392.583 87.683 420.754C55.5417 450.378 22.8672 487.708 -9.42409 529.223L-6.89396 530C101.772 400.288 199.203 329.082 289.237 294.051C435.786 237.032 562.781 275.756 687.199 313.678C697.039 316.676 707.213 319.779 717.228 322.78C743.971 330.797 770.049 336.573 794.741 339.952C818.278 343.173 841.331 344.317 863.266 343.357C899.189 341.786 932.901 334.752 965.902 321.912L965.9 321.908Z" fill="url(#paint1_linear_184_607)"/>
  <path d="M924.76 314.294C930.845 311.927 936.922 309.39 943.017 306.677C1011.54 276.157 1070.62 227.678 1127.76 180.798C1223.84 101.962 1323.19 20.4446 1468.47 25.5956L1468.51 24.4306C1434.87 23.1899 1402.65 26.7196 1370.76 35.2195C1342.33 42.798 1314.81 54.1836 1286.63 70.0289C1234.26 99.4674 1187.41 140.343 1142.09 181.881C1030.87 278.733 915.859 378.883 707.117 324.736C692.617 320.976 677.793 316.966 663.457 313.089C564.908 286.44 463.009 258.883 352.677 278.194C324.16 283.185 295.736 291.271 268.224 302.205C238.712 313.94 209.05 329.427 180.061 348.241C149.334 368.182 118.253 392.583 87.683 420.754C55.5417 450.378 22.8672 487.708 -9.42409 529.223L-6.89396 530C101.772 400.288 199.203 329.082 289.237 294.051C435.786 237.032 562.781 275.756 687.199 313.678C697.039 316.676 707.213 319.779 717.228 322.78C743.971 330.797 770.049 336.573 794.741 339.952C818.278 343.173 841.331 344.317 863.266 343.357C899.189 341.786 932.901 334.752 965.902 321.912L965.9 321.908Z" fill="url(#paint2_linear_184_607)"/>
  <path d="M902.426 311.507C909.717 308.671 917.017 305.605 924.358 302.297C992.443 271.635 1052.88 224.771 1111.34 179.451C1213.61 100.148 1319.37 18.1452 1467.72 23.404L1467.76 22.2389C1432.01 20.9697 1398.04 24.5082 1363.89 33.0494C1333.47 40.6626 1303.6 52.1104 1272.59 68.0489C1214.98 97.6531 1161.96 138.756 1110.7 178.506C1045.94 228.716 979.938 279.884 902.282 310.099C839.69 334.453 769.544 345.203 686.307 330.899C661.862 326.7 637.33 321.636 611.359 316.273C564.871 306.678 516.801 296.752 467.205 291.618C411.049 285.802 360.995 287.16 314.186 295.768C287.191 300.732 260.578 308.277 235.076 318.199C234.977 318.238 234.879 318.276 234.78 318.315C207.253 329.047 179.968 342.959 153.688 359.661C125.742 377.419 97.9525 398.951 71.0866 423.659C42.7554 449.716 14.5155 480.162 -12.8476 514.155L-12.0224 514.913C72.6105 402.888 169.755 343.765 253.493 311.184C392.363 257.152 519.966 287.451 637.783 315.42C657.132 320.015 677.137 324.765 696.495 328.962C744.131 339.291 788.201 342.027 831.221 337.332C863.207 333.837 893.981 326.27 924.76 314.294Z" fill="url(#paint3_linear_184_607)"/>
  <path d="M878.609 309.603C887.329 306.21 896.095 302.503 904.938 298.474C972.278 267.791 1033.77 222.594 1093.24 178.884C1202.3 98.7244 1315.07 15.8325 1466.98 21.2162L1467.02 20.0512C1430.42 18.7542 1395.38 22.3211 1359.9 30.9539C1328.29 38.6478 1297.04 50.22 1264.39 66.3274C1203.74 96.2532 1147.25 137.773 1092.62 177.923C973.715 265.326 850.757 355.701 675.898 333.985C646.227 330.301 615.843 324.886 583.674 319.152C538.274 311.063 491.331 302.693 442.86 298.688C387.908 294.147 339.194 296.076 293.938 304.588C267.714 309.522 241.997 316.829 217.499 326.308C217.265 326.399 217.028 326.491 216.79 326.584C190.656 336.752 164.933 349.769 140.316 365.28C113.883 381.935 87.8137 402.042 62.821 425.043C36.4484 449.316 10.4136 477.608 -14.5568 509.135L-13.7257 509.886C63.3751 412.546 140.88 356.942 217.297 327.21C344.524 277.708 468.778 299.859 583.494 320.302C615.677 326.039 646.073 331.454 675.771 335.145C717.888 340.375 757.856 339.477 797.959 332.399C824.968 327.633 851.565 320.125 878.609 309.603Z" fill="url(#paint4_linear_184_607)"/>
  <path d="M853.026 308.771C863.452 304.714 873.979 300.233 884.659 295.304C950.893 264.751 1013.04 221.283 1073.16 179.251C1189.69 97.7605 1310.19 13.4947 1466.23 19.0245L1466.27 17.8595C1428.68 16.5255 1392.43 20.1478 1355.43 28.9328C1322.47 36.7554 1289.68 48.5266 1255.19 64.9152C1191.14 95.3479 1130.86 137.506 1072.55 178.277C952.492 262.239 828.336 349.059 665.488 337.07C630.58 334.5 593.955 328.889 555.177 322.953C510.823 316.16 464.962 309.135 417.718 306.094C364.126 302.643 316.899 305.025 273.335 313.365C220.392 323.501 172.523 342.268 126.996 370.732C102.128 386.284 77.7916 404.977 54.6631 426.306C30.2498 448.821 6.38406 474.999 -16.2747 504.114L-15.4376 504.858C54.2776 415.267 126.479 363.536 198.942 335.342C320.252 288.142 442.327 306.846 555.02 324.107C593.816 330.05 630.462 335.66 665.409 338.234C704.638 341.123 742.381 338.587 780.794 330.486C804.769 325.427 828.62 318.266 853.018 308.773L853.026 308.771Z" fill="url(#paint5_linear_184_607)"/>
  <path d="M825.31 309.259C837.779 304.407 850.435 298.974 863.377 292.921C928.063 262.67 990.394 221.031 1050.68 180.764C1175.51 97.3682 1304.6 11.1326 1465.49 16.8368L1465.53 15.6717C1426.79 14.299 1389.12 18.0099 1350.38 27.0181C1315.89 35.0355 1281.35 47.0985 1244.78 63.8909C1176.91 95.0586 1112.44 138.128 1050.1 179.777C929.87 260.091 805.552 343.138 655.075 340.158C615.016 339.365 571.808 333.679 526.065 327.657C482.749 321.955 437.959 316.057 392.048 313.808C339.968 311.26 294.355 313.947 252.6 322.03C201.856 331.855 156.473 349.486 113.859 375.932C90.5803 390.378 67.9804 407.693 46.6863 427.384C24.206 448.173 2.4469 472.297 -17.9903 499.087L-17.1472 499.825C150.969 279.45 350.176 305.673 525.929 328.811C571.701 334.836 614.94 340.528 655.053 341.321C691.309 342.04 726.696 338.018 763.234 329.027C783.696 323.995 804.234 317.459 825.306 309.261L825.31 309.259Z" fill="url(#paint6_linear_184_607)"/>
  <path d="M795.035 311.363C809.942 305.562 825.183 298.956 840.944 291.47C903.546 261.737 965.446 222.053 1025.31 183.675C1159.46 97.6741 1298.17 8.74277 1464.74 14.6451L1464.78 13.4801C1424.69 12.0588 1385.38 15.9016 1344.62 25.2266C1308.36 33.5205 1271.82 45.988 1232.89 63.3412C1160.68 95.5315 1091.57 139.832 1024.75 182.676C900.116 262.58 782.396 338.047 644.662 343.245C599.623 344.943 549.546 339.244 496.526 333.208C454.266 328.396 410.569 323.423 366.093 321.792C315.666 319.941 271.784 322.8 231.934 330.536C183.531 339.931 140.703 356.387 100.998 380.839C79.3184 394.194 58.4356 410.145 38.9293 428.256C18.3451 447.37 -1.38162 469.512 -19.7032 494.068L-18.8518 494.794C131.801 292.863 325.508 314.908 496.41 334.364C549.468 340.403 599.585 346.108 644.702 344.406C677.894 343.154 710.778 337.823 745.23 328.113C761.577 323.504 778.092 317.955 795.035 311.363Z" fill="url(#paint7_linear_184_607)"/>
  <path d="M761.694 315.438C779.489 308.514 797.854 300.461 817.163 291.13C877.038 262.189 935.026 226.318 996.422 188.339C1141.09 98.8524 1290.68 6.31273 1464 12.4573L1464.04 11.2923C1290.4 5.14102 1140.67 97.761 995.876 187.33C873.99 262.729 758.862 333.945 634.248 346.328C584.459 351.277 527.271 345.566 466.726 339.525C425.57 335.416 383.015 331.171 340.07 329.975C291.427 328.624 249.369 331.516 211.497 338.814C165.543 347.669 125.305 362.909 88.4869 385.397C68.3959 397.669 49.1957 412.303 31.4245 428.884C12.6763 446.377 -5.09854 466.618 -21.4175 489.046L-20.5577 489.76C28.3798 422.494 84.4587 382.257 143.97 359.102C247.534 318.807 361.516 330.191 466.622 340.68C527.22 346.727 584.459 352.444 634.347 347.484C664.388 344.498 694.601 338.069 726.716 327.83C738.192 324.17 749.816 320.055 761.693 315.434L761.694 315.438Z" fill="url(#paint8_linear_184_607)"/>
  <path d="M724.665 321.965C745.84 313.727 767.944 303.901 791.753 292.155C848.094 264.358 903.985 230.791 963.156 195.247C1119.83 101.145 1281.84 3.83519 1463.25 10.2657L1463.29 9.10061C1419.68 7.55576 1376.15 11.8389 1330.22 22.1949C1289.47 31.3828 1247.87 45.1487 1203.04 64.2724C1120.02 99.6927 1040 147.752 962.624 194.229C880.821 243.36 802.17 290.602 724.328 320.889C690.735 333.959 657.311 343.867 623.828 349.422C569.581 358.415 505.09 352.635 436.814 346.509C334.502 337.335 223.438 327.377 125.594 365.447C70.5302 386.871 19.6604 423.493 -23.1339 484.028L-22.2658 484.73C96.2145 317.132 277.117 333.356 436.724 347.667C505.068 353.798 569.62 359.585 623.996 350.569C650.78 346.129 678.13 338.85 707.615 328.325C713.239 326.318 718.919 324.197 724.664 321.961L724.665 321.965Z" fill="url(#paint9_linear_184_607)"/>
  <path d="M683.258 331.533C759.924 301.703 840.336 254.458 924.322 205.115C1094.87 104.912 1271.22 1.29928 1462.51 8.07791L1462.54 6.91286C1417.25 5.30957 1369.61 10.0757 1320.96 21.0911C1277.28 30.9785 1232.42 45.7471 1183.81 66.2398C1093.93 104.137 1007.44 154.955 923.792 204.095C839.855 253.411 759.463 300.644 682.882 330.44C659.357 339.593 636.21 347.095 613.413 352.514C555.047 366.392 483.109 360.391 406.951 354.04C328.45 347.495 247.278 340.727 171.822 354.539C130.954 362.021 95.9173 374.728 64.7139 393.395C47.7174 403.56 31.7462 415.668 17.2394 429.377C1.96257 443.816 -12.1972 460.514 -24.8469 479.01L-23.9669 479.698C79.8308 327.931 253.574 342.419 406.866 355.201C483.11 361.558 555.128 367.564 613.651 353.651C636.493 348.219 659.704 340.697 683.258 331.533Z" fill="url(#paint10_linear_184_607)"/>
  <path d="M637.14 344.747C710.901 316.048 792.433 268.761 878.077 219.086C1056.21 115.771 1258.11 -1.32824 1461.76 5.88623L1461.8 4.72117C1413.63 3.01224 1362.42 8.297 1309.6 20.4233C1262.31 31.2763 1213.46 47.4215 1160.25 69.7861C1062.06 111.051 968.262 165.45 877.559 218.062C791.956 267.712 710.448 314.985 636.768 343.653C625.311 348.111 614.055 352.114 602.988 355.615C540.908 375.238 461.42 368.807 377.265 361.993C301.692 355.879 223.547 349.554 152.77 361.89C114.483 368.562 82.0125 379.983 53.5043 396.805C37.9915 405.955 23.5497 416.866 10.5687 429.234C-3.08738 442.246 -15.5826 457.305 -26.5695 473.999L-25.6788 474.67C5.89394 426.7 45.9619 397.116 91.2897 379.48C175.254 346.811 277.314 355.073 377.185 363.157C461.441 369.976 541.028 376.417 603.298 356.733C614.377 353.232 625.67 349.214 637.138 344.752L637.14 344.747Z" fill="url(#paint11_linear_184_607)"/>
  <path d="M585.957 362.688C588.332 361.764 590.666 360.803 592.968 359.796C653.74 333.293 725.84 291.357 802.168 246.957C994.64 134.994 1234.17 -4.34058 1461.02 3.69845L1461.05 2.5334C1370.12 -0.688325 1270.49 19.1573 1157.55 63.0993C1144.93 68.0106 1132.16 73.2129 1119.2 78.73C1007.11 126.417 897.955 189.912 801.65 245.933C725.346 290.319 653.275 332.244 592.56 358.721C590.275 359.716 587.952 360.673 585.61 361.584C520.562 386.893 434.551 379.637 343.662 371.97C271.93 365.919 197.754 359.665 132.42 370.179C97.1334 375.857 67.5385 385.827 41.9431 400.653C28.0361 408.709 15.2091 418.346 3.81458 429.296C-8.15993 440.804 -18.959 454.159 -28.2811 468.984L-27.3762 469.636C-1.3688 428.282 33.1856 402.476 73.1521 386.926C150.472 356.842 248.083 365.08 343.573 373.133C391.046 377.137 435.886 380.919 478.335 380.21C501.163 379.828 521.061 378.173 539.175 375.143C556.534 372.242 571.919 368.15 585.953 362.69L585.957 362.688Z" fill="url(#paint12_linear_184_607)"/>
  <path d="M567.542 369.516C572.754 367.489 577.766 365.278 582.609 362.871C630.125 339.278 685.013 306.919 748.572 269.456C946.551 152.749 1217.7 -7.08816 1460.27 1.50675L1460.31 0.341699C1352.53 -3.47713 1231.07 24.6816 1088.98 86.4228C966.596 139.601 850.483 208.046 748.042 268.437C684.502 305.892 629.628 338.242 582.146 361.817C514.146 395.583 419.378 387.306 319.048 378.543C249.753 372.491 178.1 366.232 116.612 375.326C83.446 380.231 55.9484 389.08 32.5532 402.382C19.8552 409.601 8.26701 418.268 -1.89277 428.141C-12.5591 438.507 -22.0172 450.562 -30 463.972L-29.0798 464.596C0.165754 415.492 47.8749 386.665 116.764 376.479C178.13 367.401 249.724 373.657 318.963 379.704C367.13 383.912 416.935 388.261 462.007 387.223C486.265 386.664 507.327 384.636 526.401 381.02C541.49 378.162 555.084 374.364 567.546 369.515L567.542 369.516Z" fill="url(#paint13_linear_184_607)"/>
  <defs>
    <linearGradient id="paint0_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint1_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint2_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint3_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint4_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint5_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint6_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint7_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint8_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint9_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint10_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint11_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint12_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
    <linearGradient id="paint13_linear_184_607" x1="1470" y1="265" x2="-30" y2="265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC195" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFC195"/>
    </linearGradient>
  </defs>
</svg>
        <div className="max-w-7xl mx-auto flex items-center h-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#333333] mb-6 font-heading">
                Don't see your dream role?
              </h2>
              
            </div>
            
            {/* Right Content */}
            <div className="flex justify-center lg:justify-end flex-col gap-4">
            <p className="text-lg text-[#333333] leading-relaxed">
                We're always looking for creative, passionate people. Email your resume and tell us how you can make a difference at{' '}
                <a href="mailto:careers@zerthos.com" className="font-bold underline">careers@zerthos.com</a>.
              </p>
              <div>

              <a
                href="mailto:careers@zerthos.com?subject=General Application&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in opportunities at Zerthos.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send resume
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}; 