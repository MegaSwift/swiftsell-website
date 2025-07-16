import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-16 bg-blue-50">
    <div className="container mx-auto px-6">
      <div className="bg-blue-100 rounded-3xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Swiftsell Logo"
                className="w-32 h-8 md:w-40 md:h-8"
              />
            </div>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              The all-in-one platform designed to revolutionize your sales .
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white mb-8"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p
            className="text-gray-800 text-sm font-medium mb-4 lg:mb-0"
            style={{ fontFamily: "Poppins" }}
          >
            <span className="text-gray-600">Need help ? Reach us at </span>
            info@getswiftsell.com
          </p>
          <div className="flex items-center gap-16">
            <Link
              to="/terms-used"
              className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors"
              style={{ fontFamily: "Poppins" }}
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors"
              style={{ fontFamily: "Poppins" }}
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

      <p
        className="text-center text-gray-600 text-sm mt-6"
        style={{ fontFamily: "Poppins" }}
      >
        Swifsell. Copyright ©️ 2025
      </p>
    </div>
  </footer>
);

export default Footer; 