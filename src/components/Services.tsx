import React from "react";
import { ShowerHead, Ruler } from "lucide-react";
import ScrollToTopWithButton from "./ScrollToTopWithButton";

const Services: React.FC = () => {
  const services = [
    {
      title: "Shtrimi i Pllakave",
      icon: <Ruler />,
      text: "Punime precize në pllaka qeramike, granit e mermer, për çdo ambient të brendshëm apo të jashtëm.",
    },
    {
      title: "Punime Sanitare",
      icon: <ShowerHead />,
      text: "Instalime moderne për banjo, lavamanë dhe kabina dushi – me dizajn të sofistikuar dhe funksionalitet maksimal.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,127,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <ScrollToTopWithButton />

        {/* Header with adjusted spacing */}
        <div className="text-center mb-12 lg:mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-[#f5c47f]">
            Shërbime tona profesionale
          </h2>
          <div className="w-32 h-1.5 bg-[#f5c47f] mx-auto rounded-full"></div>
        </div>

        {/* Two cards layout - optimized for balance */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1e293b]/90 to-[#1e293b]/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 shadow-2xl border border-[#f5c47f]/20 hover:border-[#f5c47f]/40 transition-all duration-300 hover:-translate-y-2 w-full max-w-lg lg:max-w-md xl:max-w-lg flex-1"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#f5c47f]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative flex justify-center mb-8">
                <div className="bg-gradient-to-br from-[#f5c47f] to-[#ffd899] w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-[#f5c47f]/20 transition-all duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-10 h-10 lg:w-12 lg:h-12 text-[#0f172a]",
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#f5c47f] mb-4 lg:mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg lg:text-xl font-light">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: Add a third placeholder if needed for better symmetry */}
        {/* <div className="mt-8 text-center">
          <p className="text-gray-400 italic text-lg">
            Shërbime të tjera sipas nevojave tuaja
          </p>
        </div> */}
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>

      {/* Animation styles */}
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
          
          /* For better two-card layout */
          @media (min-width: 1024px) {
            #services > div > div:last-child {
              display: flex;
              align-items: stretch;
            }
            #services .group {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;