import { useState, useEffect } from "react";
import Section from "./components/section/section";
import Sidebar from "./components/sidebar/sidebar";
import Projects from "./features/sections/projects";
import Experience from "./features/sections/experience";
import About from "./features/sections/about";
import "./app.css";

const App = () => {
  // State to track mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* Torch Effect */}
      <div
        className="torch-effect"
        style={{
          background: `radial-gradient(circle 410px at ${mousePos.x}px ${mousePos.y}px, rgba(28, 15, 216, 0.14),rgba(17, 23, 42, 0.25))`
        }}
      ></div>

      {/* Main Content */}
      <Sidebar />
      <main className="main-content">
        <Section id="about" >
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </main>
    </div>
  );
};

export default App;
