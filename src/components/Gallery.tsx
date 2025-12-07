import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ScrollToTopWithButton from "./ScrollToTopWithButton";

const categories = [
  "Shtrimi i Pllakave",
  "Instalime Ujësjellësi",
  "Punime Sanitare",
] as const;

type Category = (typeof categories)[number];

const images: Record<Category, string[]> = {
  "Shtrimi i Pllakave": ["/images/pllaka/img1.jpg", "/images/pllaka/img2.jpg", "/images/pllaka/img3.jpg", "/images/pllaka/img4.jpg", "/images/pllaka/img5.jpg", "/images/pllaka/img6.jpg"],
  "Instalime Ujësjellësi": ["/images/ujesjelles/img1.jpg", "/images/ujesjelles/img2.jpg", "/images/ujesjelles/img3.jpg", "/images/ujesjelles/img4.jpg", "/images/ujesjelles/img5.jpg", "/images/ujesjelles/img6.jpg"],
  "Punime Sanitare": ["/images/sanitari/img1.jpg", "/images/sanitari/img2.jpg", "/images/sanitari/img3.jpg", "/images/sanitari/img4.jpg", "/images/sanitari/img5.jpg", "/images/sanitari/img6.jpg"],
};

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Shtrimi i Pllakave");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "auto";
  }, [lightboxIndex]);

  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };

  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < images[selectedCategory].length - 1)
      setLightboxIndex(lightboxIndex + 1);
  };

  return (
    <section className="relative py-21 px-6 sm:px-10 lg:px-20 bg-[#0f172a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,196,127,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollToTopWithButton />

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#f5c47f]">
            Galeria e Punimeve
          </h2>
          <div className="w-28 h-1 bg-[#f5c47f] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Shikoni disa nga punimet tona profesionale në ndërtim, instalime dhe riparime.
          </p>
        </div>

        <div className="flex justify-center mb-10 relative">
          <div className="w-full max-w-xs relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full bg-[#1e293b]/80 text-white px-5 py-3 rounded-xl shadow-md border border-[#f5c47f]/50 font-medium text-sm sm:text-base flex justify-between items-center focus:outline-none hover:bg-[#1e293b]/90 transition"
            >
              {selectedCategory}
              <span className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {openDropdown && (
              <ul className="absolute mt-2 w-full bg-[#1e293b]/90 border border-[#f5c47f]/50 rounded-xl shadow-lg overflow-hidden z-20 animate-slideDown">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOpenDropdown(false);
                    }}
                    className="px-5 py-2 text-white cursor-pointer hover:bg-[#f5c47f]/20 transition"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images[selectedCategory].map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#f5c47f]/30 transform transition duration-500 hover:scale-105 hover:shadow-[#f5c47f]/40 hover:shadow-2xl bg-[#1e293b]/80 cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={src}
                alt={`${selectedCategory} - ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110 rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-[#f5c47f] font-semibold text-sm sm:text-base text-center px-3 drop-shadow-md">
                  {selectedCategory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
            <button
              onClick={prevImage}
              disabled={lightboxIndex === 0}
              className={`absolute left-0 text-white text-3xl p-3 m-2 rounded-full bg-black/50 hover:bg-black/70 transition ${lightboxIndex === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <FaArrowLeft />
            </button>

            <img
              src={images[selectedCategory][lightboxIndex]}
              alt={`${selectedCategory} - ${lightboxIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={nextImage}
              disabled={lightboxIndex === images[selectedCategory].length - 1}
              className={`absolute right-0 text-white text-3xl p-3 m-2 rounded-full bg-black/50 hover:bg-black/70 transition ${lightboxIndex === images[selectedCategory].length - 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <FaArrowRight />
            </button>

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-[#f5c47f] transition"
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#f5c47f] via-[#ffd899] to-transparent"></div>
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.25s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
