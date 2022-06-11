import React, { useState } from "react";
import moment from "moment";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

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
      if (!/\.(jpg|jpeg|JPG|JPEG|png|PNG|svg|SVG)$/.test(img.name)) {
        Swal.fire({
          icon: "error",
          title: "Invalid format",
          text: "Invalid file format for image that try upload.",
        });
        e.target.valeue = "";
      } else {
        setProductData({
          ...productData,
          img: img,
        });
      }
    }
  };

  const updateProduct = async (productToUpdate) => {
    try {
      setLoading(true);
      const { _id } = productToUpdate;
      const { data } = await axios.put(
        "/products/" + _id,
        productToUpdate,
        options
      );
      setLoading(false);
      return Swal.fire({
        icon: "succes",
        title: "Product updated successfully",
        text: "Product information was updated.",
      });
    } catch (error) {
      // if (!error.response.data.ok);
      // {
      console.log(error);
      // }
    }
  };

  const addProduct = async (newProduct) => {
    const newProductToAdd = {
      name: newProduct.name,
      code: newProduct.code,
      price: newProduct.price,
      user: newProduct.user,
      stock: newProduct.stock,
      category: newProduct.category,
      img: newProduct.img,
    };
    try {
      setLoading(true);
      const { data } = await axios.post("/products", newProductToAdd);
      setLoading(false);
      return Swal.fire({
        icon: "success",
        title: "Product added susccessfully",
        text: `${newProduct.name} was added to your listCustomerById.`,
      });
    } catch (error) {
      console.log(error);
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
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Edit product"
                  onClick={() => {
                    handleShowModalEdit();
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
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
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
        </Modal>

        <Modal show={showModalAdd} onHide={handleCloseModalAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                addProduct(productData);
              }}
            >
              <Form.Group controlId="newProductName" className="mb-2">
                <Form.Label className="fw-bold me-2">Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  size="sm"
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="newProductCode" className="mb-2">
                <Form.Label className="fw-bold me-2">Code:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  size="sm"
                  onChange={(e) =>
                    setProductData({ ...productData, code: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="newProductPrice" className="mb-2">
                <Form.Label className="fw-bold me-2">Price:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  size="sm"
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="newProductStock" className="mb-2">
                <Form.Label className="fw-bold me-2">Stock:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  size="sm"
                  onChange={(e) =>
                    setProductData({ ...productData, stock: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="newProductCategory" className="mb-2">
                <Form.Label className="fw-bold">Product Category</Form.Label>
                <Form.Select
                  required
                  type="text"
                  size="sm"
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                >
                  <option className="text-muted">Choose a category</option>
                  <option value="1">Confitería</option>
                  <option value="2">Aseo y Cuidado Personal</option>
                  <option value="3">Tecnología</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="newProductImg" className="mb-2">
                <Form.Label className="fw-bold">Picture Product</Form.Label>
                <Form.Control
                  required
                  type="file"
                  size="sm"
                  onChange={(e) => imgValidator(e)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="success"
                  onClick={handleCloseModalAdd}
                  type="submit"
                  className="mt-2 "
                >
                  <i className="fa fa-plus me-1"></i> Add
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
