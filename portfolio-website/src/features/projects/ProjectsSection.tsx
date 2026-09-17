import Subsection from "../../shared/components/Subsection";
import ContentCard from "../../shared/components/ContentCard";

const projects = [
  {
    id: "personalWebsite",
    title: "This site",
    image: "./assets/thumbnails/projects/personalWebsite.png",
    description:
      "The thing you are on now. A React and TypeScript site I use as a portfolio, a place to write, and a place to try things I would rather not try at work first.",
    href: "https://github.com/MarkEbel/Portfolio",
  },
  {
    id: "athleticPerformance",
    title: "Predicting athletic performance",
    image: "./assets/thumbnails/projects/athletic-performance.png",
    description:
      "MSc work: trying to tell how well someone might perform from training data. It is the same research I mention in Experience, just in a repo you can actually open.",
    href: "https://github.com/MarkEbel/Predicting_Athletic_Performance",
  },
  {
    id: "twitterData",
    title: "Twitter data processing",
    image: "./assets/thumbnails/projects/twitter-data.png",
    description:
      "Also from the MSc. Processing a stretch of tweets and drawing out the trends in them, then putting that on a chart.",
    href: "https://github.com/MarkEbel/Twitter_Data_Processing",
  },
  {
    id: "particleSwarm",
    title: "Tiered particle swarm",
    image: "./assets/thumbnails/projects/particle-swarm.png",
    description:
      "A Java take on particle swarm optimisation, with a tiered approach, used to hunt for the lowest point on a plane.",
    href: "https://github.com/MarkEbel/Tiered_Partical_Swarm_Optimisation",
  },
  {
    id: "pageRank",
    title: "PageRank",
    image: "./assets/thumbnails/projects/page-rank.png",
    description:
      "An implementation of PageRank: pages score highly because other pages point at them, not because they point at lots of others.",
    href: "https://github.com/MarkEbel/Page_Rank_Searching_Algorithm",
  },
  {
    id: "imageProcessing",
    title: "Image retrieval",
    image: "./assets/thumbnails/projects/image-processing.png",
    description:
      "A Jupyter notebook on image retrieval, treating pictures as matrices and seeing how far that gets you.",
    href: "https://github.com/MarkEbel/Image_Processing",
  },
  {
    id: "pandasNumpy",
    title: "Pandas and NumPy",
    image: "./assets/thumbnails/projects/pandas-numpy.png",
    description:
      "Coursework from the data science MSc, working through data wrangling in a Jupyter notebook so the tools actually stuck.",
    href: "https://github.com/MarkEbel/Pandas_And_Numpy",
  },
  {
    id: "webScraping",
    title: "Images to PDF",
    image: "./assets/thumbnails/projects/web-scraping.png",
    description:
      "A small browser tool that follows a numbered image URL and stitches the pictures into a PDF. Use it on pages you are allowed to copy.",
    href: "https://github.com/MarkEbel/Web-Scraping",
  },
];

interface ProjectsSectionProps {
  limit?: number;
}

const ProjectsSection = ({ limit }: ProjectsSectionProps) => (
  <>
    {projects.slice(0, limit).map(({ id, ...project }) => (
      <Subsection id={id} key={id}>
        <ContentCard {...project} />
      </Subsection>
    ))}
  </>
);

export default ProjectsSection;
