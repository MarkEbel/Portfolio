import { useState } from "react";
import { Link } from "react-router-dom";
import SkillModal from "./SkillModal";
import "./TimelineItem.css";

interface Role {
  title: string;
  since: string;
  dateTime: string;
}

interface TimelineItemProps {
  title: string;
  company: string;
  hyperlinkTitle: string;
  date: string;
  description: string;
  roles?: Role[];
  highlights?: string[];
  skills: string[];
  skillDescriptions: Record<string, string>;
  summary?: boolean;
}

const TimelineItem = ({
  date,
  description,
  roles,
  highlights,
  title,
  company,
  hyperlinkTitle,
  skills,
  skillDescriptions,
  summary = false,
}: TimelineItemProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const details = (
    <>
      <div className="timeline-item-header">
        <h2>{title}</h2>
        <p className="timeline-item-date">{date}</p>
      </div>
      <h3>{company}</h3>
      {!summary && roles && (
        <ul className="timeline-item-roles">
          {roles.map((role) => (
            <li key={role.title}>
              <span className="timeline-item-roles__title">{role.title}</span>
              <time dateTime={role.dateTime}>{role.since}</time>
            </li>
          ))}
        </ul>
      )}
      <p className="timeline-item-description">{description}</p>
      {!summary && highlights && (
        <ul className="timeline-item-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <section className="TimelineItem">
      {summary ? (
        <Link className="timeline-item__link" to="/Portfolio/experience">
          {details}
        </Link>
      ) : (
        <a
          className="timeline-item__link"
          href={hyperlinkTitle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {details}
        </a>
      )}
      {/* Chips open a description, so they cannot sit inside the job link. */}
      {!summary && (
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
      )}

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
