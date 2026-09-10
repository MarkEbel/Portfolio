import { useState } from "react";
import SkillModal from "./SkillModal";
import "./TimelineItem.css";

interface TimelineItemProps {
  id: string;
  title: string;
  company: string;
  hyperlinkTitle: string;
  date: string;
  description: string;
  skills: string[];
  skillDescriptions: Record<string, string>;
}

const TimelineItem = ({
  id,
  date,
  description,
  title,
  company,
  hyperlinkTitle,
  skills,
  skillDescriptions,
}: TimelineItemProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id={id} className="TimelineItem">
      <div className="timeline-item-header">
        <h2>{title}</h2>
        <p className="timeline-item-date">{date}</p>
      </div>
      <h3>
        <a href={hyperlinkTitle} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
      </h3>
      <p className="timeline-item-description">{description}</p>
      <div className="skills-container">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-bubble"
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </span>
        ))}
      </div>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          description={
            skillDescriptions[selectedSkill] || "No description available."
          }
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
};

export default TimelineItem;
