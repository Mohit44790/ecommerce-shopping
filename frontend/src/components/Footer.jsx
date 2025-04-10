import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-10 pb-6 animate-fade-in">
      {/* Main Sections */}
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-start px-6 gap-10 text-sm">
        {/* Information */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Account */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Newsletter</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: info@example.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: Delhi, India</li>
            <li>Support Hours: 10am - 6pm</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-8 gap-6 text-2xl flex-wrap">
        <div className="transform hover:rotate-12 hover:scale-110 transition duration-300">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
        </div>
        <div className="transform hover:-rotate-12 hover:scale-110 transition duration-300">
          <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
        </div>
        <div className="transform hover:rotate-12 hover:scale-110 transition duration-300">
          <FontAwesomeIcon icon={faFacebookF} className="text-blue-500" />
        </div>
        <div className="transform hover:-rotate-12 hover:scale-110 transition duration-300">
          <FontAwesomeIcon icon={faTwitter} className="text-cyan-400" />
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-300">
        &copy; {new Date().getFullYear()} All rights reserved by{' '}
        <span className="font-bold">MOHIT</span>
      </p>
    </footer>
  );
};

export default Footer;
