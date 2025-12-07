import React from "react";
import {  Droplets, ShowerHead, Ruler } from "lucide-react";
import ScrollToTopWithButton from "./ScrollToTopWithButton";

const Services: React.FC = () => {
  const services = [
    {
      title: "Shtrimi i Pllakave",
      icon: <Ruler />,
      text: "Punime precize në pllaka qeramike, granit e mermer, për çdo ambient të brendshëm apo të jashtëm.",
    },
    {
      title: "Instalime Ujësjellësi",
      icon: <Droplets />,
      text: "Zgjidhje të plota për instalimin e tubacioneve, rubinetave dhe sistemeve të furnizimit me ujë.",
    },
    {
      title: "Punime Sanitare",
      icon: <ShowerHead />,
      text: "Instalime moderne për banjo, lavamanë dhe kabina dushi – me dizajn të sofistikuar dhe funksionalitet maksimal.",
    },
    // {
    //   title: "Kanalizime & Riparime",
    //   icon: <Wrench />,
    //   text: "Rregullim i prishjeve, ndërrim tubash dhe mirëmbajtje kanalizimi me shërbim të shpejtë dhe profesional.",
    // },
  ];

  return (
    <section
      id="services"
      className="relative py-32 px-10 sm:px-16 lg:px-32 bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,127,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col items-center">
        <ScrollToTopWithButton />

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#f5c47f]">
            Shërbime tona profesionale
          </h2>
          <div className="w-36 h-1.5 bg-[#f5c47f] mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1e293b]/90 to-[#1e293b]/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#f5c47f]/20 hover:border-[#f5c47f]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#f5c47f]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-[#f5c47f] to-[#ffd899] w-24 h-24 flex items-center justify-center rounded-2xl mb-8 shadow-lg group-hover:shadow-xl group-hover:shadow-[#f5c47f]/20 transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: "w-14 h-14 text-[#0f172a]",
                })}
              </div>

              <div className="relative z-10 text-center flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#f5c47f] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light flex-1">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>

      <style>
        {`
          .group:hover .relative:first-child > div {
            animation: glow 1.5s ease-in-out infinite alternate;
          }
          
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px #f5c47f, 0 0 10px #f5c47f;
            }
            100% {
              box-shadow: 0 0 15px #f5c47f, 0 0 25px #f5c47f;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;