import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Footer: React.FC = () => {
  const linkClass = "text-gray-300 hover:text-[#f5c47f] transition duration-300";
  const activeClass = "text-[#f5c47f] font-semibold transition duration-300";

  return (
    <footer className="bg-[#050e24] text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-8">
          
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-700 md:pr-8 pb-6 md:pb-0">
            <div>
              <h3 className="text-2xl font-bold text-[#f5c47f] mb-3">Dini-R Qeramikë</h3>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/profili_i_juaj" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaInstagram size={22} className="text-white" />
              </a>
              <a href="https://facebook.com/profili_i_juaj" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaFacebook size={22} className="text-white" />
              </a>
              <a href="https://tiktok.com/profili_i_juaj" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaTiktok size={22} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 md:px-8 pb-6 md:pb-0">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-[#f5c47f] pb-2 inline-block">Lidhje të Shpejta</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Ballina</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>Rreth Nesh</NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : linkClass}>Shërbimet</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : linkClass}>Galeria</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Kontakti</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:pl-8">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-[#f5c47f] pb-2 inline-block">Na Kontaktoni</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#f5c47f] mt-1 mr-3" />
                <p>Rruga e Dëshmorëve, Tirana, Shqipëri</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#f5c47f] mr-3" />
                <a href="tel:+38344123123" className="hover:text-[#f5c47f] transition duration-300">+383 44 123 123</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#f5c47f] mr-3" />
                <a href="mailto:info@pllaka-premium.com" className="hover:text-[#f5c47f] transition duration-300">info@pllaka-premium.com</a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#f5c47f] mr-3" />
                <p>E Hënë - E Shtunë: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pllaka Premium. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
