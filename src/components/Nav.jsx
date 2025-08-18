import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-primary text-light h-20 flex items-center justify-between px-6">
      <div className="w-auto">
        <Link to="/">
          <img
            src={logo}
            alt="Syntax Scholars Logo"
            className="h-16 md:h-24 lg:h-32 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="mt-0 flex items-center gap-6 list-none">
        <li className="hover:text-accent cursor-pointer transition-colors">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="hover:text-accent cursor-pointer transition-colors">
          <NavLink to="/Courses" exact activeClassName="active-link">
            Courses
          </NavLink>
        </li>
        <li className="hover:text-accent cursor-pointer transition-colors">
          <NavLink to="/Contact" exact activeClassName="active-link">
            Contact
          </NavLink>
        </li>

        {/* Sign Up Button */}
        <li>
          <button className="bg-accent text-primary px-4 py-2 rounded hover:opacity-90 transition">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
