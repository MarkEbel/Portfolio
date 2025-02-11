import "./section.css";

interface SectionProps {
    id: string;
    navName: string;
    children: React.ReactNode;
  }
  
  const Section = ({ id, children }: SectionProps) => {
    return (
      <section id={id} className="Section">
        {children}
      </section>
    );
  };
  
  export default Section;
