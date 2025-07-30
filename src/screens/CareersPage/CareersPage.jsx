import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { ArrowUpRight, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import careersHeroGrid from '../../assets/careers-hero-grid.svg';
import careerPhoto from '../../assets/career-photo.jpeg';
import careers1 from '../../assets/careers1.png';
import careers2 from '../../assets/careers2.png';
import careers3 from '../../assets/careers3.png';
import careers4 from '../../assets/careers4.png';
import careers5 from '../../assets/careers5.png';
import careers6 from '../../assets/careers6.png';

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[#FFF9EC] to-transparent">
          <img 
            src={careersHeroGrid} 
            alt="Careers hero grid background" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto ">
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-normal text-[#333333] leading-tight mt-8 font-heading pt-8 xl:text-[80px]">
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
                <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 font-heading">
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
          {/* Collage Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-6">
            {[
              { src: careers1, alt: "Team collaboration and innovation", className: "col-span-1 row-span-2" },
              { src: careers2, alt: "Modern workspace environment", className: "col-span-1 row-span-1" },
              { src: careers3, alt: "Professional development opportunities", className: "col-span-1 row-span-2" },
              { src: careers4, alt: "Work-life balance culture", className: "col-span-1 row-span-1" },
              { src: careers5, alt: "Team building activities", className: "col-span-1 row-span-2" },
              { src: careers6, alt: "Cutting-edge technology workspace", className: "col-span-1 row-span-1" },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden bg-gray-100 ${img.className} relative group`}
              >
                <img
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
          
          <blockquote className="text-2xl md:text-3xl lg:text-5xl font-normal text-[#333333] leading-relaxed mb-8">
            "Working at Zerthos has been a transformative experience. The collaborative atmosphere and challenging projects have fueled my growth."
          </blockquote>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F09A07]/10 border border-[#F09A07]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#F09A07] rounded-full"></div>
              <span className="text-[#F09A07] text-sm font-normal uppercase tracking-wider">We're Hiring</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 font-heading leading-tight">
              Join Our Team
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover exciting opportunities to shape the future of data transmission technology
            </p>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={job.id} className="group">
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#F09A07]/50 transition-colors duration-200 hover:shadow-lg">
                  {/* Header */}
                  <div 
                    className="flex flex-col lg:flex-row lg:items-center justify-between p-6 lg:p-8 hover:bg-gray-800/30 transition-colors duration-200 cursor-pointer"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-semibold text-white font-heading group-hover:text-[#F09A07] transition-colors duration-200 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1 bg-[#F09A07]/10 border border-[#F09A07]/30 rounded-full">
                              <div className="w-2 h-2 bg-[#F09A07] rounded-full"></div>
                              <span className="text-[#F09A07] text-sm font-medium uppercase tracking-wide">
                                {job.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 border border-gray-600 rounded-full">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm font-normal">{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Toggle Button */}
                    <div className="flex items-center gap-4">
                      <div className="hidden lg:flex items-center gap-3">
                        <span className="text-gray-400 text-sm font-normal">View Details</span>
                        <div className="w-10 h-10 bg-[#F09A07]/10 border border-[#F09A07]/30 rounded-full flex items-center justify-center group-hover:bg-[#F09A07] transition-colors duration-200">
                          {expandedJob === job.id ? (
                            <ChevronUp className="w-5 h-5 text-[#F09A07] group-hover:text-white transition-colors duration-200" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#F09A07] group-hover:text-white transition-colors duration-200" />
                          )}
                        </div>
                      </div>
                      <div className="lg:hidden w-8 h-8 bg-[#F09A07]/10 border border-[#F09A07]/30 rounded-full flex items-center justify-center">
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-4 h-4 text-[#F09A07]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#F09A07]" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Job Details */}
                  {expandedJob === job.id && (
                    <div className="bg-gray-800 border-t border-gray-700">
                      <div className="p-6 lg:p-8">
                        {/* Job Description */}
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-1 h-6 bg-[#F09A07] rounded-full"></div>
                            <h4 className="text-white font-semibold text-lg">About This Role</h4>
                          </div>
                          <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                            <p className="text-gray-300 leading-relaxed">
                              {job.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Responsibilities and Requirements */}
                        <div className="grid lg:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-[#F09A07] rounded-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-sm"></div>
                              </div>
                              <h4 className="text-white font-semibold">Key Responsibilities</h4>
                            </div>
                            <ul className="space-y-3">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300 leading-relaxed text-sm">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-[#F09A07] rounded-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-sm"></div>
                              </div>
                              <h4 className="text-white font-semibold">Requirements</h4>
                            </div>
                            <ul className="space-y-3">
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
                            className="bg-[#F09A07] hover:bg-[#F09A07]/90 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl"
                          >
                            <Mail className="w-5 h-5" />
                            <span>Apply for this position</span>
                            <ArrowUpRight className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 font-heading">
                Don't see your dream role?
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                We're always looking for creative, passionate people. Email your resume and tell us how you can make a difference at{' '}
                <a href="mailto:careers@zerthos.com" className="font-bold underline">careers@zerthos.com</a>.
              </p>
            </div>
            
            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="mailto:careers@zerthos.com?subject=General Application&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in opportunities at Zerthos.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 