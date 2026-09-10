import ContentCard from "../../shared/components/ContentCard";
import Subsection from "../../shared/components/Subsection";

const BlogSection = () => {
  return (
    <div>
      <Subsection id="retro">
        <ContentCard
          id="retro"
          title="Leading my first retrospective"
          image="./assets/thumbnails/blogs/sailboatRetro.png"
          description="Leading my first retro was definitely a bit nerve-wracking, but I managed to run it solo and got some great feedback! The team found it useful, especially since previous retros weren’t very productive. I focused on setting SMART actions and found topics to focus on next time. Overall, it went well, and I’ll be running these monthly now!"
          href="./blogs/leading-retrospective"
          internal={true}
        />
      </Subsection>
    </div>
  );
};

export default BlogSection;
