import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
