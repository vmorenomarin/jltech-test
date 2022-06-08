import React, { useState } from "react";
import moment from "moment";
import { Button, Form, Modal } from "react-bootstrap";

export const UserProducts = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const updateProduct = async (productToUpdate) => {
    try {
      setLoading(true);
    } catch (error) {}
  };

  return (
    <div id="userProduct" className="container mt-3">
      <h1 className="display-6">My Products</h1>
      <div className="row row-cols-2 justify-content-evenly">
        {props.products.map((product) => (
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
                    handleShow();
                    setProduct(product);
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product data </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => updateProduct(product)}>
              <Form.Group controlId="productName">
                <Form.Label className="fw-bold">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="productPrice">
                <Form.Label className="fw-bold">Product Price</Form.Label>
                <Form.Control
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="productCategory">
                <Form.Label className="fw-bold">Product Category</Form.Label>
                <Form.Select
                  type="text"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
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
                  value={product.stock}
                ></Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  onClick={handleClose}
                  type="submit"
                  className="mt-2 "
                >
                  <i className="fa fa-save me-1"></i> Save Changes
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
