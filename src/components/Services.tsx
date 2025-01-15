import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We build tailored software solutions that meet your specific business needs, ensuring efficiency and scalability.",
    icon: "💻",
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud services enable you to transform your infrastructure, optimize costs, and enhance security.",
    icon: "☁️",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with our data-driven digital marketing strategies and innovative campaigns.",
    icon: "📈",
  },
  {
    title: "IT Consulting",
    description:
      "Leverage our expertise to identify opportunities, overcome challenges, and optimize your IT systems.",
    icon: "🧑‍💻",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch and grow your online store with our robust e-commerce development and support services.",
    icon: "🛒",
  },
  {
    title: "Mobile App Development",
    description:
      "Create seamless mobile experiences with our custom app development services for iOS and Android.",
    icon: "📱",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the wide range of services we offer to help your business grow and thrive.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl text-blue-500">{service.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
