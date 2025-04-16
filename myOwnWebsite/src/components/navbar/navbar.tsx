import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {["About", "Experience", "Projects", "Blogs"].map((section) => (
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
