import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import ThemeToggle from "../theming/themeToggle/themeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-name">Mark Ebel</div>
        <ThemeToggle />
      </div>

      {/* Hamburger Menu Button */}
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
        <li>
          <NavLink to="./" end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="AboutMe" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="Skills" onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="Projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="Contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
