import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  //   const { user, exit } = useUser();

  return (
    <div role="navigation">
      <nav className="navbar navbar-expanded-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/
        ">
          Navbar\
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="nabvar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="navlink" to="/">
                Login
              </NavLink>
            </li>
            <li className="nav-item">Register</li>
            <li className="nav-item">Home</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
