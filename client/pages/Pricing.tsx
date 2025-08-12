import React from "react";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Pricing() {
  type Plan = {
    id: string;
    name: string;
    description?: string;
    priceNgn?: number;
    isContact?: boolean;
    buttonLabel?: string;
    features: string[];
    limitations: string[];
    highlight?: boolean;
  };

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free Plan",
      description: "For individuals getting started with the basics.",
      priceNgn: 0,
      buttonLabel: "Get Started",
      features: [
        "Product/Service Management (up to 100 items)",
        "Dashboard (basic analytics)",
        "Reporting (basic sales reports)",
        "Stock Alerts (basic, in-app only)",
        "Categories",
        "Sales Tracking",
        "Point of Sale (basic, single cashier)",
        "Settings (basic)",
      ],
      limitations: [
        "1 Staff Member",
        "1 Store",
        "No Import/Export Data",
        "No Offline Functionality",
        "No Supplier/Customer Management",
        "No Generate Barcode",
        "No Supplier Alerts",
      ],
    },
    {
      id: "basic",
      name: "Basic Plan",
      description: "Essentials for small teams and growing stores.",
      priceNgn: 4000,
      buttonLabel: "Get Started",
      features: [
        "All Free Plan features",
        "Product/Service Management (up to 200 items)",
        "Supplier Management (basic)",
        "Customer Management (basic)",
        "Employee Management (Staff/Roles/Permissions, up to 2 users)",
        "Store Management (up to 2 stores)",
        "Receipt Customisation",
        "Import/Export Data (CSV only)",
      ],
      limitations: [
        "No Offline Functionality",
        "No Supplier Alerts",
        "Limited to 2 devices",
        "Basic reporting (no advanced analytics)",
      ],
    },
    {
      id: "standard",
      name: "Standard Plan",
      description: "Advanced tools with multi-user and analytics.",
      priceNgn: 7000,
      buttonLabel: "Get Started",
      features: [
        "All Basic Plan features",
        "Product/Service Management (up to 2,000 items)",
        "Generate Barcode",
        "Multi-user Support (up to 3 staff)",
        "Multi-store Options (up to 3 stores)",
        "Reporting (advanced analytics, filters)",
        "Stock Alerts (email notifications)",
        "Supplier Management (advanced)",
        "Customer Management (advanced)",
      ],
      limitations: [
        "Limited Offline Functionality (sync on reconnect)",
        "No Supplier Alerts",
        "Limited to 5 devices",
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Full-featured suite for larger teams and operations.",
      priceNgn: 10000,
      buttonLabel: "Get Started",
      features: [
        "All Standard Plan features",
        "Product/Service Management (unlimited items)",
        "Offline Functionality (full support)",
        "Supplier Alerts (email)",
        "Multi-user Support (up to 10 staff)",
        "Multi-store Options (up to 5 stores)",
        "Multi-platform (full Mobile, Tablet, Web, Desktop support, including Windows)",
        "Advanced Reporting (custom filters, batch details)",
      ],
      limitations: [
        "Limited to 10 devices",
        "No custom integrations",
      ],
      highlight: true,
    },
    {
      id: "enterprise",
      name: "Custom Enterprise Plan",
      description: "Tailored solutions for enterprises with advanced needs.",
      isContact: true,
      buttonLabel: "Contact SwiftSell",
      features: [
        "All Premium Plan features",
        "Unlimited Staff and Stores",
        "Custom Integrations (e.g., ERP, CRM)",
        "Dedicated Support",
        "Custom Reporting and Analytics",
        "Advanced Offline Functionality",
        "Barcode",
        "Priority Supplier Alerts",
      ],
      limitations: [],
    },
  ];

  const CheckIcon = ({ color = "#1D4ED8" }: { color?: string }) => (
    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8162 5.09178C14.0701 5.35846 14.0597 5.78044 13.793 6.0343L6.08929 13.3676C5.95773 13.4929 5.78078 13.559 5.59933 13.5507C5.41788 13.5425 5.24766 13.4606 5.12803 13.3239L2.16506 9.93927C1.92254 9.66224 1.95052 9.24106 2.22755 8.99854C2.50459 8.75602 2.92577 8.784 3.16829 9.06103L5.67342 11.9227L12.8737 5.06856C13.1404 4.8147 13.5624 4.8251 13.8162 5.09178Z"
        fill={color}
      />
    </svg>
  );

  const XIcon = ({ color = "#191D23" }: { color?: string }) => (
    <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none">
      <path
        d="M12.2421 13.1278C12.5024 12.8675 12.5024 12.4454 12.2421 12.185L8.94269 8.88562L12.243 5.58534C12.5033 5.32499 12.5033 4.90288 12.243 4.64253C11.9826 4.38218 11.5605 4.38218 11.3002 4.64253L7.99988 7.94281L4.69959 4.64253C4.43925 4.38218 4.01714 4.38218 3.75679 4.64253C3.49644 4.90288 3.49644 5.32499 3.75679 5.58534L7.05707 8.88562L3.75769 12.185C3.49734 12.4454 3.49734 12.8675 3.75769 13.1278C4.01804 13.3882 4.44015 13.3882 4.7005 13.1278L7.99988 9.82843L11.2993 13.1278C11.5596 13.3882 11.9817 13.3882 12.2421 13.1278Z"
        fill={color}
      />
    </svg>
  );

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

              {/* Pricing Plans */}
              <div className="flex flex-col md:flex-row md:flex-wrap items-stretch justify-center gap-6 w-auto">
                {plans.map((plan) => {
                  const isContact = plan.isContact;
                  const isHighlighted = plan.highlight;
                  return (
                    <div
                      key={plan.id}
                      className={
                        `flex-1 min-w-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] ` +
                        (isHighlighted
                          ? "bg-[#0077F7] shadow-[0px_10px_25px_0px_#CCD9FF]"
                          : "bg-white") +
                        " rounded-xl p-8 sm:p-12 flex flex-col gap-10"
                      }
                    >
                      <div className="flex flex-col gap-5">
                        {/* Header */}
                        <div className="flex flex-col gap-[11px]">
                          <h3 className={(isHighlighted ? "text-white" : "text-[#191D23]") + " font-[Poppins] text-[22px] font-bold"}>
                            {plan.name}
                          </h3>
                          {plan.description && (
                            <p
                              className={
                                (isHighlighted ? "text-[#F7F8F9]" : "text-[#64748B]") +
                                " font-[Poppins] text-base"
                              }
                            >
                              {plan.description}
                            </p>
                          )}
                        </div>

                        {/* Price and Button */}
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-1">
                            {isContact ? (
                              <span className={(isHighlighted ? "text-white" : "text-[#191D23]") + " font-[Poppins] text-[32px] font-semibold"}>
                                Contact for pricing
                              </span>
                            ) : (
                              <>
                                <span className={(isHighlighted ? "text-white" : "text-[#191D23]") + " font-[Poppins] text-[56px] font-semibold"}>
                                  ₦{plan.priceNgn?.toLocaleString()}
                                </span>
                                <span className={(isHighlighted ? "text-[#F7F8F9]" : "text-[#4B5768]") + " font-[Poppins] text-base font-light"}>
                                  / Month
                                </span>
                              </>
                            )}
                          </div>
                          <button
                            className={
                              (isHighlighted ? "bg-[#FBFBFB]" : "bg-[#E6EEF8]") +
                              " flex items-center justify-center gap-2 h-11 px-8 py-4 rounded-lg w-full"
                            }
                          >
                            <span className={(isHighlighted ? "text-[#0053B4]" : "text-[#0053B4]") + " font-[Poppins] text-base font-medium"}>
                              {plan.buttonLabel ?? (isContact ? "Contact SwiftSell" : "Get Started")}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-col gap-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-[17px]">
                            <div className={(isHighlighted ? "bg-white" : "bg-[#E8EDFB]") + " w-8 h-8 rounded-full flex items-center justify-center"}>
                              <CheckIcon color={isHighlighted ? "#173EAD" : "#1D4ED8"} />
                            </div>
                            <span className={(isHighlighted ? "text-white" : "text-[#191D23]") + " flex-1 font-[Poppins] text-base"}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Limitations */}
                      {plan.limitations.length > 0 && (
                        <div className="flex flex-col gap-3">
                          {plan.limitations.map((limitation, index) => (
                            <div key={index} className="flex items-center gap-[17px]">
                              <div className={(isHighlighted ? "bg-white" : "bg-[#F7F8F9]") + " w-8 h-8 rounded-full flex items-center justify-center"}>
                                <XIcon color={isHighlighted ? "#4B5768" : "#191D23"} />
                              </div>
                              <span className={(isHighlighted ? "text-white" : "text-[#A0ABBB]") + " flex-1 font-[Poppins] text-base"}>
                                {limitation}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
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
