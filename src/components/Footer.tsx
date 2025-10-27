import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Pllaka Premium</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Ofertojmë pllaka me cilësi të lartë për çdo hapësirë të shtëpisë tuaj. 
              Me më shumë se 15 vjet përvojë në treg, garantojmë qëndrueshmëri dhe dizajn modern.
            </p>
            <div className="social-media flex space-x-4">
              <a href="http://instagram.com/profili_i_juaj" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
               <FaInstagramSquare />
              </a>
              <a href="http://facebook.com/profili_i_juaj" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaFacebookSquare />
              </a>
              <a href="http://tiktok.com/profili_i_juaj" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <AiFillTikTok />
              </a>
              
            </div>
          </div> 
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2 inline-block">Lidhje të Shpejta</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Kryefaqja</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Produktet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Rreth Nesh</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Shërbimet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Kontakti</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2 inline-block">Kategoritë</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Pllaka për Banjo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Pllaka për Kuzhinë</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Pllaka për Dhoma</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Pllaka për Jashtë</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">Pllaka Dekorative</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2 inline-block">Na Kontaktoni</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-red-500 mt-1 mr-3"></i>
                <p className="text-gray-300">Rruga e Dëshmorëve, Tirana, Shqipëri</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-red-500 mr-3"></i>
                <a href="tel:+38344130991" className="text-gray-300 hover:text-red-400 transition duration-300">044-130-991</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-red-500 mr-3"></i>
                <a href="mailto:info@pllaka-premium.com" className="text-gray-300 hover:text-red-400 transition duration-300">info@pllaka-premium.com</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-red-500 mr-3"></i>
                <p className="text-gray-300">E Hënë - E Shtunë: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div> 

        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-center text-center items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Abonohu në Newsletter</h4>
              <p className="text-gray-300">Merrni oferta ekskluzive dhe lajme për produktet tona të reja</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pllaka Premium. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Politika e Privatësisë</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Kushtet e Shërbimit</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Mapa e Faqes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;