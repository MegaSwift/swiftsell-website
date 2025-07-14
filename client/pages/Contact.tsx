import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Main Content */}
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-100 px-8 py-8 mb-12">
            {/* Navigation */}
            <Navigation />
          
            <div className="max-w-2xl mx-auto text-center">
              {/* Heading */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight text-center mb-4">
                  <span className="text-[#00234C]">We're Here to</span>
                  <span className="text-[#0053B4]"> Help</span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Have questions, feedback, or need a hand? Let's talk
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800 mb-2 text-left"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="You@company.com"
                      className="w-full px-4 py-3 bg-white border-0 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-800 mb-2 text-left"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message"
                      rows={8}
                      className="w-full px-4 py-3 bg-white border-0 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#0053B4] text-white rounded-2xl font-medium hover:bg-blue-800 transition-colors duration-200 text-sm"
                  >
                    Send
                  </button>
                </div>

                {/* Social Media Section */}
                <div className="mt-8">
                  <div className="h-1 bg-white rounded mb-4"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black">
                      You can also reach us anytime
                    </span>
                    <div className="flex items-center gap-2">
                      {/* Twitter/X */}
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3337 2.66992H14.3783L9.91167 7.75326L15.1663 14.6699H11.0517L7.82967 10.4746L4.14234 14.6699H2.09567L6.87367 9.23326L1.83301 2.66992H6.05167L8.96501 6.50459L12.3337 2.66992ZM11.6163 13.4513H12.7497L5.43567 3.82459H4.21967L11.6163 13.4513Z"
                            fill="#0077F7"
                          />
                        </svg>
                      </div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      {/* Facebook */}
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.49967 2.0293C4.83301 2.0293 1.83301 5.02263 1.83301 8.7093C1.83301 12.0426 4.27301 14.8093 7.45967 15.3093V10.6426H5.76634V8.7093H7.45967V7.23596C7.45967 5.56263 8.45301 4.64263 9.97968 4.64263C10.7063 4.64263 11.4663 4.7693 11.4663 4.7693V6.41596H10.6263C9.79967 6.41596 9.53967 6.9293 9.53967 7.45596V8.7093H11.393L11.093 10.6426H9.53967V15.3093C11.1106 15.0612 12.5411 14.2596 13.573 13.0493C14.6048 11.839 15.1699 10.2997 15.1663 8.7093C15.1663 5.02263 12.1663 2.0293 8.49967 2.0293Z"
                            fill="#0077F7"
                          />
                        </svg>
                      </div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      {/* Instagram */}
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18539 2.00391C9.93539 2.00591 10.3161 2.00991 10.6447 2.01924L10.7741 2.02391C10.9234 2.02924 11.0707 2.03591 11.2487 2.04391C11.9581 2.07724 12.4421 2.18924 12.8667 2.35391C13.3067 2.52324 13.6774 2.75257 14.0481 3.12257C14.3872 3.45573 14.6495 3.85889 14.8167 4.30391C14.9814 4.72857 15.0934 5.21257 15.1267 5.92257C15.1347 6.09991 15.1414 6.24724 15.1467 6.39724L15.1507 6.52657C15.1607 6.85457 15.1647 7.23524 15.1661 7.98524L15.1667 8.48257V9.35591C15.1683 9.84218 15.1632 10.3284 15.1514 10.8146L15.1474 10.9439C15.1421 11.0939 15.1354 11.2412 15.1274 11.4186C15.0941 12.1286 14.9807 12.6119 14.8167 13.0372C14.6495 13.4823 14.3872 13.8854 14.0481 14.2186C13.7149 14.5577 13.3117 14.82 12.8667 14.9872C12.4421 15.1519 11.9581 15.2639 11.2487 15.2972L10.7741 15.3172L10.6447 15.3212C10.3161 15.3306 9.93539 15.3352 9.18539 15.3366L8.68805 15.3372H7.81539C7.32889 15.339 6.8424 15.3338 6.35605 15.3219L6.22672 15.3179C6.06846 15.3119 5.91024 15.305 5.75205 15.2972C5.04272 15.2639 4.55872 15.1519 4.13339 14.9872C3.68861 14.8199 3.28568 14.5576 2.95272 14.2186C2.61335 13.8855 2.35079 13.4823 2.18339 13.0372C2.01872 12.6126 1.90672 12.1286 1.87339 11.4186L1.85339 10.9439L1.85005 10.8146C1.83776 10.3285 1.83221 9.84218 1.83339 9.35591V7.98524C1.83154 7.49897 1.83643 7.0127 1.84805 6.52657L1.85272 6.39724C1.85805 6.24724 1.86472 6.09991 1.87272 5.92257C1.90605 5.21257 2.01805 4.72924 2.18272 4.30391C2.35052 3.85871 2.61354 3.45553 2.95339 3.12257C3.28616 2.78361 3.68885 2.52129 4.13339 2.35391C4.55872 2.18924 5.04205 2.07724 5.75205 2.04391C5.92939 2.03591 6.07739 2.02924 6.22672 2.02391L6.35605 2.01991C6.84218 2.00806 7.32845 2.00295 7.81472 2.00457L9.18539 2.00391ZM8.50005 5.33724C7.616 5.33724 6.76815 5.68843 6.14303 6.31355C5.51791 6.93867 5.16672 7.78652 5.16672 8.67057C5.16672 9.55463 5.51791 10.4025 6.14303 11.0276C6.76815 11.6527 7.616 12.0039 8.50005 12.0039C9.38411 12.0039 10.232 11.6527 10.8571 11.0276C11.4822 10.4025 11.8334 9.55463 11.8334 8.67057C11.8334 7.78652 11.4822 6.93867 10.8571 6.31355C10.232 5.68843 9.38411 5.33724 8.50005 5.33724ZM8.50005 6.67057C8.7627 6.67053 9.02278 6.72222 9.26545 6.82269C9.50811 6.92316 9.72862 7.07044 9.91436 7.25612C10.1001 7.44181 10.2475 7.66226 10.348 7.9049C10.4486 8.14753 10.5003 8.4076 10.5004 8.67024C10.5004 8.93288 10.4487 9.19296 10.3483 9.43563C10.2478 9.6783 10.1005 9.8988 9.91484 10.0846C9.72915 10.2703 9.5087 10.4177 9.26606 10.5182C9.02343 10.6188 8.76336 10.6705 8.50072 10.6706C7.97029 10.6706 7.46158 10.4599 7.08651 10.0848C6.71143 9.70971 6.50072 9.20101 6.50072 8.67057C6.50072 8.14014 6.71143 7.63143 7.08651 7.25636C7.46158 6.88129 7.97029 6.67057 8.50072 6.67057M12.0007 4.33724C11.7797 4.33724 11.5677 4.42504 11.4115 4.58132C11.2552 4.7376 11.1674 4.94956 11.1674 5.17057C11.1674 5.39159 11.2552 5.60355 11.4115 5.75983C11.5677 5.91611 11.7797 6.00391 12.0007 6.00391C12.2217 6.00391 12.4337 5.91611 12.59 5.75983C12.7463 5.60355 12.8341 5.39159 12.8341 5.17057C12.8341 4.94956 12.7463 4.7376 12.59 4.58132C12.4337 4.42504 12.2217 4.33724 12.0007 4.33724Z"
                            fill="#0077F7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

       {/* Footer */}
       <Footer />
    </div>
  );
};

export default Contact;
