import React, { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import Logo from "../assets/logo.jpg";
import ScrollToTopWithButton from "./ScrollToTopWithButton";

const About: React.FC = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const targets = { years: 7, projects: 315, clients: 400 };
    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setYears(Math.floor(progress * targets.years));
      setProjects(Math.floor(progress * targets.projects));
      setClients(Math.floor(progress * targets.clients));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0f172a] text-white py-27 px-6 sm:px-12 lg:px-24"
    >
      <ScrollToTopWithButton />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,127,0.15),transparent_60%)]"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 flex justify-center">
          <div className="relative w-[90%] sm:w-[70%] md:w-[60%] max-w-md lg:max-w-lg bg-[white] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4af7f]/60 p-4 flex items-center justify-center transition-all duration-700 hover:scale-105">
            <img
              src={Logo}
              alt="Logo Dini R Qeramikë"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 text-[#f5c47f]">
            Kush Jemi Ne
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Me mbi{" "}
            <span className="font-semibold text-[#f5c47f]">{years}+ vite</span>{" "}
            përvojë, ne jemi një ekip profesionistësh që ofron zgjidhje moderne
            dhe të qëndrueshme në{" "}
            <span className="font-semibold text-[#f5c47f]">
              shtrimin e pllakave qeramike, instalime sanitare dhe riparime
              ujësjellësi.
            </span>
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            Qëllimi ynë është të ndërtojmë besim me çdo klient duke ofruar punë
            me cilësi të lartë, korrektësi dhe përkushtim maksimal në çdo
            projekt. Çdo detaj ka rëndësi për ne.
          </p>

          <a
            href="tel:+38349430005"
            className="inline-flex items-center gap-3 bg-[#f5c47f] hover:bg-[#ffd899] text-[#0f172a] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <IoMdCall size={26} />
            Thirr Tani
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { value: years, label: "Vite Eksperiencë" },
          { value: projects, label: "Projekte të Përfunduara" },
          { value: clients, label: "Klientë të Kënaqur" },
        ].map((stat, i) => (
          <div
            key={i}
            className="group bg-linear-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 text-center border border-[#f5c47f]/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-5xl font-bold text-[#f5c47f] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}+
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>
    </section>
  );
};

export default About;
