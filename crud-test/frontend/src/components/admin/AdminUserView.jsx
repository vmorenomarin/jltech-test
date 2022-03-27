import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AdminSidebar } from "./AdminSidebar";
import { useUser } from "../../context/UserContext";
import { Link, useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

export const AdminUserView = () => {
  const { user } = useUser();
  const [userdb, setUserdb] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = { headers: { authorization: "Bearer " + user.token } };
  const { id } = useParams();

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/user/u/" + id, options);
      setUserdb(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateUser = async (userToUpdate) => {};

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100 ">
      <AdminSidebar />
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          <h4>User detail</h4>
          <div className="card bg-dark ">
            <div className="row">
              <div className="col-sm-5">
                <img
                  src={userdb.img}
                  className="card-img-top m-w-25"
                  alt="..."
                />
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">
                    {userdb.name} {userdb.lastname}
                  </h5>
                  <p className="card-text">
                    <i className="fa fa-envelope me-2"></i>
                    {userdb.email}
                  </p>
                  <p className="card-text ">
                    <i className="fa-regular fa-address-card me-2"></i>
                    {userdb.role}
                  </p>
                  <p className="card-text">
                    <i className="fa fa-phone me-2"></i>
                    {userdb.phone}
                  </p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleShow()}
                >
                  <i className="fa fa-edit"></i> Edit
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} variant="dark">
          <Modal.Header closeButton>
            <Modal.Title>Edit user data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userdb.name}
                  onChange={(e) =>
                    setUserdb({ ...userdb, name: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={userdb.email}
                  onChange={(e) =>
                    setUserdb({ ...userdb, email: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => updateUser()}
              type="submit"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
