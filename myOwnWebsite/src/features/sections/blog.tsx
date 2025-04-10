import SubSection from "../../components/subsection/subsection";
import ProjectItem from "../../components/projectItem/projectItem";
const Blogs = () => {
  return (
    <div>
      <SubSection id="retro">
        <ProjectItem
         id="retro"
         title="Leading my first retrospective"
         image="./assets/thumbnails/blogs/sailboatRetro.png"
         description="Leading my first retro was definitely a bit nerve-wracking, but I managed to run it solo and got some great feedback! The team found it useful, especially since previous retros weren’t very productive. I focused on setting SMART actions and found topics to focus on next time. Overall, it went well, and I’ll be running these monthly now!"
         gitUrl="./blogs/leading-retrospective" 
         internal={true}/>
      </SubSection>
    </div>
  );
};

export default Blogs;
