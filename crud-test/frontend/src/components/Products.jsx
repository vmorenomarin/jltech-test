import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Products = () => {
  return (
    <div className="container mt-3">
      <h2>Offers for you</h2>
      <div className="row row-cols-2 justify-content-around">
        <Link to="/product" className="col-lg-3 col-xl-2 col-md-4 col-sm-5 m-2 p-0 text-decoration-none text-reset">
          <div className="card card-product">
            <img
              src={"assets/imgs/jabon.jpeg"}
              class="card-img-top"
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
              <a href="#" class="btn btn-primary btn-details my-1">
                <i class="fa-solid fa-cart-plus"></i> Car
              </a>
              <a href="/product" class="btn btn-primary btn-cart my-1">
                <i class="fa-solid fa-circle-info"></i> See</a>
            </div>
          </div>
        </Link>
        <div className="card col-lg-3 col-xl-2 col-md-4 col-sm-5 card-product m-2 p-0">
          <img
            src={"assets/imgs/jabon.jpeg"}
            class="card-img-top"
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
            <a href="#" class="btn btn-primary btn-details my-1">
              <i class="fa-solid fa-cart-plus"></i> Car
            </a>
            <a href="#" class="btn btn-primary btn-cart my-1">
              <i class="fa-solid fa-circle-info"></i> See</a>
          </div>
        </div>
        <div className="card col-lg-3 col-xl-2 col-md-4 col-sm-5 card-product m-2 p-0">
          <img
            src={"assets/imgs/jabon.jpeg"}
            class="card-img-top"
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
            <a href="#" class="btn btn-primary btn-details my-1">
              <i class="fa-solid fa-cart-plus"></i> Car
            </a>
            <a href="#" class="btn btn-primary btn-cart my-1">
              <i class="fa-solid fa-circle-info"></i> See</a>
          </div>
        </div>
        <div className="card col-lg-3 col-xl-2 col-md-4 col-sm-5 card-product m-2 p-0">
          <img
            src={"assets/imgs/jabon.jpeg"}
            class="card-img-top"
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
            <a href="#" class="btn btn-primary btn-details my-1">
              <i class="fa-solid fa-cart-plus"></i> Car
            </a>
            <a href="#" class="btn btn-primary btn-cart my-1">
              <i class="fa-solid fa-circle-info"></i> See</a>
          </div>
        </div>
        <div className="card col-lg-3 col-xl-2 col-md-4 col-sm-5 card-product m-2 p-0">
          <img
            src={"assets/imgs/jabon.jpeg"}
            class="card-img-top"
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
            <a href="#" class="btn btn-primary btn-details my-1">
              <i class="fa-solid fa-cart-plus"></i> Car
            </a>
            <a href="#" class="btn btn-primary btn-cart my-1">
              <i class="fa-solid fa-circle-info"></i> See</a>
          </div>
        </div>
      </div>
    </div>
  );
};
