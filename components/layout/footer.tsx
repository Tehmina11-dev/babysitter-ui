import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" font-sans flex ">
      <div className="w-full mx-auto bg-primary rounded-xl2 p-10 md:p-16 relative overflow-hidden justify-evenly">
        
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-10 -mb-10 blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand & Copy Section */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="text-white">
              {/* Heart Icon Placeholder */}
              <svg 
                className="w-12 h-12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Get instant alerts on<br />sitter availability!
              </h2>
              <p className="text-white/90 text-lg max-w-md">
                Never miss your favorite sitters again. Get real-time notifications, 
                book instantly, and manage everything on the go.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3">
            <h3 className="font-heading text-xl font-bold text-white mb-6">Useful Link</h3>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Connections'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white/90 hover:text-white transition-colors text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons Section */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-heading text-xl font-bold text-white mb-2">CTA</h3>
            
            <Link href="/signup-sitter" className="w-full py-3 px-6 bg-white text-primary font-bold rounded-full text-center hover:bg-secondary transition-all shadow-card">
              Sign Up as a Sitter
            </Link>
            
            <Link href="/signup-parent" className="w-full py-3 px-6 bg-white text-primary font-bold rounded-full text-center hover:bg-secondary transition-all shadow-card">
              Sign Up as a Parent
            </Link>
            
            <Link href="/contact" className="w-full py-3 px-6 bg-white text-primary font-bold rounded-full text-center hover:bg-secondary transition-all shadow-card">
              Contact Us
            </Link>
          </div>

        </div>

        {/* Divider line mimicking the image */}
        <div className="mt-12 pt-8 border-t border-white/20" />
      </div>
    </footer>
  );
};

export default Footer;