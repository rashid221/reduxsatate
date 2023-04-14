import React from "react";
import { useSelector } from "react-redux";

const Navbars = () => {
  const amount = useSelector(state => state.amount);
  const cart = useSelector(state => state.product);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            State bank of Corse
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
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Cart : {cart}
                </a>
              </li>
           
            </ul>
            <div>
            
              <button className="btn btn-primary" disabled={true}>
                Your Balance : {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbars;
