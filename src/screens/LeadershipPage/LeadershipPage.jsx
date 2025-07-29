import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { Linkedin } from 'lucide-react';
import leadershipHeroBuilding from '../../assets/lead-building.png';
import christopherCochran from '../../assets/christopher-cochran.jpg';
import markGrace from '../../assets/mark-grace.jpg';

export const LeadershipPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const leadershipFeatures = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L28.5 18.5H44L30.5 28L35 42.5L24 33L13 42.5L17.5 28L4 18.5H19.5L24 4Z" stroke="#333333" strokeWidth="1.5" fill="none"/>
          <path d="M24 12L26 20H34L28 25L30 33L24 28L18 33L20 25L14 20H22L24 12Z" stroke="#333333" strokeWidth="1" fill="none"/>
        </svg>
      ),
      title: "Performance through innovation",
      description: "Our leaders developed TalonX to outperform, not just improve upon, legacy protocols like TCP/IP, LZ4, and Zstd. They embrace modular thinking, tunable architecture, and adaptive systems that evolve with every deployment."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#333333" strokeWidth="1.5" fill="none"/>
          <path d="M24 8V24L32 32" stroke="#333333" strokeWidth="1.5" fill="none"/>
          <path d="M24 16L28 20" stroke="#333333" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "Built for scale, Designed for impact",
      description: "Whether enabling precision in genomic data transfer, accelerating post-production pipelines, or powering military telemetry, our leadership understands the unique pressures of each industry, and architects solutions that exceed them"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L28 16L36 20L28 24L24 32L20 24L12 20L20 16L24 8Z" stroke="#333333" strokeWidth="1.5" fill="none"/>
          <path d="M24 16L26 20L30 22L26 24L24 28L22 24L18 22L22 20L24 16Z" stroke="#333333" strokeWidth="1" fill="none"/>
        </svg>
      ),
      title: "Cross-disciplinary expertise",
      description: "From defense and media to biotech and AI, Zerthos leaders bring experience from mission-critical sectors where speed, accuracy, and reliability are non-negotiable."
    }
  ];

  const teamMembers = [
    {
      name: "Christopher Cochran",
      title: "President & CEO, Zerthos, Inc.",
      image: christopherCochran,
      linkedin: "https://www.linkedin.com/in/pghcochran/",
      bio: `Christopher Cochran serves as President & CEO of Zerthos, Inc., leading the company's mission to revolutionize data delivery through the TalonX protocol. With over 30 years of experience in enterprise technology, Christopher has been instrumental in developing TalonX from concept to deployment.

Prior to founding Zerthos, Christopher held leadership positions at BluChip Solutions and Coeptis Therapeutics, where he gained deep expertise in high-performance computing and data infrastructure. His background spans from Division I wrestling at the University of Tennessee to authoring "What's GOOD About TODAY?" - reflecting his commitment to both physical and intellectual excellence.

Christopher's vision for Zerthos centers on creating technology that doesn't just improve upon existing solutions, but fundamentally redefines what's possible in data transmission. Under his leadership, TalonX has become the foundation for next-generation data delivery across industries where speed, security, and reliability are critical.`
    },
    {
      name: "Mark A. Grace",
      title: "Chief Legal Officer and General Counsel",
      image: markGrace,
      linkedin: "https://www.linkedin.com/in/mark-grace-7477495/",
      bio: `Mark A. Grace serves as Chief Legal Officer and General Counsel at Zerthos, bringing over two decades of legal expertise in high-tech and intellectual property law. As managing partner at Cohen & Grace, LLC, Mark has established himself as a leading trial lawyer in patent and trademark infringement, trade secrets, and complex commercial litigation.

Mark's legal career began with a strong technical foundation, earning a degree in Nuclear Engineering from Penn State University before pursuing his Juris Doctor at George Washington University. His professional journey includes significant roles at Westinghouse, Texas Utilities Electric Company, Winston & Strawn, and Cohen & Grigsby, providing him with comprehensive experience in both corporate and litigation environments.

At Zerthos, Mark oversees all legal matters including intellectual property protection, corporate governance, and strategic legal initiatives. His expertise in IP-sensitive fields is particularly valuable as Zerthos continues to innovate in the data delivery space, ensuring that the company's groundbreaking technologies are properly protected and positioned for global impact.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#E5F7FF] md:h-[612px]">
        {/* Background Building Image */}
        <div className="absolute inset-0 bg-gradient-to-br ">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
            <div className="w-full h-full bg-gradient-to-br rounded-l-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto flex items-center h-full">
          <div className="">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-[#333333] leading-tight">
                Our leadership
              </h1>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl z-20">
                At Zerthos, leadership means invention. Behind TalonX is a team of bold thinkers and engineers redefining how the world moves data.
              </p>
            </div>
            
            </div>
            </div>
              <img 
                src={leadershipHeroBuilding} 
                alt="Leadership building background" 
                className="absolute right-0 bottom-0 w-[60%] h-3/4 object-cover rounded-2xl z-10"
              />
      </section>

      {/* Vision-driven Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[#333333] mb-6">
            Vision-driven, Engineer-led
          </h2>
          <p className="text-lg md:text-lg text-[#565B68] leading-relaxed mb-8 font-inter font-normal">
            The team behind TalonX doesn't just lead a company — they lead a movement. From first principles to real-world deployment, our leadership works hands-on with product, engineering, and enterprise partners to deliver a future where data moves faster, leaner, and smarter.
          </p>
          <h3 className="text-xl md:text-lg font-inter font-semibold text-[#333333]">
            What defines our leadership:
          </h3>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 pt-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex justify-start mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-light text-[#333333] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[#333333] mb-12">
            Meet the team who made it possible
          </h2>
          
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Mobile: Stack vertically, Desktop: Side by side */}
                  {/* Left - Image and LinkedIn */}
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full mb-6 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg hover:bg-[#084482] transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="font-semibold">Connect with LinkedIn</span>
                    </a>
                  </div>
                  
                  {/* Right - Bio */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-light text-[#333333] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-[#333333] mb-6">
                      {member.title}
                    </p>
                    <div className="text-[#333333] leading-relaxed space-y-4">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#E5F7FF] via-blue-100 to-blue-[#E5F7FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-[#333333] mb-6">
                Interested in joining the vision?
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                We're always looking for leaders at every level, people who question limits, build from scratch, and engineer with intent. Join a team rewriting the rules of data performance.
              </p>
            </div>
            
            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#F09A07] text-white font-semibold rounded-xl hover:bg-[#E08A07] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 