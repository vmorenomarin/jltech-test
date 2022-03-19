import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AdminSidebar } from "./AdminSidebar";

export const AdminUsersView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/user/");
      console.log(data);
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
      <AdminSidebar />
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3"></div>
      </div>
    </div>
  );
};
