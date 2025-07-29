import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Site Title */}
        <h2 className="text-2xl font-semibold">Event Management</h2>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/form" className="hover:text-gray-300">Form</Link>
          <Link to="/events" className="hover:text-gray-300">Events</Link>
          <Link to="/" className="hover:text-gray-300">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
