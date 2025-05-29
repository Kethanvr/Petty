import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="footer-links flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-0">
            <Link
              href="/contact"
              className="text-white hover:underline transition-all duration-200"
            >
              Help
            </Link>
            <Link
              href="/contact"
              className="text-white hover:underline transition-all duration-200"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              className="text-white hover:underline transition-all duration-200"
            >
              About us
            </Link>
            <Link
              href="/work-with-us"
              className="text-white hover:underline transition-all duration-200"
            >
              Work with us
            </Link>
          </div>

          {/* Footer Logo/Copyright */}
          <div className="footer-logo">
            <p className="text-center md:text-right">©Petty 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
