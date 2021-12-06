import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
