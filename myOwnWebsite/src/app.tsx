import Section from "./components/section/section";
import Sidebar from "./components/sidebar/sidebar";
import Projects from "./features/projects/projects";
import Experience from "./features/experience/experience";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Section id="experience" navName="Experience">
          <Experience />
        </Section>
        <Section id="projects" navName="Projects">
          <Projects />
        </Section>
      </main>
    </div>
  );
};

export default App;
