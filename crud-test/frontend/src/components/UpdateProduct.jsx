import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UpdateProduct = (props) => {
  const [productData, setProductData] = useState(props[0]);
  const options = props[1];

  const updateProduct = async (productToUpdate) => {
    try {
      // setLoading(true);
      const { _id } = productToUpdate;
      const { data } = await axios.put(
        "/products/" + _id,
        productToUpdate,
        options
      );
      // setLoading(false);
      if (data.ok) {
        return Swal.fire({
          icon: "succes",
          title: "Product updated successfully",
          text: "Product information was updated.",
          showConfirmButton: true,
          timer: 1500,
        });
      }
      // Navigate("/user/" + props.data[1].id);
    } catch (error) {
      if (!error.response.data.ok);
      return Swal.fire({
        icon: "error",
        title: "Product update not successfully",
        text: "Product information does not was updated.",
        timer: 1500,
      });
    }
  };

  return (
    <div className="modal-fade" id="updateProductModal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit product data</h5>
            <button
              className="btn-close"
              type="close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                updateProduct(productData);
              }}
            >
              <div className="mb-1">
                <label htmlFor="productName" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  required
                  className="form-control form-control-sm"
                  id="productName"
                  value={productData.name}
                  onChage={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productCode" className="form-label">
                  Code
                </label>
                <input
                  type="text"
                  required
                  className="form-control form-contol-sm"
                  id="productCode"
                  value={productData.code}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      code: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productPrice" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="prouctPrice"
                  required
                  className="form-control form-control-sm"
                  value={productData.price}
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productStock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  id="productPrice"
                  className="form-control form-control-sm"
                  value={productData.stock}
                  disabled
                />
              </div>
              <div className="mb-1">
                <label htmlFor="productCategory" className="form-label">
                  Category
                </label>
                <select
                  id="productCategory"
                  required
                  className="form-select form-select-sm"
                  type="text"
                >
                  <option defaultValue>Click and select a categoy</option>
                  <option>Confitería</option>
                  <option>Aseo y Cuidado Personal</option>
                  <option>Tecnología</option>
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-success"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-save"></i> Update product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
