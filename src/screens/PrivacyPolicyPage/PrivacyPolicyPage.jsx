import React from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202020] mb-6 font-heading leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zerthos ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you consent to the data practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#202020] mb-2">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Company name and job title</li>
                      <li>Information you provide when contacting us or requesting information</li>
                      <li>Resume and application materials when applying for positions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#202020] mb-2">Automatically Collected Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      When you visit our website, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on each page</li>
                      <li>Referring website and search terms</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Providing and maintaining our website and services</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Processing job applications and recruitment activities</li>
                  <li>Analyzing website usage to improve our services</li>
                  <li>Sending you marketing communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We cannot guarantee the absolute security of your information, but we are committed to protecting it to the best of our ability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our{' '}
                  <a href="/cookies-policy" className="text-[#F09A07] hover:underline">
                    Cookies Policy
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-1 text-gray-700">
                  <p>Email: <a href="mailto:privacy@zerthos.com" className="text-[#F09A07] hover:underline">privacy@zerthos.com</a></p>
                  <p>Address: Zerthos, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 