import React from "react";
import { NavLink } from "react-router-dom";
import Background from "../assets/bg.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,196,127,0.1),transparent_70%)]"></div>

      <div className="relative z-10 px-6 sm:px-10 text-white max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg opacity-0 animate-slideInLeft">
          <span className="text-[#f5c47f]">Dini-R</span>{" "}
          <span className="text-white font-semibold">Qeramikë</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 mb-10 leading-relaxed font-light opacity-0 animate-slideInRight">
          Ekspertë në shtrimin e pllakave, ofrojmë cilësi dhe saktësi në çdo projekt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeIn delay-500">
          <NavLink
            to="/services"
            className="cursor-pointer bg-[#f5c47f] hover:bg-[#ffd899] text-[#0f172a] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Shiko Shërbimet
          </NavLink>
          <NavLink
            to="/contact"
            className="cursor-pointer bg-transparent border-2 border-[#f5c47f] hover:bg-[#f5c47f] hover:text-[#0f172a] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kontakto Tani
          </NavLink>
        </div>
      </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>
      <div className="absolute bottom-6 flex flex-col items-center text-white opacity-80 animate-bounce">
        <span className="text-sm sm:text-base mb-1 font-light">Rrëshqit poshtë</span>
        <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 1s ease-out 0.3s forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out 0.6s forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
