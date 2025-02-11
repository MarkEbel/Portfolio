import "./timelineItem.css";

interface TimelineItemProps {
    id: string;
    title: string;
    company: string;
    hyperlinkTitle: string;
    date: string;
    description: string;
    skills: string;
  }
  
  const TimelineItem = ({ id, date, description, title, company, hyperlinkTitle, skills }: TimelineItemProps) => {
    return (
      <section id={id} className="TimelineItem">
          <h2>{title} <a href={hyperlinkTitle} target="_blank" rel="noopener noreferrer">{company}</a></h2>
          <h3>{date}</h3>
          <p>{description}</p>
          <p>{skills}</p>
      </section>
    );
  };
  
  export default TimelineItem;
