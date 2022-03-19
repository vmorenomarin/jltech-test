import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();
const initialState = { login: false, name: "", token: "", id: "", role: "" };

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
      const { data } = await axios.post("user/login", user);
      setLoading(false);
      if (data.ok) {
        const userLogin = {
          login: true,
          name: data.data.name,
          token: data.data.token,
          id: data.data.id,
          role: data.data.role,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        userLogin.role === "Admin" ? navigate("/admin") : navigate("/products");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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

  const registerUser = async (user, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post("user/register", user);
      setLoading(false);
      if (data.ok) {
        const userLogin = {
          login: true,
          name: data.data.name,
          token: data.data.token,
          id: data.data.id,
          role: data.data.role,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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

  const exit = () => {
    localStorage.removeItem("user");
    setUser(initialState);
  };

  const value = {
    user,
    loginUser,
    registerUser,
    exit,
    loading,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser error.");
  }
  return context;
}
