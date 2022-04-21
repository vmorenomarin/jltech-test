import React from "react";

export const UserSidebar = () => {
  return (
    <div id="userSidepanel" className="d-flex flex-column col-3 col-sm-3">
      <div class="list-group list-group-flush">
        <li class="list-group-item">
          <h4 class="fw-bold">User menu</h4>
        </li>
        <button type="button" class="list-group-item list-group-item-action">
          The current button
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          The current button
        </button>
      </div>
    </div>
  );
};
