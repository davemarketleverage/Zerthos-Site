import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [focusedField, setFocusedField] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const emailData = {
        sender: {
          name: "Christopher Cochran",
          email: "chris.cochran@zerthos.com"
        },
        to: [
          {
            email: "chris.cochran@zerthos.com",
            name: "Christopher Cochran"
          }
        ],
        subject: `New Contact Form Submission from ${form.name}`,
        htmlContent: `
          <html>
            <head></head>
            <body>
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${form.name}</p>
              <p><strong>Email:</strong> ${form.email}</p>
              <p><strong>Company:</strong> ${form.company || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p>${form.message.replace(/\n/g, '<br>')}</p>
            </body>
          </html>
        `
      };

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", company: "", message: "" });
        setFocusedField("");
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // You might want to show an error message to the user here
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["801 South Pointe Drive, TH1", "Miami Beach, FL 33139"],
      color: "from-blue-500 to-cyan-500",
      location: "HQ"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["105 Bradford Rd, Suite 420", "Wexford, PA 15090"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["Toll Free: (877)-60Zerthos", "Mon-Fri: 9AM-6PM EST"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@zerthos.com"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const faqs = [
    {
      question: "How does Zerthos technology work?",
      answer: "Our proprietary TalonX protocol enables lightning-fast, secure data transmission through advanced network optimization and military-grade encryption."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve financial services, healthcare, logistics, telecommunications, and any organization requiring high-performance data delivery."
    },
    {
      question: "Is Zerthos technology secure?",
      answer: "Yes, we use 256-bit military-grade encryption and maintain 99.99% uptime with enterprise-grade security protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Sticky Header */}
      <Header isScrolled={true} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-40 pb-16 w-full bg-gradient-to-br from-[#FFF700] via-[#FFF] to-[#FFF7E0] relative">
        {/* Animated Background */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#F09A07]/20 to-[#FF6B35]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#FFD700]/20 to-[#F09A07]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl font-heading font-bold text-[#202020] leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Let's Build
              <br />
              <span className="bg-gradient-to-r from-[#F09A07] to-[#FF6B35] bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            <p className={`text-xl text-[#565a67] font-normal max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Ready to transform your data infrastructure? Our team is here to help you harness the full potential of Zerthos technology.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-heading font-semibold text-[#202020]">{info.title}</h3>
                  {info.location && (
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      info.location === "HQ" 
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" 
                        : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    }`}>
                      {info.location}
                    </span>
                  )}
                </div>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#565a67] text-lg mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Form */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#F09A07] to-[#FF6B35] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-[#202020]">Send us a message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none transition-all duration-300 relative z-10 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#F09A07]'
                      }`}
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || form.name 
                        ? 'top-1 text-sm text-[#F09A07]' 
                        : 'top-5 text-lg text-gray-500'
                    }`}>
                      Your Name *
                    </label>
                    {errors.name && (
                      <div className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none transition-all duration-300 relative z-10 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#F09A07]'
                      }`}
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || form.email 
                        ? 'top-1 text-sm text-[#F09A07]' 
                        : 'top-5 text-lg text-gray-500'
                    }`}>
                      Your Email *
                    </label>
                    {errors.email && (
                      <div className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      name="company"
                      type="text"
                      placeholder="Enter your company name"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField("")}
                      className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#F09A07] focus:outline-none transition-all duration-300 relative z-10"
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "company" || form.company 
                        ? 'top-1 text-sm text-[#F09A07]' 
                        : 'top-5 text-lg text-gray-500'
                    }`}>
                      Company (Optional)
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none transition-all duration-300 bg-transparent resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#F09A07]'
                      }`}
                    />
                    {errors.message && (
                      <div className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium flex items-center gap-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full px-8 py-4 h-auto rounded-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      submitted 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                        : 'bg-gradient-to-r from-[#F09A07] to-[#FF6B35] hover:from-[#E56C15] hover:to-[#EE5522]'
                    }`}
                  >
                    <span className="font-semibold text-white text-lg transition-all duration-300 flex items-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Info & Stats */}
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-heading font-bold text-[#202020] mb-6">Why choose Zerthos?</h3>
                  <p className="text-xl text-[#565a67] leading-relaxed">
                    Join thousands of organizations that trust Zerthos for their critical data infrastructure needs. 
                    Experience unmatched performance, security, and reliability.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#F09A07]/10 to-[#FF6B35]/10 rounded-2xl">
                    <div className="text-3xl font-heading font-bold text-[#F09A07] mb-2">4x</div>
                    <div className="text-[#565a67] font-medium">Faster Transmission</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#FFD700]/10 to-[#F09A07]/10 rounded-2xl">
                    <div className="text-3xl font-heading font-bold text-[#F09A07] mb-2">99.99%</div>
                    <div className="text-[#565a67] font-medium">Uptime Guarantee</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#F09A07]/10 rounded-2xl">
                    <div className="text-3xl font-heading font-bold text-[#F09A07] mb-2">256-bit</div>
                    <div className="text-[#565a67] font-medium">Encryption</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#F09A07]/10 to-[#FFD700]/10 rounded-2xl">
                    <div className="text-3xl font-heading font-bold text-[#F09A07] mb-2">24/7</div>
                    <div className="text-[#565a67] font-medium">Support</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#F09A07] to-[#FF6B35] rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-heading font-bold mb-4">Ready to get started?</h4>
                  <p className="text-lg mb-6 opacity-90">
                    Schedule a personalized demo and see how Zerthos can transform your data infrastructure.
                  </p>
                  <Button 
                    className="bg-white text-[#F09A07] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:demo@zerthos.com?subject=Schedule Demo&body=Dear Zerthos Team,%0D%0A%0D%0AI am interested in scheduling a demo of Zerthos technology.%0D%0A%0D%0ACompany: [Your Company]%0D%0AUse Case: [Brief description of your needs]%0D%0APreferred Date/Time: [Your preferred demo time]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]">
                      Schedule Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-[#202020] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-[#565a67] max-w-2xl mx-auto">
              Everything you need to know about Zerthos technology and how it can benefit your organization.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-heading font-semibold text-[#202020] mb-4">{faq.question}</h3>
                <p className="text-lg text-[#565a67] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}; 