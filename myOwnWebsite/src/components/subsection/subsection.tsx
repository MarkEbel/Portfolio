import "./subsection.css";

interface SubSectionProps {
    id: string;
    children: React.ReactNode;
  }
  
  const SubSection = ({ id, children }: SubSectionProps) => {
    return (
      <section id={id} className="SubSection">
        {children}
      </section>
    );
  };
  
  export default SubSection;
