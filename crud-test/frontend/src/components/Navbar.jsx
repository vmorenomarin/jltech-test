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
                  <NavLink className="nav-link" to={"/user/"+user.id}>
                    <i className="fa-solid fa-user"></i> {user.name}
                  </NavLink>
                </li>
                {user.role === "Admin" ? (
                  <li className="nav-item me-3">
                    <NavLink className="nav-link" to={"/admin"}>
                      <i className="fa-solid fa-tools"></i> Admin Panel
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item me-3 dropdown">
                    <NavLink
                      to={"/"}
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      id="actionsDrop"
                    >
                      <i className="fa-solid fa-tools"></i> Actions
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="actionsDrop">
                      <li>
                        <a
                          href="/user/products/"
                          className="dropdown-item"
                          toggle="false"
                        >
                          <i className="fa-solid fa-pen"></i> Edit Products
                        </a>
                      </li>
                      <li>
                        <a href="/user/" className="dropdown-item">
                          <i className="fa-solid fa-plus"></i> Add Products
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
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
