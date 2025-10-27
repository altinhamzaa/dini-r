import React from "react";
import { Wrench, Droplets, ShowerHead, Ruler } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-20 bg-[#0f172a] font-[Poppins] text-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#d4af7f] mb-6 tracking-tight">
          Shërbimet Tona Profesionale
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Punime precize dhe të garantuara në pllaka qeramike, kanalizime,
          ujësjellës dhe instalime sanitare – me përvojë dhe cilësi që zgjat.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {/* 1️⃣ Shtrimi i Pllakave */}
        <div className="bg-[#1a1f2b] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#d4af7f] text-center">
          <div className="bg-[#d4af7f] w-20 h-20 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-md">
            <Ruler className="w-12 h-12 text-[#0f172a]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#f5c47f] mb-3">
            Shtrimi i Pllakave
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Punime precize në pllaka qeramike, granit e mermer, për çdo ambient
            të brendshëm apo të jashtëm.
          </p>
        </div>

        {/* 2️⃣ Ujësjellës */}
        <div className="bg-[#1a1f2b] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#d4af7f] text-center">
          <div className="bg-[#d4af7f] w-20 h-20 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-md">
            <Droplets className="w-12 h-12 text-[#0f172a]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#f5c47f] mb-3">
            Instalime Ujësjellësi
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Zgjidhje të plota për instalimin e tubacioneve, rubinetave dhe
            sistemeve të furnizimit me ujë.
          </p>
        </div>

        {/* 3️⃣ Sanitari */}
        <div className="bg-[#1a1f2b] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#d4af7f] text-center">
          <div className="bg-[#d4af7f] w-20 h-20 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-md">
            <ShowerHead className="w-12 h-12 text-[#0f172a]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#f5c47f] mb-3">
            Punime Sanitare
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Instalime moderne për banjo, lavamanë dhe kabina dushi – me dizajn
            të sofistikuar dhe funksionalitet maksimal.
          </p>
        </div>

        {/* 4️⃣ Kanalizime & Riparime */}
        <div className="bg-[#1a1f2b] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#d4af7f] text-center">
          <div className="bg-[#d4af7f] w-20 h-20 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-md">
            <Wrench className="w-12 h-12 text-[#0f172a]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#f5c47f] mb-3">
            Kanalizime & Riparime
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Rregullim i prishjeve, ndërrim tubash dhe mirëmbajtje kanalizimi
            me shërbim të shpejtë dhe profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
