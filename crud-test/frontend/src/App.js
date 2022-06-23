import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Admin } from "./components/admin/Admin";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { User } from "./components/User";
import { useUser } from "./context/UserContext";
import { AdminUsersView } from "./components/admin/AdminUsersView";
import { AdminUserView } from "./components/admin/AdminUserView";
import { UpdateUserInfo } from "./components/UpdateUserInfo.jsx";

function App() {
  const { user } = useUser();
  const Private = (child) => {
    if (user.login) {
      return child;
    }
    return <Navigate to="/login" />;
  };

  // const Public = (props) => {
  //   return user.Login ? <Navigate to="/products/" /> : <Route {...props} />;
  // };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id/" element={<Product />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="user/update/:id" element={<UpdateUserInfo user={user}/>} />
        <Route
          path="/admin/"
          element={user.role === "Admin" ? Private(<Admin />) : <Products />}
        />
        <Route path="/admin/users" element={Private(<AdminUsersView />)} />
        <Route path="/admin/users/:id" element={Private(<AdminUserView />)} />
      </Routes>
    </Router>
  );
}

export default App;
