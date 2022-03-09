import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { User } from "./components/User";
import { useUser } from "./context/UserContext";

function App() {
  const { user } = useUser();
  const Private = (props) => {
    return user.Login ? <Route {...props} /> : <Navigate to="/" />;
  };

  const Public = (props) => {
    return user.Login ? <Navigate to="/products/" /> : <Route {...props} />;
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id/" element={<Product />}/>
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
