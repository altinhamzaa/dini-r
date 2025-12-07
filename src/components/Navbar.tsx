import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const linkClass =
    "transition-colors duration-200 hover:text-[#d4af7f] font-medium text-gray-200";
  const activeClass = "text-[#d4af7f] font-semibold";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050e24] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4">
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-[#d4af7f] tracking-tight"
        >
          Bleoni<span className="text-gray-200"> Keramik</span>
        </NavLink>

        <ul className="hidden md:flex space-x-8 items-center">
          {["/", "/about", "/services", "/gallery", "/contact"].map((path, idx) => {
            const name = ["Ballina", "Rreth Nesh", "Shërbimet", "Galeria", "Kontakti"][idx];
            return (
              <li key={path}>
                <NavLink to={path} className={({ isActive }) => isActive ? activeClass : linkClass}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden bg-[#050e24] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium text-gray-200">
          {["/", "/about", "/services", "/gallery", "/contact"].map((path, idx) => {
            const name = ["Ballina", "Rreth Nesh", "Shërbimet", "Galeria", "Kontakti"][idx];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => isActive ? activeClass : linkClass}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
