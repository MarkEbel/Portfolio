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
    roles: [
      {
        title: "Software Engineer Level 3",
        since: "May 2026",
        dateTime: "2026-05",
      },
      {
        title: "Software Engineer Level 2",
        since: "August 2024",
        dateTime: "2024-08",
      },
      {
        title: "Graduate Software Developer",
        since: "August 2022",
        dateTime: "2022-08",
      },
    ],
    description:
      "I joined Redwood Technologies, better known as Content Guru, as a graduate and have been promoted three times since. Most of my work is on the parts of a globally deployed platform that have to stay fast, secure and available.",
    highlights: [
      "I'm the technical lead on a project to replace a twenty-year-old platform. We swapped a PHP monolith for C# services, which opened the door to React and took us from a few hundred users per organisation to more than 10,000.",
      "I build the services that keep state in sync, in real time, across clients spread around the world.",
      "We used to deploy by hand. I moved us onto Kubernetes and ArgoCD, and a platform upgrade now takes a sixth of the time it used to.",
      "I added OpenTelemetry tracing across our production services, so working out what has gone wrong takes about 20 minutes instead of about 50.",
      "I pushed for SAST and SCA in our workflow, which has since helped us through PCI audits and FedRAMP-aligned work.",
      "I mentor our junior engineers, sit on graduate hiring panels, and take my turn leading incident response when production breaks.",
    ],
    skills: [
      ".NET (C#)",
      "MSSQL",
      "GraphQL",
      "REST",
      "PHP",
      "JavaScript",
      "React JS",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "GitLab CI/CD",
      "NGINX",
      "OpenTelemetry",
      "SAST",
      "SCA",
      "PCI Compliance",
      "FedRAMP",
    ],
  },
  {
    id: "exeter",
    title: "MSc Data Science with AI",
    company: "University of Exeter",
    hyperlinkTitle: "https://www.exeter.ac.uk/",
    date: "2021 - 2022",
    description:
      "Machine learning, big data analytics and AI-driven decision-making, with research on predicting athletic performance.",
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
      "Programming, algorithms and software engineering, where my interest in system design started.",
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
