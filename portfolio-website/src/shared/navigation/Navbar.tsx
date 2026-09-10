import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "About", to: "/Portfolio/", end: true },
  { label: "Experience", to: "/Portfolio/experience" },
  { label: "Projects", to: "/Portfolio/projects" },
  { label: "Blogs", to: "/Portfolio/blogs" },
];

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      {links.map(({ label, to, end }) => (
        <NavLink
          key={label}
          to={to}
          end={end}
          className={({ isActive }) =>
            `navbar-links${isActive ? " navbar-links--active" : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
