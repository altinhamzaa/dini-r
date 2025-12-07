import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import WhatsAppContactModal from "./components/WhatsupContentModel";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <WhatsAppContactModal />
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
