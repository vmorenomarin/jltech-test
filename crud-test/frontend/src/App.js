import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
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
import { AdminSidebar } from "./components/admin/AdminSidebar";

function App() {
  const { user } = useUser();
  const Private = (child) => {
    if (user.login) {
      return child;
    }
    <Navigate to="/login" />;
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
        <Route path="/user" element={<User />} />
        <Route strict path="/admin/"  element={Private(<Admin />)} />
        <Route path="/admin/users" element={Private(<AdminUsersView />)} />
      </Routes>
    </Router>
  );
}

export default App;
