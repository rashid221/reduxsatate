import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbars = () => {
  const getShow = useSelector((state) => state.getValue);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                London Fox
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                   Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cart">
                   Cart
                </Link>
              </li>
            </ul>
            <div>
            
              
              <h3>Cart: {getShow.length}</h3>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbars;
