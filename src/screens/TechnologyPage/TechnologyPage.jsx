import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import technologyHeroData from '../../assets/technology-hero-data.jpg';
import technologyGoldenGlobe from '../../assets/technology-golden-globe.jpg';
import technologyGradientGraphic from '../../assets/technology-gradient-graphic.jpg';

export const TechnologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      title: "Support multiple transform pipelines (text, DNA, UTF, multimedia, binaries, etc.)"
    },
    {
      title: "Optimize for varying file sizes (from megabytes to terabytes)"
    },
    {
      title: "Balance speed vs. density - depending on mission need"
    },
    {
      title: "Adjust for block size, thread count, or header requirements"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark with Data Visualization */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        {/* Data Visualization Background */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central point */}
              <circle cx="300" cy="200" r="2" fill="white" opacity="0.8"/>
              
              {/* Data flow lines */}
              <path d="M50 100 Q150 150 300 200" stroke="white" strokeWidth="1" opacity="0.3"/>
              <path d="M50 150 Q150 180 300 200" stroke="white" strokeWidth="1" opacity="0.3"/>
              <path d="M50 200 Q150 220 300 200" stroke="white" strokeWidth="1" opacity="0.3"/>
              <path d="M50 250 Q150 250 300 200" stroke="white" strokeWidth="1" opacity="0.3"/>
              <path d="M50 300 Q150 280 300 200" stroke="white" strokeWidth="1" opacity="0.3"/>
              
              {/* Data points */}
              <circle cx="100" cy="120" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="150" cy="140" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="200" cy="160" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="250" cy="180" r="1" fill="#F09A07" opacity="0.6"/>
              
              <circle cx="100" cy="180" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="150" cy="190" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="200" cy="200" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="250" cy="190" r="1" fill="#F09A07" opacity="0.6"/>
              
              <circle cx="100" cy="240" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="150" cy="230" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="200" cy="220" r="1" fill="#F09A07" opacity="0.6"/>
              <circle cx="250" cy="210" r="1" fill="#F09A07" opacity="0.6"/>
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight">
                Redefining the
                <br />
                movement of data
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
                At Zerthos, we've engineered something extraordinary — a proprietary protocol that transforms how data moves, scales, and performs. TalonX is our breakthrough in intelligent data transport: enabling near-instant, lossless delivery across any network, system, or device, no matter the size or format.
              </p>
            </div>
            
            {/* Right - Data Visualization */}
            <div className="relative h-96 lg:h-[500px]">
              <img 
                src={technologyHeroData} 
                alt="Technology data visualization" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20"
              />
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
              <h2 className="text-2xl md:text-3xl font-heading font-light text-[#333333] mb-6">
                Files that once took minutes or hours to move now travel in seconds.
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                TalonX dramatically reduces digital weight, without sacrificing quality or fidelity, delivering unmatched performance in both throughput and restoration speed.
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
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A new class of performance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#333333] mb-6">
              A new class of performance
            </h2>
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl">
              TalonX works above the limitations of conventional transfer methods like TCP/IP, UDP, or standard compression libraries. Operating at the application level, it uses proprietary real-time analysis to:
            </p>
          </div>
          
          {/* Golden Arc with Feature Boxes */}
          <div className="relative">
            {/* Golden Arc */}
            <div className="relative h-96 mb-12">
              <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 250 Q400 50 750 250" stroke="#F09A07" strokeWidth="4" fill="none" opacity="0.8"/>
                <path d="M50 250 Q400 50 750 250" stroke="#F09A07" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M50 250 Q400 50 750 250" stroke="#F09A07" strokeWidth="1" fill="none" opacity="0.2"/>
              </svg>
              
              {/* Feature Boxes positioned around the arc */}
              <div className="absolute top-0 left-0 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-[#333333] font-medium">Reduce latency and congestion</p>
              </div>
              
              <div className="absolute top-0 right-0 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-[#333333] font-medium">Maximize throughput and delivery fidelity</p>
              </div>
              
              <div className="absolute bottom-0 left-0 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-[#333333] font-medium">Adapt dynamically to network conditions</p>
              </div>
              
              <div className="absolute bottom-0 right-0 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-[#333333] font-medium">Scale seamlessly across local, cloud, and hybrid environments</p>
              </div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto">
              Our internal benchmarks show that TalonX consistently outperforms today's fastest and most efficient data transport algorithms — including LZ4 and Zstd — even under enterprise-grade stress conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Precision-tuned for every environment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#333333] mb-6">
                Precision-tuned for every environment
              </h2>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed mb-8">
                TalonX is fully customizable, with modular building blocks that can be adapted to:
              </p>
              
              {/* Feature Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {environmentFeatures.map((feature, index) => (
                  <div key={index} className="bg-orange-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-[#F09A07]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-[#333333] leading-relaxed">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-[#333333] leading-relaxed">
                  This tunable architecture makes TalonX not just fast — but versatile. It can be engineered for use cases that demand raw speed, high-volume archiving, zero-loss restoration, or all three.
                </p>
                <p className="text-lg text-[#333333] leading-relaxed">
                  Other protocols are static. TalonX is alive — it learns, adjusts, and improves.
                </p>
              </div>
            </div>
            
            {/* Right - Gradient Graphic */}
            <div className="relative h-96 lg:h-[500px]">
              <img 
                src={technologyGradientGraphic} 
                alt="Gradient graphic" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Limitless application. Global impact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#333333] mb-6">
              Limitless application. Global impact.
            </h2>
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto">
              TalonX isn't for one industry. It's for every industry that relies on fast, secure, reliable data movement.
            </p>
          </div>
          
          {/* Industry Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L14 8H18L15 10.5L16 14L12 12L8 14L9 10.5L6 8H10L12 4Z" fill="white"/>
                    <path d="M12 8L13 10H15L13.5 11L14 13L12 12L10 13L10.5 11L9 10H11L12 8Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  Healthcare
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  Deliver medical imaging, diagnostics, and EMR data instantly and securely
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V8H4V4ZM4 10H20V14H4V10ZM4 16H20V20H4V16Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  Government & defense
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  Accelerate secure communications and situational data at mission-critical speeds
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="white"/>
                    <path d="M12 6V18M6 12H18" stroke="#F09A07" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  Finance
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  Speed up market data, analytics, and reporting workflows
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 bg-[#F09A07] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="white"/>
                    <path d="M8 12L10 10L12 12L16 8" stroke="#F09A07" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  Media & entertainment
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm">
                  Move massive 4K/8K video, VFX, and post-production assets globally, in real time
                </p>
              </div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
              Wherever data lives — TalonX delivers it faster, leaner, and exactly as it was intended.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 