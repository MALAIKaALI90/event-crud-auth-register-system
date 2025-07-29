import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Your Vision, <span className="text-blue-600">Our Event</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We plan unforgettable experiences — from corporate conferences to magical weddings. Let’s make your next event seamless and spectacular.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <Link
    to="/events"
    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-center"
  >
    🎉 See Our Events
  </Link>
  <Link
    to="/form"
    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 text-center"
  >
    📅 Book Your Event
  </Link>
</div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="../public/images1.jpeg"
            alt="Event"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
