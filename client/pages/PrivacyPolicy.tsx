import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PRIMARY_BLUE = "#0053B4";

const PrivacyPolicy = () => (
  <>
    <Navigation />
    <div className="min-h-screen flex flex-col bg-blue-50">
      <main className="flex-1 container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: PRIMARY_BLUE, fontFamily: 'Poppins' }}>
            Privacy Policy
          </h1>
          <div className="space-y-6 prose max-w-none text-gray-700" style={{ fontFamily: 'Poppins' }}>
            <p className="mb-4 text-gray-700">
              This Privacy Policy describes how SwiftSell ("we," "us," or "our") collects, uses, discloses, and safeguards your personal information when you use the SwiftSell system ("System"). By accessing or using the System, you consent to the practices described in this Privacy Policy.
            </p>
            <ol className="list-decimal pl-6 space-y-6 text-gray-700">
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Information We Collect</strong><br/>
                We may collect personal information such as your name, email address, contact details, business information, and any other information you provide to us when you sign up for an account or use our System.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Use of Information</strong><br/>
                We use the collected information to provide and improve our services, personalize your experience, communicate with you, and comply with legal obligations. We may also use your information for analytics purposes to understand user preferences and trends.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Sharing of Information</strong><br/>
                We may share your information with trusted third-party service providers who assist us in delivering our services, such as hosting providers, payment processors, and customer support services. We do not sell or rent your personal information to third parties.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Data Security</strong><br/>
                We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Data Retention</strong><br/>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws and regulations. We will securely delete or anonymize your information when it is no longer needed.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Cookies and Tracking Technologies</strong><br/>
                We may use cookies and similar tracking technologies to enhance your browsing experience, analyze trends, and gather information about how you use the System. You can manage your cookie preferences through your browser settings.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Third-Party Links</strong><br/>
                The System may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of such third-party websites. We encourage you to review the privacy policies of those websites before providing any personal information.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Updates to the Privacy Policy</strong><br/>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material updates by posting the revised policy on our website or through other communication channels. Please review this Privacy Policy periodically for any changes.
              </li>
              <li>
                <strong style={{ color: PRIMARY_BLUE }}>Contact Us</strong><br/>
                If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:info@getswiftsell.com" className="text-blue-600 underline">info@getswiftsell.com</a>.
              </li>
            </ol>
            <p className="mt-8 text-gray-700">
              By using the SwiftSell System, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the System. Thank you for trusting SwiftSell with your personal information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default PrivacyPolicy; 