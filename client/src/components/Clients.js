import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";  // Import the swipeable hook
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import "../styles/clients.css";

const Clients = () => {
  const testimonials = [
    {
      image: img,
      quote:
        "I started off with a very vague idea as to what can be done for my son's first birthday and Kavitha f...",
      name: "Vaishnavi Reddy",
      location: "Chennai",
    },
    {
      image: img2,
      quote:
        "I just like just i mean wanted to say a huge thank you for the amazing party decor. It was absolutely stunning and s...",
      name: "Bindhu Shree",
      location: "Chennai",
    },
    {
      image: img2,
      quote:
        "I just wanted to say a huge thank you for the amazing party decor. It was absolutely stunning and s...",
      name: "Bindhu Shree",
      location: "Chennai",
    },
    {
      image: img2,
      quote:
        "I just wanted to say a huge thank you for the amazing party decor. It was absolutely stunning and s...",
      name: "Bindhu Shree",
      location: "Chennai",
    },
    {
      image: img2,
      quote:
        "I just wanted to say a huge thank you for the amazing party decor. It was absolutely stunning and s...",
      name: "Bindhu Shree",
      location: "Chennai",
    },
  ];

  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextTestimonials(),
    onSwipedRight: () => prevTestimonials(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,  // Optional, to enable swipe with a mouse as well
  });

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>

        <div className="testimonials-container">
          <h2>What Our Clients Say</h2>
          <p>
            We take pride in creating the event and space for our client's
            joyful moments. Here's our clients telling why we are the best event
            organisers in the city.
          </p>
          <div {...handlers} className="testimonial-slider"> {/* Add swipe handlers here */}
            <button onClick={prevTestimonials} className="prev-button">
              &#8592;
            </button>
            <div className="testimonials-grid">
              {slides[currentIndex].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <img
                    src={testimonial.image}
                    alt={`Avatar of ${testimonial.name}`}
                    className="testimonial-avatar"
                  />
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              ))}
            </div>
            <button onClick={nextTestimonials} className="next-button">
              &#8594;
            </button>
          </div>
          <div className="dots-container">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
