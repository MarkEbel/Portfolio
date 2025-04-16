import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "./posts";
import "./blogPost.css";

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const PostComponent = blogPosts[blogId as keyof typeof blogPosts];

  if (!PostComponent) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div className="blogPost">
      <button className="back-button" onClick={() => navigate("/Portfolio/")}>
        ←
      </button>
      <PostComponent />
    </div>
  );
};

export default BlogPost;
