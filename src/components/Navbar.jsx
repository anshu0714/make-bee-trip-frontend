import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Make Bee Trip Logo" />
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="btn btn--primary desktop-btn">Get Started</button>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`drawer-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <a onClick={() => setOpen(false)} href="#features">
          Features
        </a>
        <a onClick={() => setOpen(false)} href="#deals">
          Deals
        </a>
        <a onClick={() => setOpen(false)} href="#contact">
          Contact
        </a>

        <button className="btn btn--primary">Get Started</button>
      </div>
    </nav>
  );
}
