import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          At <span className="font-semibold text-blue-500">[Your Company Name]</span>,
          we are committed to delivering exceptional services and innovative solutions that drive success.
          With a team of dedicated professionals, we aim to empower businesses and create meaningful impacts in the industry.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide unparalleled solutions that empower businesses to achieve their goals and surpass their potential.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To be a global leader in providing cutting-edge solutions and creating a positive impact in the industry.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, innovation, and excellence are at the core of everything we do, ensuring trust and satisfaction for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
