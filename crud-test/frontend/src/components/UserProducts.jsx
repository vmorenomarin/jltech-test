import React, { useState } from "react";
import moment from "moment";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { UpdateProduct } from "./UpdateProduct";

export const UserProducts = (props) => {
  const initialProductData = {
    name: "",
    code: "",
    price: "",
    user: "",
    stock: "",
    category: "",
    img: "",
  };
  const [productData, setProductData] = useState({ initialProductData });
  const [loading, setLoading] = useState(false);

  // Define states to handle two different modal windows.

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleShowModalEdit = () => setShowModalEdit(true);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalAdd = () => setShowModalAdd(true);
  const handleCloseModalAdd = () => setShowModalAdd(false);

  const options = {
    headers: { authorization: "Bearer " + props.data[1].token },
  };
  const imgValidator = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      const img = e.target.files[0];
      // Next regular expressions, means:
      // Search pattern that begins with . (\.), that has any of this extentions (jpg or jpeg or JPG  or JPEG  or png  or PNG or svg or SVG) to the end of line ($) and ignore case (i).
      if (!/\.(jpg|jpeg|JPG|JPEG|png|PNG|svg|SVG|webp|WEBP)$/i.test(img.name)) {
        Swal.fire({
          icon: "error",
          title: "Invalid format",
          text: "Invalid file format for image that try upload.",
          timer: 1500,
        });
        e.target.value = "";
      } else {
        setProductData({
          ...productData,
          img: img,
        });
      }
    }
  };

  // const updateProduct = async (productToUpdate) => {
  //   try {
  //     setLoading(true);
  //     const { _id } = productToUpdate;
  //     const { data } = await axios.put(
  //       "/products/" + _id,
  //       productToUpdate,
  //       options
  //     );
  //     // setLoading(false);
  //     if (data.ok) {
  //       return Swal.fire({
  //         icon: "succes",
  //         title: "Product updated successfully",
  //         text: "Product information was updated.",
  //         showConfirmButton: true,
  //         timer: 1500,
  //       });
  //     }
  //     // Navigate("/user/" + props.data[1].id);
  //   } catch (error) {
  //     if (!error.response.data.ok);
  //     {
  //       return Swal.fire({
  //         icon: "error",
  //         title: "Product update not successfully",
  //         text: "Product information does not was updated.",
  //         timer: 1500,
  //       });
  //     }
  //   }
  // };

  const addProduct = async (newProduct) => {
    const newProductToAdd = {
      name: newProduct.name,
      code: newProduct.code,
      price: newProduct.price,
      user: props.data[1].id,
      stock: newProduct.stock,
      category: newProduct.category,
      img: newProduct.img,
    };
    try {
      setLoading(true);
      const { data } = await axios.post("/products/", newProductToAdd, options);
      setLoading(false);
      if (data.ok) {
        return Swal.fire({
          icon: "succces",
          title: "Are you sure?",
          text: data.message,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.data.ok);
      return Swal.fire({
        icon: "error",
        title: "Cannot delete product.",
        text: error.response.data.message,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const deleteProduct = async (productToDeleteId) => {
    const { _id } = productToDeleteId;
    try {
      setLoading(true);
      const { data } = await axios.delete("products/" + _id, options);
      if (data.ok) {
        return Swal.fire({
          icon: "warning",
          title: "Are you sure?",
          text: "You won't revert this!",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(data.message);
          }
        });
      }
    } catch (error) {
      if (!error.response.data.ok);
      return Swal.fire({
        icon: "error",
        title: "Cannot delete product.",
        text: error.response.data.message,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div id="userProduct" className="container mt-3">
      <div className="d-flex column justify-content-between justify-aling-center">
        <h1 className="display-6">My Products</h1>
        <div>
          <button
            className="btn btn-success"
            onClick={(e) => {
              handleShowModalAdd();
            }}
          >
            <i className="fa fa-add"></i> Add Product
          </button>
        </div>
      </div>
      <div className="row row-cols-2 justify-content-evenly">
        {props.data[0].map((product) => (
          // console.log(product),
          <div className="col-md-3 col-sm-4 m-2 p-0" key={product._id}>
            <div className="card card-product">
              <img
                src={product.img}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <div className="card-title">
                  <h6>{product.name}</h6>
                  <span className="small">{product.code}</span>
                </div>
                <span className="fw-bold">Updated:</span>
                <p className="small">
                  {moment(product.updatedAt).format("L H:mm:ss")}
                </p>
                <span className="fw-bold">Created:</span>
                <p className="small">
                  {moment(product.createdAt).format("L H:mm:ss")}
                </p>
              </div>
              <div className="d-flex flex-row justify-content-evenly mb-2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // data-bs-placement="top"
                  title="Edit product"
                  onClick={() => {
                    // handleShowModalEdit();
                    setProductData(product);
                  }}
                >
                  <i className="fa fa-pen"></i>
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete product"
                  onClick={(e) => deleteProduct(product)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product data </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => updateProduct(productData)}>
              <Form.Group controlId="productName">
                <Form.Label className="fw-bold">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={productData.name}
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="productPrice">
                <Form.Label className="fw-bold">Product Price</Form.Label>
                <Form.Control
                  type="number"
                  value={productData.price}
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="productCategory">
                <Form.Label className="fw-bold">Product Category</Form.Label>
                <Form.Select
                  type="text"
                  value={productData.category}
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                >
                  <option>Confitería</option>
                  <option>Aseo y Cuidado Personal</option>
                  <option>Tecnología</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="productStock">
                <Form.Label className="fw-bold">Product Category</Form.Label>
                <Form.Control
                  disabled
                  type="number"
                  value={productData.stock}
                ></Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  onClick={handleCloseModalEdit}
                  type="submit"
                  className="mt-2 "
                >
                  <i className="fa fa-save me-1"></i> Update
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal> */}

        <Modal show={showModalAdd} onHide={handleCloseModalAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                addProduct(productData);
              }}
            >
              <div className="mb-1">
                <label className="form-label">Name:</label>
                <input
                  required
                  type="text"
                  className="form-control form-control-sm"
                  id="newProductName"
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Product Code:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="newProductCode"
                  onChange={(e) =>
                    setProductData({ ...productData, code: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Price:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="newProductPrice"
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Stock:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="newProductStock"
                  onChange={(e) =>
                    setProductData({ ...productData, stock: e.target.value })
                  }
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Category:</label>
                <select
                  className="form-select form-select-sm"
                  required
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                >
                  <option defaultValue>Open this select menu</option>
                  <option>Confitería</option>
                  <option>Aseo y Cuidado Personal</option>
                  <option>Tecnología</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Product picture</label>
                <input
                  className="form-control form-control-sm"
                  name="img"
                  id="newProductCategory"
                  type="file"
                  onChange={(e) => imgValidator(e)}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleCloseModalAdd}
                >
                  <i className="fa fa-plus me-1"></i> Add
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div className="moda fade" id="exampleModal">
          {/* <UpdateProduct product={[productData, options]} /> */}
        </div>
      </div>
    </div>
  );
};
