import React from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';

const jobs = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    description: "Lead the development of next-gen UI/UX for Zerthos products. React, animation, and creative flair required.",
  },
  {
    id: "cloud-infrastructure-architect",
    title: "Cloud Infrastructure Architect",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    description: "Design and scale secure, high-performance cloud systems for global data delivery.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "Remote / Miami Beach, FL",
    type: "Full Time",
    description: "Shape the look and feel of Zerthos. You love beautiful, functional, and innovative design.",
  },
];

export const CareersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
      {/* Sticky Header */}
      <Header isScrolled={true} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-40 pb-16 w-full bg-gradient-to-br from-[#FFF700] via-[#FFF] to-[#FFF7E0] relative">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#202020] leading-tight mb-4 text-center">
          Join Zerthos<br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">Shape the Future</span>
        </h1>
        <div className="text-xl text-[#565a67] font-normal mb-8 text-center max-w-2xl">
          We're building the world's fastest, most secure data delivery platform. If you love innovation, creativity, and impact, let's talk.
        </div>
      </section>

      {/* Open Positions */}
      <section className="flex flex-col items-center gap-8 px-4 md:px-24 w-full py-16">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-[#202020] mb-4 text-center">Open Positions</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl justify-center w-full">
          {jobs.map((job, idx) => (
            <div key={idx} className="flex-1 bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col justify-between border-t-8 border-[#FFD700] hover:border-[#FF6B35] transition-all duration-300 min-w-[260px] max-w-md min-h-[340px]">
              <div>
                <div className="text-2xl font-heading font-bold text-[#202020] mb-1">{job.title}</div>
                <div className="text-[#F09A07] font-medium text-base mb-1">{job.location} • {job.type}</div>
                <div className="text-[#565a67] text-base mb-4">{job.description}</div>
              </div>
              <a href={`/job/${job.id}`} className="mt-4">
                <Button className="w-full px-9 py-4 h-auto rounded-xl bg-gradient-to-r from-[#F09A07] to-[#FF6B35] hover:from-[#E56C15] hover:to-[#EE5522] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1">
                  <span className="font-semibold text-white text-base transition-all duration-300 ease-in-out">Apply</span>
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-16 w-full bg-gradient-to-r from-[#FFD700]/10 to-[#FF6B35]/10">
        <h3 className="text-3xl md:text-4xl font-heading font-semibold text-[#202020] mb-4 text-center">Don't see your dream role?</h3>
        <div className="text-lg text-[#565a67] font-normal mb-6 text-center max-w-xl">
          We're always looking for creative, passionate people. Email your resume and tell us how you can make a difference at{' '}
          <a href="mailto:careers@zerthos.com" className="text-[#F09A07] underline">careers@zerthos.com</a>.
        </div>
        <a href="mailto:careers@zerthos.com?subject=General Application&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in opportunities at Zerthos.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]">
          <Button className="px-9 py-4 h-auto rounded-xl bg-gradient-to-r from-[#F09A07] to-[#FF6B35] hover:from-[#E56C15] hover:to-[#EE5522] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1">
            <span className="font-semibold text-white text-base transition-all duration-300 ease-in-out">Send Resume</span>
          </Button>
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}; 