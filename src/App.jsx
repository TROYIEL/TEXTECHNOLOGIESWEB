import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Hero from "./Pages/Hero/hero";
import { useState } from "react";
import About from "./Pages/About/about";
import Services from "./Pages/Services/services";
import Contact from "./Pages/Contact/contact";

function App() {
  const [herocount, setherocount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Hero herocount={herocount} setherocount={setherocount} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
