import Section from "./components/section/section";
import Sidebar from "./components/sidebar/sidebar";
import Projects from "./features/sections/projects";
import Experience from "./features/sections/experience";
import About from "./features/sections/about";
import "./app.css";

const App = () => {
  return (
    <div className="app">
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
      </main>
    </div>
  );
};

export default App;
