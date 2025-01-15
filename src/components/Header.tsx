import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed top-4 left-0 z-50 w-full ">
      <div className="container mx-auto px-4 border-b  bg-black bg-opacity-70 backdrop-blur-md border-gray-200 rounded-lg py-4 flex justify-between items-center max-w-7xl">
        <a href="/" className="text-xl font-bold">
          {/* import public folder next.svg */}
          <img src="/vercel.svg" alt="Next.js" className="h-6" />
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
