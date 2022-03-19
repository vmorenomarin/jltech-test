import React from "react";
import { AdminSidebar } from "./AdminSidebar";

export const Admin = () => {
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100">
      <AdminSidebar />
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          Select some from side menu.
        </div>
      </div>
    </div>
  );
};
