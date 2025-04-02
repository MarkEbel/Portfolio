import { useParams, useNavigate } from "react-router-dom";
import "./blogPost.css";

const blogPosts = {
  "leading-retrospective": {
    title: "Leading My First Retrospective",
    content:
      "Leading my first sprint retro was definitely a bit nerve-wracking, but I managed to run it solo and got some great feedback! The team found it useful, especially since previous retros weren’t very productive. I focused on setting SMART actions and found topics to focus on next time. Overall, it went well, and I’ll be running these monthly now!",
  },
};

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const post = blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div>
    <button className="back-button" onClick={() => navigate("/Portfolio/")}>
        ←
      </button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
