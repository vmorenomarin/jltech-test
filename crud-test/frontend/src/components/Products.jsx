import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { Loading } from "./Loading";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/products/");
      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmartionButton: false,
          timer: 1000,
        });
      }
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="container mt-3">
      <h2>Offers for you</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="row row-cols-2 justify-content-around">
          {products.map((product) => (
            <div
              className="col-lg-3 col-xl-2 col-md-4 col-sm-5 m-2 p-0 text-decoration-none text-reset"
              key={product._id}
            >
              <div className="card card-product">
                <img
                  src={product.img}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <hr />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="card-text">
                    <i className="fa-solid fa-dollar"></i> {product.price}
                  </div>
                </div>
                <div className="card-footer text-center d-flex justify-content-evenly flex-wrap">
                  <Link to="/" className="btn btn-warning my-1">
                    <i className="fa-solid fa-cart-plus"></i> Car
                  </Link>
                  <Link
                    to={"/product/"+product._id}
                    className="btn btn-primary my-1"
                  >
                    <i className="fa-solid fa-circle-info"></i> See
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
