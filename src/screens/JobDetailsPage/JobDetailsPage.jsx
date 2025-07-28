import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { ArrowLeft, Mail, MapPin, Clock, Users, Zap, Shield, Globe } from 'lucide-react';
import { Footer } from '../../components/ui/footer';

const jobData = {
  "business-development": {
    title: "Business Development",
    location: "Onsite - Miami Beach, FL",
    type: "Full Time",
    department: "Sales & Business Development",
    experience: "3+ years",
    description: "Drive growth and expand our market presence by building strategic partnerships and identifying new business opportunities.",
    fullDescription: `As a Business Development professional at Zerthos, you'll be at the forefront of our growth strategy, identifying and pursuing new market opportunities, building strategic partnerships, and expanding our customer base. You'll work closely with our leadership team to develop and execute business development initiatives that align with our mission to revolutionize data delivery.

This role requires a strategic thinker with strong relationship-building skills and a deep understanding of the technology landscape. You'll be responsible for identifying potential clients, partners, and market opportunities while representing Zerthos as a thought leader in the industry.`,
    responsibilities: [
      "Identify and pursue new business opportunities and strategic partnerships",
      "Develop and maintain relationships with key stakeholders and decision-makers",
      "Conduct market research and competitive analysis",
      "Create and present business proposals and partnership opportunities",
      "Collaborate with marketing and product teams on go-to-market strategies",
      "Attend industry events and conferences to build network and brand presence",
      "Track and report on business development activities and outcomes"
    ],
    requirements: [
      "3+ years of experience in business development, sales, or strategic partnerships",
      "Strong understanding of B2B sales cycles and enterprise software markets",
      "Excellent communication, presentation, and negotiation skills",
      "Experience with CRM systems and sales pipeline management",
      "Ability to build and maintain relationships with C-level executives",
      "Strategic thinking and analytical skills",
      "Self-motivated with a track record of meeting or exceeding targets"
    ],
    benefits: [
      "Competitive salary with performance-based bonuses",
      "Flexible work arrangements",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development and training opportunities",
      "Latest tools and technology",
      "Team events and company retreats"
    ]
  },
  "senior-ui-developer": {
    title: "Senior UI Developer",
    location: "Onsite - Miami Beach, FL",
    type: "Full Time",
    department: "Engineering",
    experience: "5+ years",
    description: "Create exceptional user interfaces that make complex data infrastructure accessible and beautiful.",
    fullDescription: `As a Senior UI Developer at Zerthos, you'll be responsible for building the frontend interfaces that power our data delivery platform. You'll work with cutting-edge technologies to create intuitive, performant, and visually stunning user experiences that help our clients understand and manage their data infrastructure.

You'll collaborate closely with designers, product managers, and backend engineers to translate complex requirements into elegant, user-friendly interfaces. Your work will directly impact how thousands of users interact with our platform daily.`,
    responsibilities: [
      "Develop responsive, accessible, and performant user interfaces",
      "Collaborate with design team to implement pixel-perfect designs",
      "Build reusable component libraries and design systems",
      "Optimize application performance and loading times",
      "Ensure cross-browser compatibility and mobile responsiveness",
      "Mentor junior developers and contribute to team growth",
      "Participate in code reviews and architectural decisions"
    ],
    requirements: [
      "5+ years of experience with modern frontend technologies (React, Vue, or Angular)",
      "Strong proficiency in HTML5, CSS3, and JavaScript/TypeScript",
      "Experience with state management and modern build tools",
      "Knowledge of responsive design principles and accessibility standards",
      "Experience with testing frameworks and CI/CD pipelines",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible work arrangements",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development budget",
      "Latest hardware and software tools",
      "Team events and company retreats"
    ]
  },
  "hr-generalist": {
    title: "HR Generalist",
    location: "Onsite - Miami Beach, FL",
    type: "Full Time",
    department: "Human Resources",
    experience: "3+ years",
    description: "Support our growing team by managing HR operations and fostering a positive workplace culture.",
    fullDescription: `As an HR Generalist at Zerthos, you'll play a crucial role in supporting our growing team and maintaining our positive workplace culture. You'll handle a wide range of HR responsibilities, from recruitment and onboarding to employee relations and benefits administration.

You'll work closely with leadership to develop and implement HR policies and programs that align with our company values and support our mission. This role requires someone who is passionate about people and committed to creating an inclusive, supportive work environment.`,
    responsibilities: [
      "Manage full-cycle recruitment and hiring processes",
      "Coordinate employee onboarding and offboarding procedures",
      "Handle employee relations and performance management",
      "Administer benefits programs and HR policies",
      "Maintain accurate employee records and HR documentation",
      "Support diversity, equity, and inclusion initiatives",
      "Assist with HR compliance and legal requirements"
    ],
    requirements: [
      "3+ years of experience in human resources or related field",
      "Knowledge of HR best practices and employment laws",
      "Experience with HRIS systems and recruitment platforms",
      "Strong interpersonal and communication skills",
      "Ability to maintain confidentiality and handle sensitive information",
      "Organizational skills and attention to detail",
      "Bachelor's degree in HR, Business, or related field preferred"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible work arrangements",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development opportunities",
      "Employee wellness programs",
      "Team events and company retreats"
    ]
  },
  "3d-motion-designer": {
    title: "3D Motion Designer",
    location: "Onsite - Miami Beach, FL",
    type: "Full Time",
    department: "Creative",
    experience: "4+ years",
    description: "Create stunning 3D animations and motion graphics that bring our brand and products to life.",
    fullDescription: `As a 3D Motion Designer at Zerthos, you'll be responsible for creating compelling visual content that helps communicate our complex technology in an engaging and accessible way. You'll work on everything from product demos and marketing materials to brand animations and interactive experiences.

You'll collaborate with our marketing, product, and design teams to create visual stories that resonate with our audience and effectively communicate the value of our data delivery platform. Your work will help us stand out in a competitive market and connect with potential clients and partners.`,
    responsibilities: [
      "Create high-quality 3D animations and motion graphics",
      "Develop visual concepts and storyboards for marketing campaigns",
      "Design and animate product demos and explainer videos",
      "Create brand assets and visual identity elements",
      "Collaborate with marketing team on content strategy",
      "Stay current with industry trends and new technologies",
      "Manage multiple projects and meet tight deadlines"
    ],
    requirements: [
      "4+ years of experience in 3D animation and motion design",
      "Proficiency in industry-standard software (Cinema 4D, Maya, After Effects)",
      "Strong portfolio demonstrating 3D and motion work",
      "Experience with video editing and post-production workflows",
      "Understanding of branding and marketing principles",
      "Ability to work independently and manage multiple projects",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible work arrangements",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development budget",
      "Latest hardware and software tools",
      "Team events and company retreats"
    ]
  },
  "backend-engineer": {
    title: "Backend Engineer",
    location: "Onsite - Miami Beach, FL",
    type: "Full Time",
    department: "Engineering",
    experience: "5+ years",
    description: "Build scalable, high-performance backend systems that power our global data delivery platform.",
    fullDescription: `As a Backend Engineer at Zerthos, you'll be responsible for designing, developing, and maintaining the server-side infrastructure that powers our data delivery platform. You'll work on complex distributed systems, high-performance APIs, and scalable architectures that can handle massive amounts of data and traffic.

You'll collaborate with frontend engineers, DevOps teams, and product managers to build robust, secure, and performant systems that our clients rely on for their critical data operations. Your work will directly impact the reliability and performance of our platform.`,
    responsibilities: [
      "Design and implement scalable backend services and APIs",
      "Develop high-performance data processing and storage solutions",
      "Ensure system reliability, security, and performance",
      "Collaborate with frontend teams on API design and integration",
      "Participate in code reviews and architectural decisions",
      "Mentor junior engineers and contribute to team growth",
      "Stay current with emerging technologies and best practices"
    ],
    requirements: [
      "5+ years of experience in backend development",
      "Strong proficiency in one or more languages (Go, Python, Java, or Node.js)",
      "Experience with distributed systems and microservices architecture",
      "Knowledge of databases (SQL and NoSQL) and data modeling",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Understanding of security best practices and performance optimization",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible work arrangements",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development budget",
      "Latest hardware and software tools",
      "Team events and company retreats"
    ]
  }
};

export const JobDetailsPage = () => {
  // Get job ID from URL parameters
  const { jobId } = useParams();
  const job = jobData[jobId];

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202020] mb-4">Job Not Found</h1>
          <a href="/careers" className="text-[#F09A07] hover:underline">← Back to Careers</a>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${job.title} Position`);
    const body = encodeURIComponent(`Dear Hiring Team,

I am writing to express my interest in the ${job.title} position at Zerthos.

Please find my resume attached.

Best regards,
[Your Name]`);
    
    window.location.href = `mailto:careers@zerthos.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <Header isScrolled={true} />

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="w-full max-w-4xl mx-auto px-8">
          {/* Back Button */}
          <a 
            href="/careers" 
            className="inline-flex items-center gap-2 text-[#F09A07] hover:text-[#E56C15] transition mb-8 group pt-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </a>

          {/* Job Header */}
          <div className="bg-gradient-to-br from-[#FFF700]/20 via-white to-[#FFF7E0]/20 rounded-3xl p-8 mb-8 border border-[#FFD700]/20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#202020] mb-4">
              {job.title}
            </h1>
            <p className="text-xl text-[#565a67] mb-6 max-w-3xl">
              {job.description}
            </p>
            
            {/* Job Meta */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-[#565a67]">
                <MapPin className="w-5 h-5 text-[#F09A07]" />
                <span>Miami Beach, FL</span>
              </div>
              <div className="flex items-center gap-2 text-[#565a67]">
                <Clock className="w-5 h-5 text-[#F09A07]" />
                <span>Onsite - Full time</span>
              </div>
              <div className="flex items-center gap-2 text-[#565a67]">
                <Users className="w-5 h-5 text-[#F09A07]" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2 text-[#565a67]">
                <Zap className="w-5 h-5 text-[#F09A07]" />
                <span>{job.experience} experience</span>
              </div>
            </div>

            {/* Apply Button */}
            <Button 
              onClick={handleApply}
              className="px-8 py-4 h-auto rounded-xl bg-gradient-to-r from-[#F09A07] to-[#FF6B35] hover:from-[#E56C15] hover:to-[#EE5522] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1 group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold text-white text-lg">Apply Now</span>
            </Button>
          </div>

          {/* Job Details */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Full Description */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#202020] mb-4">About the Role</h2>
                <div className="text-[#565a67] leading-relaxed space-y-4">
                  {job.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#202020] mb-4">What You'll Do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#565a67]">
                      <div className="w-2 h-2 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#202020] mb-4">What You'll Bring</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#565a67]">
                      <div className="w-2 h-2 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="bg-gradient-to-br from-[#F09A07]/10 to-[#FF6B35]/10 rounded-2xl p-6">
                <h3 className="text-xl font-heading font-bold text-[#202020] mb-4">Benefits & Perks</h3>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#565a67] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#F09A07] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply CTA */}
              <div className="bg-gradient-to-r from-[#FFD700] to-[#F09A07] rounded-2xl p-6 text-center">
                <h3 className="text-xl font-heading font-bold text-white mb-3">Ready to Join Us?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Send your resume to careers@zerthos.com
                </p>
                <Button 
                  onClick={handleApply}
                  className="w-full bg-white text-[#F09A07] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}; 