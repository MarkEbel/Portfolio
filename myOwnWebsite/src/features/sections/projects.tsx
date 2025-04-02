import SubSection from "../../components/subsection/subsection";
import ProjectItem from "../../components/projectItem/projectItem";

const Projects = () => {
  return (
    <div>
        <SubSection id="personalWebsite">
          <ProjectItem
           id="personalWebsite"
           title="Interactive Developer Portfolio"
           image="./assets/thumbnails/projects/personalWebsite.png"
           description="A sleek and responsive personal website showcasing my skills, projects, and experience. Built with modern web technologies (React JS), this site serves as both a portfolio and a resume, highlighting my expertise in frontend and backend development."
           gitUrl="https://github.com/MarkEbel/resume"/>
        </SubSection>
    </div>
  );
};

export default Projects;


