import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-8">
          
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-700 md:pr-8 pb-6 md:pb-0">
            <div>
              <h3 className="text-2xl font-bold text-[#f5c47f] mb-3">
                Pllaka Premium
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ofertojmë pllaka me cilësi të lartë për çdo hapësirë të shtëpisë tuaj. 
                Me më shumë se 15 vjet përvojë në treg, garantojmë qëndrueshmëri dhe dizajn modern.
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="http://instagram.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaInstagram size={22} className="text-black" />
              </a>
              <a
                href="http://facebook.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaFacebook size={22} className="text-black" />
              </a>
              <a
                href="http://tiktok.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaTiktok size={22} className="text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 md:px-8 pb-6 md:pb-0">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-[#f5c47f] pb-2 inline-block">
              Lidhje të Shpejta
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">Kryefaqja</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">Produktet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">Rreth Nesh</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">Shërbimet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">Kontakti</a></li>
            </ul>
          </div>

          <div className="flex flex-col md:pl-8">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-[#f5c47f] pb-2 inline-block">
              Na Kontaktoni
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#f5c47f] mt-1 mr-3"></i>
                <p>Rruga e Dëshmorëve, Tirana, Shqipëri</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-[#f5c47f] mr-3"></i>
                <a href="tel:+38344123123" className="hover:text-[#f5c47f] transition duration-300">
                  +383 44 123 123
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-[#f5c47f] mr-3"></i>
                <a href="mailto:info@pllaka-premium.com" className="hover:text-[#f5c47f] transition duration-300">
                  info@pllaka-premium.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-[#f5c47f] mr-3"></i>
                <p>E Hënë - E Shtunë: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pllaka Premium. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
