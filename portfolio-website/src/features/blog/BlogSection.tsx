import ContentCard from "../../shared/components/ContentCard";
import Subsection from "../../shared/components/Subsection";

const blogs = [
  {
    id: "retro",
    title: "Leading my first retrospective",
    image: "./assets/thumbnails/blogs/sailboatRetro.png",
    description:
      "Leading my first retro was definitely a bit nerve-wracking, but I managed to run it solo and got some great feedback! The team found it useful, especially since previous retros weren’t very productive. I focused on setting SMART actions and found topics to focus on next time. Overall, it went well, and I’ll be running these monthly now!",
    href: "/Portfolio/blogs/leading-retrospective",
  },
];

interface BlogSectionProps {
  limit?: number;
}

const BlogSection = ({ limit }: BlogSectionProps) => (
  <>
    {blogs.slice(0, limit).map(({ id, ...blog }) => (
      <Subsection id={id} key={id}>
        <ContentCard {...blog} internal={true} />
      </Subsection>
    ))}
  </>
);

export default BlogSection;
