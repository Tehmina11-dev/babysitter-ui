"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Connections", path: "/connections" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-background pt-10">   {/* 👈 Outer background */}
      <nav className="border border-orange-300 rounded-xl mx-28 px-8 py-7 flex justify-between items-center bg-[#FFFFFF]">

        {/* Logo */}
        <div className="text-orange-400 text-5xl">♡</div>

        {/* Links */}
        <ul className="flex gap-12 text-gray">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-orange-400 text-white px-5 py-2 rounded-full">
          Login / Register
        </button>

      </nav>
    </div>
  );
}
