import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${
          props.value === "true" ? "dark" : "body-tertiary"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong className={`text-${props.value === "true" ? "light" : ""}`}>
              ToDoList
            </strong>
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item ms-5">
                <Link to={"/"} className="text-decoration-none">
                  <strong
                    className={`text-${
                      props.value === "true" ? "light" : "dark"
                    }`}
                  >
                    Home
                  </strong>
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to={"/about"} className="text-decoration-none">
                  <strong
                    className={`text-${
                      props.value === "true" ? "light" : "dark"
                    }`}
                  >
                    About
                  </strong>
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to={"/contact"} className="text-decoration-none">
                  <strong
                    className={`text-${
                      props.value === "true" ? "light" : "dark"
                    }`}
                  >
                    Contact
                  </strong>
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to={"/Card"} className="text-decoration-none">
                  <strong
                    className={`text-${
                      props.value === "true" ? "light" : "dark"
                    }`}
                  >
                    Cards
                  </strong>
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to={"/logout"} className="text-decoration-none">
                  <strong
                    className={`text-${
                      props.value === "true" ? "light" : "dark"
                    }`}
                  >
                    LogOut
                  </strong>
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch ms-2">
              <input
                onClick={props.handle}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                <strong
                  className={`text-${
                    props.value === "true" ? "light" : "dark"
                  }`}
                >
                  {props.value === 'true' ? "Light" : "Dark"}
                </strong>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
