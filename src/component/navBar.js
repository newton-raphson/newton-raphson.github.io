import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="nav-inner">
        <NavLink className="brand" to="/">
          Samundra Karki
        </NavLink>
        <div className="nav-links">
          <div className="nav-links-box">
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
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-fun is-active" : "nav-link nav-link-fun"
            }
            to="/articles"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-fun is-active" : "nav-link nav-link-fun"
            }
            to="/hobbies"
          >
            Hobbies
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
