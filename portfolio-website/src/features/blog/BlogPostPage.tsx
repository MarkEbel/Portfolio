import { useParams, useNavigate } from "react-router-dom";
import { formatBlogDate } from "./formatBlogDate";
import { blogsBySlug } from "./posts";
import "./BlogPostPage.css";

const BlogPostPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  if (!blogId || !Object.prototype.hasOwnProperty.call(blogsBySlug, blogId)) {
    return <p>Blog post not found!</p>;
  }

  const post = blogsBySlug[blogId];
  const PostComponent = post.Component;

  return (
    <div className="blogPost">
      <button
        className="back-button"
        aria-label="Back to blogs"
        onClick={() => navigate("/Portfolio/blogs")}
      >
        <span aria-hidden="true">←</span>
      </button>
      <header className="blogPost__header">
        <h1>{post.title}</h1>
        <p className="blogPost__date">
          <time dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
        </p>
      </header>
      <PostComponent />
    </div>
  );
};

export default BlogPostPage;
