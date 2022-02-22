import React from "react";
import { Link } from "react-router-dom";
import { Products } from "./Products";

export const Register = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 d-flex">
          <div className="col-7">
            <div className="header-2">
              <h1 className="fw-bold">Market Store</h1>
              <h3>Buy for one, buy for everyone!</h3>
            </div>
            <img
              src={"assets/imgs/Finance_professional.png"}
              alt=""
              className="img-fluid"
            />
          </div>

          {/* Begin Register card  */}
          <div className="col-5 p-2">
            <div className="card card-widget">
              <div className="card-header fw-bold">
                <div className="row justify-content-evenly align-items-center">
                  <div className="col-6">
                    Register <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <div className="col-6 small">
                    Has account?
                    <a href="/login"> Login</a>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <form action="onsubmit">
                  <label className="form-label fw-bold">Name:</label>
                  <i>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      required
                      autoFocus
                      placeholder="Jhon"
                    />
                  </i>
                  <label className="form-label fw-bold mt-2">Lastname:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastname"
                    required
                    placeholder="Doe"
                  />
                  <label className="form-label fw-bold mt-2">E-mail:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    placeholder="Example: mail@mail.com."
                  />
                  <label className="form-label fw-bold mt-2">
                    Phone number:
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="inputPhone"
                    required
                    placeholder="573008886644"
                  />
                  <label className="form-label fw-bold mt-2">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                    placeholder="Type your password"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* Ends register card */}
        </div>
      </div>
      <Products />
    </div>
  );
};
