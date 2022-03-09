import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Products } from "./Products";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products/p/" + id);
      setProduct(data.data);
      var vendor = product.user.name;
      console.log(vendor);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container justify-content-center">
      <div className="header-2 mt-3">
        <h1 className="fw-bold">Market Store</h1>
        <h3>Buy for one, buy for everyone!</h3>
      </div>
      <div className="row bg-white mt-3 mx-auto rounded-2 justify-content-around p-3 col-lg-10 col-md-12">
        <div className=" col-md-6 col-lg-7 d-flex align-items-center">
          <div>
            <img src={product.img} alt={product.name} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-lg-5 border border-1 rounded-3 p-4 h-100">
          <h3>{product.name}</h3>
          <span className="badge rounded-pill text-warning border border-warning">
            Disponibilidad {product.stock}
          </span>
          <h2 className="mt-3">{product.price}</h2>
          <p className="text-success">
            <i className="fa-solid fa-truck-fast"></i> Envío acordado con el
            vendedor
          </p>
          <div className="card mb-2">
            <table className="table table-sm table-striped rounded-4 rounded-1">
              <tbody>
                <tr>
                  <th scope="row">Product</th>
                  <td>{product.name}</td>
                </tr>
                {/* <tr>
                  <th scope="row">Vendor</th>
                  <td>{vendor}</td>
                </tr> */}
                <tr>
                  <th scope="row">Category</th>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex row">
            <button type="submit" className="btn btn-warning d-block mb-2">
              Buy
            </button>
            <button
              type="submit"
              className="btn btn-success d-block mb-2b btn-cart"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
