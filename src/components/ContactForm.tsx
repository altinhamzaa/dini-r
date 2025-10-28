import { FaWhatsapp } from "react-icons/fa6";
import { SiViber } from "react-icons/si";

function ContactForm() {
    return(
  <section id="contact" className="white-50 py-16">
   <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
     <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Na kontaktoni</h2>
      <p className="text-gray-600 mb-8">
        Keni pyetje rreth pllakave tona? Na shkruani dhe ekipi ynë do t’ju përgjigjet sa më shpejt!
      </p>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f5c47f]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-9zM4.5 5a.5.5 0 00-.5.5v.637l6.5 4.063 6.5-4.063V5.5a.5.5 0 00-.5-.5h-12z" />
          </svg>
          <span>info@pllakashqip.com</span>
        </div>

        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f5c47f]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884l3.012-.493a1 1 0 01.99.554l1.36 2.725a1 1 0 01-.272 1.212l-1.516 1.222a11.037 11.037 0 005.516 5.516l1.222-1.516a1 1 0 011.212-.272l2.725 1.36a1 1 0 01.554.99l-.493 3.012A1 1 0 0115.5 20C7.492 20 1 13.508 1 5.5a1 1 0 011.003-.616z" />
          </svg>
          <span>+355 68 123 4567</span>
        </div>
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#f5c47f]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 016 6c0 5.25-6 10-6 10S4 13.25 4 8a6 6 0 016-6z" />
          </svg>
          <span>Rr. Dritan Hoxha, Tiranë</span>
        </div>
         <div className="icone flex space-x-5">
              
          <a href="https:/viber.com/profili_i_juaj" className="bg-[#f5c47f] hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
          
          <SiViber size={22} />
          </a>
          <a href="https:/Whatsapp.com"className="bg-[#f5c47f] hover:bg-[#f5c47f] w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
          <FaWhatsapp size={22}/>
          </a>
         </div>
      </div>
    </div>
    <form className="bg-white shadow-lg rounded-lg p-8 space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Emri</label>
        <input
          type="text"
          placeholder="Shkruani emrin tuaj"
          className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f5c47f]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Shkruani email-in tuaj"
          className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f5c47f]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mesazhi</label>
        <textarea
          
          placeholder="Shkruani mesazhin tuaj"
          className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-b[#f5c47f]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-[#f5c47f] transition">
        Dërgo Mesazhin
      </button>
    </form>

  </div>
</section>
    )
}
export default ContactForm