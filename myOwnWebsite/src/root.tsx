import Section from "./components/section/section";
import Sidebar from "./components/sidebar/sidebar";
import AboutMe from "./features/aboutMe/aboutMe";
import ProjectsHistory from "./features/projects/projects";
import "./app.css"; // Import the CSS file

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="projects">
          <ProjectsHistory />
        </Section>
      </main>
    </div>
  );
};

export default App;
