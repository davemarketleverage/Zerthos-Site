import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { ArrowUpRight } from 'lucide-react';
import careersHeroGrid from '../../assets/careers-hero-grid.jpg';
import careersTestimonial from '../../assets/careers-testimonial.jpg';

const jobs = [
  {
    id: "business-development",
    title: "Business development",
    type: "Onsite - Full time"
  },
  {
    id: "senior-ui-developer",
    title: "Senior UI developer",
    type: "Onsite - Full time"
  },
  {
    id: "hr-generalist",
    title: "HR generalist",
    type: "Onsite - Full time"
  },
  {
    id: "3d-motion-designer",
    title: "3D motion designer",
    type: "Onsite - Full time"
  },
  {
    id: "backend-engineer",
    title: "Backend engineer",
    type: "Onsite - Full time"
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                <a 
                  href={`/job/${job.id}`}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h3 className="text-lg font-bold text-white font-heading">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">
                      {job.type}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </a>
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