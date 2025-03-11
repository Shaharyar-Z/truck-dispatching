import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative w-full h-screen">
      {/* Slider Images with smooth transition */}
      <motion.div
        key={currentImageIndex}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Banner Image"
          className="w-full h-full object-cover brightness-80"
        />
      </motion.div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center"
        >
          <h1 className="text-5xl font-bold">Reliable Truck Dispatching Services</h1>
          <p className="mt-4 text-lg">
            We optimize logistics for maximum efficiency and customer satisfaction.
          </p>
          <a href="mailto:contact@truckdispatch.com">
            <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </a>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentImageIndex === index ? "bg-blue-600 scale-125" : "bg-white"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-blue-600 p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-blue-600 p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#10095;
      </button>
    </section>
  );
}
