import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AdminSidebar } from "./AdminSidebar";
import { useUser } from "./../../context/UserContext";
import { Link } from "react-router-dom";

export const AdminUsersView = () => {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = { headers: { authorization: "Bearer " + user.token } };

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/user/", options);
      setUsers(data.data);
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
    getUsers();
  }, [getUsers]);
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100 ">
      <AdminSidebar img={user.img}/>
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          <h4>User list</h4> 
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th className="text-center"> Details</th>
              </tr>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>#</th>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td className="text-center"><Link to={"./"+user._id}> <i className="fa fa-user" ></i> </Link></td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
