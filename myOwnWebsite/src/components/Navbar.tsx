import { NavLink } from 'react-router-dom';
import '/src/css/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-name">Mark Ebel</div>
      <ThemeToggle />
      <ul>
        <li><NavLink to="./" end>Home!</NavLink></li>
        <li><NavLink to="AboutMe">About me</NavLink></li>
        <li><NavLink to="Blog">Blog</NavLink></li>
        <li><NavLink to="Salary">Salary History</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
