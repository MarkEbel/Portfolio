import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "../theme/ThemeToggle";
import Navbar from "./Navbar";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Mark Ebel</h1>
      <h3>Full Stack Engineer</h3>

      <Navbar />

      <div className="sidebarFooter">
        <a
          href="https://www.linkedin.com/in/mark-ebel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MarkEbel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:markbenebel@gmail.com">
          <FaEnvelope className="text-2xl hover:text-green-400" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
