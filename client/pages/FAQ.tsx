import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PRIMARY_BLUE = "#0053B4";

const faqs = [
  {
    question: "What is Swiftsell?",
    answer:
      "Swiftsell is a comprehensive business management software designed to streamline operations, enhance productivity, and boost sales for various types of businesses.",
  },
  {
    question: "What features does Swiftsell offer?",
    answer:
      "Swiftsell offers a range of features, including inventory management, point of sale (POS), staff management, customer management, sales reporting, purchase management, and more.",
  },
  {
    question: "Can Swiftsell be customized to fit my business needs?",
    answer:
      "Yes, Swiftsell can be tailored to meet the specific requirements of your business. It offers customizable workflows, category management, and the ability to add services, allowing you to configure the system according to your unique processes.",
  },
  {
    question: "Is Swiftsell suitable for small businesses?",
    answer:
      "Absolutely! Swiftsell is designed to cater to businesses of all sizes, including small businesses. Its user-friendly interface and scalable features make it ideal for startups and growing enterprises.",
  },
  {
    question: "Can I access Swiftsell from multiple devices?",
    answer:
      "Yes, Swiftsell is a cloud-based solution, which means you can access it from any device with an internet connection. It provides the flexibility to manage your business on-the-go.",
  },
  {
    question: "Is Swiftsell available on multiple platforms?",
    answer:
      "Yes, Swiftsell is available across various platforms, including web, desktop, and mobile devices. You can access Swiftsell through a web browser on your computer, install the desktop application for offline use, and download the mobile app from both the App Store (for iOS devices) and Play Store (for Android devices).",
  },
  {
    question: "How do I switch between online and offline mode in Swiftsell?",
    answer:
      "Switching between online and offline mode in Swiftsell is seamless. The software automatically detects your internet connectivity status. When you have a stable internet connection, Swiftsell operates in online mode. If you lose internet connectivity, it will automatically switch to offline mode and continue functioning until the connection is restored.",
  },
  {
    question: "Are there any differences between the web, desktop, and mobile versions of Swiftsell?",
    answer:
      "The core features and functionality of Swiftsell remain consistent across all platforms. However, there may be slight variations in the user interface and layout to accommodate the different screen sizes and device capabilities. Rest assured that regardless of the platform you choose, you'll have access to Swiftsell's powerful tools and features.",
  },
  {
    question: "Is my data secure with Swiftsell?",
    answer:
      "Swiftsell takes data security seriously. It employs industry-standard security measures, including data encryption, secure server infrastructure, and regular backups, to ensure the confidentiality and integrity of your business data.",
  },
  {
    question: "Does Swiftsell provide customer support?",
    answer:
      "Yes, Swiftsell offers customer support to assist you with any queries or technical issues you may encounter. The support team is available to provide guidance and ensure a smooth experience with the software.",
  },
  {
    question: "How can I get started with Swiftsell?",
    answer:
      "Getting started with Swiftsell is easy. You can visit our website and sign up for a trial or contact our sales team to discuss your specific requirements and pricing options.",
  },
  {
    question: "Is there training available for using Swiftsell?",
    answer:
      "Yes, Swiftsell provides training resources, tutorials, and documentation to help you get up to speed with the software. Additionally, the support team is available to assist you in the onboarding process and address any questions you may have.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 md:p-12">
          <h1
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "Poppins", color: PRIMARY_BLUE }}
          >
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="border rounded-lg bg-white">
                <button
                  className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-lg" style={{ color: PRIMARY_BLUE }}>{faq.question}</span>
                  <span className="ml-4 text-blue-600 text-2xl">
                    {openIndex === idx ? "-" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-4 text-gray-700 animate-fadeIn"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 