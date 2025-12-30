import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="nav-inner">
        <NavLink className="brand" to="/">
          Samundra Karki
        </NavLink>
        <div className="nav-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link is-active" : "nav-link"
            }
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link is-active" : "nav-link"
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link is-active" : "nav-link"
            }
            to="/lr"
          >
            Experience
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
