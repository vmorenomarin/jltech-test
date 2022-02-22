import React from "react";

export const Products = () => {
  return (
    <div className="container mt-3">
      <h2>Offers for you</h2>
      <div className="row justify-content-evenly">
        <div className="card col-3 card-product">
          <img
            src={"assets/imgs/shampoo.jpg"}
            class="card-img-top"
            alt="Shampoo"
          />
          <hr />
          <div className="card-body">
            <h4 className="card-title">Shampoo</h4>
            <div className="card-text">
              <i className="fa-solid fa-dollar"></i> 12000
            </div>
          </div>
        </div>

        <div className="card col-3 card-product">
          <img
            src={"assets/imgs/desodorante.jpg"}
            class="card-img-top"
            alt="Shampoo"
          />
          <hr />
          <div className="card-body">
            <h4 className="card-title">Shampoo</h4>
            <div className="card-text">
              <i className="fa-solid fa-dollar"></i> 12000
            </div>
          </div>
        </div>
        <div className="card col-3 card-product p-0">
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
          <div className="card-footer text-center d-flex justify-content-around">
          <a href="#" class="btn btn-primary btn-details">
          <i class="fa-solid fa-cart-plus"></i> Car
          </a>
          <a href="#" class="btn btn-primary btn-cart">  <i class="fa-solid fa-circle-info"></i> See</a>
          </div>
        </div>
      </div>
    </div>
  );
};
