import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { User } from "./components/User";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
