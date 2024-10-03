import { NavLink } from 'react-router-dom';
import '/src/css/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="navbar-left">
        <div className="navbar-name">Mark Ebel</div>
        <ThemeToggle />
      </div>
      <ul className="navbar-links">
        <li><NavLink to="./" end>Home</NavLink></li>
        <li><NavLink to="AboutMe">About</NavLink></li>
        <li><NavLink to="Skills">Skills</NavLink></li>
        <li><NavLink to="Projects">Projects</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
