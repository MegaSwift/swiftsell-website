import { ArrowRight, Headphones, Star, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import dashboardImg from "../assets/dashboard.png";
import dashboard2Img from "../assets/dashboard_2.png";
import dashboard3Img from "../assets/dashboard_3.png";
import orderSupllierImg from "../assets/order_supplier_image.png";
import realTimeImg from "../assets/real_time_tracking_image.png";
import posImg from "../assets/pos_image.png";
import signUpImg from "../assets/sign_up_image.png";
import Footer from "../components/Footer";
import CallToActionSection from "../components/CallToActionSection";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >

      {/* Hero Section Container */}
      <div className="relative mx-4 lg:mx-8 mb-16">
        {/* Hero Section */}
        <section
          className="relative border rounded-[32px] w-full max-w-[1222px] mx-auto px-10 py-[40px]"
          style={{
            background: "#F3F8FF",
            borderColor: "#E6F1FE",
          }}
        >

          {/* Navigation */}
          <Navigation />

          {/* Hero Content */}
          <div className="max-w-[1138px] mx-auto flex flex-col items-center gap-4">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-4 mb-[52px]">
              <h1
                className="text-center italic font-medium leading-[114%] text-[62px]"
                style={{
                  letterSpacing: "-3.72px",
                }}
              >
                <span style={{ color: "rgba(8,8,8,1)" }}>
                  Take Control of
                  <br />
                  Your
                </span>
                <span style={{ color: "rgba(0,83,180,1)" }}> Inventory</span>
              </h1>

              <p
                className="text-center text-base leading-[150%] w-[374px]"
                style={{ color: "rgba(112,114,117,1)" }}
              >
                Swiftsell helps retailers and sellers manage stock and orders
                efficiently.
              </p>

              <div className="flex flex-col items-center gap-2">
                <button
                  className="flex items-center justify-center gap-2 w-[194px] px-8 py-4 rounded-2xl font-medium text-base leading-[21px]"
                  style={{ backgroundColor: "#0053B4", color: "#FFF" }}
                >
                  Try for free
                  <ArrowRight size={16} />
                </button>

                <div
                  className="flex items-center gap-2 text-xs leading-[27px]"
                  style={{ color: "rgba(178,178,178,1)" }}
                >
                  <Headphones size={16} style={{ color: "#828282" }} />
                  <span>24/7 Customer support</span>
                </div>
              </div>
            </div>

            {/* Dashboard Images with improved positioning */}
            <div className="relative w-full flex items-center justify-center pointer-events-none select-none">
              {/* Left faded blur overlay */}
              <div
                className="absolute left-0 bottom-0 w-[180px] h-[220px] bg-white opacity-70 rounded-full"
                style={{ filter: 'blur(64px)', zIndex: 2 }}
              />
              {/* Left (background) image */}
              <img
                src={dashboard3Img}
                alt="Dashboard image 1"
                className="hidden md:block absolute left-0 bottom-0 w-[200px] h-[350px]"
              />
              {/* Center (main) image */}
              <img
                src={dashboardImg}
                alt="Dashboard image 3"
                className="relative w-[750px] h-[370px] ml-8 mr-36"
              />
              {/* Right (background) image */}
              <img
                src={dashboard2Img}
                alt="Dashboard image 2"
                className="hidden md:block absolute right-0 bottom-0 w-[300px] h-[350px]"
              />
              {/* Right faded blur overlay */}
              <div
                className="absolute right-0 bottom-0 w-[180px] h-[220px] bg-white opacity-70 rounded-full"
                style={{ filter: 'blur(64px)', zIndex: 2 }}
              />
            </div>

            {/* Blur overlays */}
            <div
              className="absolute"
              style={{
                width: "747px",
                height: "209px",
                background: "rgba(255, 255, 255, 0.15)",
                opacity: 0.56,
                filter: "blur(25.738492965698242px)",
                backdropFilter: "blur(6.4346232414245605px)",
                left: "-686px",
                top: "538px",
              }}
            />

            <div
              className="absolute"
              style={{
                width: "1302px",
                height: "215px",
                background: "rgba(255, 255, 255, 0.15)",
                filter: "blur(26.493980407714844px)",
                opacity: 0.56,
                backdropFilter: "blur(6.623495101928711px)",
                left: "-62px",
                top: "697px",
              }}
            />
          </div>
        </section>
      </div>
          
          

      {/* Built for Modern Businesses Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-5xl font-medium italic tracking-tight mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              <span className="text-gray-900">Built for Modern </span>
              <span className="text-blue-600">Businesses</span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins" }}
            >
              Perfect for retailers, wholesalers, and online sellers who want
              simple, reliable inventory management.
            </p>
          </div>

          {/* Business Images Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/70 to-white/0 pointer-events-none z-10" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7ee365adeeffafd59aeeeec2c86444d6b83841d?width=300"
                alt="Business owner"
                className="w-full h-40 lg:h-48 object-cover relative z-0"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e94c54de5b9a2b14e73a6fc322a46b77dbf206?width=300"
                alt="Warehouse worker"
                className="w-full h-40 lg:h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a523214d56cca3aee8b7055292c97139d0315a15?width=300"
                alt="Store manager"
                className="w-full h-40 lg:h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/70 to-white/0 pointer-events-none z-10" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9041105b0f6df267c46315b884f2f360f72a5db?width=300"
                alt="Business professional"
                className="w-full h-40 lg:h-48 object-cover relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Swiftsell Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-5xl font-medium italic tracking-tight mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              <span className="text-gray-900">Why </span>
              <span className="text-blue-600">Choose</span>
              <span className="text-gray-900"> Swiftsell?</span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins" }}
            >
              Everything you need to keep products in stock, orders fulfilled,
              and customers happy
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Order & Supplier Management */}
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-b from-blue-50 to-blue-100/30 border border-blue-100 rounded-lg p-6 relative overflow-hidden">
              {/* Item 1 */}
              <div className="flex items-start gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-blue-500 fill-current" />
                </div>
                <div>
                  <h3
                    className="text-blue-900 font-semibold text-lg mb-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Order & supplier management
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Track orders and suppliers in one simple place.
                  </p>
                </div>
              </div>
              {/* Item 2 - moved image below title/description */}
              <img
                src={orderSupllierImg}
                alt="Order management interface"
                className="w-full h-full opacity-80 mx-auto block relative z-10"
              />
            </div>

            {/* Real-time Stock Tracking */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100/30 border border-blue-100 rounded-lg p-6 relative overflow-hidden">
              <div className="flex items-start gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-600 fill-current" />
                </div>
                <div>
                  <h3
                    className="text-blue-900 font-semibold text-lg mb-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Real-time stock tracking
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Always know what's in stock, everywhere
                  </p>
                </div>
              </div>
              <img
                src={realTimeImg}
                alt="Stock tracking interface"
                className="absolute w-full h-full opacity-80"
              />
            </div>

            {/* POS Integration */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100/30 border border-blue-100 rounded-lg p-6 relative overflow-hidden flex flex-col">
              <div className="flex items-start gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-600 fill-current" />
                </div>
                <div>
                  <h3
                    className="text-blue-900 font-semibold text-lg mb-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    POS integration
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Connect your sales directly to your inventory
                  </p>
                </div>
              </div>
              <div className="w-full relative">
                <img
                  src={posImg}
                  alt="POS integration interface"
                  className="w-full h-auto object-cover opacity-80"
                  style={{ minHeight: "200px", maxHeight: "350px" }}
                />
              </div>
            </div>

            {/* Easy Setup */}
            <div className="col-span-1 lg:col-span-2 bg-gradient-to-b from-blue-50 to-blue-100/30 border border-blue-100 rounded-lg p-6 relative overflow-hidden">
              <div className="flex items-start gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-green-600 fill-current" />
                </div>
                <div>
                  <h3
                    className="text-blue-900 font-semibold text-lg mb-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Easy to set up and use
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Poppins" }}
                  >
                    No training needed — get started in minutes
                  </p>
                </div>
              </div>
              <img
                src={signUpImg}
                alt="Easy setup interface"
                className="absolute w-full h-full opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
