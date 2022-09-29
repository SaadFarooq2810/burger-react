import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar-expand-lg navbar navbar-dark ">
        <div className="container-fluid ms-4">
          <Link className="navbar-brand">Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
