import React from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';

export const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#202020] mb-6 font-heading leading-tight">
            Cookies Policy
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
                  What Are Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cookies can be "session" cookies (which are deleted when you close your browser) or "persistent" cookies (which remain on your device for a set period or until you delete them).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zerthos uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                  <li><strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website, helping us improve our services and user experience.</li>
                  <li><strong>Functional Cookies:</strong> These cookies remember your preferences and choices to provide enhanced, personalized features.</li>
                  <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#202020] mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#202020] mb-2">Performance Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#202020] mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may use third-party services that place cookies on your device. These services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising networks for targeted advertising</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These third-party cookies are subject to the privacy policies of the respective third-party providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them. You can usually find these settings in the "options" or "preferences" menu of your browser.</li>
                  <li><strong>Cookie Consent:</strong> When you first visit our website, you'll see a cookie banner that allows you to accept or decline non-essential cookies.</li>
                  <li><strong>Third-Party Opt-Outs:</strong> You can opt out of third-party cookies through the respective service providers' opt-out mechanisms.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Updates to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#202020] mb-4 font-heading">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@zerthos.com" className="text-[#F09A07] hover:underline">
                    privacy@zerthos.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 