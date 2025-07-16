import React, { useState } from "react";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing values
  const plans = {
    free: { monthly: 0, yearly: 0 },
    professional: { monthly: 25000, yearly: 250000 }, // Example: 2 months free on yearly
    enterprise: { monthly: 100000, yearly: 1000000 }, // Example: 2 months free on yearly
  };

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-[7px] mt-6 mb-16">
        <div className="max-w-[1272px] mx-auto">
          <div className="relative w-full bg-[#F3F8FF] rounded-[32px] border border-[#E6F1FE] px-4 sm:px-10 py-[40px]">

            {/* Navigation */}
            <Navigation />

            {/* Hero Content */}
            <div className="max-w-[1138px] mx-auto flex flex-col items-center gap-4">
              {/* Header Section */}
              <div className="flex flex-col items-center gap-4 mb-[52px]">
                <h1 className="w-full max-w-xl text-center font-[Poppins] text-[36px] sm:text-[48px] md:text-[62px] font-medium italic leading-[114%] tracking-[-2px] md:tracking-[-3.72px]">
                  <span className="text-[#00234C]">Simple, </span>
                  <span className="text-[#0053B4]">Transparent </span>
                  <span className="text-[#00234C]">Pricing</span>
                </h1>
                <p className="text-center text-[#707275] font-[Poppins] text-base leading-[150%]">
                  Pick a plan that fits your business
                </p>
              </div>

              {/* Pricing Toggle */}
              <div className="w-full max-w-4xl flex flex-col items-center gap-10">
                  {/* Responsive Pricing Toggle */}
                  <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-md h-6 select-none">
                    {/* Pay Monthly label - show on desktop, show if active on mobile */}
                    <span
                      className={`text-[#191D23] font-[Poppins] text-base cursor-pointer transition-all duration-200 ${!isYearly ? "font-bold" : "font-normal"} ${isYearly ? "hidden xs:block" : "block"}`}
                      onClick={() => setIsYearly(false)}
                    >
                      Pay Monthly
                    </span>
                    {/* Toggle */}
                    <div
                      className="relative w-11 h-6 cursor-pointer"
                      onClick={() => setIsYearly((prev) => !prev)}
                    >
                      <div className={`w-11 h-6 rounded-xl transition-colors duration-300 ${isYearly ? 'bg-[#0053B4]' : 'bg-[rgba(4,9,33,0.32)]'}`}></div>
                      <div
                        className={`absolute top-[2px] w-5 h-5 bg-white rounded-xl transition-all duration-300 ${isYearly ? "left-[24px]" : "left-[2px]"}`}
                      ></div>
                    </div>
                    {/* Pay Yearly label - show on desktop, show if active on mobile */}
                    <span
                      className={`text-[#191D23] font-[Poppins] text-base cursor-pointer transition-all duration-200 ${isYearly ? "font-bold" : "font-normal"} ${!isYearly ? "hidden xs:block" : "block"}`}
                      onClick={() => setIsYearly(true)}
                    >
                      Pay Yearly
                    </span>
                  </div>

                {/* Pricing Plans */}
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:h-[800px] w-auto">
                  {/* Freebie Plan */}
                  <div className="flex-1 min-w-0 basis-full sm:basis-1/2 bg-white rounded-xl p-8 sm:p-12 flex flex-col gap-10 h-full">
                    <div className="flex flex-col gap-5">
                      {/* Header */}
                      <div className="flex flex-col gap-[11px]">
                        <h3 className="text-[#191D23] font-[Poppins] text-[22px] font-bold">
                          Freebie
                        </h3>
                        <p className="text-[#64748B] font-[Poppins] text-base">
                          Ideal for individuals who need quick access to basic
                          features.
                        </p>
                      </div>

                      {/* Price and Button */}
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1">
                          <span className="text-[#191D23] font-[Poppins] text-[56px] font-semibold">
                            ₦{isYearly ? plans.free.yearly : plans.free.monthly}
                          </span>
                          <span className="text-[#4B5768] font-[Poppins] text-base font-light">
                            / {isYearly ? "Year" : "Month"}
                          </span>
                        </div>
                        <button className="flex items-center justify-center gap-2 h-11 px-8 py-4 bg-[#E6EEF8] rounded-lg w-full">
                          <span className="text-[#0053B4] font-[Poppins] text-base font-medium">
                            Get Start Now
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {/* Feature with check */}
                      <div className="flex items-center gap-[17px]">
                        <div className="w-8 h-8 bg-[#E8EDFB] rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.8162 5.09178C14.0701 5.35846 14.0597 5.78044 13.793 6.0343L6.08929 13.3676C5.95773 13.4929 5.78078 13.559 5.59933 13.5507C5.41788 13.5425 5.24766 13.4606 5.12803 13.3239L2.16506 9.93927C1.92254 9.66224 1.95052 9.24106 2.22755 8.99854C2.50459 8.75602 2.92577 8.784 3.16829 9.06103L5.67342 11.9227L12.8737 5.06856C13.1404 4.8147 13.5624 4.8251 13.8162 5.09178Z"
                              fill="#1D4ED8"
                            />
                          </svg>
                        </div>
                        <span className="flex-1 text-[#191D23] font-[Poppins] text-base">
                          20,000+ of PNG & SVG graphics
                        </span>
                      </div>

                      <div className="flex items-center gap-[17px]">
                        <div className="w-8 h-8 bg-[#E8EDFB] rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.8162 5.09178C14.0701 5.35846 14.0597 5.78044 13.793 6.0343L6.08929 13.3676C5.95773 13.4929 5.78078 13.559 5.59933 13.5507C5.41788 13.5425 5.24766 13.4606 5.12803 13.3239L2.16506 9.93927C1.92254 9.66224 1.95052 9.24106 2.22755 8.99854C2.50459 8.75602 2.92577 8.784 3.16829 9.06103L5.67342 11.9227L12.8737 5.06856C13.1404 4.8147 13.5624 4.8251 13.8162 5.09178Z"
                              fill="#1D4ED8"
                            />
                          </svg>
                        </div>
                        <span className="flex-1 text-[#191D23] font-[Poppins] text-base">
                          Access to 100 million stock images
                        </span>
                      </div>

                      {/* Features with X */}
                      {[
                        "Upload custom icons and fonts",
                        "Unlimited Sharing",
                        "Upload graphics & video in up to 4k",
                        "Unlimited Projects",
                        "Instant Access to our design system",
                        "Create teams to collaborate on designs",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[17px]"
                        >
                          <div className="w-8 h-8 bg-[#F7F8F9] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <path
                                d="M12.2421 13.1278C12.5024 12.8675 12.5024 12.4454 12.2421 12.185L8.94269 8.88562L12.243 5.58534C12.5033 5.32499 12.5033 4.90288 12.243 4.64253C11.9826 4.38218 11.5605 4.38218 11.3002 4.64253L7.99988 7.94281L4.69959 4.64253C4.43925 4.38218 4.01714 4.38218 3.75679 4.64253C3.49644 4.90288 3.49644 5.32499 3.75679 5.58534L7.05707 8.88562L3.75769 12.185C3.49734 12.4454 3.49734 12.8675 3.75769 13.1278C4.01804 13.3882 4.44015 13.3882 4.7005 13.1278L7.99988 9.82843L11.2993 13.1278C11.5596 13.3882 11.9817 13.3882 12.2421 13.1278Z"
                                fill="#191D23"
                              />
                            </svg>
                          </div>
                          <span className="flex-1 text-[#A0ABBB] font-[Poppins] text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Plan */}
                  <div className="flex-1 min-w-0 basis-full sm:basis-1/2 bg-[#0077F7] rounded-xl shadow-[0px_10px_25px_0px_#CCD9FF] p-8 sm:p-12 flex flex-col gap-10 h-full">
                    <div className="flex flex-col gap-5">
                      {/* Header */}
                      <div className="flex flex-col gap-[11px]">
                        <h3 className="text-white font-[Poppins] text-[22px] font-bold">
                          Professional
                        </h3>
                        <p className="text-[#F7F8F9] font-[Poppins] text-base h-11 overflow-hidden">
                          Ideal for individuals who who need advanced features
                          and tools for client work.
                        </p>
                      </div>

                      {/* Price and Button */}
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1">
                          <span className="text-white font-[Poppins] text-[56px] font-semibold">
                            ₦{isYearly ? plans.professional.yearly.toLocaleString() : plans.professional.monthly.toLocaleString()}
                          </span>
                          <span className="text-[#F7F8F9] font-[Poppins] text-base font-light">
                            / {isYearly ? "Year" : "Month"}
                          </span>
                        </div>
                        <button className="flex items-center justify-center gap-2 h-11 px-8 py-4 bg-[#FBFBFB] rounded-lg w-full">
                          <span className="text-[#0053B4] font-[Poppins] text-base font-medium">
                            Get Start Now
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {/* All features with check */}
                      {[
                        "20,000+ of PNG & SVG graphics",
                        "Access to 100 million stock images",
                        "Upload custom icons and fonts",
                        "Unlimited Sharing",
                        "Upload graphics & video in up to 4k",
                        "Unlimited Projects",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[17px]"
                        >
                          <div className="w-8 h-8 bg-[#E8EDFB] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.4832 5.09178C14.7371 5.35846 14.7267 5.78044 14.46 6.0343L6.75628 13.3676C6.62473 13.4929 6.44777 13.559 6.26632 13.5507C6.08488 13.5425 5.91466 13.4606 5.79502 13.3239L2.83205 9.93927C2.58953 9.66224 2.61751 9.24106 2.89455 8.99854C3.17158 8.75602 3.59276 8.784 3.83528 9.06103L6.34042 11.9227L13.5407 5.06856C13.8074 4.8147 14.2293 4.8251 14.4832 5.09178Z"
                                fill="#173EAD"
                              />
                            </svg>
                          </div>
                          <span className="flex-1 text-white font-[Poppins] text-base">
                            {feature}
                          </span>
                        </div>
                      ))}

                      {/* Features with X */}
                      {[
                        "Instant Access to our design system",
                        "Create teams to collaborate on designs",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[17px]"
                        >
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <path
                                d="M12.9091 13.1278C13.1694 12.8675 13.1694 12.4454 12.9091 12.185L9.60968 8.88562L12.91 5.58534C13.1703 5.32499 13.1703 4.90288 12.91 4.64253C12.6496 4.38218 12.2275 4.38218 11.9672 4.64253L8.66687 7.94281L5.36659 4.64253C5.10624 4.38218 4.68413 4.38218 4.42378 4.64253C4.16343 4.90288 4.16343 5.32499 4.42378 5.58534L7.72406 8.88562L4.42468 12.185C4.16433 12.4454 4.16433 12.8675 4.42468 13.1278C4.68503 13.3882 5.10714 13.3882 5.36749 13.1278L8.66687 9.82843L11.9663 13.1278C12.2266 13.3882 12.6487 13.3882 12.9091 13.1278Z"
                                fill="#4B5768"
                              />
                            </svg>
                          </div>
                          <span className="flex-1 text-white font-[Poppins] text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="flex-1 min-w-0 basis-full sm:basis-1/2  bg-white rounded-xl p-8 sm:p-12 flex flex-col gap-10 h-full">
                    <div className="flex flex-col gap-5">
                      {/* Header */}
                      <div className="flex flex-col gap-[11px]">
                        <h3 className="text-[#191D23] font-[Poppins] text-[22px] font-bold">
                          Enterprise
                        </h3>
                        <p className="text-[#64748B] font-[Poppins] text-base h-11 overflow-hidden">
                          Ideal for businesses who need personalized services
                          and security for large teams.{" "}
                        </p>
                      </div>

                      {/* Price and Button */}
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1">
                          <span className="text-[#191D23] font-[Poppins] text-[56px] font-semibold">
                            ₦{isYearly ? plans.enterprise.yearly.toLocaleString() : plans.enterprise.monthly.toLocaleString()}
                          </span>
                          <span className="text-[#4B5768] font-[Poppins] text-base font-light">
                            / {isYearly ? "Year" : "Month"}
                          </span>
                        </div>
                        <button className="flex items-center justify-center gap-2 h-11 px-8 py-4 bg-[#E6F1FE] rounded-lg w-full">
                          <span className="text-[#0053B4] font-[Poppins] text-base font-medium">
                            Get Start Now
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {/* All features with check */}
                      {[
                        "20,000+ of PNG & SVG graphics",
                        "Access to 100 million stock images",
                        "Upload custom icons and fonts",
                        "Unlimited Sharing",
                        "Upload graphics & video in up to 4k",
                        "Unlimited Projects",
                        "Instant Access to our design system",
                        "Create teams to collaborate on designs",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[17px]"
                        >
                          <div className="w-8 h-8 bg-[#E8EDFB] rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.1492 5.09178C14.4031 5.35846 14.3927 5.78044 14.126 6.0343L6.4223 13.3676C6.29074 13.4929 6.11378 13.559 5.93234 13.5507C5.75089 13.5425 5.58067 13.4606 5.46103 13.3239L2.49807 9.93927C2.25555 9.66224 2.28353 9.24106 2.56056 8.99854C2.83759 8.75602 3.25878 8.784 3.5013 9.06103L6.00643 11.9227L13.2067 5.06856C13.4734 4.8147 13.8954 4.8251 14.1492 5.09178Z"
                                fill="#1D4ED8"
                              />
                            </svg>
                          </div>
                          <span className="flex-1 text-[#191D23] font-[Manrope] text-base font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
