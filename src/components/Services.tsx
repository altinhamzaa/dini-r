import React from "react";
import { Wrench, Droplets, ShowerHead, Ruler } from "lucide-react";
import ScrollToTopWithButton from "./ScrollToTopWithButton";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-32 px-10 sm:px-16 lg:px-32 bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,127,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col items-center">
        <ScrollToTopWithButton />

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#f5c47f]">
            Shërbime tona profesionale
          </h2>
          <div className="w-36 h-1.5 bg-[#f5c47f] mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {[
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
            {
              title: "Kanalizime & Riparime",
              icon: <Wrench />,
              text: "Rregullim i prishjeve, ndërrim tubash dhe mirëmbajtje kanalizimi me shërbim të shpejtë dhe profesional.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b]/80 rounded-3xl p-12 sm:p-14 shadow-2xl border border-[#f5c47f]/20 hover:border-[#ffd899]/40 transition-all duration-300 text-center flex flex-col items-center mt-9"
            >
              <div className="bg-[#f5c47f] w-28 h-28 flex items-center justify-center rounded-2xl mb-10 shadow-md animate-glow hover:scale-110 transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: "w-16 h-16 text-[#0f172a]",
                })}
              </div>
              <h3 className="text-3xl font-semibold text-[#f5c47f] mb-5">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg sm:text-xl font-light">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px #f5c47f, 0 0 10px #f5c47f; }
            50% { box-shadow: 0 0 15px #f5c47f, 0 0 25px #f5c47f; }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
