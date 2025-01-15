import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i> {/* Replace with your social media icons */}
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="mt-4 text-sm">
          Designed and developed by [Your Name or Team].
        </p>
      </div>
    </footer>
  );
};

export default Footer;
