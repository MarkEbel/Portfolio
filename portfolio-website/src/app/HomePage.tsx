import { Link } from "react-router-dom";
import AboutSection from "../features/about/AboutSection";
import BlogSection from "../features/blog/BlogSection";
import ExperienceSection from "../features/experience/ExperienceSection";
import ProjectsSection from "../features/projects/ProjectsSection";
import PageLayout from "../shared/components/PageLayout";
import "./HomePage.css";

const HomePage = () => (
  <PageLayout>
    <AboutSection />

    <section className="home-preview" aria-labelledby="latest-experience">
      <h2 id="latest-experience" className="home-preview__eyebrow">
        Latest experience
      </h2>
      <ExperienceSection limit={1} />
      <Link className="home-preview__link" to="/Portfolio/experience">
        See full experience
      </Link>
    </section>

    <section className="home-preview" aria-labelledby="latest-project">
      <h2 id="latest-project" className="home-preview__eyebrow">
        Latest project
      </h2>
      <ProjectsSection limit={1} />
      <Link className="home-preview__link" to="/Portfolio/projects">
        See all projects
      </Link>
    </section>

    <section className="home-preview" aria-labelledby="latest-blog">
      <h2 id="latest-blog" className="home-preview__eyebrow">
        Latest blog
      </h2>
      <BlogSection limit={1} />
      <Link className="home-preview__link" to="/Portfolio/blogs">
        See all blogs
      </Link>
    </section>
  </PageLayout>
);

export default HomePage;
