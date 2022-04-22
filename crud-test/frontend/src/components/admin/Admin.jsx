import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { useUser } from "./../../context/UserContext";

export const Admin = () => {
  const { user } = useUser();
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100">
      <AdminSidebar img={user.img}/>
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          Select some from side menu.
        </div>
      </div>
    </div>
  );
};
