import React from "react";

export const UserProducts = (props) => {
  return (
    <div id="userProduct" className="row">
      <h1 className="display-6">My Products</h1>
      <div className="container rounded bg-white p-3">
        {/* {props.products.map((product) => ( */}
          <div className="card col-3">
            <div className="card-header">
              <h6>{"product.name"}</h6>
              <span className="small">{"product.code"}</span>
            </div>
            <img src={"product.img"} alt={"product.name"} className="card-img-top" />
            <div className="card-body">
              <p className="small">
                <span className="fw-bold">Updated:</span> {"product.updatedAt.$date"}
              </p>
              <p className="small">
                <span className="fw-bold">Created:</span> {"product.createdAt.$date"}
              </p>
            </div>
            <div className="card-footer d-flex flex-row justify-content-evenly">
              <button
                className="btn btn-sm btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Edit product"
              >
                <i className="fa fa-pen"></i>
              </button>
              <button
                className="btn btn-sm btn-danger"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete product"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};
