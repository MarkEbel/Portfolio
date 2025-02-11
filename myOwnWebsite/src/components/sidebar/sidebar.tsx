import "./sidebar.css";
import Navbar from "../navbar/navbar.tsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "../theming/themeToggle/themeToggle.tsx";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside className="fixed left-0 top-0 h-full w-1/5 bg-gray-900 text-white flex flex-col items-center py-10">
        <h1 className="text-2xl font-bold">Mark Ebel</h1>
        <p className="text-sm text-gray-400">Full Stack Engineer</p>

        <Navbar />

        {/* Social Icons */}
        <div className="sidebarFooter">
          <a
            href="https://www.linkedin.com/in/mark-ebel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin/>
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
          <ThemeToggle/>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
