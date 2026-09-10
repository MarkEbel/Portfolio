import { Link } from "react-router-dom";
import "./ContentCard.css";

interface ContentCardProps {
  title: string;
  href: string;
  image: string;
  description: string;
  internal?: boolean;
}

const ContentCard = ({
  href,
  description,
  title,
  image,
  internal = false,
}: ContentCardProps) => {
  const content = (
    <>
      <img src={image} alt={title} />
      <div className="content-card__body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <section className="content-card">
      {internal ? (
        <Link className="content-card__link" to={href}>
          {content}
        </Link>
      ) : (
        <a
          className="content-card__link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      )}
    </section>
  );
};

export default ContentCard;
