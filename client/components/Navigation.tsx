import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fade in/out on scroll
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (mobileMenuOpen) {
    console.log('Mobile menu overlay rendered');
  }

  return (
    <div
      className={`w-full sticky top-4 z-50 px-4 lg:px-8 mb-8 transition-opacity duration-500 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="flex items-center justify-between bg-white rounded-2xl w-full max-w-[1138px] mx-auto h-[73px] px-6"
          style={{
            boxShadow: "0px 4px 47px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center flex-1" style={{ gap: "4px" }}>
            <div className="flex items-end" style={{ gap: "67.666px" }}>
              {/* Logo */}
              <div
                className="flex items-center"
                style={{ gap: "7.478px", width: "190.969px" }}
              >
                <Link to="/">
                  <img 
                    src={logo} 
                    alt="Swiftsell Logo"
                    className="w-32 h-8 md:w-40 md:h-10 cursor-pointer"
                    style={{ minWidth: '120px', minHeight: '30px' }}
                  />
                </Link>
              </div>

              {/* Navigation Links - Hidden on mobile */}
              <div
                className="hidden lg:flex items-center"
                style={{ gap: "32px" }}
              >
                <Link
                  to="/about"
                  style={{
                    color: currentPath === "/about" ? "#0077F7" : "#636363",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: currentPath === "/about" ? "500" : "400",
                    lineHeight: "38.323px",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (currentPath !== "/about") {
                      (e.target as HTMLElement).style.color = "#0077F7";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPath !== "/about") {
                      (e.target as HTMLElement).style.color = "rgba(99,99,99,1)";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "inherit",
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  >
                    About
                  </span>
                </Link>
                <Link
                  to="/pricing"
                  style={{
                    color: currentPath === "/pricing" ? "#0077F7" : "#636363",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: currentPath === "/pricing" ? "500" : "400",
                    lineHeight: "38.323px",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (currentPath !== "/pricing") {
                      (e.target as HTMLElement).style.color = "#0077F7";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPath !== "/pricing") {
                      (e.target as HTMLElement).style.color = "rgba(99,99,99,1)";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "inherit",
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  >
                    Pricing
                  </span>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    color: currentPath === "/contact" ? "#0077F7" : "#636363",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: currentPath === "/contact" ? "500" : "400",
                    lineHeight: "38.323px",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (currentPath !== "/contact") {
                      (e.target as HTMLElement).style.color = "#0077F7";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPath !== "/contact") {
                      (e.target as HTMLElement).style.color = "rgba(99,99,99,1)";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "inherit",
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  >
                    Contact
                  </span>
                </Link>
                <Link
                  to="/faq"
                  style={{
                    color: currentPath === "/faq" ? "#0077F7" : "#636363",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: currentPath === "/faq" ? "500" : "400",
                    lineHeight: "38.323px",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (currentPath !== "/faq") {
                      (e.target as HTMLElement).style.color = "#0077F7";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPath !== "/faq") {
                      (e.target as HTMLElement).style.color = "rgba(99,99,99,1)";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: "inherit",
                      fontSize: "16px",
                      color: "inherit",
                    }}
                  >
                    FAQ
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => { console.log('Hamburger clicked'); setMobileMenuOpen(true); }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" rx="1" fill="#0053B4"/>
              <rect y="11" width="24" height="2" rx="1" fill="#0053B4"/>
              <rect y="18" width="24" height="2" rx="1" fill="#0053B4"/>
            </svg>
          </button>

          {/* Action Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              onClick={() => window.location.href = 'https://app.getswiftsell.com/sign-in'}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1663 8.21322V6.54655C14.1663 5.44148 13.7274 4.38167 12.946 3.60027C12.1646 2.81887 11.1047 2.37988 9.99967 2.37988C8.89461 2.37988 7.8348 2.81887 7.0534 3.60027C6.27199 4.38167 5.83301 5.44148 5.83301 6.54655V8.21322C5.16997 8.21322 4.53408 8.47661 4.06524 8.94545C3.5964 9.41429 3.33301 10.0502 3.33301 10.7132V16.5465C3.33301 17.2096 3.5964 17.8455 4.06524 18.3143C4.53408 18.7832 5.16997 19.0466 5.83301 19.0466H14.1663C14.8294 19.0466 15.4653 18.7832 15.9341 18.3143C16.4029 17.8455 16.6663 17.2096 16.6663 16.5465V10.7132C16.6663 10.0502 16.4029 9.41429 15.9341 8.94545C15.4653 8.47661 14.8294 8.21322 14.1663 8.21322ZM7.49967 6.54655C7.49967 5.88351 7.76307 5.24762 8.23191 4.77878C8.70075 4.30994 9.33663 4.04655 9.99967 4.04655C10.6627 4.04655 11.2986 4.30994 11.7674 4.77878C12.2363 5.24762 12.4997 5.88351 12.4997 6.54655V8.21322H7.49967V6.54655ZM14.9997 16.5465C14.9997 16.7676 14.9119 16.9795 14.7556 17.1358C14.5993 17.2921 14.3874 17.3799 14.1663 17.3799H5.83301C5.61199 17.3799 5.40003 17.2921 5.24375 17.1358C5.08747 16.9795 4.99967 16.7676 4.99967 16.5465V10.7132C4.99967 10.4922 5.08747 10.2802 5.24375 10.124C5.40003 9.96768 5.61199 9.87988 5.83301 9.87988H14.1663C14.3874 9.87988 14.5993 9.96768 14.7556 10.124C14.9119 10.2802 14.9997 10.4922 14.9997 10.7132V16.5465Z"
                  fill="#0053B4"
                />
              </svg>
              <span className="text-sm font-medium">Log In</span>
            </button>
            <button className="px-6 py-2 bg-[#0053B4] text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
              onClick={() => window.location.href = 'https://app.getswiftsell.com/create-account'}>
              <span className="text-sm font-medium">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-64 h-full shadow-lg p-6 flex flex-col gap-8"
            style={{ backgroundColor: 'white' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={logo} alt="Swiftsell Logo" className="w-28 h-8" />
              </Link>
              <button
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18" stroke="#0053B4" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 18L18 6" stroke="#0053B4" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link
                to="/about"
                className="text-lg font-medium"
                style={{ color: currentPath === "/about" ? "#0077F7" : "#636363" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="text-lg font-medium"
                style={{ color: currentPath === "/pricing" ? "#0077F7" : "#636363" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-lg font-medium"
                style={{ color: currentPath === "/contact" ? "#0077F7" : "#636363" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="text-lg font-medium"
                style={{ color: currentPath === "/faq" ? "#0077F7" : "#636363" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-4">
                <button
                  className="flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  onClick={() => window.location.href = 'https://app.getswiftsell.com/sign-in'}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1663 8.21322V6.54655C14.1663 5.44148 13.7274 4.38167 12.946 3.60027C12.1646 2.81887 11.1047 2.37988 9.99967 2.37988C8.89461 2.37988 7.8348 2.81887 7.0534 3.60027C6.27199 4.38167 5.83301 5.44148 5.83301 6.54655V8.21322C5.16997 8.21322 4.53408 8.47661 4.06524 8.94545C3.5964 9.41429 3.33301 10.0502 3.33301 10.7132V16.5465C3.33301 17.2096 3.5964 17.8455 4.06524 18.3143C4.53408 18.7832 5.16997 19.0466 5.83301 19.0466H14.1663C14.8294 19.0466 15.4653 18.7832 15.9341 18.3143C16.4029 17.8455 16.6663 17.2096 16.6663 16.5465V10.7132C16.6663 10.0502 16.4029 9.41429 15.9341 8.94545C15.4653 8.47661 14.8294 8.21322 14.1663 8.21322ZM7.49967 6.54655C7.49967 5.88351 7.76307 5.24762 8.23191 4.77878C8.70075 4.30994 9.33663 4.04655 9.99967 4.04655C10.6627 4.04655 11.2986 4.30994 11.7674 4.77878C12.2363 5.24762 12.4997 5.88351 12.4997 6.54655V8.21322H7.49967V6.54655ZM14.9997 16.5465C14.9997 16.7676 14.9119 16.9795 14.7556 17.1358C14.5993 17.2921 14.3874 17.3799 14.1663 17.3799H5.83301C5.61199 17.3799 5.40003 17.2921 5.24375 17.1358C5.08747 16.9795 4.99967 16.7676 4.99967 16.5465V10.7132C4.99967 10.4922 5.08747 10.2802 5.24375 10.124C5.40003 9.96768 5.61199 9.87988 5.83301 9.87988H14.1663C14.3874 9.87988 14.5993 9.96768 14.7556 10.124C14.9119 10.2802 14.9997 10.4922 14.9997 10.7132V16.5465Z"
                      fill="#0053B4"
                    />
                  </svg>
                  <span className="text-sm font-medium">Log In</span>
                </button>
                <button
                  className="px-6 py-2 bg-[#0053B4] text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                  onClick={() => window.location.href = 'https://app.getswiftsell.com/create-account'}
                >
                  <span className="text-sm font-medium">
                    Get Started
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 