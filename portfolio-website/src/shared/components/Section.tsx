import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="Section">
      {children}
    </section>
  );
};

export default Section;
