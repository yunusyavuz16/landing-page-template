import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed flex w-full top-0 z-50 bg-background border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <a href="/" className="text-xl font-bold">
          <img src="/vercel.svg" alt="Logo" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#testimonials" className="hover:text-blue-500">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
