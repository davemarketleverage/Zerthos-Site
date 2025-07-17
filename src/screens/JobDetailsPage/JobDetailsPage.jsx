import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { ArrowLeft, Mail, MapPin, Clock, Users, Zap, Shield, Globe } from 'lucide-react';
import { Footer } from '../../components/ui/footer';

const jobData = {
  "senior-frontend-engineer": {
    title: "Senior Frontend Engineer",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    department: "Engineering",
    experience: "5+ years",
    description: "Lead the development of next-gen UI/UX for Zerthos products. React, animation, and creative flair required.",
    fullDescription: `We're looking for a Senior Frontend Engineer who is passionate about creating exceptional user experiences and pushing the boundaries of what's possible on the web. You'll be working on cutting-edge data visualization, real-time interfaces, and innovative UI patterns that help our users understand complex data infrastructure at a glance.

As a key member of our frontend team, you'll collaborate with designers, product managers, and backend engineers to build interfaces that are not only beautiful but also performant and accessible.`,
    responsibilities: [
      "Lead the development of React-based user interfaces for Zerthos products",
      "Create smooth, performant animations and transitions",
      "Implement responsive designs that work across all devices",
      "Collaborate with design team to create intuitive user experiences",
      "Optimize application performance and loading times",
      "Mentor junior developers and contribute to team growth",
      "Participate in code reviews and architectural decisions"
    ],
    requirements: [
      "5+ years of experience with React, TypeScript, and modern JavaScript",
      "Strong understanding of CSS, animations, and responsive design",
      "Experience with state management (Redux, Zustand, or similar)",
      "Knowledge of performance optimization and web accessibility",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible remote work options",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development budget",
      "Latest hardware and software tools",
      "Team events and company retreats"
    ]
  },
  "cloud-infrastructure-architect": {
    title: "Cloud Infrastructure Architect",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    department: "Infrastructure",
    experience: "7+ years",
    description: "Design and scale secure, high-performance cloud systems for global data delivery.",
    fullDescription: `As a Cloud Infrastructure Architect at Zerthos, you'll be responsible for designing, implementing, and maintaining the cloud infrastructure that powers our global data delivery platform. You'll work with cutting-edge technologies to ensure our systems are scalable, secure, and performant.

This role requires deep technical expertise in cloud platforms, networking, security, and automation. You'll collaborate with engineering teams to architect solutions that can handle massive scale while maintaining reliability and security.`,
    responsibilities: [
      "Design and implement scalable cloud infrastructure solutions",
      "Architect high-availability and disaster recovery systems",
      "Implement security best practices and compliance requirements",
      "Optimize infrastructure costs and performance",
      "Automate deployment and configuration management",
      "Monitor and maintain system health and performance",
      "Collaborate with development teams on infrastructure needs"
    ],
    requirements: [
      "7+ years of experience in cloud infrastructure and DevOps",
      "Expert knowledge of AWS, Azure, or Google Cloud Platform",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of networking and security principles",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of monitoring and logging tools",
      "Experience with CI/CD pipelines and automation"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible remote work options",
      "Health, dental, and vision insurance",
      "Unlimited PTO and paid parental leave",
      "Professional development budget",
      "Latest hardware and software tools",
      "Team events and company retreats"
    ]
  },
  "product-designer": {
    title: "Product Designer",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    department: "Design",
    experience: "4+ years",
    description: "Shape the look and feel of Zerthos. You love beautiful, functional, and innovative design.",
    fullDescription: `Join our design team to create exceptional user experiences that make complex data infrastructure accessible and beautiful. As a Product Designer at Zerthos, you'll work on everything from user research and wireframing to high-fidelity designs and design systems.

You'll collaborate closely with product managers, engineers, and other designers to create interfaces that are not only visually stunning but also intuitive and functional. Your work will directly impact how thousands of users interact with our platform.`,
    responsibilities: [
      "Create user-centered designs through research, wireframes, and prototypes",
      "Design beautiful, functional interfaces for web and mobile applications",
      "Develop and maintain design systems and component libraries",
      "Conduct user research and usability testing",
      "Collaborate with product managers to define product requirements",
      "Work closely with engineers to ensure design quality in implementation",
      "Present design solutions to stakeholders and gather feedback"
    ],
    requirements: [
      "4+ years of experience in product design or UX/UI design",
      "Strong portfolio demonstrating user-centered design work",
      "Proficiency in design tools (Figma, Sketch, or similar)",
      "Experience with user research and usability testing",
      "Knowledge of design systems and component libraries",
      "Understanding of web technologies and design constraints",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible remote work options",
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
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#565a67]">
                <Clock className="w-5 h-5 text-[#F09A07]" />
                <span>{job.type}</span>
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
              <span className="font-semibold text-white text-lg">Apply via Email</span>
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
                  Send your resume and cover letter to our team
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