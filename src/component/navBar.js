import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#FAF8ED",
      }}
    >
      <div className="container">
        <a className="navbar-brand nav-link-item head-name" href="">
          Samundra Karki
        </a>
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link-item">
              <NavLink
                className="nav-link pl0"
                activeClassName="active-nav"
                to="/"
              >
                About
              </NavLink>
            </li>
            {/* <li className="nav-item nav-link-item">
              <NavLink
                className="nav-link"
                activeClassName="active-nav"
                to={`/projects`}
              >
                Projects
              </NavLink>
            </li> */}
            <li className="nav-item nav-link-item">
              <NavLink
                className="nav-link"
                activeClassName="active-nav"
                to="/lr"
              >
                Experience
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
