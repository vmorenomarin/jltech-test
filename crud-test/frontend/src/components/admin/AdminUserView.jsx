import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AdminSidebar } from "./AdminSidebar";
import { useUser } from "../../context/UserContext";
import { NavLink, useParams } from "react-router-dom";
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
  const [psw, setPsw] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgFormatValidation = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];

      // Next regular expressions, means:
      // Search pattern that begins with . (\.), that has any of this extentions (jpg or jpeg or JPG  or JPEG  or png  or PNG or svg or SVG) to the end of line ($) and ignore case (i).
      if (!/\.(jpg|jpeg|JPG|JPEG|png|PNG|svg|SVG)$/i.test(img.name)) {
        Swal.fire({
          icon: "error",
          title: "Invalid format",
          text: "Invalid file format for the image that try upload.",
        });
        e.target.value = " ";
      } else {
        setUserdb({ ...userdb, nameImg: img.name });
      }
    }
  };

  const updateUser = async (userToUpdate) => {
    try {
      setLoading(true);
      const { data } = await axios.put("/user/" + id, userToUpdate, options);
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success updated info",
        text: "User information was updated.",
      });
    } catch (error) {
      if (!error.response.data.ok) {
        // return alert(error.response.data.message);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-nowrap min-vh-100 ">
      <AdminSidebar img={user.img} />
      <div className="d-flex flex-column col-10 col-sm-10">
        <div className="border border-danger rounded p-3">
          <div className="row">
            <h4>User detail</h4>
          </div>
          <div className="card bg-dark ">
            <div className="row">
              <div className="col-sm-5">
                <img
                  src={userdb.img}
                  className="card-img-top m-w-25"
                  alt={userdb.name}
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
                  onClick={handleShow}
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit user data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => updateUser(userdb)}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userdb.name}
                  onChange={(e) =>
                    setUserdb({ ...userdb, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  value={userdb.lastname}
                  onChange={(e) =>
                    setUserdb({ ...userdb, lastname: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={userdb.email}
                  onChange={(e) =>
                    setUserdb({ ...userdb, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  value={userdb.role}
                  onChange={(e) =>
                    setUserdb({ ...userdb, role: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder="Phone number"
                  value={userdb.phone}
                  onChange={(e) =>
                    setUserdb({ ...userdb, phone: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formImg">
                <Form.Label>Change profile picture</Form.Label>
                <Form.Control
                  type="file"
                  // value={userdb.nameImg}
                  // onChange={(e) => imgFormatValidation(e)}
                  onChange={(e) =>
                    setUserdb({ ...userdb, nameImg: e.target.files[0].name })
                  }
                />
              </Form.Group>

              <Button variant="primary" onClick={handleClose} type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
