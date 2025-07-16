import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PRIMARY_BLUE = "#0053B4";

const TermsUsed = () => (
  <div className="min-h-screen flex flex-col bg-blue-50">
    <Navigation />
    <main className="flex-1 container mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 md:p-12">
        <h1
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: "Poppins", color: PRIMARY_BLUE }}
        >
          Terms and Conditions
        </h1>
        <div className="prose max-w-none text-gray-700" style={{ fontFamily: "Poppins" }}>
          <div className="space-y-6">
            <p className="mb-2"><strong>Last updated: June 2024</strong></p>
            <p>
              These Terms and Conditions ("Terms") govern your relationship with the Swiftsell website and services (the "Service") operated by Swiftsell Technologies ("us", "we", or "our"). Please read these Terms carefully before using our Service. By accessing or using Swiftsell, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              1. Accounts
            </h2>
            <p>
              When you create an account with Swiftsell, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding your password and for any activities or actions under your password. Notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              2. Intellectual Property
            </h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Swiftsell Technologies and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              3. Limitation of Liability
            </h2>
            <p>
              In no event shall Swiftsell Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              4. Disclaimer
            </h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Swiftsell Technologies provides the Service without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. We do not warrant that (a) the Service will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect. These Terms constitute the entire agreement between us regarding our Service.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              6. Availability
            </h2>
            <p>
              Swiftsell is provided over the internet and mobile networks, and the quality and availability of the Service may be affected by factors outside our reasonable control. Swiftsell Technologies does not accept any responsibility for unavailability of the Service or any difficulty or inability to access content due to network issues or other factors beyond our control.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              7. Changes
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 14 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="mt-8 mb-2 text-2xl font-semibold" style={{ color: PRIMARY_BLUE }}>
              8. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:info@getswiftsell.com">info@getswiftsell.com</a>.
            </p>

            <p className="mt-10 text-sm text-gray-500">Copyright © {new Date().getFullYear()} Swiftsell Technologies</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsUsed; 