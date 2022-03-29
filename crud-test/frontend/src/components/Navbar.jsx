import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Navbar = () => {
  const { user, exit } = useUser();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark px-2 bg-dark">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/
          "
          >
            Market Store
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
            {!user.login ? (
              <ul className="navbar-nav ms-auto text-end">
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/login">
                    <i className="fa-solid fa-right-to-bracket"></i> Login
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/register">
                    <i className="fa-solid fa-user-plus"></i> Register
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto text-end">
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to="/">
                    <i className="fa-solid fa-user"></i> {user.name}
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink
                    className="nav-link"
                    to={user.role === "Admin" ? "/admin" : "/"}
                  >
                    <i className="fa-solid fa-tools"></i> Actions
                  </NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className="nav-link" to={"/"} onClick={() => exit()}>
                    <i className="fa-solid fa-close"></i> Exit
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
