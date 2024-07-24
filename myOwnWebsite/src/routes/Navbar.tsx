import { NavLink } from 'react-router-dom';
import '/src/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-name">Mark Ebel</div>
      <ul>
        <li><NavLink to="./" end activeClassName="active">Home!</NavLink></li>
        <li><NavLink to="HireMe" activeClassName="active">About</NavLink></li>
        <li><NavLink to="Blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="Salary" activeClassName="active">Salary History</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
