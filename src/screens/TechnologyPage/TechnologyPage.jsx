import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import technologyHeroData from '../../assets/technology-hero-img.mp4';
import technologyGoldenGlobe from '../../assets/tech-globe-graphic.svg';
import technologyGradientGraphic from '../../assets/tech-gradient.png';
import technologyFiberGraphic from '../../assets/tech-fiber.png';

export const TechnologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const performanceFeatures = [
    {
      title: "Reduce latency and congestion",
      position: "top-left"
    },
    {
      title: "Maximize throughput and delivery fidelity",
      position: "top-right"
    },
    {
      title: "Adapt dynamically to network conditions",
      position: "bottom-left"
    },
    {
      title: "Scale seamlessly across local, cloud, and hybrid environments",
      position: "bottom-right"
    }
  ];

  const environmentFeatures = [
    {
      title: "🚀 Support multiple transform pipelines (text, DNA, UTF, multimedia, binaries, etc.)"
    },
    {
      title: "🚀 Optimize for varying file sizes (from megabytes to terabytes)"
    },
    {
      title: "🚀 Balance speed vs. density - depending on mission need"
    },
    {
      title: "🚀 Adjust for block size, thread count, or header requirements"
    }
  ];

  const industryCards = [
    {
      title: "Healthcare",
      description: "Deliver medical imaging, diagnostics, and EMR data instantly and securely",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L14 8H18L15 10.5L16 14L12 12L8 14L9 10.5L6 8H10L12 4Z" fill="white"/>
          <path d="M12 8L13 10H15L13.5 11L14 13L12 12L10 13L10.5 11L9 10H11L12 8Z" fill="white"/>
        </svg>
      )
    },
    {
      title: "Government & defense",
      description: "Accelerate secure communications and situational data at mission-critical speeds",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20V8H4V4ZM4 10H20V14H4V10ZM4 16H20V20H4V16Z" fill="white"/>
        </svg>
      )
    },
    {
      title: "Finance",
      description: "Speed up market data, analytics, and reporting workflows",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" fill="white"/>
          <path d="M12 6V18M6 12H18" stroke="#F09A07" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Media & entertainment",
      description: "Move massive 4K/8K video, VFX, and post-production assets globally, in real time",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" fill="white"/>
          <path d="M8 12L10 10L12 12L16 8" stroke="#F09A07" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "AI & machine learning",
      description: "Feed models with vast datasets and updates without downtime",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
          <circle cx="18" cy="6" r="1.5" fill="white"/>
        </svg>
      )
    },
    {
      title: "Manufacturing & automotive",
      description: "Transfer designs, software updates, and sensor data without bottlenecks",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
          <path d="M8 18L16 18M8 14L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Research & academia",
      description: "Enable collaboration through seamless movement of raw data and simulations",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L16.91 13.74L18.18 20.02L12 17.77L5.82 20.02L7.09 13.74L2 9L8.91 8.26L12 2Z" fill="white"/>
        </svg>
      )
    },
    {
      title: "Telecommunications",
      description: "Improve content delivery and internal data pipelines",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
          <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white"/>
        </svg>
      )
    }
  ];

  const cardsPerView = 4;
  const maxIndex = Math.max(0, industryCards.length - cardsPerView);

  const nextCards = () => {
    setCurrentCardIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevCards = () => {
    setCurrentCardIndex(prev => Math.max(prev - 1, 0));
  };


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark with Data Visualization */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        {/* Data Visualization Background */}
        <div className="absolute inset-0">
        <video 
                src={technologyHeroData} 
                alt="Technology data visualization" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-1 transform rotate-180 scale-x-[-1]"
                autoPlay
                muted
                loop
              />
        {/* Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60 rounded-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:h-[388px] flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight">
                Redefining the
                <br />
                movement of data
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
                At Zerthos, we've engineered something extraordinary — a proprietary protocol that transforms how data moves, scales, and performs. TalonX is our breakthrough in intelligent data transport: enabling near-instant, lossless delivery across any network, system, or device, no matter the size or format.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Lower Content Section - Two Columns */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-inter font-normal text-[#333333] mb-6">
                Files that once took minutes or hours to move now travel in seconds. TalonX dramatically reduces digital weight, without sacrificing quality or fidelity, delivering unmatched performance in both throughput and restoration speed.
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                
              </p>
            </div>
            
            {/* Right Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-light text-[#666666] leading-relaxed">
                And while traditional solutions hit a ceiling, TalonX can be tuned, manipulated, and evolved — unlocking levels of optimization that no static format or legacy protocol can match.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* A new class of performance Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-6xl font-heading font-normal text-[#333333] mb-6">
              A new class of performance
            </h2>
            <p className="text-lg md:text-2xl text-[#333333] leading-relaxed max-w-4xl">
              TalonX works above the limitations of conventional transfer methods like TCP/IP, UDP, or standard compression libraries. Operating at the application level, it uses proprietary real-time analysis to:
            </p>
          </div>
          
          {/* Golden Arc with Feature Boxes */}
          <div className="relative">
            {/* Golden Arc */}
            <div className="relative h-full mb-12 lg:pt-12">
              <img src={technologyFiberGraphic} alt="Fiber graphic" className="w-full h-full object-cover hidden md:block" />
              
              {/* Feature Boxes positioned around the arc */}
              <div className="flex flex-col items-center md:block md:absolute md:top-0 md:left-1/4 md:transform md:-translate-x-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Reduce latency and congestion</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-0 md:right-1/4 md:transform md:translate-x-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Maximize throughput and delivery fidelity</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-1/4 md:left-0">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Adapt dynamically to network conditions</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-1/4 md:right-0">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Scale seamlessly across local, cloud, and hybrid environments</p>
                </div>
              </div>
              <div className="text-center">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 pt-8">
              Our internal benchmarks show that TalonX consistently outperforms today's fastest and most efficient data transport algorithms — including LZ4 and Zstd — even under enterprise-grade stress conditions.
            </p>
          </div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          {/* <div className="text-center lg:relative">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto lg:absolute lg:top-[-100px] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              Our internal benchmarks show that TalonX consistently outperforms today's fastest and most efficient data transport algorithms — including LZ4 and Zstd — even under enterprise-grade stress conditions.
            </p>
          </div> */}
        </div>
      </section>

      {/* Precision-tuned for every environment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3">
              <h2 className="md:text-6xl font-heading font-normal text-[#333333] mb-6 text-3xl">
                Precision-tuned for every environment
              </h2>
              
              
              {/* Feature Cards Grid */}
              <div className="grid lg:grid-cols-4 gap-32">
                <div className="lg:col-span-2">

                <p className="text-lg md:text-2xl text-[#333333] leading-relaxed mb-8">
                TalonX is fully customizable, with modular building blocks that can be adapted to:
              </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                {environmentFeatures.map((feature, index) => (
                  <div key={index} className="bg-orange-50 rounded-xl p-6">
                      <p className="text-[#333333] leading-relaxed font-heading text-2xl">
                        {feature.title}
                      </p>
                  </div>
                ))}
              </div>
                <div className="space-y-4">
                <p className="text-lg text-[#333333] leading-relaxed">
                  This tunable architecture makes TalonX not just fast — but versatile. It can be engineered for use cases that demand raw speed, high-volume archiving, zero-loss restoration, or all three.
                </p>
                <p className="text-lg md:text-2xl text-[#333333] leading-relaxed font-inter font-semibold">
                  Other protocols are static. TalonX is alive — it learns, adjusts, and improves.
                </p>
              </div>
                </div>
                
              <div className="relative hidden lg:flex col-span-2">
              <img 
                src={technologyGradientGraphic} 
                alt="Gradient graphic" 
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
              
              
              
            </div>
            </div>
            
            {/* Right - Gradient Graphic */}
            
          </div>
        </div>
      </section>

      {/* Limitless application. Global impact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-6xl font-heading font text-[#333333] mb-6 ">
              Limitless application. Global impact.
            </h2>
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl">
              TalonX isn't for one industry. It's for every industry that relies on fast, secure, reliable data movement.
            </p>
          </div>
          
          {/* Industry Cards - Mobile Vertical List / Desktop Carousel */}
          <div className="relative">
            {/* Mobile: Vertical List (below md) */}
            <div className="md:hidden space-y-4 mb-8">
              {industryCards.map((card, index) => (
                <div key={index} className="bg-orange-50 rounded-xl p-6">
                  <div className="flex flex-col items-start">
                    <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Carousel with Arrows (md and above) */}
            <div className="hidden md:block relative overflow-hidden mb-12">
              {/* Cards Container with Slide Animation */}
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentCardIndex * (100 / cardsPerView)}%)`,
                  width: `${(industryCards.length / cardsPerView) * 100}%`
                }}
              >
                {industryCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="bg-orange-50 rounded-xl p-6 flex-shrink-0"
                    style={{ width: `${100 / industryCards.length}%` }}
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[#333333] leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex justify-start space-x-4 my-8">
              <button
                onClick={prevCards}
                disabled={currentCardIndex === 0}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentCardIndex === 0 
                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
                    : 'border-orange-300 bg-white hover:bg-orange-50 cursor-pointer'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke={currentCardIndex === 0 ? "#9CA3AF" : "#F09A07"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={nextCards}
                disabled={currentCardIndex >= maxIndex}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentCardIndex >= maxIndex 
                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
                    : 'border-orange-500 bg-white hover:bg-orange-50 cursor-pointer'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke={currentCardIndex >= maxIndex ? "#9CA3AF" : "#F09A07"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-left">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
              Wherever data lives — TalonX delivers it faster, leaner, and exactly as it was intended.
            </p>
          </div>
        </div>
      </section>

      {/* Built for what comes next Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#333333] leading-tight">
                Built for what
                <br />
                comes next
              </h2>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
                The future won't wait. And your data shouldn't either.
                TalonX isn't just a better engine — it's a new kind of fuel for
                the digital world.
              </p>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed font-light italic">
                What the world couldn't move, we just did.
              </p>
            </div>
            
            {/* Right - Golden Globe Graphic */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <img 
                src={technologyGoldenGlobe} 
                alt="Golden globe graphic" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 