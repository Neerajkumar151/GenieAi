import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#8c4abb] pt-24 pb-16 px-4 text-white">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl p-10 md:p-16">
          {/* Page Background */}
      <div className="min-h-screen bg-gradient-to-br from-[#f0eaff] via-[#cce0ff] to-[#e0f7ff] pt-28 pb-16 px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-2">
            Privacy Policy for GenieAi
          </h1>
          <p className="text-gray-600 text-lg">Last Updated: August 29, 2025</p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Intro Card */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              Welcome to GenieAi ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this carefully.
            </p>
          </div>

          {/* Policy Sections */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="mb-3">We may collect information about you in a variety of ways:</p>
                  <h3 className="text-xl font-semibold mb-2">a. Personal Data You Provide</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Account Information (name, email, password, profile picture)</li>
                    <li>User Content (prompts, text, documents, images)</li>
                    <li>Payment Information (handled by payment processor)</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-4 mb-2">b. Data Collected Automatically</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Usage Data (features used, pages visited, actions)</li>
                    <li>Log and Device Data (IP, browser, OS, device info, timestamps)</li>
                  </ul>
                </>
              )
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Provide, operate, and maintain our Services</li>
                  <li>Process transactions and manage subscriptions</li>
                  <li>Improve, personalize, and expand Services</li>
                  <li>Communicate with you (support, updates, marketing)</li>
                  <li>Ensure security and enforce terms</li>
                  <li>Comply with legal obligations</li>
                </ul>
              )
            },
            {
              title: "3. How We Share Your Information",
              content: (
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Service Providers (Clerk, OpenAI, hosting)</li>
                  <li>Legal Requirements (subpoena, law enforcement)</li>
                </ul>
              )
            },
            {
              title: "4. Data Security",
              content: <p className="text-gray-700">We implement strong security measures including encryption and access controls. However, no system is 100% secure.</p>
            },
            {
              title: "5. Data Retention",
              content: <p className="text-gray-700">We retain personal info only as long as necessary for the purposes outlined or legal compliance.</p>
            },
            {
              title: "6. Your Rights and Choices",
              content: (
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Access and Update account info</li>
                  <li>Request deletion of account and personal data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              )
            },
            {
              title: "7. Children's Privacy",
              content: <p className="text-gray-700">Our Services are not intended for children under 13. We do not knowingly collect info from children under 13.</p>
            },
            {
              title: "8. Changes to This Privacy Policy",
              content: <p className="text-gray-700">We may update this Privacy Policy. We post updates here and change the "Last Updated" date accordingly.</p>
            },
            {
              title: "9. Contact Us",
              content: <p className="text-gray-700">Email: <a href="mailto:thakurneerajkumar17@gmail.com" className="text-purple-600 hover:underline">thakurneerajkumar17@gmail.com</a></p>
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 md:p-10 hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">{section.title}</h2>
              {section.content}
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-gray-100/80 backdrop-blur-md p-6 rounded-xl text-sm text-gray-600 border border-gray-200 shadow-inner">
            <p><strong>Disclaimer:</strong> This Privacy Policy is a template and does not constitute legal advice. Consult a legal professional to ensure compliance.</p>
          </div>

        </div>
      </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
