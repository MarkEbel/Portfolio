import { Link } from "react-scroll";
import "./navbar.css";
import ThemeToggle from "../theming/themeToggle/themeToggle";

const Navbar = () => {
  return (
          <nav className="navbar">  
      <ThemeToggle />
            {["About", "Experience", "Projects"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="navbar-links"
              >
                {section}
              </Link>
            ))}
          </nav>
  );
};


export default Navbar;
