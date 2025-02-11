import "./timelineItem.css";

interface TimelineItemProps {
  id: string;
  title: string;
  company: string;
  hyperlinkTitle: string;
  date: string;
  description: string;
  skills: string[];
}

const TimelineItem = ({ id, date, description, title, company, hyperlinkTitle, skills }: TimelineItemProps) => {
  return (
    <section id={id} className="TimelineItem">
      <p>{date}</p>
      <h2>{title}</h2>
      <h3>
        <a href={hyperlinkTitle} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
      </h3>
      <p>{description}</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-bubble">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TimelineItem;
