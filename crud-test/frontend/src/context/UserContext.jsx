import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect, createContext, useContext } from "react";

const userContext = createContext();
const initialState = { login: false, name: "", token: "", id: "" };

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? initial.login && setUser(initial) : setUser(initialState);
  }, []);

  const loginUser = async (user, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/user/login", user);
      setLoading(false);
      if (data.ok) {
        const userLogin = {
          login: true,
          name: data.name,
          token: data.token,
          id: data.id,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate.push("/");
      }
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
  };
};
