import Subsection from "../../shared/components/Subsection";
import TimelineItem from "./TimelineItem";
import skillDescriptions from "./skillDescriptions";

const experienceItems = [
  {
    id: "contentGuru",
    title: "Software Engineer",
    company: "Content Guru",
    hyperlinkTitle: "https://www.contentguru.com/en-gb/about-us/",
    date: "August 2022 - Present",
    description:
      "I started my career at Redwood Technologies, also known as Content Guru, where I have developed my expertise in software development. I worked extensively with C#, PHP, and JavaScript, contributing to scalable and robust applications while gaining experience in API development and cloud-based solutions.",
    skills: [
      "SAST",
      "SCA",
      "FedRAMP",
      "PCI Compliance",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      ".NET (C#)",
      "MSSQL",
      "PHP",
      "JavaScript",
      "React JS",
    ],
  },
  {
    id: "exeter",
    title: "MSc Data Science With AI",
    company: "University of Exeter",
    hyperlinkTitle: "https://www.exeter.ac.uk/",
    date: "2021 - 2022",
    description:
      "My studies focused on machine learning, big data analytics, and AI-driven decision-making, equipping me with the skills to analyse and interpret complex datasets. I conducted research on predicting athletic performance and trying to push AI into the sporting world.",
    skills: [
      "AI",
      "Data Science",
      "Machine Learning",
      "Python",
      "Data Modelling",
    ],
  },
  {
    id: "aston",
    title: "BSc Computer Science",
    company: "Aston University",
    hyperlinkTitle: "https://www.aston.ac.uk/",
    date: "2018 - 2021",
    description:
      "I built a strong foundation in programming, algorithms, and software engineering. During my time there, I gained experience with various technologies, including Java and web technologies, and developed a keen interest in problem-solving and system design.",
    skills: ["Problem solving", "Software design", "Java"],
  },
];

interface ExperienceSectionProps {
  limit?: number;
}

const ExperienceSection = ({ limit }: ExperienceSectionProps) => (
  <>
    {experienceItems.slice(0, limit).map(({ id, ...item }) => (
      <Subsection id={id} key={id}>
        <TimelineItem {...item} skillDescriptions={skillDescriptions} />
      </Subsection>
    ))}
  </>
);

export default ExperienceSection;
