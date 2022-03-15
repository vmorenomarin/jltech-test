import React from "react";

export const Admin = () => {
  return (
    <div className="container-fluid bg-dark text-white ">
      <div className="row flex-nowrap">
        <div className="col-2 col-sm-2 rounded border min-vh-100  border-secondary">
          <div
            id="aside-container"
            className="d-flex flex-column align-items-center align-items-sm-start"
          >
            <div className="dropdown">
              <div
                className="btn d-flex align-items-center dropdown-toggle"
                id="dropdownMenuButton1"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  className="img-fluid rounded-circle w-25 d-none d-md-inline"
                  type="button"
                  src={"https://github.com/mdo.png"}
                />
                <span className="ms-2 ms-0 text-white">Admin</span>
              </div>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* <ul className="list-group bg-dark text-white">
              <li className="list-group-item bg-dark">
                <i className="fa-solid fa-id-card-clip"></i>
                <span className="d-none d-sm-inline"> Users</span>
              </li>
              <li className="list-group-item">
                <i className="fa fa-users"></i>
                <span className="d-none d-sm-inline"> Customers</span>
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-file-invoice"></i>
                <span className="d-none d-sm-inline"> Invoices</span>
              </li>
            </ul> */}
            <div class="btn-group-vertical d-block " role="group">
              <button type="button" class="btn btn-outline-secondary">
                <i className="fa-solid fa-id-card-clip"></i>
                <span className="d-none d-md-inline"> Users</span>
              </button>
              <button type="button" class="btn btn-outline-secondary">
                <i className="fa fa-users"></i>
                <span className="d-none d-md-inline"> Customers</span>
              </button>
              <button type="button" class="btn btn-outline-secondary">
                <i className="fa-solid fa-file-invoice"></i>
                <span className="d-none d-md-inline"> Invoices</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-10">
          <div className="border border-danger rounded min-vh-100 p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod repellat ex consequatur reprehenderit maiores quae, tempore ipsam voluptatem aperiam eum, similique a sit architecto sequi doloremque amet ipsa nemo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eum esse odio suscipit repudiandae! Non, voluptatibus neque. Iusto nihil cum beatae eaque voluptatum temporibus, soluta, porro enim animi in expedita?
          Enim et eos cum reprehenderit iusto sequi repellat? Rerum cupiditate modi suscipit, perferendis corrupti dolore error, est culpa possimus aut sint id saepe illo amet ipsa sequi eum necessitatibus? Ut.
          Soluta laborum labore repellendus sint, blanditiis porro nesciunt expedita, consequatur rerum ipsa similique excepturi veritatis laudantium. Tenetur vero repudiandae odit quaerat culpa a nisi beatae, delectus voluptate? Cum, nulla voluptate?
          Qui rerum asperiores officia possimus aperiam iure quam unde illo est! Sequi corrupti eos laudantium. Corporis, dignissimos magnam iure dolorum, exercitationem voluptatem modi voluptatum dolores debitis, atque eaque officiis eligendi.
          Voluptatibus distinctio blanditiis consequatur voluptas in consequuntur, cupiditate earum, nostrum ducimus molestiae ex laudantium, deserunt quod? Officia porro necessitatibus dolor vero quisquam. Esse ad minima, id unde facilis recusandae error?
          Neque obcaecati sapiente, ab maxime deserunt error! Corrupti voluptatem magnam vitae deserunt ipsam aperiam dolorem nulla laborum, illo sunt, qui quae inventore praesentium minus officia ad beatae eum totam doloremque!
          Ut, temporibus quis nulla vel quibusdam sed praesentium reiciendis earum! Libero nihil inventore adipisci nulla minus natus? Sequi alias praesentium maiores voluptatem voluptatibus laborum eos consectetur nisi, dolor laudantium quo.
          Expedita modi ab iure repudiandae quibusdam! Magnam, aliquid est? Iure, quod. Nulla dolores cumque fuga saepe esse dignissimos quasi dolore quisquam nostrum repellendus ex, dolor error hic iste accusantium eaque!
          Beatae pariatur unde sed tempora nemo optio quod alias laborum quasi? Eveniet, corporis vitae ipsum doloremque quasi officiis nisi aspernatur a voluptatum amet voluptates possimus incidunt, soluta quae ipsam suscipit!
          Alias similique rerum officiis voluptates quasi tempore tempora pariatur esse distinctio saepe iste libero recusandae, perspiciatis accusantium necessitatibus at doloribus laborum ipsam expedita asperiores dolor perferendis? Harum repellat reprehenderit fuga.</div>
        </div>
      </div>
    </div>
  );
};
