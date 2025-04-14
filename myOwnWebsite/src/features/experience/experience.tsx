import SubSection from "../../components/subsection/subsection";
import TimelineItem from "../../components/timelineItem/timelineItem";
import skillDescriptions from "./skillDescriptions";

const Experience = () => {
  return (
    <div>
        <SubSection id="contentGuru">
          <TimelineItem
           id="contentGuru"
           title="Software Engineer"
           company="Content Guru"
           hyperlinkTitle="https://www.contentguru.com/en-gb/about-us/"
           date="August 2022 - Present"
           description=" I started my career at Redwood Technologies, also known as Content Guru, where I have developed my expertise in software development. I worked extensively with C#, PHP, and JavaScript, contributing to scalable and robust applications while gaining experience in API development and cloud-based solutions."
           skills={["SAST", "SCA", "FedRAMP", "PCI Compliance", "Kubernetes", "Docker", "ArgoCD", ".NET (C#)", "MSSQL", "PHP", "JavaScript", "React JS"]}
           skillDescriptions={skillDescriptions} />
        </SubSection>
        <SubSection id="exeter">
        <TimelineItem
          id="exeter"
          title="MSc Data Science With AI"
          company="University of Exeter"
          hyperlinkTitle="https://www.exeter.ac.uk/"
          date="2021 - 2022"
          description="My studies focused on machine learning, big data analytics, and AI-driven decision-making, equipping me with the skills to analyze and interpret complex datasets. I conducted research on predicting Athletic Performance and trying to push AI into the sporting world."
          skills={["AI", "Data Science", "Machine Learning", "Python", "Data Modelling"]}
          skillDescriptions={skillDescriptions} />
        </SubSection>
        <SubSection id="aston">
          <TimelineItem
           id="aston"
           title="BSc Computer Science"
           company="Aston University"
           hyperlinkTitle="https://www.aston.ac.uk/"
           date="2018 - 2021"
           description="I built a strong foundation in programming, algorithms, and software engineering. During my time there, I gained experience with various technologies, including Java and Web Technologies, and developed a keen interest in problem-solving and system design."
           skills={["Problem solving", "Software design", "Java"]}
           skillDescriptions={skillDescriptions} />
        </SubSection>
    </div>
  );
};

export default Experience;
