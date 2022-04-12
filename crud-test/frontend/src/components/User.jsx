import React from "react";
import { UserSidebar } from "./UserSidebar";

export const User = () => {
  return (
    <div className="container-fluid d-flex flex-nowrap min-vh-100">
      <UserSidebar />
      <div className="d-flex flex-column col-9 col-sm-9">
        <div className="border border-danger rounded p-3">
          Select some from side menu.
        </div>
      </div>
    </div>
  );
};
