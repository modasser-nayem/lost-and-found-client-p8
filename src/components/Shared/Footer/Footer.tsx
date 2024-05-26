import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
   return (
      <footer className="bg-primary text-white py-8 pt-16 mt-16">
         <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
               {/* Logo and Description */}
               <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">
                     Lost & Found System
                  </h2>
                  <p className="text-gray-300">
                     A platform to report and reclaim lost items. Helping the
                     community to reunite with their belongings.
                  </p>
               </div>
               {/* Links */}
               <div className="w-full md:flex justify-center md:w-1/3 mb-6 md:mb-0">
                  <div>
                     <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                     <ul className="text-gray-300">
                        <li className="mb-2">
                           <a
                              href="#"
                              className="hover:text-white"
                           >
                              Privacy Policy
                           </a>
                        </li>
                        <li className="mb-2">
                           <a
                              href="#"
                              className="hover:text-white"
                           >
                              Terms of Use
                           </a>
                        </li>
                        <li className="mb-2">
                           <a
                              href="#"
                              className="hover:text-white"
                           >
                              Contact Us
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="hover:text-white"
                           >
                              About Us
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* Social Media Links */}
               <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                     <a
                        href="https://web.facebook.com/alimodassernayem/"
                        className="text-gray-300 hover:text-white"
                     >
                        <FaFacebook size={24} />
                     </a>
                     <a
                        href="https://alimodassernayem.vercel.app/"
                        className="text-gray-300 hover:text-white"
                     >
                        <BsGlobe size={24} />
                     </a>
                     <a
                        href="https://x.com/modasser_nayem"
                        className="text-gray-300 hover:text-white"
                     >
                        <FaTwitter size={24} />
                     </a>
                     <a
                        href="linkedin.com/in/alimodassernayem/"
                        className="text-gray-300 hover:text-white"
                     >
                        <FaLinkedin size={24} />
                     </a>
                  </div>
               </div>
            </div>
            <div className="mt-8 border-t-2 border-gray-400 pt-4 text-center">
               <p className="text-gray-300">
                  &copy; 2024 Lost & Found System. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
