import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Loading } from "./Loading";

export const Products = () => {
  return (
    <div className="container mt-3">
      <h2>Offers for you</h2>
      <div className="row row-cols-2 justify-content-around">
        <div className="col-lg-3 col-xl-2 col-md-4 col-sm-5 m-2 p-0 text-decoration-none text-reset">
          <div className="card card-product">
            <img
              src={"assets/imgs/jabon.jpeg"}
              className="card-img-top"
              alt="Shampoo"
            />
            <hr />
            <div className="card-body">
              <h4 className="card-title">Jabón</h4>
              <div className="card-text">
                <i className="fa-solid fa-dollar"></i> 12000
              </div>
            </div>
            <div className="card-footer text-center d-flex justify-content-evenly flex-wrap">
              <Link to="/" className="btn btn-warning my-1">
                <i className="fa-solid fa-cart-plus"></i> Car
              </Link>
              <Link to="/product" className="btn btn-primary my-1">
                <i className="fa-solid fa-circle-info"></i> See
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
