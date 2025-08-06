import React from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import { SEO } from '../../components/ui/seo';
import { seoConfigs } from '../../lib/seo-configs';

export const LegalTermsPage = () => {
  return (
    <>
      <SEO {...seoConfigs.legalTerms} />
      <div className="min-h-screen bg-white">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202020] mb-6 font-heading leading-tight">
            Terms of Service
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
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of the Zerthos website and services. By accessing or using our services, you agree to be bound by these Terms and all applicable laws and regulations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Use License
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Zerthos's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Zerthos's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Zerthos at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Disclaimer
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The materials on Zerthos's website are provided on an 'as is' basis. Zerthos makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Further, Zerthos does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Limitations
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Zerthos or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zerthos's website, even if Zerthos or a Zerthos authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Accuracy of Materials
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on Zerthos's website could include technical, typographical, or photographic errors. Zerthos does not warrant that any of the materials on its website are accurate, complete, or current. Zerthos may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Links
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zerthos has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zerthos of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Modifications
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Zerthos may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Zerthos and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The TalonX protocol and related technologies are proprietary to Zerthos and may be protected by patents, trademarks, and other intellectual property rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@zerthos.com" className="text-[#F09A07] hover:underline">
                    legal@zerthos.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}; 