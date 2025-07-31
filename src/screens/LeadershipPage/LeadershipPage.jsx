import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { Linkedin } from 'lucide-react';
import leadershipHeroBuilding from '../../assets/lead-building.png';
import christopherCochran from '../../assets/christopher-cochran.jpg';
import markGrace from '../../assets/markgracephoto.png';
import justinJohnson from '../../assets/justin.jpg';
import jonathanJohnson from '../../assets/jonathan.jpg';
import leadAbstract from '../../assets/lead-abstract.png';

export const LeadershipPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const leadershipFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<g clip-path="url(#clip0_184_237)">
<path d="M34.1263 6.51368L37.4683 0.513678C37.7343 0.0296778 38.3463 -0.142322 38.8283 0.127678C39.3103 0.395678 39.4843 1.00368 39.2143 1.48768L35.8723 7.48768C35.6903 7.81568 35.3483 8.00168 34.9983 8.00168C34.8323 8.00168 34.6663 7.95968 34.5123 7.87568C34.0303 7.60768 33.8563 6.99768 34.1263 6.51368ZM47.9163 10.5697C47.6923 10.0637 47.1043 9.83768 46.5983 10.0557L40.5983 12.6977C40.0923 12.9197 39.8623 13.5117 40.0843 14.0157C40.2503 14.3917 40.6163 14.6137 41.0003 14.6137C41.1343 14.6137 41.2723 14.5857 41.4023 14.5297L47.4023 11.8877C47.9083 11.6657 48.1383 11.0737 47.9163 10.5697ZM12.1263 7.48568C12.3083 7.81368 12.6503 7.99968 13.0003 7.99968C13.1663 7.99968 13.3323 7.95768 13.4863 7.87368C13.9683 7.60568 14.1423 6.99768 13.8723 6.51368L10.5323 0.513678C10.2643 0.0296778 9.65435 -0.140322 9.17235 0.127678C8.69035 0.395678 8.51635 1.00368 8.78635 1.48768L12.1283 7.48768L12.1263 7.48568ZM7.40235 12.6977L1.40235 10.0557C0.900346 9.83968 0.308346 10.0617 0.084346 10.5697C-0.137654 11.0737 0.0923461 11.6657 0.598346 11.8877L6.59835 14.5297C6.72835 14.5857 6.86635 14.6137 7.00035 14.6137C7.38435 14.6137 7.75035 14.3917 7.91635 14.0157C8.13835 13.5117 7.90835 12.9197 7.40235 12.6977ZM40.0003 23.9977C40.0003 29.1637 37.4823 34.0377 33.2643 37.0357C32.4723 37.5997 32.0003 38.5077 32.0003 39.4657V41.9997C32.0003 45.3077 29.3083 47.9997 26.0003 47.9997H22.0003C18.6343 47.9997 16.0003 45.2457 16.0003 41.7277V39.4637C16.0003 38.5077 15.5223 37.5957 14.7203 37.0257C9.80835 33.5217 7.30035 27.6137 8.17435 21.6037C9.20035 14.5617 15.0883 8.88368 22.1803 8.09968C26.7943 7.58768 31.2343 8.99968 34.6703 12.0737C38.0563 15.1077 40.0003 19.4517 40.0003 23.9977ZM30.0003 41.9977V39.9977H18.0003V41.7257C18.0003 44.1617 19.7183 45.9977 22.0003 45.9977H26.0003C28.2063 45.9977 30.0003 44.2037 30.0003 41.9977ZM38.0003 23.9977C38.0003 20.0217 36.3003 16.2177 33.3363 13.5637C30.7343 11.2357 27.4743 9.99768 24.0203 9.99768C23.4843 9.99768 22.9443 10.0277 22.3983 10.0877C16.1983 10.7717 11.0483 15.7357 10.1543 21.8917C9.38835 27.1557 11.5823 32.3317 15.8803 35.3957C16.7883 36.0437 17.4223 36.9697 17.7463 37.9977H23.0003V27.8957C20.7203 27.4317 19.0003 25.4117 19.0003 22.9977C19.0003 22.4457 19.4483 21.9977 20.0003 21.9977C20.5523 21.9977 21.0003 22.4457 21.0003 22.9977C21.0003 24.6517 22.3463 25.9977 24.0003 25.9977C25.6543 25.9977 27.0003 24.6517 27.0003 22.9977C27.0003 22.4457 27.4483 21.9977 28.0003 21.9977C28.5523 21.9977 29.0003 22.4457 29.0003 22.9977C29.0003 25.4137 27.2803 27.4317 25.0003 27.8957V37.9977H30.2523C30.5743 36.9717 31.2023 36.0477 32.1043 35.4057C35.7983 32.7817 38.0003 28.5177 38.0003 23.9977Z" fill="#565B68"/>
</g>
<defs>
<clipPath id="clip0_184_237">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
      ),
      title: "Performance through innovation",
      description: "Our leaders developed TalonX to outperform, not just improve upon, legacy protocols like TCP/IP, LZ4, and Zstd. They embrace modular thinking, tunable architecture, and adaptive systems that evolve with every deployment."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_184_243)">
    <path d="M25 48C24.894 48.038 25.27 48 25 48V48ZM25 48C10 48 0 37.234 0 24C0 10.766 10.766 0 24 0C37.234 0 48 10.766 48 24C48 38 37 48 25 48ZM32.86 8H31C29.346 8 28 9.346 28 11V13C28 14.654 26.654 16 25 16C23.346 16 22 17.346 22 19V21C22 22.654 23.346 24 25 24H31C33.758 24 36 26.242 36 29V30C36 30.212 36.11 35.152 41.048 37.882C44.14 34.092 46 29.262 46 24C46 16.618 42.334 10.09 36.74 6.098C35.796 7.28 34.39 8 32.86 8ZM24 35C24 33.346 22.654 32 21 32H14.484C12.642 32 10.838 31.252 9.534 29.95L2.076 22.492C2.042 22.992 2 23.492 2 24.002C2 36.132 11.87 46.002 24 46.002V35ZM39.68 39.404C34.08 36.052 34 30.256 34 30V29C34 27.346 32.654 26 31 26H25C22.242 26 20 23.756 20 21V19C20 16.244 22.242 14 25 14C25.55 14 26 13.552 26 13V11C26 8.244 28.242 6 31 6H32.86C33.71 6 34.494 5.628 35.058 5.01C31.804 3.108 28.034 2 24.002 2C13.246 2 4.286 9.76 2.386 19.972L10.948 28.534C11.88 29.466 13.166 29.998 14.484 29.998H21C23.758 29.998 26 32.24 26 34.998V45.896C31.336 45.412 36.126 43.022 39.68 39.404Z" fill="#565B68"/>
  </g>
  <defs>
    <clipPath id="clip0_184_243">
      <rect width="48" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg>
      ),
      title: "Built for scale, Designed for impact",
      description: "Whether enabling precision in genomic data transfer, accelerating post-production pipelines, or powering military telemetry, our leadership understands the unique pressures of each industry, and architects solutions that exceed them"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_184_249)">
    <path d="M38.8862 41.9123H38.9462C39.4722 41.9123 39.9222 41.4283 39.9602 40.8963C39.9802 40.6003 40.0022 40.3003 40.0022 39.9983C40.0022 37.7743 39.5542 35.6223 38.6702 33.5983C38.4502 33.0943 37.8662 32.8643 37.3542 33.0823C36.8482 33.3023 36.6162 33.8923 36.8382 34.3983C37.6102 36.1683 38.0022 38.0503 38.0022 39.9983C38.0022 40.2543 37.9542 40.9303 37.9542 40.9303C37.9162 41.4803 38.3382 41.8723 38.8882 41.9103L38.8862 41.9123Z" fill="#565B68"/>
    <path d="M47.932 41.706C47.652 45.238 44.59 48 40.962 48H34.844C34.292 48 33.844 47.552 33.844 47C33.844 46.448 34.292 46 34.844 46H40.962C43.554 46 45.74 44.044 45.938 41.546C46.282 37.21 45.164 32.978 42.618 28.97C38.066 21.802 30.774 17.704 23.094 18.018C11.264 18.494 1.99805 28.148 1.99805 39.998C1.99805 40.52 2.02005 41.034 2.06005 41.546C2.25805 44.042 4.44205 45.998 7.03605 45.998H13.154C13.706 45.998 14.154 46.446 14.154 46.998C14.154 47.55 13.706 47.998 13.154 47.998H7.03605C3.40805 47.998 0.346047 45.232 0.0660469 41.704C0.0220469 41.14 -0.00195312 40.572 -0.00195312 39.998C-0.00195312 32.874 3.08005 26.488 7.99805 22.092V8.71802L3.69205 12.872C3.29405 13.256 2.66205 13.248 2.27805 12.846C1.89405 12.45 1.90605 11.816 2.30405 11.434L7.15605 6.75202C8.16805 5.74002 9.83205 5.74402 10.852 6.76402L15.692 11.434C16.09 11.816 16.102 12.45 15.718 12.846C15.522 13.052 15.26 13.152 14.998 13.152C14.748 13.152 14.498 13.058 14.304 12.87L9.99805 8.71602V20.472C13.674 17.838 18.136 16.216 22.998 16.016V2.72202L18.692 6.87602C18.294 7.26002 17.662 7.25402 17.278 6.85002C16.894 6.45402 16.906 5.82002 17.304 5.43802L22.158 0.756018C23.17 -0.257982 24.834 -0.249982 25.854 0.768018L30.694 5.43802C31.092 5.82002 31.104 6.45402 30.72 6.85002C30.524 7.05602 30.262 7.15602 30 7.15602C29.75 7.15602 29.5 7.06202 29.306 6.87402L25 2.72002V16.08C29.696 16.316 34.18 18.01 38 20.96V8.72002L33.694 12.874C33.298 13.258 32.664 13.25 32.28 12.848C31.896 12.452 31.908 11.818 32.306 11.436L37.158 6.75402C38.17 5.74202 39.832 5.74602 40.854 6.76602L45.694 11.436C46.092 11.818 46.104 12.452 45.72 12.848C45.524 13.054 45.262 13.154 45 13.154C44.75 13.154 44.5 13.06 44.306 12.872L40 8.71802V22.682C41.596 24.198 43.056 25.926 44.306 27.896C47.092 32.278 48.31 36.924 47.932 41.702V41.706Z" fill="#565B68"/>
    <path d="M35.7081 29.708C36.0981 29.318 36.0981 28.684 35.7081 28.294C35.3181 27.904 34.6841 27.904 34.2941 28.294L26.0201 36.568C25.4261 36.216 24.7401 36.002 24.0001 36.002C21.7941 36.002 20.0001 37.796 20.0001 40.002C20.0001 42.208 21.7941 44.002 24.0001 44.002C26.2061 44.002 28.0001 42.208 28.0001 40.002C28.0001 39.262 27.7841 38.578 27.4341 37.982L35.7081 29.708ZM24.0001 42C22.8981 42 22.0001 41.104 22.0001 40C22.0001 38.896 22.8981 38 24.0001 38C25.1021 38 26.0001 38.896 26.0001 40C26.0001 41.104 25.1021 42 24.0001 42ZM24.0001 26C25.9461 26 27.8321 26.392 29.6001 27.164C30.1141 27.384 30.6981 27.152 30.9161 26.648C31.1381 26.142 30.9061 25.552 30.4001 25.332C28.3761 24.448 26.2241 24 24.0001 24C15.1781 24 8.00006 31.178 8.00006 40C8.00006 40.302 7.96806 40.534 8.00006 41C8.00006 41.552 8.44806 42 9.00006 42C9.55206 42 10.0001 41.552 10.0001 41C9.98206 40.75 10.0001 40.256 10.0001 40C10.0001 32.282 16.2801 26 24.0001 26Z" fill="#565B68"/>
  </g>
  <defs>
    <clipPath id="clip0_184_249">
      <rect width="48" height="48" fill="white"/>
    </clipPath>
  </defs>
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
      bio: `Christopher Cochran
Chief Executive Officer &amp; Co-Founder, Zerthos
Christopher Cochran is the Chief Executive Officer and Co-Founder of Zerthos, where he leads
the company's mission to revolutionize data movement through TalonX—a proprietary
compression and transfer protocol that enables near-instant, lossless delivery of large files. Under
his leadership, Zerthos is setting new standards for speed, efficiency, and scalability across
industries including healthcare, defense, enterprise, and media.

With over 30 years of technology experience, Chris has built and scaled high-performing
organizations at the intersection of innovation and execution. He previously served as CEO of
BluChip Solutions, a global project solutions firm specializing in enterprise IT, cloud
infrastructure, and cybersecurity. He currently serves on the Board of Directors for Coeptis, a
public company focused on advancing innovative technologies, and as Board Director of the
Christian Cochran Legacy Fund—a foundation dedicated to supporting underserved
communities and young adult cancer survivors. The fund partners with organizations like Young
Adult Survivors United (YASU) to provide emotional, social, and financial support to those
impacted by cancer.

Chris earned a Bachelor of Science in Business and International Law from the University of
Tennessee, where he was also a Division I wrestler. He is the author of What's GOOD About
TODAY?, a book written after the loss of his oldest son Christian at age 22 due to terminal
cancer. The book reflects his commitment to resilience, purpose, and leading with
compassion—even in the face of life's greatest challenges.`
    },
    {
      name: "Mark A. Grace",
      title: "Chief Legal Officer and General Counsel",
      image: markGrace,
      linkedin: "https://www.linkedin.com/in/mark-grace-7477495/",
      bio: `Mark Grace is Zerthos' Chief Legal Officer and General Counsel. As a key member of the Zerthos executive leadership team, Mark oversees all legal matters impacting the company, including corporate governance, intellectual property, and litigation strategy. In addition to his role at Zerthos, Mark is the managing partner of Cohen & Grace, LLC, a Pittsburgh-based law firm providing legal services to businesses and individuals throughout Pennsylvania.

Mark is a seasoned trial lawyer with extensive experience litigating complex and general commercial disputes in both state and federal courts. His legal background is particularly well-suited to supporting Zerthos' innovative work in high-tech and IP-sensitive fields. He has served as lead trial counsel in jury and non-jury trials, preliminary injunction hearings, and both domestic and international arbitrations, and has argued cases at the appellate level in both federal and state courts.

Mark's areas of practice include Patent and Trademark Infringement, Misappropriation of Trade Secrets, Noncompete and Nonsolicitation Covenants, Unfair/Deceptive Trade Practices, False Advertising, Fraud, Business Transaction Disputes, Securities Litigation, Employment Law, Shareholder Disputes, and Breach of Fiduciary Duties.

Mark has practiced law since 1996. He earned his Bachelor of Science in Nuclear Engineering with Distinction and Honors from The Pennsylvania State University in 1983, followed by a Master of Science in Nuclear Engineering from Penn State. From 1984 to 1993, Mark worked as a senior Nuclear Engineer at Westinghouse and later Texas Utilities Electric Company. He earned his Juris Doctor with Honors from The George Washington University in 1996.

Mark began his legal career at Winston & Strawn in Washington, D.C., representing nuclear electric utilities on matters of regulatory compliance, licensing, and federal enforcement. After returning to Pittsburgh, he joined Cohen & Grigsby in 1999 and became a partner in 2004. In 2008, he co-founded Cohen & Grace, LLC, where he continues to counsel emerging companies—like Zerthos—on legal strategies that safeguard innovation and accelerate growth.`
    },
    {
      name: "Jonathan Johnson",
      title: "Director of Systems Performance & Benchmarking, Zerthos",
      image: jonathanJohnson,
      linkedin: "#",
      bio: `Jonathan Johnson is the Director of Systems Performance & Benchmarking at Zerthos, where he
leads the architecture, optimization, and performance evaluation of the TalonX protocol. His
expertise is instrumental in ensuring TalonX operates with industry-leading speed, reliability, and
scalability across a wide range of demanding data environments.

Jon began his career at REAL Software, a developer of cross-platform tools, where he advanced
to become the company's lead Mac OS developer. He later contributed to large-scale digital
infrastructure at Gratis Internet, helping deliver high-performance ad systems for some of the
most widely used Facebook applications in the early days of social gaming and digital
advertising.

In 2009, Jon co-founded Core-apps, which became a dominant player in the trade show and
conference tech space. Following the company's acquisition in 2019, he has remained focused on
high-performance computing, open-source development, and next-generation data transfer
technologies. At Zerthos, he brings decades of hands-on engineering experience and a results-
driven mindset to help push the boundaries of what's possible in data movement.`
    },
    {
      name: "Justin Johnson, MBA",
      title: "Director of Program Operations, Zerthos",
      image: justinJohnson,
      linkedin: "#",
      bio: `Justin Johnson serves as Director of Program Operations at Zerthos, where he leads the
execution of complex technology initiatives and ensures operational alignment across product
development, security, and cloud infrastructure. A seasoned technology executive with over two
decades of experience, Justin brings a unique combination of strategic insight and hands-on
expertise in cloud transformation and cybersecurity.

Prior to joining Zerthos, Justin spearheaded enterprise-scale IT transformations across
government, education, and private sectors. His accomplishments include consolidating over
275,000 global Active Directory users across 177 forests, architecting zero-trust security
environments, and migrating more than 150,000 Microsoft 365 accounts at Penn State
University.

His cross-industry work spans cloud resiliency, digital workplace modernization, and identity
management across Azure, AWS, and GCC High platforms.

Holding an MBA from the University of Kansas, Justin has been recognized for delivering
award-winning solutions that balance innovation with compliance, risk mitigation, and
operational excellence.`
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
                className="absolute right-0 bottom-0 lg:w-[60%] lg:h-3/4 object-cover rounded-2xl z-0 hidden lg:flex"
              />
      </section>

      {/* Vision-driven Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="max-w-7xl mx-auto">

        
        <div className="max-w-4xl ">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[#333333] mb-6">
            Vision-driven, Engineer-led
          </h2>
          <p className="text-lg md:text-lg text-[#565B68] leading-relaxed mb-8 font-inter font-normal">
            The team behind TalonX doesn't just lead a company — they lead a movement. From first principles to real-world deployment, our leadership works hands-on with product, engineering, and enterprise partners to deliver a future where data moves faster, leaner, and smarter.
          </p>
          <h3 className="text-xl md:text-lg font-inter font-semibold text-[#333333]">
            What defines our leadership:
          </h3>
        </div></div>
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
                <h3 className="text-xl md:text-2xl font-heading  text-[#333333] mb-4 font-semibold">
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
          <h2 className="text-3xl md:text-5xl font-heading font-light text-[#333333] mb-12">
            Meet the team who made it possible
          </h2>
          
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Mobile: Stack vertically, Desktop: Side by side */}
                  {/* Left - Image and LinkedIn */}
                  <div className="lg:col-span-1">
                    <div className="aspect-square w-full mx-auto lg:mx-0 mb-6 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`w-full h-full object-cover grayscale ${member.name === "Justin Johnson, MBA" ? "object-top" : ""}`}
                      />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg hover:bg-[#084482] transition-colors duration-200 w-full flex justify-center"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="font-semibold">Connect with LinkedIn</span>
                    </a>
                  </div>
                  
                  {/* Right - Bio */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-[#202020] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-[#202020] mb-6 font-normal">
                      {member.title}
                    </p>
                    <div className="text-[#565B68] leading-relaxed space-y-4">
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#E5F7FF] relative md:h-[50vh]">
        <div className="max-w-7xl mx-auto h-full flex relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-[60px] font-heading font-light text-[#333333] mb-6 leading-none">
                Interested in <br className="hidden md:block"/>joining the vision?
              </h2>
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col gap-4">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed ">
                We're always looking for leaders at every level, people who question limits, build from scratch, and engineer with intent. Join a team rewriting the rules of data performance.
              </p>
              <div>

                              <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(90deg, #E56C15 0%, #E52 100%)' }}
                >
                  Explore careers
                </a>
                </div>
            </div>
          </div>
        </div>
                      <img 
                src={leadAbstract} 
                alt="Leadership abstract background" 
                className="absolute left-0 bottom-[-50px] 2xl:bottom-0 object-cover z-0 hidden lg:flex opacity-80"
              />
      </section>

      <Footer />
    </div>
  );
}; 