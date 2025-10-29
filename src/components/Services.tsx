import React from "react";
import { Wrench, Droplets, ShowerHead, Ruler } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-20 px-6 sm:px-12 lg:px-24 bg-gray-100 text-[#0f172a] flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-6 mb-4 text-[#d4af7f]">
          Shërbime tona profesionale:
        </h2>
        <div className="w-24 h-1 bg-[#d4af7f] mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {[
          { title: "Shtrimi i Pllakave", icon: <Ruler />, text: "Punime precize në pllaka qeramike, granit e mermer, për çdo ambient të brendshëm apo të jashtëm." },
          { title: "Instalime Ujësjellësi", icon: <Droplets />, text: "Zgjidhje të plota për instalimin e tubacioneve, rubinetave dhe sistemeve të furnizimit me ujë." },
          { title: "Punime Sanitare", icon: <ShowerHead />, text: "Instalime moderne për banjo, lavamanë dhe kabina dushi – me dizajn të sofistikuar dhe funksionalitet maksimal." },
          { title: "Kanalizime & Riparime", icon: <Wrench />, text: "Rregullim i prishjeve, ndërrim tubash dhe mirëmbajtje kanalizimi me shërbim të shpejtë dhe profesional." }
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-[#f8fafc] rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-[#d4af7f] text-center"
          >
            <div className="bg-[#d4af7f] w-20 h-20 flex items-center justify-center rounded-xl mx-auto mb-6 shadow-md animate-glow transition-all duration-300 hover:scale-110">
              {React.cloneElement(service.icon, { className: "w-12 h-12 text-[#0f172a]" })}
            </div>
            <h3 className="text-2xl font-semibold text-[#d4af7f] mb-3">
              {service.title}
            </h3>
            <p className="text-gray-800 leading-relaxed text-base sm:text-lg font-light">
              {service.text}
            </p>
          </div>
        ))}
      </div>

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
