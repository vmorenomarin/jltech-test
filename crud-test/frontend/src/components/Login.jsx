import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "./Products";
import { useUser } from "./context/userContext";

export const Login = () => {
  const initialData = { email: "", password: "" };
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialData);

  const { loading, loginUser } = useUser();

  const login = (e) => {
    e.preventDefault();
    const user = userData;
    loginUser(user, navigate);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-md-6 col-12 col-lg-8">
            <div className="header-2">
              <h1 className="fw-bold">Market Store</h1>
              <h3>Buy for one, buy for everyone!</h3>
            </div>
            <div>
              <img
                src={"assets/imgs/Finance_professional.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          {/* Begin Register card  */}
          <div className="col-md-6 col-12 col-lg-4">
            <div className="card card-widget">
              <div className="card-header fw-bold">
                <div className="row justify-content-evenly align-items-center">
                  <div className="col-6">
                    Login <i className="fa-solid fa-right-to-bracket"></i>
                  </div>
                  <div className="col-6 small">
                    Has not account?
                    <a href="/register"> Register</a>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <form onSubmit={login}>
                  <label className="form-label fw-bold mt-2">E-mail:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    placeholder="Example: mail@mail.com."
                    onChange={(e) => setUserData.email(e.target.value)}
                    value={userData.email}
                  />
                  <label className="form-label fw-bold mt-2">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                    placeholder="Type your password"
                    onChange={(e) => {
                      setUserData.password(e.target.value);
                    }}
                    value={userData.password}
                  />
                  <a href="/" className="btn btn-warning form-control mt-3">
                    Login
                  </a>
                </form>
              </div>
            </div>
          </div>
          {/* Ends Login card */}
        </div>
      </div>
      <hr />
      <Products />
    </div>
  );
};
