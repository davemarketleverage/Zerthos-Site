import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { ArrowUpRight, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import careersHeroGrid from '../../assets/careers-hero-grid.jpg';
import careersTestimonial from '../../assets/careers-testimonial.jpg';

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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/20 to-transparent">
          <img 
            src={careersHeroGrid} 
            alt="Careers hero grid background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight mb-8 font-heading pt-8">
            Explore exciting opportunities
          </h1>
          <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-3xl mx-auto">
            We believe in fostering a dynamic and collaborative work environment that empowers our team to create digital excellence.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12 font-heading">
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

      {/* Testimonial Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-normal text-[#333333] mb-8 font-heading">
            What our team says
          </h3>
          
          <blockquote className="text-2xl md:text-3xl font-bold text-[#333333] leading-relaxed mb-8">
            "Working at Zerthos has been a transformative experience. The collaborative atmosphere and challenging projects have fueled my growth."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src={careersTestimonial} 
                alt="Harry Donald" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-[#333333]">Harry Donald</p>
              <p className="text-gray-600 text-sm">Business development executive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#202020]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Current openings
          </h2>
          <p className="text-gray-300 mb-12">
            If you think you might be a good fit for our team we'd love to hear from you!
          </p>
          
          <div className="space-y-0">
            {jobs.map((job, index) => (
              <div key={job.id} className="relative">
                <div 
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h3 className="text-lg font-bold text-white font-heading">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">
                      {job.type}
                    </span>
                    {expandedJob === job.id ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </div>
                
                {/* Expanded Job Details */}
                {expandedJob === job.id && (
                  <div className="bg-gray-800 px-4 py-6 border-t border-gray-700">
                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                        <ul className="text-gray-300 space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-400 mr-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="text-gray-300 space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Apply Now</span>
                      </Button>
                    </div>
                  </div>
                )}
                
                {index < jobs.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
                )}
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