import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-[7px] mt-6">
        <div className="max-w-[1272px] mx-auto">
          <div className="relative w-full max-w-[1222px] mx-auto h-[650px] sm:h-[616px] bg-[#F3F8FF] rounded-[32px] border border-[#E6F1FE] overflow-hidden">
            {/* Navigation */}
            <Navigation />
            {/* Hero Content */}
            <div className="absolute left-1/2 top-[130px] sm:top-[153px] transform -translate-x-1/2 w-full max-w-[544px] h-auto flex flex-col justify-center items-center gap-4 px-2">
              <h1 className="text-center font-[Poppins] text-[36px] sm:text-[62px] font-medium italic leading-[114%] tracking-[-2px] sm:tracking-[-3.72px]">
                <span className="text-[#00234C]">Our</span>
                <span className="text-[#0053B4]"> Mission</span>
              </h1>
              <p className="w-full max-w-[374px] text-center text-[#707275] font-[Poppins] text-base leading-[150%]">
                Swiftsell was built to help businesses stay in control of their
                stock, orders, and growth — without complicated tools
              </p>
            </div>

            {/* Dashboard Images */}
            {/* Mobile Carousel */}
            <div className="absolute left-0 top-[300px] w-full sm:hidden flex flex-col items-center p-0 m-0">
              {(() => {
                const images = [
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a0863038cb8e3c504cd651bc5daf238e47b774?width=911",
                    alt: "Dashboard 1"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d8b68c11f2a46c485e1ccc8104a605e24105774?width=1038",
                    alt: "Dashboard 2"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36308863afe2c56dc6d6df37408bcdc58bed9655?width=911",
                    alt: "Dashboard 3"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a54023a1e8bec76f317ea5e90818cacf10d5f9a1?width=959",
                    alt: "Dashboard 4"
                  }
                ];
                const [current, setCurrent] = useState(0);
                const [touchStart, setTouchStart] = useState(null);
                const [touchEnd, setTouchEnd] = useState(null);
                const [animating, setAnimating] = useState(false);
                const [direction, setDirection] = useState(null); // 'left' or 'right'

                const prev = () => {
                  setDirection('right');
                  setAnimating(true);
                  setTimeout(() => {
                    setCurrent((current - 1 + images.length) % images.length);
                    setAnimating(false);
                  }, 250);
                };
                const next = () => {
                  setDirection('left');
                  setAnimating(true);
                  setTimeout(() => {
                    setCurrent((current + 1) % images.length);
                    setAnimating(false);
                  }, 250);
                };

                // Swipe handlers
                const minSwipeDistance = 40;
                const onTouchStart = (e) => {
                  setTouchEnd(null);
                  setTouchStart(e.targetTouches[0].clientX);
                };
                const onTouchMove = (e) => {
                  setTouchEnd(e.targetTouches[0].clientX);
                };
                const onTouchEnd = () => {
                  if (!touchStart || touchEnd === null) return;
                  const distance = touchStart - touchEnd;
                  if (distance > minSwipeDistance) {
                    next();
                  } else if (distance < -minSwipeDistance) {
                    prev();
                  }
                };

                return (
                  <div className="w-full flex flex-col items-center">
                    <div
                      className="relative w-full flex justify-center items-center h-[340px] sm:h-[248px] overflow-hidden"
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      <button
                        aria-label="Previous image"
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                      >
                        <span className="sr-only">Previous</span>
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#003268" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                      <img
                        src={images[current].src}
                        alt={images[current].alt}
                        className={`w-full h-[340px] object-cover rounded-none shadow-lg border-0 transition-all duration-300 ease-in-out ${animating ? (direction === 'left' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}`}
                        draggable={false}
                      />
                      <button
                        aria-label="Next image"
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
                      >
                        <span className="sr-only">Next</span>
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#003268" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-full ${idx === current ? 'bg-[#003268]' : 'bg-gray-300'}`}
                          onClick={() => setCurrent(idx)}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
            {/* Desktop Images Row */}
            <div className="absolute left-[-28px] top-[390px] hidden sm:flex items-center gap-5 w-auto h-auto">
              <div className="relative flex justify-center items-center w-[302px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9a0863038cb8e3c504cd651bc5daf238e47b774?width=911"
                  alt="Dashboard 1"
                  className="absolute top-0 w-auto h-[248px] object-cover"
                />
              </div>
              <div className="relative flex justify-center items-center w-[302px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d8b68c11f2a46c485e1ccc8104a605e24105774?width=1038"
                  alt="Dashboard 2"
                  className="absolute top-0 w-auto h-[283px] object-cover"
                />
              </div>
              <div className="relative flex justify-center items-center w-[302px] pb-[5px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36308863afe2c56dc6d6df37408bcdc58bed9655?width=911"
                  alt="Dashboard 3"
                  className="absolute top-0 w-auto h-[248px] object-cover"
                />
              </div>
              <div className="relative flex justify-center items-center w-[302px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54023a1e8bec76f317ea5e90818cacf10d5f9a1?width=959"
                  alt="Dashboard 4"
                  className="absolute top-0 w-auto h-[262px] object-cover"
                />
              </div>
            </div>

              {/* Left Gradient Overlay */}
              <div className="hidden sm:block absolute left-0 top-0 h-full w-[80px] pointer-events-none z-10 bg-gradient-to-r from-white/80 to-transparent"></div>
              {/* Right Gradient Overlay */}
              <div className="hidden sm:block absolute right-0 top-0 h-full w-[80px] pointer-events-none z-10 bg-gradient-to-l from-white/80 to-transparent"></div>

            {/* Blue Banner */}
            <div className="absolute left-0 top-[620px] sm:top-[572px] w-full min-h-[48px] sm:min-h-[44px] bg-[#0077F7] flex items-center px-2 sm:px-4 py-2 sm:py-0">
              <p className="text-[#E6F1FE] font-[Poppins] text-xs sm:text-base leading-[150%] w-full text-center break-words">
                We believe every business deserves simple, reliable inventory management that just works — so you can spend less time tracking stock and more time growing sales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Stand For Section */}
      <div className="px-4 sm:px-6 lg:px-[7px] mt-[42px]">
        <div className="max-w-[1279px] mx-auto flex flex-col items-center gap-8 py-[42px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[584px]">
            <h2 className="text-center font-[Poppins] text-[32px] sm:text-[48px] font-medium italic leading-[44px] sm:leading-[72px] tracking-[-1.5px] sm:tracking-[-2.88px]">
              <span className="text-[#080808]">What We </span>
              <span className="text-[#0077F7]">Stand For</span>
            </h2>
            <p className="text-center text-[#707275] font-[Poppins] text-base leading-[150%]">
              A few principles guide how we build Swiftsell and support our
              customers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Feature 1 */}
            <div className="w-full sm:w-[321.975px] p-6 sm:p-[50px_22px] flex flex-col items-start gap-[10px] rounded-lg border border-[#E6F1FE] bg-gradient-to-b from-[#E6EEF8] to-transparent">
              <div className="flex items-start gap-3 w-full">
                <div className="flex w-8 h-8 p-2 justify-center items-center rounded-full bg-[rgba(244,190,80,0.14)]">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.03995 2.32131C8.42116 2.28717 8.81995 2.32218 9.16685 2.49735C9.98536 2.91051 10.1212 3.88935 10.3997 4.67668C10.979 6.31485 12.1514 6.18199 13.4269 6.80573C13.8778 7.02622 14.2423 7.36654 14.4008 7.85926C14.5142 8.21115 14.5293 8.61994 14.4363 8.97825C14.0311 10.5389 11.9279 10.303 10.949 11.3067C10.2716 12.0014 10.308 12.9777 9.86084 13.7837C9.57739 14.2945 9.1658 14.5161 8.63436 14.6782C6.21286 15.0063 6.74343 12.347 5.53053 11.1737C4.83062 10.4968 3.83742 10.4938 3.03554 10.0194C2.61467 9.77044 2.30352 9.42273 2.18033 8.93536C1.57551 6.54273 4.57422 6.76138 5.67636 5.54834C6.30145 4.86041 6.27928 3.90734 6.73818 3.14268C7.04112 2.63789 7.49657 2.44259 8.03995 2.32131Z"
                      fill="#E89600"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-[#003268] font-[Poppins] text-base font-semibold leading-[130%] tracking-[-0.96px]">
                    Customer-first design
                  </h3>
                  <p className="w-full max-w-[233.975px] text-[#707275] font-[Poppins] text-base leading-[150%]">
                    We create easy-to-use tools that tackle real issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-full sm:w-[321.975px] p-6 sm:p-[50px_22px] flex flex-col items-start gap-[10px] rounded-lg border border-[#E6F1FE] bg-gradient-to-b from-[#E6EEF8] to-transparent">
              <div className="flex items-start gap-3 w-full">
                <div className="flex w-8 h-8 p-2 justify-center items-center rounded-full bg-[rgba(34,158,255,0.10)]">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01456 2.32131C8.39577 2.28717 8.79456 2.32218 9.14146 2.49735C9.95997 2.91051 10.0959 3.88935 10.3743 4.67668C10.9536 6.31485 12.126 6.18199 13.4015 6.80573C13.8524 7.02622 14.2169 7.36654 14.3754 7.85926C14.4888 8.21115 14.5039 8.61994 14.4109 8.97825C14.0057 10.5389 11.9025 10.303 10.9236 11.3067C10.2462 12.0014 10.2826 12.9777 9.83545 13.7837C9.552 14.2945 9.14041 14.5161 8.60897 14.6782C6.18747 15.0063 6.71804 12.347 5.50514 11.1737C4.80523 10.4968 3.81203 10.4938 3.01015 10.0194C2.58928 9.77044 2.27812 9.42273 2.15494 8.93536C1.55012 6.54273 4.54883 6.76138 5.65097 5.54834C6.27606 4.86041 6.25389 3.90734 6.71279 3.14268C7.01573 2.63789 7.47118 2.44259 8.01456 2.32131Z"
                      fill="#229EFF"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-[#003268] font-[Poppins] text-base font-semibold leading-[130%] tracking-[-0.96px]">
                    Reliable, helpful support
                  </h3>
                  <p className="w-full max-w-[233.975px] text-[#707275] font-[Poppins] text-base leading-[150%]">
                    Real people ready to help, whenever you need us
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="w-full sm:w-[321.975px] p-6 sm:p-[50px_22px] flex flex-col items-start gap-[10px] rounded-lg border border-[#E6F1FE] bg-gradient-to-b from-[#E6EEF8] to-transparent">
              <div className="flex items-start gap-3 w-full">
                <div className="flex w-8 h-8 p-2 justify-center items-center rounded-full bg-[rgba(33,150,83,0.10)]">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98917 2.32131C9.37038 2.28717 9.76917 2.32218 10.1161 2.49735C10.9346 2.91051 11.0705 3.88935 11.3489 4.67668C11.9283 6.31485 13.1006 6.18199 14.3761 6.80573C14.827 7.02622 15.1915 7.36654 15.35 7.85926C15.4634 8.21115 15.4785 8.61994 15.3855 8.97825C14.9803 10.5389 12.8771 10.303 11.8982 11.3067C11.2208 12.0014 11.2572 12.9777 10.8101 13.7837C10.5266 14.2945 10.115 14.5161 9.58358 14.6782C7.16208 15.0063 7.69265 12.347 6.47975 11.1737C5.77983 10.4968 4.78663 10.4938 3.98475 10.0194C3.56389 9.77044 3.25273 9.42273 3.12955 8.93536C2.52472 6.54273 5.52344 6.76138 6.62558 5.54834C7.25067 4.86041 7.2285 3.90734 7.6874 3.14268C7.99034 2.63789 8.44579 2.44259 8.98917 2.32131Z"
                      fill="#219653"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-[#003268] font-[Poppins] text-base font-semibold leading-[130%] tracking-[-0.96px]">
                    Easy to set up and use
                  </h3>
                  <p className="w-full max-w-[233.975px] text-[#707275] font-[Poppins] text-base leading-[150%]">
                    No steep learning curve, get up and running in minutes.
                  </p>
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
