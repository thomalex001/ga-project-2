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
            Character list
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
