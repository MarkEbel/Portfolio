import { Link, useLocation } from "react-router-dom";
import "./ContentCard.css";

interface ContentCardProps {
  title: string;
  href: string;
  image: string;
  description: string;
  date?: string;
  dateTime?: string;
  internal?: boolean;
}

const ContentCard = ({
  href,
  description,
  title,
  image,
  date,
  dateTime,
  internal = false,
}: ContentCardProps) => {
  const { pathname } = useLocation();
  const content = (
    <>
      <img src={image} alt={title} />
      <div className="content-card__body">
        <h2>{title}</h2>
        {date && (
          <p className="content-card__date">
            <time dateTime={dateTime}>{date}</time>
          </p>
        )}
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <section className="content-card">
      {internal ? (
        // Record the origin so the destination's back link returns here.
        <Link
          className="content-card__link"
          to={href}
          state={{ from: pathname }}
        >
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
