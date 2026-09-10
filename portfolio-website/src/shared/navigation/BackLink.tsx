import { Link } from "react-router-dom";
import { useBackTarget } from "./useBackTarget";
import { backTargets } from "./backTargets";
import "./BackLink.css";

interface BackLinkProps {
  /** Where to go when the page was opened directly, with no in-app history. */
  fallback: string;
}

const BackLink = ({ fallback }: BackLinkProps) => {
  const to = useBackTarget(fallback);

  return (
    <Link className="back-link" to={to}>
      <span aria-hidden="true">←</span> Back to {backTargets[to]}
    </Link>
  );
};

export default BackLink;
