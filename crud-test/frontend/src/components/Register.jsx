import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Loading } from "./Loading";
import { Products } from "./Products";

export const Register = () => {
  const navigate = useNavigate();

  const cInitialData = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    document: "",
  };

  const [customerData, setCustomerData] = useState(cInitialData);

  const { loading, registerUser } = useUser();

  const register = (e) => {
    e.preventDefault();
    registerUser(customerData, navigate);
  };

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
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
                  className="img-fluid mw-70"
                />
              </div>
            </div>

            {/* Begin Register card  */}
            <div className="col-md-6 col-12 col-lg-4">
              <div className="card card-widget">
                <div className="card-header fw-bold">
                  <div className="row justify-content-evenly align-items-center">
                    <div className="col-6">
                      Register <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="col-6 small">
                      Has account?
                      <NavLink to="/login"> Login</NavLink>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <form onSubmit={register}>
                    <label className="form-label fw-bold">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      required
                      placeholder="Jhon"
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          name: e.target.value,
                        })
                      }
                      value={customerData.name}
                    />
                    <label className="form-label fw-bold mt-2">Lastname:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastname"
                      required
                      placeholder="Doe"
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          lastname: e.target.value,
                        })
                      }
                      value={customerData.lastname}
                    />
                    <label className="form-label fw-bold mt-2">Document Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputDocument"
                      required
                      placeholder=""
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          document: e.target.value,
                        })
                      }
                      value={customerData.document}
                    />
                    
                    <label className="form-label fw-bold mt-2">E-mail:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      required
                      placeholder="Example: mail@mail.com."
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          email: e.target.value,
                        })
                      }
                      value={customerData.email}
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
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          phone: e.target.value,
                        })
                      }
                      value={customerData.phone}
                    />
                    <label className="form-label fw-bold mt-2">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      required
                      placeholder="Type your password"
                      onChange={(e) =>
                        setCustomerData({
                          ...customerData,
                          password: e.target.value,
                        })
                      }
                      value={customerData.password}
                    />
                    <button
                      type="submit"
                      className="btn btn-warning form-control mt-3"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Ends register card */}
          </div>
        </div>
      )}
      <hr />
      <Products />
    </div>
  );
};
