import React from "react"; 
import {Link} from 'react-router-dom'; 

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-3">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li> 
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
