import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "transition-colors duration-200 hover:text-[#d4af7f] font-medium text-gray-200";
  const activeClass = "text-[#d4af7f] font-semibold";

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050e24] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4">
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-[#d4af7f] tracking-tight"
        >
          Dini-R <span className="text-gray-200">Qeramikë</span>
        </NavLink>

        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Ballina
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Rreth Nesh
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Shërbimet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Kontakti
            </NavLink>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#050e24] shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium text-gray-200">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Ballina
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Rreth Nesh
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Shërbimet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                Kontakti
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
