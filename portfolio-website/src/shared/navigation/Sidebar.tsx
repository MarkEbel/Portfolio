import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import Navbar from "./Navbar";
import "./Sidebar.css";

interface SidebarProps {
  isHome?: boolean;
}

const Sidebar = ({ isHome = false }: SidebarProps) => {
  return (
    <header className="sidebar">
      {isHome ? (
        <h1>Mark Ebel</h1>
      ) : (
        <Link className="sidebar__name" to="/Portfolio/">
          Mark Ebel
        </Link>
      )}
      <h3>Full Stack Engineer</h3>

      <Navbar />

      <div className="sidebarFooter">
        <a
          href="https://www.linkedin.com/in/mark-ebel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MarkEbel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:markbenebel@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Sidebar;
