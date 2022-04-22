import React, { useEffect, useState } from "react";
import { UserSidebar } from "./UserSidebar";
import { useUser } from "../context/UserContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

export const User = () => {
  const [currentUser, setCurrentUser] = useState([]);
const {id} = useParams()
const { user } = useUser();
console.log(id, user.id)
  const options = { headers: { authorization: "Bearer " + user.token } };

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/user/u/" + id, options);
      setCurrentUser(data.data)
    } catch (error) {
      if (!error.response.data.ok) {
        return console.log(error.response.data.message)
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container d-flex">
      <div className="border border-danger rounded p-3 mt-2 col-4 col-sm-4">
        <div className="card">
          <img src={currentUser.img} className="card-img-top" alt={currentUser.name}></img>
          <div className="card-header">
            {currentUser.name} {currentUser.lastname}
          </div>
          <div className="card-body"></div>
        </div>
      </div>
      <div className="border border-danger rounded p-3 mt-2 col-8 col-sm-8">
        <div>Casa</div>
      </div>
    </div>
  );
};
