"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Connections", path: "/connections" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-background pt-4 md:pt-10 transition-all">
      {/* Container: Responsive horizontal margins */}
      <nav className="border border-primary/30 rounded-xl mx-4 md:mx-10 lg:mx-28 px-6 py-4 md:py-7 flex justify-between items-center bg-white relative z-50">
        
        {/* Logo */}
        <div className="text-primary text-3xl md:text-5xl">♡</div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-gray font-sans">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-primary transition-colors ${
                  pathname === link.path ? "text-primary font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button (Hidden on Mobile) */}
        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-bold hover:brightness-105 transition-all shadow-card">
          Login / Register
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span> // Close Icon
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-primary"></div>
              <div className="w-6 h-0.5 bg-primary"></div>
              <div className="w-6 h-0.5 bg-primary"></div>
            </div>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-primary/20 rounded-xl p-6 flex flex-col gap-4 shadow-xl md:hidden animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col gap-4 text-gray text-center font-sans">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      pathname === link.path ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white w-full py-3 rounded-full font-bold">
              Login / Register
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}