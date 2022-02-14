import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Nav } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-header ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            AutoMed Mechanics
          </Link>
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link" as={HashLink} to="/home#services">
                  Services
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={HashLink} to="/home#experts" className="nav-link">
                  Experts
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link "as={HashLink} to="/home#footer">
                  About
                </Nav.Link>
              </li>

              {user?.email ? (
                <h5 className="mx-3 mt-2">
                  <button className="btn btn-primary" onClick={logOut}>
                    SignOut
                  </button>
                  {user.displayName}
                </h5>
              ) : (
                <li className="nav-item ">
                  <Link className="nav-link " to="/login">
                    LogIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
