import ContentCard from "../../shared/components/ContentCard";
import Subsection from "../../shared/components/Subsection";
import { formatBlogDate } from "./formatBlogDate";
import { blogs } from "./posts";

interface BlogSectionProps {
  limit?: number;
}

const BlogSection = ({ limit }: BlogSectionProps) => (
  <>
    {blogs.slice(0, limit).map((post) => (
      <Subsection id={post.slug} key={post.slug}>
        <ContentCard
          title={post.cardTitle}
          image={post.image}
          description={post.description}
          href={post.href}
          date={formatBlogDate(post.publishedAt)}
          dateTime={post.publishedAt}
          internal={true}
        />
      </Subsection>
    ))}
  </>
);

export default BlogSection;
