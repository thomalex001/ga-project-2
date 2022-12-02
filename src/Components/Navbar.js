import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/list" className="navbar-item">
            Characters List
          </Link>
          <Link to="/episodes" className="navbar-item">
            Episodes List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
