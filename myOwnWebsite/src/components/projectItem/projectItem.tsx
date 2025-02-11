import "./projectItem.css";

interface ProjectItemProps {
    id: string;
    title: string;
    gitUrl: string;
    image: string;
    description: string;
    skills: string;
  }
  
  const ProjectItem = ({ id, gitUrl, description, title, image, skills }: ProjectItemProps) => {
    return (
      <section id={id} className="ProjectItem">
          <h2>{title} <a href={gitUrl} target="_blank" rel="noopener noreferrer"><img src={image}/></a></h2>
          <p>{description}</p>
          <p>{skills}</p>
      </section>
    );
  };
  
  export default ProjectItem;
