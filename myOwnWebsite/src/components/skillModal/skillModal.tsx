import "./skillModal.css";

interface SkillModalProps {
  skill: string;
  description: string;
  onClose: () => void;
}

const SkillModal = ({ skill, description, onClose }: SkillModalProps) => {
  return (
    <div className="skill-modal-backdrop" onClick={onClose}>
      <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{skill}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillModal;
