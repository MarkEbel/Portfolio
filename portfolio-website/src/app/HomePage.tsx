import AboutSection from "../features/about/AboutSection";
import BlogSection from "../features/blog/BlogSection";
import ExperienceSection from "../features/experience/ExperienceSection";
import ProjectsSection from "../features/projects/ProjectsSection";
import Section from "../shared/components/Section";
import Sidebar from "../shared/navigation/Sidebar";

const HomePage = () => (
  <>
    <Sidebar />
    <main className="main-content">
      <Section id="about">
        <AboutSection />
      </Section>
      <Section id="experience">
        <ExperienceSection />
      </Section>
      <Section id="projects">
        <ProjectsSection />
      </Section>
      <Section id="blogs">
        <BlogSection />
      </Section>
    </main>
  </>
);

export default HomePage;
