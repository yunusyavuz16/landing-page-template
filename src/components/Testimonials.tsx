import React from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovators",
    feedback:
      "The team at [Your Company Name] exceeded our expectations. Their solutions are innovative and their support is top-notch.",
    image: "/assets/testimonial1.jpg", // Replace with an actual image URL
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, Creative Co.",
    feedback:
      "Working with [Your Company Name] was a pleasure. They delivered on time and went above and beyond to meet our needs.",
    image: "/assets/testimonial2.jpg", // Replace with an actual image URL
  },
  {
    name: "Michael Brown",
    position: "Founder, Startup Solutions",
    feedback:
      "Their expertise and professionalism are unmatched. I highly recommend their services to anyone looking for quality and reliability.",
    image: "/assets/testimonial3.jpg", // Replace with an actual image URL
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear from some of our satisfied clients who have experienced our exceptional services.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="mt-4 text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
