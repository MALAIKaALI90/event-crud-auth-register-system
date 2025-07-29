import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Event Management. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
