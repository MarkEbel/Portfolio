import Subsection from "../../shared/components/Subsection";
import ContentCard from "../../shared/components/ContentCard";

const ProjectsSection = () => {
  return (
    <>
      <Subsection id="personalWebsite">
        <ContentCard
          id="personalWebsite"
          title="Interactive Developer Portfolio"
          image="./assets/thumbnails/projects/personalWebsite.png"
          description="A sleek and responsive personal website showcasing my skills, projects, and experience. Built with modern web technologies (React JS), this site serves as both a portfolio and a resume, highlighting my expertise in frontend and backend development."
          href="https://github.com/MarkEbel/resume"
        />
      </Subsection>
    </>
  );
};

export default ProjectsSection;
