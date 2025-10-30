import React from "react";
import { Input } from "antd";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0f172a] py-24 px-6 sm:px-10 lg:px-20 text-white overflow-hidden"
    >
      {/* Dekor gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,196,127,0.15),_transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* KONTAKT INFO */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#f5c47f]">
            Na Kontaktoni
          </h2>

          <div className="w-28 h-1 bg-[#f5c47f] mb-6 rounded-full"></div>

          <p className="text-gray-300 mb-10 leading-relaxed text-base md:text-lg">
            Keni pyetje rreth produkteve apo shërbimeve tona? Na kontaktoni dhe ekipi ynë do t’ju përgjigjet
            sa më shpejt që të jetë e mundur.
            <span className="block mt-3 font-semibold text-[#f5c47f]">
              Mos hezitoni — kontaktoni sot dhe merrni ofertën tuaj!
            </span>
          </p>

          <div className="space-y-5 text-gray-200">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#f5c47f] text-lg" />
              <a
                href="tel:+38349430005"
                className="hover:text-[#ffd899] transition duration-300"
              >
                +383 49 430 005
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#f5c47f] text-lg" />
              <a
                href="mailto:info@dini-r-qeramikë.com"
                className="hover:text-[#ffd899] transition duration-300"
              >
                info@dini-r-qeramikë.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#f5c47f] text-lg" />
              <span>Rahovec, Kosovë</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-5 pt-5">
              {[
                {
                  href: "tel:+38349430005",
                  icon: <IoMdCall size={22} />,
                },
                {
                  href: "viber://chat?number=+38349430005",
                  icon: <SiViber size={22} />,
                },
                {
                  href: "https://wa.me/38349430005",
                  icon: <FaWhatsapp size={22} />,
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f5c47f] text-[#0f172a] w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:bg-[#ffd899] hover:scale-110 transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FORMULARI */}
        <form
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6 border border-[#f5c47f]/20"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
            Dërgoni Mesazhin Tuaj
          </h3>

          <div>
            <label className="block text-sm font-medium text-[#0f172a] mb-1">
              Emri
            </label>
            <Input
              placeholder="Shkruani emrin tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f] focus:border-[#f5c47f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f172a] mb-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="Shkruani email-in tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f] focus:border-[#f5c47f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f172a] mb-1">
              Mesazhi
            </label>
            <Input.TextArea
              rows={4}
              placeholder="Shkruani mesazhin tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f] focus:border-[#f5c47f]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f5c47f] text-[#0f172a] py-3 rounded-md font-semibold shadow-lg hover:bg-[#ffd899] transition duration-300"
          >
            Dërgo Mesazhin
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
