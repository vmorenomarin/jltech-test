import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AdminSidebar } from "./AdminSidebar";
import { useUser } from "../../context/UserContext";
import { Link, useParams } from "react-router-dom";

export const AdminUserView = () => {
  const { user } = useUser();
  const [userdb, setUserdb] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = { headers: { authorization: "Bearer " + user.token } };
  const { id } = useParams();

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/user/u/" + id, options);
      setUserdb(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100 ">
      <AdminSidebar />
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          <h4>User detail</h4>
          <div className="card bg-dark ">
            <div className="row">
              <div className="col-sm-5">
                <img src={userdb.img} className="card-img-top m-w-50" alt="..." />
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">
                    {userdb.name} {userdb.lastname}
                  </h5>
                  <p className="card-text">
                    {userdb.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
