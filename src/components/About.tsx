import React from "react";
import { IoMdCall } from "react-icons/io";
import Logo from "../assets/logo.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 text-[#0f172a] px-6 sm:px-8 md:px-12 lg:px-24 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 mt-10 lg:mt-0">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#d4af7f]">
            Rreth Nesh
          </h2>

          <div className="w-24 h-1 bg-[#d4af7f] mx-auto lg:mx-0 rounded-full shadow-sm mb-6"></div>

          <p className="text-gray-800 leading-relaxed mb-5 text-base sm:text-lg font-light">
            Ne jemi një ekip profesionistësh me përvojë shumëvjeçare në{" "}
            <span className="font-semibold text-[#f5c47f]">
              shtrimin e pllakave qeramike, sanitari, instalime ujësjellësi dhe kanalizime & riparime.
            </span>{" "}
            Çdo punë kryhet me përkushtim për të ofruar dizajn modern dhe cilësi afatgjatë.
          </p>

          <p className="text-gray-800 leading-relaxed mb-8 text-base sm:text-lg font-light">
            Puna jonë karakterizohet nga preciziteti, korrektësia dhe respekti ndaj çdo projekti. Ne garantojmë rezultate që rrisin vlerën dhe estetikën e çdo ambienti.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#d4af7f] hover:bg-[#e6c58c] text-[#0f172a] font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <IoMdCall size={26} />
              Thirr Tani
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden w-[90%] sm:w-[80%] md:w-full max-w-md
                          border-2 border-[#d4af7f]/50 shadow-2xl transform transition-all duration-500 
                          hover:scale-105 hover:shadow-3xl bg-white animate-glow">
            <img
              src={Logo}
              alt="Punime me pllaka qeramike"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 10px #f5c47f, 0 0 20px #f5c47f; }
            50% { box-shadow: 0 0 25px #f5c47f, 0 0 35px #f5c47f; }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default About;
