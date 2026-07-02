import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-sans">
      <div className="w-full bg-primary rounded-t-2xl px-8 md:px-16 py-14 md:py-20 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-24 -translate-y-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full -translate-x-20 translate-y-16 blur-2xl" />

        <div className="relative z-10 flex flex-col gap-10">
          {/* Heart Icon and Horizontal Line Row */}
          <div className="flex items-center gap-4">
            <svg
              className="w-10 h-10 text-white flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <div className="flex-1 border-t border-white/30" />
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Section */}
            <div className="md:col-span-6 flex flex-col gap-5">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                Get instant alerts on <br />
                sitter availability!
              </h2>
              <p className="text-white/90 text-base md:text-lg max-w-md">
                Never miss your favorite sitters again. Get real-time
                notifications, book instantly, and manage everything on the go.
              </p>
            </div>

            {/* Useful Links */}
            <div className="md:col-span-3 md:pl-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Useful Link
              </h3>
              <ul className="flex flex-col gap-4">
                {["Home", "About Us", "Connections"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/90 hover:text-white transition text-base"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="md:col-span-3 flex flex-col gap-4 md:items-start">
              <h3 className="font-heading text-lg font-semibold text-white mb-4">
                CTA
              </h3>

              <Link
                href="/signup-sitter"
                className="w-56 py-3 bg-white text-primary font-semibold rounded-full text-center hover:bg-gray-100 transition shadow-md"
              >
                Sign Up as a Sitter
              </Link>

              <Link
                href="/signup-parent"
                className="w-56 py-3 bg-white text-primary font-semibold rounded-full text-center hover:bg-gray-100 transition shadow-md"
              >
                Sign Up as a Parent
              </Link>

              <Link
                href="/contact"
                className="w-56 py-3 bg-white text-primary font-semibold rounded-full text-center hover:bg-gray-100 transition shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;