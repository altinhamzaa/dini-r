import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-white">
          
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white pr-6 md:pr-6 sm:my-4">
            <div>
              <h3 className="text-2xl font-bold text-[#f5c47f] mb-2">
                Pllaka Premium
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ofertojmë pllaka me cilësi të lartë për çdo hapësirë të shtëpisë tuaj. 
                Me më shumë se 15 vjet përvojë në treg, garantojmë qëndrueshmëri dhe dizajn modern.
              </p>
            </div>
            <div className="social-media flex space-x-4 mt-4">
              <a
                href="http://instagram.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaInstagram size={22} style={{ color: "black" }} />
              </a>
              <a
                href="http://facebook.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaFacebook size={22} style={{ color: "black" }} />
              </a>
              <a
                href="http://tiktok.com/profili_i_juaj"
                className="bg-gray-800 hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaTiktok size={22} style={{ color: "black" }} />
              </a>
            </div>
          </div>

          <div className="flex flex-col border-b md:border-b-0 md:border-r border-white px-6 sm:my-4">
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

          <div className="flex flex-col pl-6">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-[#f5c47f] pb-2 inline-block">
              Na Kontaktoni
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#f5c47f] mt-1 mr-3"></i>
                <p className="text-gray-300">Rruga e Dëshmorëve, Tirana, Shqipëri</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-[#f5c47f] mr-3"></i>
                <a href="tel:+38344123123" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">
                  +38344123123
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-[#f5c47f] mr-3"></i>
                <a href="mailto:info@pllaka-premium.com" className="text-gray-300 hover:text-[#f5c47f] transition duration-300">
                  info@pllaka-premium.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-[#f5c47f] mr-3"></i>
                <p className="text-gray-300">E Hënë - E Shtunë: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-center">
            &copy; {new Date().getFullYear()} Pllaka Premium. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
