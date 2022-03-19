import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div
      id="aside-container"
      className="d-flex flex-column align-items-center align-items-sm-start col-2 col-sm-2"
    >
      <div className="dropdown">
        <div
          className="btn d-flex align-items-center dropdown-toggle"
          id="dropdownMenuButton1"
          type="button"
          data-bs-toggle="dropdown"
        >
          <img
            className="img-fluid rounded-circle w-25 d-none d-md-inline"
            type="button"
            src={"https://github.com/mdo.png"}
            alt="Admin"
          />
          <span className="ms-2 text-white">Admin</span>
        </div>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      <div className="btn-group-vertical d-block " role="group">
        <Link
          to="/admin/"
          type="button"
          className="btn btn-outline-secondary d-flex"
        >
          <i className="fa-solid fa-home"></i>
          <span className="d-none d-md-inline ms-2 ">Home</span>
        </Link>
        <Link
          to="/admin/users/"
          type="button"
          className="btn btn-outline-secondary d-flex"
        >
          <i className="fa-solid fa-id-card-clip"></i>
          <span className="d-none d-md-inline ms-2">Users</span>
        </Link>
        <button type="button" className="btn btn-outline-secondary">
          <i className="fa fa-users"></i>
          <span className="d-none d-md-inline ms-2">Customers</span>
        </button>
        <button type="button" className="btn btn-outline-secondary d-flex">
          <i className="fa-solid fa-file-invoice"></i>
          <span className="d-none d-md-inline ms-2">Invoices</span>
        </button>
      </div>
    </div>
  );
};
