// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";   
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">TEXTECH</div>

      
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      
      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li><Link to="/"        className="nav-link">Home</Link></li>
        <li><Link to="/about"   className="nav-link">About</Link></li>
        <li><Link to="/services"className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li>
          <a
            href="https://wa.me/+256 751 642598"   
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contact"
          >
            WHATSAPP&nbsp;US
          </a>
        </li>
      </ul>
    </nav>
  );
}

