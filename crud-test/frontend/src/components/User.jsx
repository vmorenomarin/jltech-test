import React, { useCallback, useEffect, useState } from "react";
import { UserProducts } from "./UserProducts";
import { useUser } from "../context/UserContext";
// import Swal from "sweetalert2";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const User = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [userProducts, setUserProducts] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  const options = { headers: { authorization: "Bearer " + user.token } };

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/user/u/" + id, options);
      setCurrentUser(data.data);
    } catch (error) {
      if (!error.response.data.ok) {
        return console.log(error.response.data.message);
      }
    }
  };

  const getUserProducts = async () => {
    try {
      const { data } = await axios.get("/products/user/" + id, options);
      setUserProducts(data.data);
    } catch (error) {
      if (!error.response.data.ok) {
        return console.log(error.response.data.message);
      }
    }
  };
  // getUserData();
  // getUserProducts();

  useEffect(() => {
    getUserData();
    getUserProducts();
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      id="userContainer"
    >
      <div className="card mt-3" style={{ maxWidth: "700px" }}>
        <div className="row g-1">
          <div className="col-md-4 col-sm-8">
            <img
              src={currentUser.img}
              className="img-fluid"
              alt={currentUser.name + " " + currentUser.lastname}
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="col-md-8 col-sm-8">
            <div className="card-body">
              {currentUser.name} {currentUser.lastname}
              <h5 className="card-title "></h5>
              <div className="card-text">
                <p className="card-text">
                  <i className="fa fa-envelope me-2"></i>
                  {currentUser.email}
                </p>
                <p className="card-text ">
                  <i className="fa-regular fa-address-card me-2"></i>
                  {currentUser.role}
                </p>
                <p className="card-text">
                  <i className="fa fa-phone me-2"></i>
                  {currentUser.phone}
                </p>
                <div className="d-flex justify-content-evenly  flex-wrap">
                  <Link
                    to={"/user/update/" + id}
                    className="btn btn-warning my-1"
                    type="submit"
                  >
                    <i className="fa fa-save"></i> Update info
                  </Link>

                  <button className="btn btn-danger btn-sm m-1">
                    <i className="fa fa-key me-2"></i>Change password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserProducts data={[userProducts, user]} />
    </div>
  );
};
