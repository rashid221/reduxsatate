import React from "react";
import travela from "./images/Travela.png";

function Navbar(props) {
  return (
    <div className="nav-center">
      <nav className="navbar pt-5 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          <a className="navbar-brand" style={{ width: "20%" }}>
            <img
              src={travela}
              style={{ width: "8rem", height: "2rem" }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
           
            <ul style={{boxSizing:'border-box',display:'flex',justifyContent:'flex-end',width:'80%'}} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tour
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Places
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn pt-3 pb-3 pe-5 ps-5 btn-light btn-lg">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
