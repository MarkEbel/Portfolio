import Subsection from "../../shared/components/Subsection";
import ContentCard from "../../shared/components/ContentCard";

const projects = [
  {
    id: "personalWebsite",
    title: "Interactive Developer Portfolio",
    image: "./assets/thumbnails/projects/personalWebsite.png",
    description:
      "A sleek and responsive personal website showcasing my skills, projects, and experience. Built with modern web technologies (React JS), this site serves as both a portfolio and a résumé, highlighting my expertise in frontend and backend development.",
    href: "https://github.com/MarkEbel/resume",
  },
];

interface ProjectsSectionProps {
  limit?: number;
}

const ProjectsSection = ({ limit }: ProjectsSectionProps) => (
  <>
    {projects.slice(0, limit).map(({ id, ...project }) => (
      <Subsection id={id} key={id}>
        <ContentCard {...project} />
      </Subsection>
    ))}
  </>
);

export default ProjectsSection;
