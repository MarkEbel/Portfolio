import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "./posts";
import "./BlogPostPage.css";

const BlogPostPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  if (!blogId || !Object.prototype.hasOwnProperty.call(blogPosts, blogId)) {
    return <p>Blog post not found!</p>;
  }

  const PostComponent = blogPosts[blogId];

  return (
    <div className="blogPost">
      <button className="back-button" onClick={() => navigate("/Portfolio/")}>
        ←
      </button>
      <PostComponent />
    </div>
  );
};

export default BlogPostPage;
