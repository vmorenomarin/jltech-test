import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUserInfo = (props) => {
  let navigate = useNavigate();
  // const id = props.user.id;
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const options = { headers: { authorization: "Bearer " + props.user.token } };

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/user/u/" + id, options);
      setUserData(data.data);
    } catch (error) {
      if (!error.response.data.ok) {
        return error.response.data.message;
      }
    }
  };

  useEffect(() => {
    getUserData(id);
  }, []);

  const updateUserInfo = async (userData) => {
    try {
      // setLoading(true);
      const { data } = await axios.put("/user/" + id, userData, options);
      // setLoading(false);
      if (data.ok) {
        return Swal.fire({
          icon: "succes",
          title: "User information",
          text: "User information was updated.",
          showConfirmButton: true,
          timer: 1500,
        });
      }
      console.log(id);
      navigate("/user/" + id)
    } catch (error) {
      if (!error.response.data.ok);
      return Swal.fire({
        icon: "error",
        title: "User update not successfully",
        text: "USer information does not was updated.",
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      <div className="card mt-3 col-4">
        <div className="card-header bg-dark">
          <h3 className="text-white">Update user data</h3>
        </div>
        <div className="card-body">
          <form
            onSubmit={(e) => {
              updateUserInfo(userData);
            }}
          >
            <div className="mb-1">
              <label htmlFor="userName" className="form-label">
                Name
              </label>
              <input
                type="text"
                required
                className="form-control form-control-sm"
                id="userName"
                value={userData.name}
                onChage={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-1">
              <label htmlFor="userLastname" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                required
                className="form-control form-control-sm"
                id="userLastname"
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    lastname: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-1">
              <label htmlFor="userEmail" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="userEmal"
                required
                className="form-control form-control-sm"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-1">
              <label htmlFor="userRole" className="form-label">
                Role
              </label>
              <input
                type="text"
                id="userRol"
                className="form-control form-control-sm"
                value={userData.role}
                disabled
              />
            </div>
            <div className="mb-1">
              <label htmlFor="userPhone" className="form-label">
                Phone number
              </label>
              <input
                type="number"
                id="userPhone"
                className="form-control form-control-sm"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary my-1"
                type="submit"
              >
                <i className="fa-solid fa-save"></i> Update user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
