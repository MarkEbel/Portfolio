import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Section from "./components/section/section";
import Sidebar from "./components/sidebar/sidebar";
import Projects from "./features/sections/projects";
import Experience from "./features/experience/experience";
import About from "./features/sections/about";
import Blogs from "./features/sections/blog";
import "./app.css";
import { Outlet } from "react-router-dom";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation(); // Get the current route path
  
  const path = location.pathname.replace(/^\/|\/$/g, ""); // Strip leading/trailing slashes
  const isMainPage = path.toLowerCase() === "portfolio";


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (<div className={`app`}>
    {/* Torch Effect */}
    <div
      className="torch-effect"
      style={{
        background: `radial-gradient(circle 410px at ${mousePos.x}px ${mousePos.y}px, rgba(28, 15, 216, 0.14),rgba(17, 23, 42, 0.25))`,
      }}
    ></div>
  
    <Outlet />
  
    {/* Only show main content on /Portfolio */}
    {isMainPage && (
      <>
        <Sidebar />
        <main className="main-content">
          <Section id="about">
            <About />
          </Section>
          <Section id="experience">
            <Experience />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="blogs">
            <Blogs />
          </Section>
        </main>
      </>
    )}
  </div>  
  );
};

export default App;
