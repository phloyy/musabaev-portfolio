import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-code">404</div>
      <p className="not-found-text">Page not found</p>
      <Link to="/" className="not-found-link" data-cursor-hover="true">
        Back to Home
      </Link>
    </div>
  );
}
