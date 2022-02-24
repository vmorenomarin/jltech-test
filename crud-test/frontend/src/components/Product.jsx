import React from "react";
import { Products } from "./Products";

export const Product = () => {
  return (
    <div className="container justify-content-center">
      <div className="header-2 mt-3">
        <h1 className="fw-bold">Market Store</h1>
        <h3>Buy for one, buy for everyone!</h3>
      </div>
      <div className="row bg-white mt-3 mx-auto rounded-2 justify-content-around p-3 col-lg-10 col-md-12">
        <div className=" col-md-6 col-lg-7 d-flex align-items-center">
          <div>
            <img
              src={"assets/imgs/shampoo.jpg"}
              alt="Shampoo Tío Nacho"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-5 border border-1 rounded-3 p-4 h-100">
          <h3>Product Descriptiopn</h3>
          <span class="badge rounded-pill text-warning border border-warning">
            Disponibilidad 142
          </span>
          <h2 className="mt-3">$30000</h2>
          <p className="text-success">
            {" "}
            <i class="fa-solid fa-truck-fast"></i> Envío acordado con el
            vendedor
          </p>
          <div className="card mb-2">
            <table class="table table-sm table-striped rounded-4 rounded-1">
              <tbody>
                <tr>
                  <th scope="row">Product</th>
                  <td>Shampoo Tío Nacho</td>
                </tr>
                <tr>
                  <th scope="row">Vendor</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="" className="btn btn-warning d-block mb-2">
            Comprar
          </a>
          <a href="" className="btn btn-success d-block mb-2b btn-cart">
            Carrito
          </a>
        </div>
      </div>
      <hr />
      <Products />
    </div>
  );
};
