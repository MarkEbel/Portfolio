import type { ReactNode } from "react";
import "./Subsection.css";

interface SubsectionProps {
  id: string;
  children: ReactNode;
}

const Subsection = ({ id, children }: SubsectionProps) => {
  return (
    <section id={id} className="SubSection">
      {children}
    </section>
  );
};

export default Subsection;
