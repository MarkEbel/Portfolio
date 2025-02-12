import SubSection from "../../components/subsection/subsection";
import ProjectItem from "../../components/projectItem/projectItem";

const Projects = () => {
  return (
    <div>
        <SubSection id="personalWebsite">
          <ProjectItem
           id="personalWebsite"
           title="Personal Website"
           image="./assets/projectThumbnails/personalWebsite.png"
           description="This website"
           gitUrl="https://github.com/MarkEbel/resume"
           skills="list of skills"/>
        </SubSection>
    </div>
  );
};

export default Projects;


