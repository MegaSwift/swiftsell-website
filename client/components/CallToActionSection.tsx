import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="py-16 lg:py-24 bg-blue-500 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2
          className="text-3xl lg:text-5xl font-medium italic tracking-tight mb-4 text-blue-50"
          style={{ fontFamily: "Poppins" }}
        >
          <span className="text-white">Ready to Get </span>
          <span className="text-blue-100">Started ?</span>
        </h2>
        <p
          className="text-white text-lg mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Poppins" }}
        >
          Join hundreds of businesses managing inventory the easy way
        </p>
        <button
          className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-medium flex items-center gap-2 mx-auto hover:bg-gray-50 transition-colors"
          style={{ fontFamily: "Poppins" }}
          onClick={() => window.location.href = 'https://app.getswiftsell.com'}
        >
          Try for free
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-400/10 rounded-full"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-400/10 rounded-full"></div>
      </div>
    </section>
  );
} 