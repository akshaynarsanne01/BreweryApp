// Footer.js

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul>
              <li className="text-gray-300 hover:text-white">
                <Link to="/"> Home</Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/about"> About</Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-300">Email: akshaynarsanne01@gmail.com</p>
            <p className="text-gray-300">Phone: +91 8177811462</p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow</h3>
            <div className="flex flex-col">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akshaynarsanne/"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-linkedin">LinkedIn</i>
              </a>
              <a
                target="_blank"
                href="https://github.com/akshaynarsanne01"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-Github">Github</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-gray-500 text-center">
          &copy; 2023 Akshay Narsanne. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
