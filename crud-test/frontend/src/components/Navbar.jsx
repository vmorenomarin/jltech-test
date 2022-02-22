import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  //   const { user, exit } = useUser();

  return (
    <div >
      <nav className="navbar navbar-expand-md navbar-dark px-2 bg-dark">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/
          "
          >
            Navbar <i className="bi bi-user"></i>
          </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto text-end">
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/login">
                  <i class="fa-solid fa-right-to-bracket"></i> Login 
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/register">
                  <i class="fa-solid fa-user-plus"></i> Register 
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
