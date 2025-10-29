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
      className="bg-[#f9fafb] py-24 px-6 md:px-10 lg:px-16 font-poppins mt-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-[#f5c47f]">
            Na kontaktoni
          </h2>

          <div className="w-24 h-1 bg-[#f5c47f] mb-6 rounded-full"></div>

          <p className="text-gray-600 mb-10 leading-relaxed text-base md:text-lg">
            Keni pyetje rreth produkteve apo shërbimeve tona? Na kontaktoni dhe ekipi ynë do t’ju përgjigjet 
            sa më shpejt që të jetë e mundur.  
            <span className="block mt-3 font-semibold text-[#0f172a]">
              Mos hezitoni — kontaktoni sot dhe merrni ofertën tuaj!
            </span>
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#0f172a] text-lg " />
              <a href="tel:+383 49 430 005" className="hover:text-[#f5c47f] transition duration-300">+383 49 430 005</a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#0f172a] text-lg" />
              <a
                href="mailto:info@dini-r-qeramikë.com"
                className="text-gray-700 hover:text-[#f5c47f] transition duration-300"
              >
                info@dini-r-qeramikë.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#0f172a] text-lg" />
              <span>Rahovec, Kosovë</span>
            </div>
            <div className="flex space-x-5 pt-4">
              <a
                href="tel:+38349430005"
                className="bg-[#0f172a] hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-md"
              >
                <IoMdCall size={22} className="text-white hover:text-black" />
              </a>
              <a
                href="viber://chat?number=+38349430005"
                className="bg-[#0f172a] hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-md"
              >
                <SiViber size={22} className="text-white hover:text-black" />
              </a>
              <a
                href="https://wa.me/38349430005"
                className="bg-[#0f172a] hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-md"
              >
                <FaWhatsapp size={22} className="text-white hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        <form
          className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 space-y-5 border border-gray-100"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
            Dërgoni Mesazhin Tuaj
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emri
            </label>
            <Input
              placeholder="Shkruani emrin tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="Shkruani email-in tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mesazhi
            </label>
            <Input.TextArea
              rows={4}
              placeholder="Shkruani mesazhin tuaj"
              className="border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-[#f5c47f]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f172a] text-white py-3 rounded-md font-medium hover:bg-[#f5c47f] hover:text-black transition duration-300"
          >
            Dërgo Mesazhin
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
