import { Link, useParams } from "react-router-dom";
import BackLink from "../../shared/navigation/BackLink";
import { useBackTarget } from "../../shared/navigation/useBackTarget";
import { formatBlogDate } from "./formatBlogDate";
import { blogsBySlug } from "./posts";
import "./BlogPostPage.css";

const blogsRoute = "/Portfolio/blogs";

const BlogPostPage = () => {
  const { blogId } = useParams();
  const backTo = useBackTarget(blogsRoute);

  if (!blogId || !Object.prototype.hasOwnProperty.call(blogsBySlug, blogId)) {
    return <p>Blog post not found!</p>;
  }

  const post = blogsBySlug[blogId];
  const PostComponent = post.Component;

  return (
    <article className="blogPost">
      <BackLink fallback={blogsRoute} />
      <header className="blogPost__header">
        <h1>{post.title}</h1>
        <time className="blogPost__date" dateTime={post.publishedAt}>
          {formatBlogDate(post.publishedAt)}
        </time>
      </header>
      <PostComponent />
      {/* Reaching a post from the home preview skips the list, so keep the
          full archive one click away. */}
      {backTo !== blogsRoute && (
        <p className="blogPost__all">
          <Link to={blogsRoute}>See all blogs</Link>
        </p>
      )}
    </article>
  );
};

export default BlogPostPage;
