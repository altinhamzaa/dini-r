import React from "react";
import "../styles/about.css";
import Logo from "../assets/logo.jpg";
import { IoMdCall } from "react-icons/io";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section bg-white py-20 px-6 md:px-10 lg:px-24 text-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-[#d4af7f]">
            Rreth Nesh
          </h2>

          <div className="w-20 h-1 bg-[#d4af7f] mx-auto lg:mx-0 rounded-full mb-8"></div>

          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg font-light">
            Ne jemi një ekip profesionistësh me përvojë shumëvjeçare në{" "}
            <span className="font-semibold text-[#f5c47f]">
              shtrimin e pllakave qeramike, sanitari  instalime ujësjellësi dhe kanalizime & riparime.
            </span>{" "}
            Çdo punë kryhet me përkushtim për të ofruar dizajn modern dhe cilësi
            afatgjatë.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg font-light">
            Puna jonë karakterizohet nga preciziteti, korrektësia dhe respekti
            ndaj çdo projekti. Ne garantojmë rezultate që rrisin vlerën dhe
            estetikën e çdo ambienti.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center bg-[#d4af7f] hover:bg-[#e6c58c] text-[#0f172a] font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <IoMdCall size={25} className="mr-3" />
            Thirr Tani
          </a>
        </div>

        <div className="flex-1">
          <div className="about-image-wrapper rounded-2xl overflow-hidden shadow-2xl border border-[#d4af7f]/30">
            <img
              src={Logo}
              alt="Punime me pllaka qeramike"
              className="w-full h-80 sm:h-[400px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
