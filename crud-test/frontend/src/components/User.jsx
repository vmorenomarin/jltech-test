import React, { useEffect, useState } from "react";
import { UserProducts } from "./UserProducts";
import { useUser } from "../context/UserContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

export const User = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  console.log(id, user.id);
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
      const {data} = await axios.get
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      id="userContainer"
    >
      <div class="card mt-3" style={{ maxWidth: "700px" }}>
        <div class="row g-1">
          <div class="col-md-4 col-sm-8">
            <img
              src={currentUser.img}
              class="img-fluid"
              alt={currentUser.name + " " + currentUser.lastname}
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div class="col-md-8 col-sm-8">
            <div class="card-body">
              {currentUser.name} {currentUser.lastname}
              <h5 class="card-title "></h5>
              <p class="card-text">
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
                <hr />
                <div className="d-flex justify-content-evenly  flex-wrap">
                  <button className="btn btn-warning btn-sm m-1">
                    <i className="fa fa-pen me-2"></i>Edit my info
                  </button>
                  <button className="btn btn-danger btn-sm m-1">
                    <i className="fa fa-key me-2"></i>Change password
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <UserProducts products={"..."} />
    </div>
  );
};
