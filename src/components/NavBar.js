import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mnc py-lg-4">
        <div className="container-fluid f">
          <a className="navbar-brand" href="/">
            <img src="./assets/logo.png" className="logo top-logo" alt="logo"></img>
          </a>
          <button
            className="navbar-toggler tgl ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto px-5">
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/">Home</Link>
              </li>
              <li className="nav-item px-4 gimme-margin-top">
                <a className="Link" href="/bharathanatyam-and-drawing">Bharathanatyam & Drawing</a>
              </li>
              {/* <li className="nav-item px-4 gimme-margin-top">
              <a className="Link" href="/drawing">Drawing</a>
              </li> */}
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
