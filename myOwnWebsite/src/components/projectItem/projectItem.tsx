import "./projectItem.css";
import { useNavigate } from "react-router-dom";

interface ProjectItemProps {
  id: string;
  title: string;
  gitUrl: string;
  image: string;
  description: string;
  internal?: boolean; // Indicates internal navigation
}

const ProjectItem = ({ id, gitUrl, description, title, image, internal = false }: ProjectItemProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (internal) {
      e.preventDefault();
      navigate(gitUrl);
    }
  };

  const content = (
    <>
      <img src={image} alt={title} />
      <section className="ProjectItemContent">
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
    </>
  );

  return (
    <section id={id} className="ProjectItem">
      {internal ? (
        <div className="ProjectItemLink" onClick={handleClick}>
          {content}
        </div>
      ) : (
        <a className="ProjectItemLink" 
          href={gitUrl} 
          target={"_blank"} 
          rel={"noopener noreferrer"}
        >
          {content}
        </a>
      )}
    </section>
  );
};

export default ProjectItem;
