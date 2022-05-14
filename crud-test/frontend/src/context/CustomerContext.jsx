import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect, createContext, useContext } from "react";

const CustomerContext = createContext();
const initialState = {
  login: false,
  name: "",
  token: "",
  id: "",
  role: "",
  img: "",
};

export const UserProvider = (props) => {
  const [customer, setCustomer] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("customer"));
    initial ? initial.login && setCustomer(initial) : setCustomer(initialState);
  }, []);

  const loginCustomer = async (customer, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post("customer/login", customer);
      setLoading(false);
      if (data.ok) {
        const customerLogin = {
          login: true,
          name: data.data.name,
          token: data.data.token,
          id: data.data.id,
          role: data.data.role,
          img: data.data.img,
        };
        localStorage.setItem("customer", JSON.stringify(customerLogin));
        setCustomer(customerLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/products");
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

  const registerCustomer = async (customer, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post("customer/", customer);
      setLoading(false);
      if (data.ok) {
        const customerLogin = {
          login: true,
          name: data.data.name,
          token: data.data.token,
          id: data.data.id,
          role: data.data.role,
        };
        localStorage.setItem("customer", JSON.stringify(customerLogin));
        setCustomer(customerLogin);
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
          text: "Error de registro",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const exit = () => {
    localStorage.removeItem("customer");
    setCustomer(initialState);
  };

  const value = {
    customer,
    loginCustomer,
    registerCustomer,
    exit,
    loading,
  };

  return <CustomerContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer error.");
  }
  return context;
} 
