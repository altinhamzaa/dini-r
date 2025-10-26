import React from "react";
import "../styles/about.css";
import Logo from "../assets/logo.jpg"

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section bg-gray-50 py-16 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Rreth Nesh
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Ne jemi një ekip profesionistësh me përvojë të gjatë në
            <span className="font-semibold text-gray-800"> shtrimin e pllakave qeramike, graniti dhe mermeri</span>.
            Punojmë me përkushtim për të ofruar dizajne moderne dhe punime të
            pastra që i japin çdo ambienti një pamje të sofistikuar.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Me mbi 10 vite eksperiencë në sektorin e ndërtimit dhe dekorimit,
            garantojmë cilësi të lartë, precizitet dhe kënaqësi maksimale për
            klientët tanë. Ne kujdesemi për çdo detaj — nga planifikimi deri në
            përfundimin e projektit.
          </p>

          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Kërko Ofertë Falas
          </a>
        </div>

        <div className="flex-1">
          <div className="about-image-wrapper shadow-xl rounded-2xl overflow-hidden">
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
